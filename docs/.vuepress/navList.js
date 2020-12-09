const BasicsList = ["html-1.md","css-1.md"]
const ChromeList = ["chrome-v8.md"]
const webpackList = ["webpack-1.md"]
const NodeJSList = [ "node-1.md", "node-process.md", ]
const pagesList = ["docker-1.md", "docker-k8s.md","reg-1.md",]
const vueList =["vue2-1.md", "vue2-2.md", "vdom-1.md", "vdom-2.md",]
const AlgorithmList =["algorithm-1.md",]
// collapsable: false,
const navList = {
    "/Basics/": [
        { title: "基础知识", children: BasicsList,},
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
}
// Object.keys(navList).forEach(item=>{
//     navList[item].forEach(element => {
//         // element['collapsable'] = true
//         const str = item.substring(1,item.length-2)
//         const childrenList = `${}`
//         element['children'] = childrenList
//     });
// })
module.exports = navList