import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import { useGlobal } from '@/lib/global'
import { MenuItem } from './MenuItem'

/**
 * 顶部导航栏组件
 * 
 * 功能:显示网站名称、描述徽章和导航链接
 * 布局:左侧两行(名字+徽章),右侧横向导航链接
 * 样式:参考 holmberg.io 极简风格
 * 
 * 菜单配置方式(两种方式选一):
 * 1. Notion customMenu(推荐):支持 Menu + SubMenu 下拉菜单
 * 2. 代码配置:修改下方 defaultLinks 数组
 * 
 * Notion customMenu 使用方法:
 * - 在 blog.config.js 中设置 CUSTOM_MENU: true
 * - 在 Notion 数据库中创建 type='Menu' 的顶级菜单
 * - 在顶级菜单后创建 type='SubMenu' 的子菜单
 * - 重启服务后生效
 * 
 * @param {Object} props - 组件属性
 */
export default function NavBar(props) {
  const { locale, customMenu } = useGlobal()  // 获取 locale 和 customMenu

  // 默认菜单 - 当未启用 CUSTOM_MENU 或 customMenu 为空时使用
  const defaultLinks = [
    { name: locale.NAV.INDEX, href: '/', show: true },
    { name: locale.NAV.ABOUT, href: '/about', show: true },
    { name: locale.NAV.ARCHIVE, href: '/archive', show: true },
  ]

  // 菜单逻辑:
  // 1. 如果启用了 CUSTOM_MENU 且 customMenu 有数据,使用 customMenu
  // 2. 否则使用默认菜单
  const useCustomMenu = siteConfig('CUSTOM_MENU')
  const hasCustomMenu = customMenu && customMenu.length > 0
  const navLinks = useCustomMenu && hasCustomMenu ? customMenu : defaultLinks

  return (
    <header className='w-full py-[60px] px-4 md:px-10 lg:px-20'> {/* 响应式padding: 手机16px, 平板40px, 桌面80px */}
      {/* 主容器 - 移动端居中竖向,桌面端左右布局 */}
      <div className='w-full flex flex-col md:flex-row items-center md:justify-between gap-4'>
        {/* 左侧区域:网站名称和描述徽章 - 移动端居中,桌面端左对齐 */}
        <div className='flex flex-col gap-1 items-center md:items-start'> {/* 竖向排列,间距1 */}
          {/* 第一行:网站名称 - hover 时显示天蓝色背景 */}
          <SmartLink href='/'>
            <span className='text-[30px] font-extrabold text-black dark:text-white hover:bg-[#41c3f7] hover:text-black dark:hover:text-black transition-colors cursor-pointer px-1'>
              Tim's Blog
            </span>
          </SmartLink>

          {/* 第二行:黑色圆角徽章描述 */}
          <span className='text-sm font-extrabold bg-black dark:bg-white text-white dark:text-black px-2 py-0 rounded inline-block w-fit hover:text-white transition-colors cursor-pointer'>
            一个喜欢折腾的设计师博客
          </span>
        </div>

        {/* 右侧区域:导航链接 - 移动端居中,桌面端右对齐 */}
        <nav className='flex items-center gap-2'> {/* 横向排列,间距2 */}
          {navLinks?.filter(link => link.show !== false).map((link, index) => (
            <MenuItem key={index} link={link} />
          ))}
        </nav>
      </div>
    </header>
  )
}
