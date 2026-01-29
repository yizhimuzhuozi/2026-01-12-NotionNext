import { BlogItem } from './BlogItem'
import PaginationSimple from './PaginationSimple'

/**
 * 文章列表页组件
 * 
 * 功能:显示博客的所有文章列表,包括 Posts 标题、副标题和文章列表
 * 样式:holmberg.io 极简风格,只显示标题和日期
 * 
 * @param {Array} posts - 文章列表数组,每个文章对象包含 title, href, date 等属性
 * @param {number} page - 当前页码
 * @param {number} totalPage - 总页数
 */
export default function BlogListPage({ posts, page = 1, totalPage = 1 }) {
  return (
    <div className='w-full max-w-[790px]'>
      {/* Posts 区域标题和副标题 */}
      <div className='mb-1'> {/* 减小与文章列表的间距 */}
        {/* 主标题 - 超大号加粗 */}
        <h1 className='text-[54px] font-black text-black dark:text-white mb-0'>
          Posts
        </h1>
        {/* 副标题 - 描述博客主题 */}
        <p className='text-[20px] text-gray-600 dark:text-gray-400 font-semibold'>
          关于生活、小技能、工作流程、设计与摄影等话题。
        </p>
      </div>

      {/* 文章列表 */}
      <div className='space-y-0'>
        {posts?.map((post) => (
          <BlogItem key={post.id} post={post} />
        ))}
      </div>

      {/* 分页导航 - 只在有多页时显示 */}
      {totalPage > 1 && <PaginationSimple page={page} totalPage={totalPage} />}
    </div>
  )
}
