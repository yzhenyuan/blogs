const Nav = require('./nav')
const NavList = require('./navList')
module.exports = {
  theme: 'reco',
  base: "/blogs/", //目录根地址，应与Github仓库名字相同
  title: "🦍", // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: "Welcome", // meta 中的描述文字，用于SEO
  head: [
    ["link",{rel: "icon",href: "/vuepress/favicon.ico"} ],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  markdown: {
    lineNumbers: true //是否在每个代码块的左侧显示行号
  },
  themeConfig: {
    type: 'blog',
    mode: 'light',
    codeTheme: 'tomorrow', // default 'tomorrow'
    modePicker: false,
    sidebar: 'auto',
    sidebarDepth: 3, //侧边栏深度
    nav: Nav,
    displayAllHeaders: true, // 默认值：false
    sidebar: NavList,
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: "yzhenyuan/blogs",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "Github",
    // 以下为可选的编辑链接选项
    // 假如文档不是放在仓库的根目录下：
    docsDir: "docs/pages",
    // 假如文档放在一个特定的分支下：
    docsBranch: "main",
    // 默认是 false, 设置为 true 来启用
    // editLinks: true,
    // 默认为 "Edit this page"
    // editLinkText: "源码地址",
    smoothScroll: true, //页面滚动效果
    lastUpdated: "最后更新" // string | boolea
  },
  plugins: [
    "@vuepress/medium-zoom", //zooming images like Medium（页面弹框居中显示）
    "@vuepress/nprogress", //网页加载进度条
    'flowchart',
    "@vuepress/plugin-back-to-top" //返回页面顶部按钮
  ]
};