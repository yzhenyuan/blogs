
const BasicsList = ["html-1.md","css-1.md"]
const BasicsJSList = [
    "js/js-1.md",
    "js/es6-module.md",
    "js/es6-Reflect",
    'js/error.md'
]
const performanceList = [
    'performance/performance.md',
    'performance/performance-1.md',
    'performance/performance-js.md',
    'performance/performance-methods.md'
]
const ChromeList = ["Chrome-1.md","chrome-v8.md", ]
const webpackList = ["webpack-1.md","webpack-babel.md",]
const TsList = ["ts.md",'ts.config.md','ts-1.md',]
const NodeJSList = [ "node-1.md", "node-process.md","node-koa.md","node-buffer.md" ]
const regList = ["reg/reg-1.md",]
const standardList = [
    'standard/standard.md',
    'standard/editorconfig.md',
    'standard/prettier.md',
    'standard/eslint.md'
]
const vueList =["vue2-1.md", "vue2-2.md", "vdom-1.md", "vdom-2.md",]
const reactList = ['react-render.md','react-fiber.md','react.md']
const AlgorithmList =["algorithm-1.md",]
const Network = ['net/net-module.md']
const NetworkList = ['net/net-http.md','net/net-http-cache.md',]
const safeList = ['safe-1.md','safe-xss.md','safe-csrf.md']
const DesignList = [
    'Design/Design.md',
    'Design/Singleton.md',
    'Design/Factory.md',
    'Design/Constructor.md',
    'Design/prototype.md',
    'Design/Observer.md'
]



module.exports = {
    "/Basics/": [
        { title: "HTML&CSS", children: BasicsList},
        { title: "JS基础", children: BasicsJSList},
        { title: "性能优化", children: performanceList},
    ],
    "/Chrome/": [{ title: "Chrome", children: ChromeList}],
    "/webpack/": [
        { title: "Webpack", children: webpackList},
    ],
    "/ts/": [{ title: "Typscript", children:TsList}],
    "/NodeJS/": [{ title: "了解Node", children: NodeJSList}],
    "/vue/": [{ title: "Vue原理解析", children: vueList}],
    "/React/": [{ title: "React原理解析", children: reactList}],
    "/Algorithm/":[{ title: "数据结构&算法", children: AlgorithmList}],
    "/Network/":[
        { title: "网络", children:Network},
        { title: "HTTP协议", children: NetworkList },
        { title: "安全", children: safeList },
    ],
    "/pages/": [
        { title: "Docker", children: ["docker.md", "docker-k8s.md"]},
        { title: "设计模式", children: DesignList},
        { title: "正则表达式", children: regList },
        { title: "代码规范",children:standardList},
        { title: "serverless",children:['serverless.md']}
    ],
}