import { siteConfig } from '@/lib/config'

/**
 * 页脚组件
 * 
 * 功能:显示网站版权信息
 * 样式:极简设计,居中对齐,使用 holmberg.io 风格
 * 
 * 自定义提示:
 * - 修改版权年份范围:在 blog.config.js 中修改 SINCE 配置
 * - 修改作者名称:在 blog.config.js 中修改 AUTHOR 配置
 * - 调整顶部间距:修改第13行的 mt-20 数值
 * - 调整左右边距:修改第14行的 px-20 数值
 * - 修改边框颜色:修改第13行的 border-gray-200 类名
 */
export default function Footer() {
  // 获取当前年份
  const currentYear = new Date().getFullYear()
  // 从配置中获取网站起始年份
  const since = siteConfig('SINCE')
  // 从配置中获取作者名称
  const author = siteConfig('AUTHOR')

  return (
    <footer className='w-full border-t border-gray-200 dark:border-gray-700 mt-20'>
      <div className='w-full px-20 py-12'>
        {/* 版权信息 - 居中显示 */}
        <p className='text-center text-[20.72px] text-gray-600 dark:text-gray-400'>
          © {since && since !== currentYear ? `${since}-` : ''}{currentYear} {author}
        </p>
      </div>
    </footer>
  )
}
