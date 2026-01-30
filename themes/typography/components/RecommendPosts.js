import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

/**
 * 文章推荐组件 - holmberg.io 风格
 * 
 * 在文章底部显示一篇相关推荐文章
 * 极简设计,只显示 "Read next:" 和文章标题
 */
const RecommendPosts = ({ recommendPosts }) => {
  if (!siteConfig('TYPOGRAPHY_ARTICLE_RECOMMEND_POSTS', null, CONFIG) || !recommendPosts || recommendPosts.length < 1) {
    return null
  }

  // 只显示第一篇推荐
  const post = recommendPosts[0]

  return (
    <div className='mt-12 pt-8 border-t border-gray-200 dark:border-gray-700'>
      {/* "Read next:" 标题 */}
      <h4 className='text-[20px] text-gray-600 dark:text-gray-400 mb-2'>
        接下来阅读：
      </h4>

      {/* 推荐文章标题 */}
      <SmartLink href={`/${post.slug}`}>
        <h3 className='text-[26px] font-black tracking-[-0.4px] text-black dark:text-white underline decoration-black dark:decoration-white decoration-[2.6px] hover:decoration-[#41c3f7] transition-all cursor-pointer'>
          {post.title}
        </h3>
      </SmartLink>
    </div>
  )
}

export default RecommendPosts
