/**
 * 文章信息 - holmberg.io 风格
 * 日期在上,大标题在下,使用 Tailwind CSS
 */
export default function ArticleInfo({ post }) {
  return (
    <header className='mb-12 max-w-[780px]'>
      {/* 日期 */}
      {post?.date?.start_date && (
        <time className='text-[16px] block font-bold dark:text-gray-400 block mb-0'>
          {post.date.start_date}
        </time>
      )}

      {/* 大标题 */}
      <h1 className='text-[54px] font-black leading-[58px] tracking-tight'>
        {post?.title}
      </h1>

      {/* 标签 */}
      {post?.tags && post.tags.length > 0 && (
        <div className='flex gap-3 mt-2'>
          {post.tags.map(tag => (
            <span key={tag} className='text-[16px] font-bold text-black dark:text-white bg-gray-100 dark:bg-gray-800 border-black dark:border-white px-3 py-1 rounded-md inline-block'>
              #{tag}
            </span>
          ))}
        </div>
      )}
    </header>
  )
}
