import BLOG from '@/blog.config'
import NotionPage from '@/components/NotionPage'
import { getPostBlocks } from '@/lib/db/getSiteData'
import { Feed } from 'feed'
import fs from 'fs'
import ReactDOMServer from 'react-dom/server'
import { decryptEmail } from '@/lib/plugins/mailEncrypt'

/**
 * 生成RSS内容
 * @param {*} post
 * @returns
 */
const createFeedContent = async post => {
  // 加密的文章内容只返回摘要
  if (post.password && post.password !== '') {
    return post.summary
  }
  const blockMap = await getPostBlocks(post.id, 'rss-content')
  if (blockMap) {
    post.blockMap = blockMap
    const content = ReactDOMServer.renderToString(<NotionPage post={post} />)
    const regexExp =
      /<div class="notion-collection-row"><div class="notion-collection-row-body"><div class="notion-collection-row-property"><div class="notion-collection-column-title"><svg.*?class="notion-collection-column-title-icon">.*?<\/svg><div class="notion-collection-column-title-body">.*?<\/div><\/div><div class="notion-collection-row-value">.*?<\/div><\/div><\/div><\/div>/g
    return content.replace(regexExp, '')
  }
}

/**
 * 生成RSS数据 (构建时执行)
 * @param {*} props
 */
export async function generateRss(props) {
  // 检查 feed 文件是否在10分钟内更新过
  // 开发环境下跳过缓存检查
  if (process.env.NODE_ENV !== 'development' && isFeedRecentlyUpdated('./public/rss/feed.xml', 10)) {
    return
  }

  const feed = await generateFeed(props)

  try {
    fs.mkdirSync('./public/rss', { recursive: true })
    fs.writeFileSync('./public/rss/feed.xml', feed.rss2())
    fs.writeFileSync('./public/rss/atom.xml', feed.atom1())
    fs.writeFileSync('./public/rss/feed.json', feed.json1())
  } catch (error) {
    // 在vercel运行环境是只读的，这里会报错；
    // 但在vercel编译阶段、或VPS等其他平台这行代码会成功执行
    // RSS被高频词访问将大量消耗服务端资源，故作为静态文件
    console.error('[RSS] 写文件失败', error)
  }
}

/**
 * 核心逻辑：生成Feed对象
 * @param {*} props 
 * @returns 
 */
export async function generateFeed(props) {
  const { NOTION_CONFIG, siteInfo } = props
  const TITLE = siteInfo?.title
  const DESCRIPTION = siteInfo?.description
  const LINK = siteInfo?.link
  const AUTHOR = NOTION_CONFIG?.AUTHOR || BLOG.AUTHOR
  const LANG = NOTION_CONFIG?.LANG || BLOG.LANG
  const SUB_PATH = NOTION_CONFIG?.SUB_PATH || BLOG.SUB_PATH
  const CONTACT_EMAIL = decryptEmail(
    NOTION_CONFIG?.CONTACT_EMAIL || BLOG.CONTACT_EMAIL
  )

  // 获取发布的所有文章，而不仅仅是 props.latestPosts(默认只有6篇)
  let allPosts = props.commonProps?.allPages || props.allPages?.filter(page => page.type === 'Post' && page.status === 'Published')

  if (!allPosts || allPosts.length === 0) {
    allPosts = props.latestPosts || []
  }

  // 按日期排序
  allPosts?.sort((a, b) => {
    const dateA = new Date(a?.publishDate)
    const dateB = new Date(b?.publishDate)
    return dateB - dateA
  })

  // 限制RSS输出数量，避免文件过大，取最新的20篇
  const postsToRss = allPosts.slice(0, 20)

  console.log('[RSS订阅] 生成Feed对象', `共 ${postsToRss.length} 篇文章`)
  if (postsToRss.length > 0) {
    console.log('[RSS订阅] 最新文章:', postsToRss[0].title, postsToRss[0].publishDate)
  }
  const year = new Date().getFullYear()
  const feed = new Feed({
    title: TITLE,
    description: DESCRIPTION,
    link: `${LINK}/${SUB_PATH}`,
    language: LANG,
    favicon: `${LINK}/favicon.png`,
    copyright: `All rights reserved ${year}, ${AUTHOR}`,
    author: {
      name: AUTHOR,
      email: CONTACT_EMAIL,
      link: LINK
    }
  })

  for (const post of postsToRss) {
    feed.addItem({
      title: post.title,
      link: `${LINK}/${post.slug}`,
      description: post.summary,
      content: await createFeedContent(post),
      date: new Date(post?.publishDay)
    })
  }

  return feed
}

/**
 * 检查上次更新，如果60分钟内更新过就不操作。
 * @param {*} filePath
 * @param {*} intervalMinutes
 * @returns
 */
function isFeedRecentlyUpdated(filePath, intervalMinutes = 60) {
  try {
    const stats = fs.statSync(filePath)
    const now = new Date()
    const lastModified = new Date(stats.mtime)
    const timeDifference = (now - lastModified) / (1000 * 60) // 转换为分钟
    return timeDifference < intervalMinutes
  } catch (error) {
    // 如果文件不存在，我们需要创建它
    return false
  }
}
