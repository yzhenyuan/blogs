
const BasicsList = ["html-1","css-1"]
const BasicsJSList = [
    "js/js",
    "js/js-type",
    "js/js-proto",
    "js/js-scope",
    "js/js-this",
    'js/error'
]
const es6List = [
    'js/module',
    "js/es6-module",
    "js/es6-class",
    "js/es6-ReflectProxy",
    "js/es6-promise",
    "js/es6-setMap",
    'js/js-for',
]
const fpList = ['js/fp','js/fp2','js/fp3',]
const performanceList = [
    'performance/performance',
    'performance/performance-1',
    'performance/performance-js',
    'performance/performance-methods'
]
const ChromeList = ["v8","chrome-v8",'chrome-url','chrome-eventLoop','chrome-PWA']
const webpackList = ["webpack-1","webpack-2","webpack-babel","webpack-loaderPlugin",'esbuild','swc']
const TsList = ["ts-basic","ts",'ts.config','ts.d.ts','ts-1','ts-2','ts-3']
const NodeJSList = [ 
    "node-1", 
    "node-process",
    "node-koa",
    "node-buffer" ,
    'node-monitor',
    'node-pm2']
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
    "vue2-diff",
    "vue2-observer",
    "vue3-vite", 
    "vue3-composition",
    "vue3-vs2"
]
const reactList = ['vsVue','react-render','react-fiber', 'react','react-hooks']
const AlgorithmList =["algorithm-1","algorithm-3"]
const NetworkList = [
    'http/modules',
    'http/edition',
    'http/https',
    'http/catch',
    'http/getpost',
    'http/status'
]
const safeList = ['safe-1','safe-xss','safe-csrf','safe-other']
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
        { title: "ES6", children: es6List},
        {title:"函数式编程", children:fpList},
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
        // { title: "网络", children:Network},
        { title: "HTTP", children: NetworkList },
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