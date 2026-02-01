import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

/**
 * 页脚组件 - holmberg.io 风格
 * 
 * 功能:显示网站信息、导航链接和社交链接
 * 样式:极简设计,居中对齐
 */
export default function Footer() {
  const since = siteConfig('SINCE')
  const author = siteConfig('AUTHOR')

  // 社交链接配置 - 添加所有已配置的社交平台
  const socialLinks = [
    { name: 'RSS', url: '/rss.xml', icon: 'fas fa-rss' }, // RSS 图标放在最前
    { name: 'GitHub', url: siteConfig('CONTACT_GITHUB'), icon: 'fab fa-github' },
    { name: 'Twitter', url: siteConfig('CONTACT_TWITTER'), icon: 'fab fa-twitter' },
    { name: 'Telegram', url: siteConfig('CONTACT_TELEGRAM'), icon: 'fab fa-telegram' },
    { name: 'Instagram', url: siteConfig('CONTACT_INSTAGRAM'), icon: 'fab fa-instagram' },
    { name: 'Bilibili', url: siteConfig('CONTACT_BILIBILI'), icon: 'fab fa-bilibili' },
    { name: 'YouTube', url: siteConfig('CONTACT_YOUTUBE'), icon: 'fab fa-youtube' },
    { name: 'Email', url: 'mailto:czk66337@gmail.com', icon: 'fas fa-envelope' }
  ].filter(link => link.url) // 只显示已配置的链接

  return (
    <footer className='w-full mt-12 pt-1 border-t border-gray-200 dark:border-gray-700'>
      <div className='w-full px-4 md:px-10 lg:px-20 py-3 md:py-4'>
        {/* 网站描述文字 - 仿 holmberg.io */}
        <p className='font-bold text-center text-sm text-gray-600 dark:text-gray-400 mb-4'>
          This website is made by {author}. Since {since}.
        </p>

        {/* 导航和社交链接 */}
        <div className='flex flex-wrap justify-center items-center gap-6 text-[20px]'>

          {/* 社交链接 - 图标化 */}
          {socialLinks.map(link => (
            <SmartLink
              key={link.name}
              href={link.url}
              target='_blank'
              className='text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer'
              aria-label={link.name}
            >
              <i className={`${link.icon} transform hover:scale-110 transition-transform duration-200`} />
            </SmartLink>
          ))}
        </div>
      </div>
    </footer>
  )
}
