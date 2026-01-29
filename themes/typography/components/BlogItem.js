import SmartLink from '@/components/SmartLink'

/**
 * 文章列表项组件
 * 
 * 功能:显示单个文章的标题和日期,点击可跳转到文章详情页
 * 样式:参考 holmberg.io,极简风格,标题带下划线,hover 时下划线变色
 * 
 * 自定义提示:
 * - 标题字体:在 style.js 中的 .article-title 类修改
 * - 下划线粗细:修改 decoration-[2.6px] 的数值
 * - hover 颜色:在 style.js 中的 .article-title:hover 修改
 * - 日期颜色:修改下方 style={{ color: '#4e5c69' }} 的颜色值
 * 
 * @param {Object} post - 文章对象
 * @param {string} post.title - 文章标题
 * @param {string} post.href - 文章链接
 * @param {Object} post.date - 文章日期对象
 * @param {string} post.createdTime - 文章创建时间(备用)
 */
export const BlogItem = ({ post }) => {
  return (
    <article className='border-b border-gray-200 dark:border-gray-700 py-6'>
      <SmartLink href={post.href}>
        <div className='cursor-pointer'>
          {/* 文章标题 - 使用自定义字体,带下划线,hover 时下划线变色 */}
          <h2 className='article-title text-[26px] tracking-[-0.6px] text-black dark:text-white mb-1 underline decoration-black dark:decoration-white decoration-[2px]'>
            {post.title}
          </h2>

          {/* 文章日期 - 使用特定颜色 #3e4c59,间距更紧凑 */}
          <time className='text-[16px] block font-bold' style={{ color: '#3e4c59ce' }}>
            {post.date?.start_date || post.createdTime}
          </time>
        </div>
      </SmartLink>
    </article>
  )
}
