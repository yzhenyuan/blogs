const BasicsList = ["html-1.md","css-1.md"]
const BasicsJSList = ["js/js-1.md",]
const ChromeList = ["Chrome-1.md","chrome-v8.md", ]
const webpackList = ["webpack-1.md"]
const NodeJSList = [ "node-1.md", "node-process.md", ]
const pagesList = ["docker-1.md", "docker-k8s.md","reg/reg-1.md",]
const vueList =["vue2-1.md", "vue2-2.md", "vdom-1.md", "vdom-2.md",]
const AlgorithmList =["algorithm-1.md",]
const Network = ['/Network/net/net-module.md']
const NetworkList = ['net/net-http.md','net/net-http-cache.md',]
const safeList = ['safe-1.md','']
// collapsable: false,
module.exports = {
    "/Basics/": [
        { title: "基础知识", children: BasicsList,},
        { title: "js", children: BasicsJSList,},
    ],
    "/Chrome/": [
        { title: "Chrome", children: ChromeList, },
    ],
    "/webpack/": [
        { title: "Webpack", children: webpackList, }, 
    ],
    "/NodeJS/": [
        { title: "Node", children: NodeJSList, }, 
    ],
    "/pages/": [
        { title: "扩展", children: pagesList, },
    ],
    "/vue/": [
        { title: "Vue原理解析", children: vueList, },
    ],
    "/Algorithm/":[
        { title: "数据结构与算法", children: AlgorithmList, },
    ],
    "/Network/":[
        { title: "网络", children:Network},
        { title: "HTTP协议", children: NetworkList, },
        { title: "安全", children: safeList, },
    ],
}