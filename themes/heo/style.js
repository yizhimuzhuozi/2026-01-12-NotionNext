/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      body {
        background-color: #f7f9fe;
      }

      // 公告栏中的字体固定白色
      #theme-heo #announcement-content .notion {
        color: white;
      }

// 自定义

      // 文章内容粗体颜色自定义
      .notion b,
      .notion strong {
        color: #8a5cf5ff;
        font-weight: 600;
      }

      // 列表标记颜色自定义（数字和符号）
      .notion-list-numbered li::marker,
      .notion-list-disc li::marker {
        color: #8a5cf585; // 与粗体同色，可以单独修改
        font-weight: 700;
      }

      // 链接颜色自定义
      .notion-link {
        color: #0660E0 !important; // 与主题色保持一致，可以修改为其他颜色
        border-bottom-color: #0660E085 !important;
        font-weight: 600;
      }

      .notion-link:hover {
        color: #0660E0 !important; // hover时颜色稍微深一点
        border-bottom-color: #0660E0 !important;
        font-weight: 600;
        opacity: 1;
      }


      // 删除线文字颜色（灰色降低视觉权重）
      .notion s,
      .notion del,
      .notion-strikethrough {
        color: #9ca3af; // 灰色
        text-decoration-color: #d1d5db; // 删除线颜色也是灰色
      }

      // 导航菜单字重加粗
      // 一级导航菜单项（顶部导航栏）
      #nav-mobile a,
      #nav-mobile .cursor-pointer {
        font-weight: 600; // 600为semi-bold，可选值: 500(medium), 600(semibold), 700(bold), 800(extrabold)
      }

      // 二级子菜单项
      #nav-mobile ul li {
        font-weight: 600; // 与一级菜单保持一致
      }



      // 首页文章列表卡片样式
      // 增加卡片高度（移动端和桌面端）
      #theme-heo article > div {
        min-height: 18rem !important; // 移动端最小高度，原来是 h-[23rem]
      }
      
      @media (min-width: 768px) {
        #theme-heo article > div {
          min-height: 16rem !important; // 桌面端最小高度，原来是 h-52 (13rem)
        }
      }

      // 去掉文章卡片图片变黑/变灰的效果
      #theme-heo article img,
      #theme-heo article .notion-asset-wrapper img {
        filter: none !important; // 移除任何滤镜效果
        opacity: 1 !important; // 确保图片不透明
      }

      // 首页文章卡片悬停投影效果
      #theme-heo article > div:hover {
        box-shadow: 0 4px 12px rgba(138, 92, 245, 0.15) !important; // 紫色主题投影
        transform: translateY(-2px) !important; // 轻微上浮
        transition: all 0.3s ease-in-out;
      }

      // 修复"随便逛逛"文字与下方内容对齐问题
      #banners #banner-cover {
        display: flex;
        align-items: center; // 垂直居中
        justify-content: flex-start;
      }

      // 左下角三个快捷分类按钮样式调整（如果需要）
      // 确保与上方"此刻"文字区域对齐
      #bannerGroup {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      

      // 个人资料卡片背景色自定义
      // 亮色模式下的背景色
      .bg-\[#4f65f0\] {
        background-color: #8a5cf5ff !important; // 修改这里的颜色值，如: #6366f1(靛蓝), #8b5cf6(紫色), #ec4899(粉色)
      }

      // 暗黑模式下的背景色（可选）
      // .dark .dark\:bg-yellow-600 {
      //   background-color: #ca8a04 !important; // 暗黑模式下的背景色
      // }

      // **强力移除文章底部的所有空白和占位**
      // 移除NotionPage组件的底部间距
      #article-wrapper,
      #article-wrapper .notion-page,
      #article-wrapper section {
        padding-bottom: 0 !important;
        margin-bottom: 0 !important;
      }

      // 移除文章主体区域底部间距
      .article .mx-auto.md\\:w-full {
        padding-bottom: 0 !important;
        margin-bottom: 0 !important;
      }

      // 移除所有可能的底部占位元素
      #theme-heo article,
      #theme-heo .notion,
      #theme-heo .notion-page-content {
        margin-bottom: 0 !important;
        padding-bottom: 0 !important;
      }

      // 确保分享按钮和版权声明紧凑排列
      #theme-heo .share-bar,
      #theme-heo .article-share-buttons {
        margin-top: 1rem !important;
        margin-bottom: 0.5rem !important;
      }

      // 版权信息紧贴上方内容
      #theme-heo .article-copyright,
      #theme-heo .post-copyright {
        margin-top: 0.5rem !important;
        margin-bottom: 0 !important;
        padding: 1rem !important;
      }

      // 确保分享按钮可见可点击
      .float-right.text-gray-600 {
        position: relative !important;
        z-index: 100 !important;
      }

      // 🎯 关键修复：强力隐藏导致大片空白的元素
      #article-end,
      .m-1overflow-x-auto,
      div.m-1overflow-x-auto,
      [class*="overflow-x-auto"] {
        display: none !important;
        height: 0 !important;
        max-height: 0 !important;
        overflow: hidden !important;
        visibility: hidden !important;
      }





      
// 自定义
      ::-webkit-scrollbar-thumb {
        background: rgba(60, 60, 67, 0.4);
        border-radius: 8px;
        cursor: pointer;
      }

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      #more {
        white-space: nowrap;
      }

      .today-card-cover {
        -webkit-mask-image: linear-gradient(to top, transparent 25%, black 95%);
        mask-image: linear-gradient(to top, transparent -200%, black 85%);
      }

      .recent-top-post-group::-webkit-scrollbar {
        display: none;
      }

      .scroll-hidden::-webkit-scrollbar {
        display: none;
      }

      * {
        box-sizing: border-box;
      }

      // 标签滚动动画
      .tags-group-wrapper {
        animation: rowup 60s linear infinite;
      }

      @keyframes rowup {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      // 隐藏代码块工具栏 - 实现 Notion 纯净风格
      .code-toolbar .toolbar,
      .code-toolbar .toolbar-item,
      div.code-toolbar > .toolbar {
        display: none !important;
      }

      // ========== Notion 代码块完整样式 ==========
      // 使用高优先级选择器确保样式生效
      
      // 代码块容器 - 浅色模式
      #theme-heo .notion-code,
      #theme-heo pre.notion-code,
      #theme-heo pre[class*='language-'],
      #theme-heo .code-toolbar pre[class*='language-'] {
        background-color: #f7f7f5 !important;
        border: 1px solid #e9e9e7 !important;
        border-radius: 3px !important;
        padding: 16px !important;
        margin: 4px 0 !important;
        font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;
        font-size: 14px !important;
        line-height: 1.5 !important;
        overflow-x: auto !important;
        tab-size: 2 !important;
        box-shadow: none !important;
      }

      // 代码文本
      #theme-heo .notion-code code,
      #theme-heo pre[class*='language-'] code,
      #theme-heo code[class*='language-'] {
        background: none !important;
        color: #37352f !important;
        font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;
        font-size: 14px !important;
        line-height: 1.5 !important;
        text-shadow: none !important;
        border: none !important;
        box-shadow: none !important;
        padding: 0 !important;
        margin: 0 !important;
      }

      // Notion 代码高亮颜色 - 浅色模式
      #theme-heo .token.comment,
      #theme-heo .token.prolog,
      #theme-heo .token.doctype,
      #theme-heo .token.cdata {
        color: #8e908c !important;
      }

      #theme-heo .token.property,
      #theme-heo .token.tag,
      #theme-heo .token.boolean,
      #theme-heo .token.number,
      #theme-heo .token.constant,
      #theme-heo .token.symbol,
      #theme-heo .token.deleted {
        color: #d73a49 !important;
      }

      #theme-heo .token.selector,
      #theme-heo .token.attr-name,
      #theme-heo .token.string,
      #theme-heo .token.char,
      #theme-heo .token.builtin,
      #theme-heo .token.inserted {
        color: #22863a !important;
      }

      #theme-heo .token.operator,
      #theme-heo .token.entity,
      #theme-heo .token.url,
      #theme-heo .language-css .token.string,
      #theme-heo .style .token.string {
        color: #d73a49 !important;
        background: none !important;
      }

      #theme-heo .token.atrule,
      #theme-heo .token.attr-value,
      #theme-heo .token.keyword {
        color: #005cc5 !important;
      }

      #theme-heo .token.function,
      #theme-heo .token.class-name {
        color: #6f42c1 !important;
      }

      #theme-heo .token.regex,
      #theme-heo .token.important,
      #theme-heo .token.variable {
        color: #e36209 !important;
      }

      // 深色模式
      #theme-heo.dark .notion-code,
      #theme-heo.dark pre.notion-code,
      #theme-heo.dark pre[class*='language-'],
      #theme-heo.dark .code-toolbar pre[class*='language-'],
      .dark #theme-heo .notion-code,
      .dark #theme-heo pre.notion-code,
      .dark #theme-heo pre[class*='language-'],
      .dark #theme-heo .code-toolbar pre[class*='language-'] {
        background-color: #2f3437 !important;
        border: 1px solid #464646 !important;
      }

      #theme-heo.dark .notion-code code,
      #theme-heo.dark pre[class*='language-'] code,
      #theme-heo.dark code[class*='language-'],
      .dark #theme-heo .notion-code code,
      .dark #theme-heo pre[class*='language-'] code,
      .dark #theme-heo code[class*='language-'] {
        color: #abb2bf !important;
      }

      #theme-heo.dark .token.comment,
      #theme-heo.dark .token.prolog,
      #theme-heo.dark .token.doctype,
      #theme-heo.dark .token.cdata,
      .dark #theme-heo .token.comment,
      .dark #theme-heo .token.prolog,
      .dark #theme-heo .token.doctype,
      .dark #theme-heo .token.cdata {
        color: #6a737d !important;
      }

      #theme-heo.dark .token.property,
      #theme-heo.dark .token.tag,
      #theme-heo.dark .token.boolean,
      #theme-heo.dark .token.number,
      #theme-heo.dark .token.constant,
      #theme-heo.dark .token.symbol,
      #theme-heo.dark .token.deleted,
      .dark #theme-heo .token.property,
      .dark #theme-heo .token.tag,
      .dark #theme-heo .token.boolean,
      .dark #theme-heo .token.number,
      .dark #theme-heo .token.constant,
      .dark #theme-heo .token.symbol,
      .dark #theme-heo .token.deleted {
        color: #f97583 !important;
      }

      #theme-heo.dark .token.selector,
      #theme-heo.dark .token.attr-name,
      #theme-heo.dark .token.string,
      #theme-heo.dark .token.char,
      #theme-heo.dark .token.builtin,
      #theme-heo.dark .token.inserted,
      .dark #theme-heo .token.selector,
      .dark #theme-heo .token.attr-name,
      .dark #theme-heo .token.string,
      .dark #theme-heo .token.char,
      .dark #theme-heo .token.builtin,
      .dark #theme-heo .token.inserted {
        color: #85e89d !important;
      }

      #theme-heo.dark .token.atrule,
      #theme-heo.dark .token.attr-value,
      #theme-heo.dark .token.keyword,
      .dark #theme-heo .token.atrule,
      .dark #theme-heo .token.attr-value,
      .dark #theme-heo .token.keyword {
        color: #79b8ff !important;
      }

      #theme-heo.dark .token.function,
      #theme-heo.dark .token.class-name,
      .dark #theme-heo .token.function,
      .dark #theme-heo .token.class-name {
        color: #b392f0 !important;
      }

      // 移除所有不需要的装饰
      #theme-heo pre[class*='language-']::before,
      #theme-heo pre[class*='language-']::after,
      #theme-heo .code-toolbar::before,
      #theme-heo .code-toolbar::after {
        display: none !important;
      }

      // 确保代码块不被其他样式影响
      #theme-heo .notion pre {
        background: none !important;
        border: none !important;
        padding: 0 !important;
        margin: 0 !important;
      }

    `}</style>
  )
}

export { Style }

