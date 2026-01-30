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

      {/* 大标题 - 响应式: 移动端36px, 桌面端54px */}
      <h1 className='text-4xl md:text-[54px] font-black leading-tight md:leading-[58px] tracking-tight'>
        {post?.title}
      </h1>

      {/* 标签 */}
      {post?.tags && post.tags.length > 0 && (
        <div className='flex flex-wrap gap-2 mt-4'>
          {post.tags.map(tag => (
            <span key={tag} className='text-[16px] font-bold text-black dark:text-white bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md inline-block'>
              #{tag}
            </span>
          ))}
        </div>
      )}
    </header>
  )
}
