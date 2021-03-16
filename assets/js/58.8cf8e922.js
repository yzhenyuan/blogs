(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{570:function(v,_,t){"use strict";t.r(_);var a=t(2),l=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"node-监控-优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-监控-优化"}},[v._v("#")]),v._v(" Node 监控 & 优化")]),v._v(" "),t("h2",{attrs:{id:"监控分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监控分类"}},[v._v("#")]),v._v(" 监控分类")]),v._v(" "),t("p",[v._v("主要分为：")]),v._v(" "),t("ul",[t("li",[v._v("业务逻辑的监控")]),v._v(" "),t("li",[v._v("硬件的监控")])]),v._v(" "),t("h2",{attrs:{id:"性能监控"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#性能监控"}},[v._v("#")]),v._v(" 性能监控")]),v._v(" "),t("ol",[t("li",[v._v("日志监控：可以实现"),t("code",[v._v("PV/UV")]),v._v("的监控，预知访问高峰")]),v._v(" "),t("li",[v._v("响应时间：可以在 Nginx 一类的反向代理 或者 自行产生的访问日志来监控")]),v._v(" "),t("li",[v._v("进程监控：一般是 检查操作系统中运行的应用进程数，例如：多进程架构的 web 应用")]),v._v(" "),t("li",[v._v("磁盘监控：监控磁盘的用量")]),v._v(" "),t("li",[v._v("内存监控：监控服务器的内存状况可以检查应用中是否存在内存泄漏")]),v._v(" "),t("li",[v._v("CPU 监控")]),v._v(" "),t("li",[v._v("CPU 负载监控：监控 CPU 在单位时间内 正在使用和等待使用的平均任务数")]),v._v(" "),t("li",[v._v("IO 负载：主要指磁盘 IO，磁盘上的读写情况")]),v._v(" "),t("li",[v._v("网络监控：流入和流出 流量")]),v._v(" "),t("li",[v._v("应用状态监控")]),v._v(" "),t("li",[v._v("DNS 监控")])]),v._v(" "),t("h2",{attrs:{id:"性能优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[v._v("#")]),v._v(" 性能优化")]),v._v(" "),t("ul",[t("li")]),v._v(" "),t("h3",{attrs:{id:"web-应用层的优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-应用层的优化"}},[v._v("#")]),v._v(" web 应用层的优化")]),v._v(" "),t("ol",[t("li",[v._v("动静分离\n"),t("ol",[t("li",[v._v("node 处理静态文件的能力并不突出，可以传到专业的静态文件服务器上（Nginx、DNA）")]),v._v(" "),t("li",[v._v("node 只处理动态请求")]),v._v(" "),t("li",[v._v("动静分离后可以对不同的域名消除不必要的 cookie")])])]),v._v(" "),t("li",[v._v("利用缓存\n"),t("ol",[t("li",[v._v("提升性能不外乎：① 提升服务的速度，② 避免不必要的计算")]),v._v(" "),t("li",[v._v("能消除同步 IO 带来的时间浪费")])])]),v._v(" "),t("li",[v._v("多进程架构：利用多核 CPU，如：PM2")]),v._v(" "),t("li",[v._v("读写分离：主要针对数据库，数据库中 读 的速度要大于 写，有些数据库为了保证数据的一致性，会进行锁表操作，影响到读取速度")])]),v._v(" "),t("h3",{attrs:{id:"代码层的优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码层的优化"}},[v._v("#")]),v._v(" 代码层的优化")]),v._v(" "),t("ol",[t("li",[v._v("使用最新版的 node，① v8 的版本更新优化，② node 内部代码的哟花")]),v._v(" "),t("li",[v._v("使用 fast-json-stringify 加速 json 序列化")]),v._v(" "),t("li",[v._v("正确编写异步代码")])]),v._v(" "),t("h2",{attrs:{id:"错误监控"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误监控"}},[v._v("#")]),v._v(" 错误监控")]),v._v(" "),t("ul",[t("li",[v._v("错误类型\n"),t("ul",[t("li",[v._v("语法或运行时错误")]),v._v(" "),t("li",[v._v("访问不存在或没有权限的文件")]),v._v(" "),t("li",[v._v("除了 js 错误和系统错误，也可以自定义错误")])])]),v._v(" "),t("li",[v._v("监控异常日志")])])])}),[],!1,null,null,null);_.default=l.exports}}]);