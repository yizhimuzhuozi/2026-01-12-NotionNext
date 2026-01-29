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

  // 主要导航
  const navLinks = [
    { name: 'Home', url: '/' },
    { name: 'RSS', url: '/rss.xml' }
  ]

  // 社交链接配置 - 添加所有已配置的社交平台
  const socialLinks = [
    { name: 'GitHub', url: siteConfig('CONTACT_GITHUB') },
    { name: 'Twitter', url: siteConfig('CONTACT_TWITTER') },
    { name: 'Telegram', url: siteConfig('CONTACT_TELEGRAM') },
    { name: 'Instagram', url: siteConfig('CONTACT_INSTAGRAM') },
    { name: 'Bilibili', url: siteConfig('CONTACT_BILIBILI') },
    { name: 'YouTube', url: siteConfig('CONTACT_YOUTUBE') },
    { name: 'Weibo', url: siteConfig('CONTACT_WEIBO') },
    { name: '小红书', url: siteConfig('CONTACT_XIAOHONGSHU') },
    { name: 'Email', url: siteConfig('CONTACT_EMAIL') ? `mailto:${siteConfig('CONTACT_EMAIL')}` : '' }
  ].filter(link => link.url) // 只显示已配置的链接

  return (
    <footer className='w-full mt-20 pt-1 border-t border-gray-200 dark:border-gray-700'>
      <div className='w-full px-20 py-12'>
        {/* 网站描述文字 - 仿 holmberg.io */}
        <p className='text-center text-[20.72px] text-gray-600 dark:text-gray-400 mb-4'>
          This website is made by {author}. Since {since}.
        </p>

        {/* 导航和社交链接 */}
        <div className='flex flex-wrap justify-center items-center gap-4 text-[20.72px]'>
          {/* 主要导航 */}
          {navLinks.map((link, index) => (
            <span key={link.name}>
              {index > 0 && <span className='text-gray-400 mr-4'>|</span>}
              <SmartLink
                href={link.url}
                className='text-gray-600 text-black dark:text-white hover:bg-[#41c3f7] hover:text-black dark:hover:text-black transition-colors cursor-pointer px-1'
              >
                {link.name}
              </SmartLink>
            </span>
          ))}

          {/* 社交链接 */}
          {socialLinks.map(link => (
            <span key={link.name}>
              <span className='text-gray-400'>|</span>
              <SmartLink
                href={link.url}
                target='_blank'
                className='text-gray-600 text-black dark:text-white hover:bg-[#41c3f7] hover:text-black dark:hover:text-black transition-colors cursor-pointer ml-4'
              >
                {link.name}
              </SmartLink>
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
