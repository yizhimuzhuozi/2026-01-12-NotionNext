/* eslint-disable react/no-unknown-property */
/**
 * Typography 主题全局样式
 * 
 * 功能:定义整个主题的全局CSS样式
 * 设计:基于 holmberg.io 极简设计风格
 * 
 * 重要说明:
 * - 此处样式只对 Typography 主题生效
 * - 此处不支持 TailwindCSS 的 @apply 语法
 * - 建议优先使用 Tailwind 类名,只在必要时使用此文件
 * 
 * 自定义提示:
 * - 修改全局字体:调整第15-18行的 font-family, font-size, line-height
 * - 修改文字选中颜色:调整第31行的 background-color
 * - 修改标题 hover 颜色:调整第70行的 text-decoration-color
 * - 修改背景色:调整第53和58行的 background-color
 */
const Style = () => {
  return (
    <style jsx global>{`
      /* ==================== 全局字体设置 ==================== */
      
      /* HTML 根元素字体优化 */
      html {
        /* 字体渲染优化 - 使文字更平滑 */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
        /* 字体栈:优先思源黑体,回退到系统字体 */
        font-family: "Noto Sans SC Heavy", "Source Han Sans SC Heavy", -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        
        /* 基础字号:24px (参考 holmberg.io) */
        font-size: 24px;
        
        /* 行高:1.55倍 (约35.5px,提供舒适的阅读体验) */
        line-height: 1.55;
        
        /* 文字颜色:柔和的深灰黑 (比纯黑 #000 更柔和) */
        color: #161b22;
      }

      /* 主题容器样式 - 与 HTML 保持一致 */
      #theme-typography {
        font-family: "Noto Sans SC Heavy", "Source Han Sans SC Heavy", -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 24px;
        line-height: 1.55;
        color: #161b22;
      }

      /* ==================== 文字选中效果 ==================== */
      
      /* 全局文字选中 - 天蓝色背景 #41c3f7 */
      ::selection {
        background-color: #41c3f7;
        color: #000;
      }

      /* Firefox 浏览器文字选中 */
      ::-moz-selection {
        background-color: #41c3f7;
        color: #000;
      }

      /* Notion 内容区域文字选中 - 使用 !important 确保优先级 */
      #theme-typography ::selection {
        background-color: #41c3f7 !important;
        color: #000 !important;
      }

      #theme-typography ::-moz-selection {
        background-color: #41c3f7 !important;
        color: #000 !important;
      }

      /* ==================== 主题容器背景色 ==================== */
      
      /* 浅色模式背景 - 浅灰色 */
      #theme-typography {
        background-color: rgb(250, 250, 250);
      }

      /* 深色模式背景 - 深灰黑色 */
      #theme-typography.dark,
      .dark #theme-typography {
        background-color: rgb(18, 18, 18);
      }

      /* ==================== 文章标题样式 ==================== */
      
      /* 文章标题字体 - 使用思源黑体 Medium */
      #theme-typography .article-title {
        /* 思源黑体 Medium,回退到系统字体 */
        font-family: "Noto Sans SC Heavy", "Source Han Sans SC Heavy", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        
        /* 字重:800 (非常粗) */
        font-weight: 800;
        
        /* 下划线颜色过渡动画 - 0.3秒平滑过渡 */
        transition: text-decoration-color 0.3s ease;
      }

      /* 文章标题 hover 效果 - 下划线变天蓝色 */
      #theme-typography .article-title:hover {
        text-decoration-color: #41c3f7 !important;
      }

      /* ==================== Notion 内容样式重置 ==================== */
      
      /* 移除 Notion 内容的默认上下边距 */
      #theme-typography .notion {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
      }

      /* Notion 段落间距 - 35.5px 提供舒适的段落间隔 */
      #theme-typography .notion p {
        margin-bottom: 35.5px;
      }

      /* ==================== 滚动条隐藏 ==================== */
      
      /* WebKit 浏览器 (Chrome, Safari) 隐藏滚动条 */
      .scroll-hidden::-webkit-scrollbar {
        display: none;
      }

      /* IE 和 Firefox 隐藏滚动条 */
      .scroll-hidden {
        -ms-overflow-style: none;  /* IE 和 Edge */
        scrollbar-width: none;      /* Firefox */
      }

      /* ==================== Notion 文章内容样式覆盖 ==================== */
      
      /* 正文段落 - holmberg.io 风格 */
      #theme-typography .notion-text,
      #theme-typography .notion p {
        font-size: 20px !important;
        line-height: 1.65 !important;
        color: #000 !important;
        margin-bottom: 0.4em !important;
      }

      /* 暗色模式正文 */
      .dark #theme-typography .notion-text,
      .dark #theme-typography .notion p {
        color: #fff !important;
      }


      /* 链接样式 - 只针对正文普通链接,排除书签、外部块、文件下载 */
      /* 使用 .notion-link 精确定位,排除特殊块 */
      #theme-typography .notion a.notion-link:not(.notion-bookmark):not(.notion-external):not(.notion-hash-link) {
        color: #000 !important;
        text-decoration: underline !important;
        text-decoration-thickness: 2.6px !important;
        text-decoration-color: #000 !important;
        text-decoration-skip-ink: auto !important;
        border-bottom: none !important; /* 移除 Notion 默认的 border-bottom,避免双重下划线 */
        transition: text-decoration-color 0.2s ease !important;
      }

      #theme-typography .notion a.notion-link:not(.notion-bookmark):not(.notion-external):not(.notion-hash-link):hover {
        text-decoration-color: #41c3f7 !important;
      }

      /* 暗色模式链接 */
      .dark #theme-typography .notion a.notion-link:not(.notion-bookmark):not(.notion-external):not(.notion-hash-link) {
        color: #fff !important;
        text-decoration-color: #fff !important;
      }

      .dark #theme-typography .notion a.notion-link:not(.notion-bookmark):not(.notion-external):not(.notion-hash-link):hover {
        text-decoration-color: #41c3f7 !important;
      }


      /* ==================== 标题样式 ==================== */
      
      /* Notion 一级标题 (渲染为 h2.notion-h1) */
      #theme-typography h2.notion-h1 {
        font-size: 32px !important; /* 1.6x 正文 */
        font-weight: 900 !important;
        line-height: 1.3 !important;
        color: #000 !important;
        margin-top: 1em !important; /* 从2em减半,减小与前面内容的距离 */
      }

      /* Notion 二级标题 (渲染为 h3.notion-h2) */
      #theme-typography h3.notion-h2 {
        font-size: 26px !important; /* 1.3x 正文 */
        font-weight: 800 !important;
        line-height: 1.4 !important;
        color: #000 !important;
        margin-top: 0.8em !important; /* 从1.6em减半,减小与前面内容的距离 */
      }

      /* Notion 三级标题 (H3 - 渲染为 h4.notion-h3) */
      #theme-typography h4.notion-h3 {
        font-size: 22px !important; /* 字体大小: 正文的1.1倍 (正文20px × 1.1 = 22px) */
        font-weight: 700 !important; /* 字重: 700 (粗体),区别于正文的400 */
        line-height: 1.5 !important; /* 行高: 1.5倍字体大小,提升可读性 */
        color: #000 !important; /* 文字颜色: 纯黑色,增强层级对比 */
        margin-top: 1.4em !important; /* 上间距: 1.4倍字体大小,与前面内容分隔 */
      }

      /* 暗色模式标题 */
      .dark #theme-typography .notion h1,
      .dark #theme-typography .notion h2,
      .dark #theme-typography .notion h3,
      .dark #theme-typography .notion h4,
      .dark #theme-typography .notion h5,
      .dark #theme-typography .notion h6 {
        color: #fff !important;
      }

      /* ==================== TOC跳转优化 ==================== */
      
      /* 确保点击TOC跳转时标题不会被遮挡 */
      #theme-typography .notion h1[id],
      #theme-typography .notion h2[id],
      #theme-typography .notion h3[id],
      #theme-typography .notion h4[id],
      #theme-typography .notion h5[id],
      #theme-typography .notion h6[id] {
        scroll-margin-top: 100px; /* 滚动时留出顶部100px空间 */
      }

      /* ==================== 代码块样式 ==================== */
      
      /* 代码块容器 */
      #theme-typography .notion-code,
      #theme-typography pre {
        background: #2d2d2d !important;
        border-radius: 12px !important;
        padding: 24px 28px !important;
        margin: 12px 0 !important; /* 从24px减半,减小代码块上下间距 */
        position: relative !important;
        overflow-x: auto !important;
        border: none !important;
        box-shadow: none !important;
        
        /* 隐藏滚动条但保持滚动功能 */
        scrollbar-width: none !important; /* Firefox */
        -ms-overflow-style: none !important; /* IE 和 Edge */
      }

      /* 代码块外层容器 - 只移除阴影 */
      #theme-typography .code-toolbar {
        box-shadow: none !important; /* 移除 Tailwind 的 box-shadow 变量 */
      }

      /* WebKit 浏览器隐藏滚动条 */
      #theme-typography .notion-code::-webkit-scrollbar,
      #theme-typography pre::-webkit-scrollbar {
        display: none !important;
      }

      /* 代码块对齐修正 */
      
      /* 嵌套在列表内的代码块 (如 magnet 链接) */
      /* 结构: ul > ul > .code-toolbar > pre */
      /* Notion 中这些代码块缩进在父列表项下方,与列表文本对齐 */
      /* 使用负左边距抵消嵌套列表的 padding,使代码块与外层列表文本对齐 */
      #theme-typography .notion-list .notion-list .code-toolbar,
      #theme-typography .notion-list .notion-list .code-toolbar pre,
      #theme-typography .notion-list .notion-list .notion-code {
        /* margin-left: -1.5em !important; */
        /* 增加宽度补偿负边距,避免右侧出现空白 */
        /* width: calc(100% + 1.5em) !important; */
      }
      
      /* 独立的代码块 (如 irm 脚本) */
      /* 这些代码块在 Notion 中是完整宽度,与页面内容区域左右完美对齐 */
      /* 不需要任何额外的左边距 */

      /* 代码文本 */
      #theme-typography .notion-code code,
      #theme-typography pre code {
        background: transparent !important;
        color: #e4e7e8 !important;
        font-family: 'Monaco', 'Menlo', 'Consolas', monospace !important;
        font-size: 14px !important;
        line-height: 1.6 !important;
        padding: 0 !important;
      }

      /* 行内代码 */
      #theme-typography .notion code:not(pre code) {
        background: #E4E7EA !important; /* 浅灰背景 - Notion 风格 */
        color: #2d2d2d !important; 
        padding: 3px 6px !important;
        border-radius: 3px !important;
        font-weight: 500 !important;
        font-size: 16px !important;
      }

      .dark #theme-typography .notion code:not(pre code) {
        background: #E4E7EA !important;
        color: #2d2d2d !important;
        font-weight: 500 !important;
      }

      /* 复制按钮样式 */
      #theme-typography .notion-code .copy-button,
      #theme-typography pre .copy-button {
        position: absolute !important;
        top: 12px !important;
        right: 12px !important;
        background: rgba(255, 255, 255, 0.1) !important;
        padding: 8px 12px !important;
        border-radius: 6px !important;
        cursor: pointer !important;
        transition: background 0.2s ease !important;
        border: none !important;
        color: #fff !important;
        font-size: 12px !important;
      }

      #theme-typography .notion-code .copy-button:hover,
      #theme-typography pre .copy-button:hover {
        background: rgba(255, 255, 255, 0.2) !important;
      }

      /* ==================== 列表样式 ==================== */
      
      /* 列表容器 - ul/ol */
      #theme-typography .notion ul,
      #theme-typography .notion ol {
        font-size: 20px !important;
      /*  line-height: 1 !important;  与 holmberg.io 一致 */
        padding-left: 2em !important; /* 核心：增加到 2em 为序号留出空间 */
        margin-left: 0 !important;
      }

      /* 有序列表数字加粗 */
      #theme-typography .notion ol li::marker {
        font-weight: 700 !important; /* 数字加粗 */
      }

      /* 列表项 - li */
      #theme-typography .notion li {
        margin-top: 0.1em !important; /* 列表项上方间距 - 更紧凑 */
        margin-bottom: 0.1em !important; /* 列表项下方间距 - 更紧凑 */
      }

      /* ==================== 引用块样式 ==================== */
      
      #theme-typography .notion blockquote {
        border-left: 4px solid #41c3f7 !important;
        padding-left: 20px !important;
        margin: 24px 0 !important;
        font-size: 20px !important;
        line-height: 1.65 !important;
        color: #3e4c59 !important;
        font-style: italic !important;
      }

      .dark #theme-typography .notion blockquote {
        color: #9ca3af !important;
      }

      /* ==================== 标注块样式 ==================== */
      
      /* Notion Callout - 默认风格 */
      #theme-typography .notion-callout {
        background: #f7f6f3 !important; /* Notion 默认浅灰背景 */
        border: none !important; /* 移除边框 */
        border-radius: 12px !important;
        padding: 16px 16px 16px 16px !important; /* 上右下左,减小底部内边距 */
        margin: 4px 0 !important;
        align-items: flex-start !important; /* 改为顶部对齐而不是居中 */
        border-color: #444 !important; /* 深色模式表头边框使用深灰色 */
      }

      /* Callout 图标 */
      #theme-typography .notion-callout .notion-page-icon-inline {
        margin-top: 12px !important;
        align-self: flex-start !important;
      }

      /* Callout 文字区域 */
      #theme-typography .notion-callout-text {
        margin-left: 8px !important; /* 图标和文字间距 */
      }

      /* Callout 内部第一个元素上间距 */
      #theme-typography .notion-callout-text > *:first-child {
        margin-top: 0 !important;
        padding-top: 0 !important;
      }

      /* Callout 内部段落间距 */
      #theme-typography .notion-callout-text p {
        margin-bottom: 0em !important;
        margin-top: 0.5em !important;
      }

      #theme-typography .notion-callout-text p:first-child {
        margin-top: 0 !important;
      }

      /* Callout 最后一个段落底部间距 */
      #theme-typography .notion-callout-text p:last-child {
        margin-bottom: 0 !important;
      }

      .dark #theme-typography .notion-callout {
        background: rgba(255, 255, 255, 0.055) !important;
        border: none !important;
      }

      /* Callout 后面的元素间距 */
      #theme-typography .notion-callout + * {
        margin-top: 0.5em !important;
      }

      /* ==================== 分割线样式 ==================== */
      
      #theme-typography .notion hr {
        border: none !important;
        border-top: 1px solid #e5e7eb !important;
        margin: 48px 0 !important;
      }

      .dark #theme-typography .notion hr {
        border-top-color: #374151 !important;
      }

      /* ==================== 图片样式 ==================== */
      
      /* 图片父容器间距 */
      #theme-typography .notion-asset-wrapper {
        margin: 2px 0 !important; /* 原 8px,减半 */
      }

      #theme-typography .notion img {
        max-width: 100% !important;
        height: auto !important;
        border-radius: 12px !important; /* 圆角 */
        margin: 4px 0 !important; /* 原 16px,减半 */
      }

      /* 列表内的嵌套列表 - 与列表文字对齐 */
      #theme-typography .notion-list .notion-list {
        padding-left: 0 !important; /* 去除默认padding,使内容(图片/代码块)与文字对齐 */
      }

      /* ==================== 移除Notion颜色背景 ==================== */
      
      /* 移除蓝色背景(用于GitHub链接等) */
      #theme-typography .notion-blue_background {
        background-color: transparent !important;
      }

      /* 移除默认背景(灰色) */
      #theme-typography .notion-default_background {
        background-color: transparent !important;
      }

      /* ==================== GitHub外部链接样式优化 ==================== */
      
      /* ==================== 外部链接与书签样式 ==================== */

      /* 1. 行内外部链接 (Inline Link) - 例如: 下载仓库里的文件 RIME-LMDG */
      #theme-typography .notion-external-mention {
        display: inline-flex !important;
        height: 1.4em !important;
        line-height: 1 !important;
        align-items: center !important;
        vertical-align: middle !important;
        margin: 0 2px !important;
        padding: 0 4px !important;
        border-radius: 4px !important; /* 核心：行内链接圆角 4px */
        top: -2px !important;
        transition: background-color 0.2s ease !important;
      }
      
      /* 行内链接 Hover */
      #theme-typography .notion-external-mention:hover {
        background: #41c3f7 !important;
      }

      /* 优化GitHub图标对齐 */
      #theme-typography .notion-external-mention .notion-external-image {
        width: 1em !important;
        height: 1em !important;
        margin-right: 4px !important;
        display: flex !important;
        align-items: center !important;
      }

      /* 修复文字描述容器 */
      #theme-typography .notion-external-mention .notion-external-description {
        display: flex !important;
        align-items: center !important;
      }

      /* 关键:移除文字底边框并重置文字高度 */
      #theme-typography .notion-external-mention .notion-external-title {
        font-size: 1em !important;
        line-height: 1 !important;
        border-bottom: none !important;
        padding: 0 !important;
        margin: 0 !important;
      }

      /* 2. 块级书签与卡片 (Block Bookmark) - 例如: GitHub 仓库卡片、Notion 书签 */
      #theme-typography .notion-external-block,
      #theme-typography .notion-bookmark,
      #theme-typography .notion-collection-card {
        border-radius: 12px !important; /* 核心：块级书签圆角 12px */
        overflow: hidden !important; /* 确保内容不溢出圆角 */
        transition: background-color 0.2s ease, border-color 0.2s ease !important;
      }

      /* 块级书签 Hover */
      #theme-typography .notion-external-block:hover,
      #theme-typography .notion-bookmark:hover,
      #theme-typography .notion-collection-card:hover {
        background: #41c3f7 !important;
        border-color: #41c3f7 !important;
      }

      /* 右侧封面图 - 强制填满容器 */
      #theme-typography .notion-bookmark-image img,
      #theme-typography .notion-collection-card-cover img {
        margin: 0 !important; /* 去除莫名其妙的margin */
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important; /* 填满区域 */
        border-radius: 0 12px 12px 0 !important; /* 仅右侧圆角 */
      }

      /* 左侧小icon - 防止被裁剪 */
      #theme-typography .notion-bookmark-icon img,
      #theme-typography .notion-bookmark-link-icon img {
        border-radius: 0 !important; /* 重置圆角，防止变成圆形或被切 */
        width: 16px !important;
        height: 16px !important;
        object-fit: contain !important;
        margin: 0 !important;
      }

      /* 书签hover效果 */
      #theme-typography .notion-bookmark:hover,
      #theme-typography .notion-collection-card:hover {
        background: #41c3f7 !important;
        border-color: #41c3f7 !important;
      }

      /* 暗色模式书签hover */
      .dark #theme-typography .notion-bookmark:hover,
      .dark #theme-typography .notion-collection-card:hover {
        background: #41c3f7 !important;
        border-color: #41c3f7 !important;
      }

      /* ==================== 表格样式 ==================== */
      
      #theme-typography .notion table {
        width: 100% !important;
        border-collapse: collapse !important;
        margin: 24px 0 !important;
      }

      #theme-typography .notion th,
      #theme-typography .notion td {
        border: 1px solid #e5e7eb !important;
        padding: 12px !important;
        text-align: left !important;
        font-size: 18px !important;
      }

      #theme-typography .notion th {
        background: #f9fafb !important;
        font-weight: 700 !important;
      }

      .dark #theme-typography .notion th,
      .dark #theme-typography .notion td {
        border-color: #374151 !important;
      }

      .dark #theme-typography .notion th {
        background: #1f2937 !important;
        border-color: #444 !important; /* 深色模式表头边框使用深灰色 */
      }

      /* ==================== 移动端响应式适配 ==================== */
      
      @media (max-width: 768px) {
        /* 正文字体 - 从20px减小到18px */
        #theme-typography .notion-text,
        #theme-typography .notion p {
          font-size: 18px !important;
          line-height: 1.7 !important; /* 增加行高提升可读性 */
        }

        /* H1标题 - 从32px减小到26px */
        #theme-typography h2.notion-h1 {
          font-size: 26px !important;
        }

        /* H2标题 - 从26px减小到22px */
        #theme-typography h3.notion-h2 {
          font-size: 22px !important;
        }

        /* H3标题 - 从22px减小到20px */
        #theme-typography h4.notion-h3 {
          font-size: 20px !important;
        }

        /* 列表 - 从20px减小到18px */
        #theme-typography .notion ul,
        #theme-typography .notion ol {
          font-size: 18px !important;
        }

        /* 列表项 */
        #theme-typography .notion li {
          font-size: 18px !important;
        }

        /* 代码块字体 - 从16px减小到14px */
        #theme-typography .notion code,
        #theme-typography .notion pre code {
          font-size: 14px !important;
        }

        /* 代码块容器 - 更紧凑的行高和padding */
        #theme-typography .notion-code,
        #theme-typography pre {
          line-height: 1.5 !important; /* 从1.6减小到1.5,让代码行更紧凑 */
          padding: 16px 20px !important; /* 从24px/28px减小到16px/20px */
        }

        /* 表格字体 */
        #theme-typography .notion table {
          font-size: 16px !important;
        }
      }
    `}</style>
  )
}

export { Style }
