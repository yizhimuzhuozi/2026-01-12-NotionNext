/**
 * Typography 主题 - 基于 holmberg.io 设计
 * 遵循 NotionNext 开发规范
 */

import Comment from '@/components/Comment'
import NotionPage from '@/components/NotionPage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import { useRef } from 'react'
import dynamic from 'next/dynamic'
import ArticleInfo from './components/ArticleInfo'
import BlogListPage from './components/BlogListPage'
import Footer from './components/Footer'
import JumpToTopButton from './components/JumpToTopButton'
import NavBar from './components/NavBar'
import RecommendPosts from './components/RecommendPosts'
import TocAside from './components/TocAside'
import CONFIG from './config'
import { Style } from './style'

const AlgoliaSearchModal = dynamic(() => import('@/components/AlgoliaSearchModal'), { ssr: false })
const ArticleLock = dynamic(() => import('./components/ArticleLock'), { ssr: false })

/**
 * 基础布局 - holmberg.io 风格
 * 极简单栏设计,最大宽度约 1370px
 */
const LayoutBase = props => {
  const { children } = props
  const { onLoading } = useGlobal()
  const searchModal = useRef(null)

  return (
    <div
      id='theme-typography'
      className={`${siteConfig('FONT_STYLE')} min-h-screen flex flex-col bg-[rgb(250,250,250)] dark:bg-[rgb(18,18,18)] text-[rgb(22,27,34)] dark:text-[rgb(226,232,240)]`}>
      <Style />

      {/* 顶部导航 */}
      <NavBar {...props} />

      {/* 主内容区 - 响应式padding: 手机16px, 平板40px, 桌面80px */}
      <main className='flex-1 w-full px-4 md:px-10 lg:px-20'>
        <div className='w-full'>
          {onLoading ? (
            <div className='flex items-center justify-center min-h-[500px]'>
              <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black dark:border-white'></div>
            </div>
          ) : (
            <>{children}</>
          )}
        </div>
      </main>

      {/* 页脚 */}
      <Footer {...props} />

      {/* 返回顶部按钮 */}
      <div className='fixed right-6 bottom-6 z-20'>
        <JumpToTopButton />
      </div>

      {/* 搜索框 */}
      <AlgoliaSearchModal cRef={searchModal} {...props} />
    </div>
  )
}

/**
 * 首页 = 文章列表
 */
const LayoutIndex = props => {
  return <LayoutPostList {...props} />
}

/**
 * 文章列表页
 */
const LayoutPostList = props => {
  const { posts, page, postCount } = props
  const totalPage = Math.ceil(postCount / siteConfig('POSTS_PER_PAGE', 12))
  return <BlogListPage posts={posts} page={page} totalPage={totalPage} />
}

/**
 * 搜索页
 */
const LayoutSearch = props => {
  return <LayoutPostList {...props} />
}

/**
 * 归档页
 */
const LayoutArchive = props => {
  const { archivePosts } = props

  // 处理空数据情况
  if (!archivePosts || Object.keys(archivePosts).length === 0) {
    return <></>
  }

  return (
    <div className='mb-10 pb-20 md:py-12 py-3 min-h-screen'>
      {Object.keys(archivePosts).map(archiveTitle => (
        <div key={archiveTitle} className='relative mb-12'>
          {/* 时间轴竖线 - 改为直角左括号样式，位于日期下方，向下延长 */}
          <div className='absolute left-0 top-8 -bottom-2 border-l border-t border-b border-gray-300 dark:border-gray-700'></div>

          <h2 className='text-2xl font-bold mb-6 dark:text-gray-100 leading-none pl-0 relative'>
            {archiveTitle}
            <span className='text-sm font-normal ml-2 text-gray-500'>
              ({archivePosts[archiveTitle].length} 篇)
            </span>
          </h2>

          <ul className='space-y-6 pl-6 relative'>
            {archivePosts[archiveTitle].map(post => (
              <li key={post.id} className='flex flex-col group'>
                {/* 文章标题 - hover变蓝底黑字 */}
                <div className='w-fit'>
                  <SmartLink href={post.href} className='text-lg text-black dark:text-gray-200 hover:bg-[#41c3f7] hover:text-black dark:hover:text-black font-medium transition-all duration-200 px-1 py-0.5 -ml-2'>
                    {post.title}
                  </SmartLink>
                </div>

                {/* 发布日期 */}
                <span className='text-sm text-gray-400 font-mono mt-1'>
                  {post.date?.start_date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

/**
 * 文章详情页
 */
const LayoutSlug = props => {
  const { post, lock, validPassword, recommendPosts } = props

  return (
    <div className='max-w-[780px]'>
      {lock && <ArticleLock validPassword={validPassword} />}

      {!lock && post && (
        <article>
          {/* 文章头部信息 */}
          <ArticleInfo post={post} />

          {/* 文章内容 - 使用 Notion 样式 */}
          <div className='prose prose-lg max-w-none'>
            <NotionPage post={post} />
          </div>

          {/* 相关文章推荐 */}
          <RecommendPosts recommendPosts={recommendPosts} />

          {/* 评论区 */}
          <div className='mt-16'>
            <Comment frontMatter={post} />
          </div>
        </article>
      )}
    </div>
  )
}

/**
 * 404页面
 */
const Layout404 = () => {
  return (
    <div className='flex items-center justify-center min-h-[400px]'>
      <div className='text-center'>
        <h1 className='text-6xl font-black mb-4 text-black dark:text-white'>404</h1>
        <p className='text-xl text-gray-600 dark:text-gray-400 mb-8'>Page not found</p>
        <SmartLink href='/'>
          <button className='bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-bold hover:opacity-80 transition-opacity'>
            Back to Home
          </button>
        </SmartLink>
      </div>
    </div>
  )
}

/**
 * 分类列表
 */
const LayoutCategoryIndex = props => {
  const { categoryOptions } = props
  const { locale } = useGlobal()

  return (
    <div className='max-w-[781px]'>
      <h1 className='text-[53.28px] font-black text-black dark:text-white mb-8'>{locale.COMMON.CATEGORY}</h1>
      <div className='space-y-4'>
        {categoryOptions?.map(category => (
          <div key={category.name} className='text-[20.72px]'>
            <SmartLink href={`/category/${category.name}`} className='text-black dark:text-white hover:opacity-60 transition-opacity'>
              {category.name} <span className='text-gray-600 dark:text-gray-400'>({category.count})</span>
            </SmartLink>
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * 标签列表
 */
const LayoutTagIndex = props => {
  const { tagOptions } = props
  const { locale } = useGlobal()

  return (
    <div className='max-w-[781px]'>
      <h1 className='text-[53.28px] font-black text-black dark:text-white mb-8'>{locale.COMMON.TAGS}</h1>
      <div className='flex flex-wrap gap-4'>
        {tagOptions?.map(tag => (
          <SmartLink
            key={tag.name}
            href={`/tag/${tag.name}`}
            className='text-[20.72px] text-black dark:text-white hover:opacity-60 transition-opacity'>
            #{tag.name} <span className='text-gray-600 dark:text-gray-400'>({tag.count})</span>
          </SmartLink>
        ))}
      </div>
    </div>
  )
}

export {
  Layout404,
  LayoutArchive,
  LayoutBase,
  LayoutCategoryIndex,
  LayoutIndex,
  LayoutPostList,
  LayoutSearch,
  LayoutSlug,
  LayoutTagIndex,
  CONFIG as THEME_CONFIG
}
