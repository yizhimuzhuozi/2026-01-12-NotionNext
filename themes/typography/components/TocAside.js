import { useEffect, useState } from 'react'
import { useGlobal } from '@/lib/global'

/**
 * 文章目录侧边栏 - Notion风格
 * 
 * 功能:
 * - 显示文章H1/H2/H3标题层级
 * - 点击跳转到对应标题
 * - 滚动时高亮当前标题  
 * - 固定在文章右侧
 * - 移动端隐藏
 */
export default function TocAside({ toc }) {
    const [activeId, setActiveId] = useState('')
    const { locale } = useGlobal()

    // 如果没有目录数据,不渲染
    if (!toc || toc.length === 0) {
        return null
    }

    // 滚动监听 - 高亮当前阅读的标题
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '-100px 0px -80% 0px'
            }
        )

        // 观察所有标题元素
        toc.forEach((item) => {
            const element = document.getElementById(item.id)
            if (element) {
                observer.observe(element)
            }
        })

        return () => observer.disconnect()
    }, [toc])

    // 点击跳转到对应标题
    const scrollToHeading = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    // 根据标题类型返回图标
    const getIcon = (type, indentLevel) => {
        if (indentLevel === 0) return '' // H1不显示图标
        if (indentLevel === 1) return '📎' // H2
        if (indentLevel === 2) return '📄' // H3
        return ''
    }

    return (
        <div className='sticky top-24 w-[240px]'>
            <div className='bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700'>
                {/* 目录标题 */}
                <div className='text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4'>
                    {locale?.COMMON?.TABLE_OF_CONTENTS || 'Table of Contents'}
                </div>

                {/* 目录列表 */}
                <ul className='space-y-1.5'>
                    {toc.map((item) => {
                        const isActive = activeId === item.id
                        const icon = getIcon(item.type, item.indentLevel)

                        return (
                            <li
                                key={item.id}
                                style={{ paddingLeft: `${item.indentLevel * 12}px` }}
                                onClick={() => scrollToHeading(item.id)}
                                className={`
                  text-sm cursor-pointer transition-all duration-200
                  ${isActive
                                        ? 'text-[#41c3f7] font-semibold'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                                    }
                `}
                            >
                                {icon && <span className='mr-1.5'>{icon}</span>}
                                {item.text}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
