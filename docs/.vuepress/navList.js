
const BasicsList = ["html-1","css-1"]
const BasicsJSList = [
    "js/js",
    "js/js-proto",
    "js/js-scope",
    'js/module',
    "js/es6-module",
    "js/es6-Reflect",
    'js/error',
    'js/js-for',
    'js/fp',
    'js/fp2',
    'js/fp3',
]
const performanceList = [
    'performance/performance',
    'performance/performance-1',
    'performance/performance-js',
    'performance/performance-methods'
]
const ChromeList = ["Chrome-1","chrome-v8", ]
const webpackList = ["webpack-1","webpack-babel",'esbuild','swc']
const TsList = ["ts-basic","ts",'ts.config','ts.d.ts','ts-1','ts-2','ts-3']
const NodeJSList = [ "node-1", "node-process","node-koa","node-buffer" ,'node-libuv']
const regList = ["reg/reg-1",]
const standardList = [
    'standard/standard',
    'standard/editorconfig',
    'standard/prettier',
    'standard/eslint'
]
const vueList =[
    "vue2-1", 
    "vue2-2", 
    "vdom-1", 
    "vdom-2",
    "vue3-vite", 
    "vue3-composition",
    "vue3-3"
]
const reactList = ['react-render','react-fiber', 'react']
const AlgorithmList =["algorithm-1","algorithm-3"]
const Network = ['net/net-module']
const NetworkList = ['http/edition.md','http/GetPost.md','http/https.md','net/cache',]
const safeList = ['safe-1','safe-xss','safe-csrf']
const DesignList = [
    'Design/Design',
    'Design/Singleton',
    'Design/Factory',
    'Design/Constructor',
    'Design/prototype',
    'Design/Observer'
]

const allList = {
    "/Basics/": [
        { title: "HTML&CSS",children: BasicsList},
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
        { title: "Docker", children: ["docker", "docker-k8s"]},
        { title: "设计模式", children: DesignList},
        { title: "正则表达式", children: regList },
        { title: "代码规范",children:standardList},
        { title: "serverless",children:['serverless']}
    ],
}
module.exports = allList 