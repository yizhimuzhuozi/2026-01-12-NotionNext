import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CONFIG from '../config'
import { MenuItemDrop } from './MenuItemDrop'
import SmartLink from '@/components/SmartLink'

/**
 * 菜单列表 - holmberg.io 风格
 * 水平排列的简洁菜单
 */
export const MenuList = ({ customNav, customMenu }) => {
  const { locale } = useGlobal()
  const router = useRouter()

  let links = [
    {
      name: locale.NAV.INDEX,
      href: '/',
      show: true
    },
    {
      name: locale.NAV.ARCHIVE,
      href: '/archive',
      show: siteConfig('TYPOGRAPHY_MENU_ARCHIVE', null, CONFIG)
    },
    {
      name: locale.COMMON.CATEGORY,
      href: '/category',
      show: siteConfig('TYPOGRAPHY_MENU_CATEGORY', null, CONFIG)
    },
    {
      name: locale.COMMON.TAGS,
      href: '/tag',
      show: siteConfig('TYPOGRAPHY_MENU_TAG', null, CONFIG)
    }
  ]

  if (customNav) {
    links = links.concat(customNav)
  }

  // 如果开启自定义菜单,则覆盖
  if (siteConfig('CUSTOM_MENU')) {
    links = customMenu
  }

  if (!links || links.length === 0) {
    return null
  }

  return (
    <div className='flex items-center space-x-6'>
      {links?.filter(link => link.show).map((link, index) => (
        <SmartLink
          key={index}
          href={link.href}
          className='text-black dark:text-white hover:opacity-60 transition-opacity text-sm md:text-base'
        >
          {link.name}
        </SmartLink>
      ))}
    </div>
  )
}
