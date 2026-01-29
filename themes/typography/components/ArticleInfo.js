/**
 * 文章信息 - holmberg.io 风格
 * 日期在上,大标题在下,使用 Tailwind CSS
 */
export default function ArticleInfo({ post }) {
  return (
    <header className='mb-12 max-w-[781px]'>
      {/* 日期 */}
      {post?.date?.start_date && (
        <time className='text-[20.72px] text-gray-600 dark:text-gray-400 block mb-4'>
          {post.date.start_date}
        </time>
      )}

      {/* 大标题 */}
      <h1 className='text-[53.28px] font-black leading-[58.6px] tracking-tight text-black dark:text-white'>
        {post?.title}
      </h1>

      {/* 标签 */}
      {post?.tags && post.tags.length > 0 && (
        <div className='flex gap-2 mt-4'>
          {post.tags.map(tag => (
            <span key={tag} className='text-[20.72px] text-gray-600 dark:text-gray-400'>
              #{tag}
            </span>
          ))}
        </div>
      )}
    </header>
  )
}
