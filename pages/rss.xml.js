import { generateFeed } from '@/lib/rss'
import { getGlobalData } from '@/lib/db/getSiteData'
import BLOG from '@/blog.config'

export default function Rss() { }

export async function getServerSideProps({ res }) {
    // 获取全站数据
    const props = await getGlobalData({
        from: 'rss-xml',
        pageId: BLOG.NOTION_PAGE_ID
    })

    if (!props) {
        res.statusCode = 500
        res.end('Error: Failed to fetch data')
        return { props: {} }
    }

    // 生成 Feed 对象
    const feed = await generateFeed(props)

    // 设置缓存头: 
    // public: 允许CDN缓存
    // s-maxage=3600: CDN/服务器缓存1小时 (3600秒)
    // stale-while-revalidate=86400: 如果还在24小时内,可以 serve stale 内容同时后台更新
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
    res.setHeader('Content-Type', 'text/xml')
    res.write(feed.rss2())
    res.end()

    return {
        props: {}
    }
}
