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
    `}</style>
  )
}

export { Style }
