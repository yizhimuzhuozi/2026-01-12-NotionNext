import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'

/**
 * 极简分页组件 - holmberg.io 风格
 * 
 * 只显示"上一页"和"下一页"链接,简洁优雅
 * 
 * @param {number} page - 当前页码
 * @param {number} totalPage - 总页数
 */
const PaginationSimple = ({ page = 1, totalPage = 1 }) => {
    const router = useRouter()
    const { locale } = useGlobal()
    const currentPage = parseInt(page) || 1
    const showNext = currentPage < totalPage
    const showPrev = currentPage > 1

    // 计算链接前缀
    const pagePrefix = router.asPath
        .split('?')[0]
        .replace(/\/page\/[1-9]\d*/, '')
        .replace(/\/$/, '')
        .replace('.html', '')

    return (
        <div className='flex justify-between items-center mt-2'>
            {/* 上一页 */}
            <div className='flex-1'>
                {showPrev && (
                    <SmartLink
                        href={{
                            pathname: currentPage === 2 ? `${pagePrefix}/` : `${pagePrefix}/page/${currentPage - 1}`,
                            query: router.query.s ? { s: router.query.s } : {}
                        }}
                        rel='prev'
                    >
                        <span className='text-[20.72px] text-black dark:text-white hover:underline decoration-[2.6px] cursor-pointer'>
                            ← {locale.PAGINATION.PREV || '上一页'}
                        </span>
                    </SmartLink>
                )}
            </div>

            {/* 下一页 */}
            <div className='flex-1 text-right'>
                {showNext && (
                    <SmartLink
                        href={{
                            pathname: `${pagePrefix}/page/${currentPage + 1}`,
                            query: router.query.s ? { s: router.query.s } : {}
                        }}
                        rel='next'
                    >
                        <span className='text-[20.72px] text-black dark:text-white hover:underline decoration-[2.6px] cursor-pointer'>
                            {locale.PAGINATION.NEXT || '下一页'} →
                        </span>
                    </SmartLink>
                )}
            </div>
        </div>
    )
}

export default PaginationSimple
