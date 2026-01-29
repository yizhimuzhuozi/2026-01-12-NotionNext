import SmartLink from '@/components/SmartLink'
import { useState } from 'react'

/**
 * 菜单项组件 - 支持下拉子菜单
 * 
 * 功能:
 * - 如果有子菜单,鼠标悬停显示下拉菜单
 * - 如果没有子菜单,直接跳转链接
 * 
 * @param {Object} link - 菜单项数据
 * @param {string} link.name - 菜单名称
 * @param {string} link.href - 链接地址
 * @param {string} link.target - 链接打开方式
 * @param {Array} link.subMenus - 子菜单数组
 * @param {boolean} link.show - 是否显示
 */
export const MenuItem = ({ link }) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const hasSubMenu = link?.subMenus?.length > 0

    if (!link || !link.show) {
        return null
    }

    return (
        <div
            className='relative'
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
        >
            {/* 没有子菜单 - 直接链接 */}
            {!hasSubMenu && (
                <SmartLink href={link.href} target={link?.target}>
                    <span className='font-bold text-base text-black dark:text-white px-2 py-1 rounded-lg hover:bg-[#e4e7e8] dark:hover:bg-gray-700 transition-all cursor-pointer block'>
                        {link.name}
                    </span>
                </SmartLink>
            )}

            {/* 有子菜单 - 显示下拉按钮 */}
            {hasSubMenu && (
                <>
                    <div className='font-bold text-base text-black dark:text-white px-2 py-1 rounded-lg hover:bg-[#e4e7e8] dark:hover:bg-gray-700 transition-all cursor-pointer'>
                        {link.name}
                    </div>

                    {/* 下拉菜单 */}
                    {showDropdown && (
                        <div className='absolute top-full left-0 mt-1 min-w-[160px] bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50'>
                            {link.subMenus.map((subLink, index) => (
                                <SmartLink
                                    key={index}
                                    href={subLink.href}
                                    target={subLink?.target}
                                >
                                    <div className='px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-[#e4e7e8] dark:hover:bg-gray-700 transition-colors cursor-pointer'>
                                        {subLink.title}
                                    </div>
                                </SmartLink>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    )
}
