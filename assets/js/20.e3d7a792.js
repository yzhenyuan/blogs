(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{524:function(a,t,e){"use strict";e.r(t);var r=e(2),c=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"http缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http缓存"}},[a._v("#")]),a._v(" HTTP缓存")]),a._v(" "),e("p",[a._v("http缓存指的是: 当客户端向服务器请求资源时，会先抵达浏览器缓存，如果浏览器有“要请求资源”的副本，就可以直接从浏览器缓存中提取而不是从原始服务器中提取这个资源。")]),a._v(" "),e("h2",{attrs:{id:"一、强缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、强缓存"}},[a._v("#")]),a._v(" 一、强缓存")]),a._v(" "),e("p",[e("strong",[a._v("当浏览器去请求某个文件的时候，服务端就在respone header里面对该文件做了缓存配置。缓存的时间、缓存类型都由服务端控制，具体表现为：respone header 的cache-control，常见的设置是max-age public private no-cache no-store等")])]),a._v(" "),e("h3",{attrs:{id:"强缓存两种策略expires和cache-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强缓存两种策略expires和cache-control"}},[a._v("#")]),a._v(" 强缓存两种策略expires和cache-control")]),a._v(" "),e("h4",{attrs:{id:"_1-cache-control-max-age-xxxx-public"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-cache-control-max-age-xxxx-public"}},[a._v("#")]),a._v(" 1. cache-control: max-age=xxxx，public")]),a._v(" "),e("p",[a._v("客户端和代理服务器都可以缓存该资源；\n客户端在xxx秒的有效期内，如果有请求该资源的需求的话就直接读取缓存,statu code:200 ，如果用户做了刷新操作，就向服务器发起http请求")]),a._v(" "),e("h4",{attrs:{id:"_2-cache-control-max-age-xxxx-private"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-cache-control-max-age-xxxx-private"}},[a._v("#")]),a._v(" 2. cache-control: max-age=xxxx，private")]),a._v(" "),e("p",[a._v("只让客户端可以缓存该资源；代理服务器不缓存\n客户端在xxx秒内直接读取缓存,statu code:200")]),a._v(" "),e("h4",{attrs:{id:"_3-cache-control-max-age-xxxx-immutable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-cache-control-max-age-xxxx-immutable"}},[a._v("#")]),a._v(" 3. cache-control: max-age=xxxx，immutable")]),a._v(" "),e("p",[a._v("客户端在xxx秒的有效期内，如果有请求该资源的需求的话就直接读取缓存,statu code:200 ，即使用户做了刷新操作，也不向服务器发起http请求")]),a._v(" "),e("h4",{attrs:{id:"_4-cache-control-no-cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-cache-control-no-cache"}},[a._v("#")]),a._v(" 4. cache-control: no-cache")]),a._v(" "),e("p",[a._v("跳过设置强缓存，但是不妨碍设置协商缓存；一般如果你做了强缓存，只有在强缓存失效了才走协商缓存的，设置了no-cache就不会走强缓存了，每次请求都回询问服务端。")]),a._v(" "),e("h4",{attrs:{id:"_5-cache-control-no-store"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-cache-control-no-store"}},[a._v("#")]),a._v(" 5. cache-control: no-store")]),a._v(" "),e("p",[a._v("不缓存，这个会让客户端、服务器都不缓存，也就没有所谓的强缓存、协商缓存了。")]),a._v(" "),e("h2",{attrs:{id:"二、对比缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、对比缓存"}},[a._v("#")]),a._v(" 二、对比缓存")]),a._v(" "),e("blockquote",[e("p",[a._v("通过比较去看是否需要缓存，会去和服务器进行一次通信，把本地缓存的状态发给服务器，让服务器去比较要不要重新拉取资源")])]),a._v(" "),e("h3",{attrs:{id:"对比缓存两种策略-etag和last-modify"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对比缓存两种策略-etag和last-modify"}},[a._v("#")]),a._v(" 对比缓存两种策略 Etag和Last-modify")]),a._v(" "),e("h4",{attrs:{id:"etag-if-none-match"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag-if-none-match"}},[a._v("#")]),a._v(" etag/if-none-match")]),a._v(" "),e("ul",[e("li",[a._v("服务器给这个资源生成一个"),e("strong",[a._v("唯一标识")]),a._v("，放在http-etag头里面")]),a._v(" "),e("li",[a._v("资源过期的时候，浏览器把etag拿出来，向服务器发送一个请求，让服务器去确认etag是否过期")]),a._v(" "),e("li",[a._v("如果过期就会把资源重新发送到浏览器，返回一个200")]),a._v(" "),e("li",[a._v("如果没有过期，服务器就不会重新推送资源，返回一个304跳转（304是本地跳转，从磁盘缓存上去拿 ）")])]),a._v(" "),e("h4",{attrs:{id:"last-modified-if-modified-since"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-if-modified-since"}},[a._v("#")]),a._v(" last-modified/if-modified-since")]),a._v(" "),e("ul",[e("li",[a._v("服务器给这个资源生成一个时间戳，标示着资源的最后修改时间（实际上服务上面所有的资源都是有时间戳），客户端在请求数据的时候，先去本地缓存里面检查是否过期")]),a._v(" "),e("li",[a._v("如果资源过期，他会把时间戳放到请求头（cache-control）去发送请求，服务器收到请求后发现头有if-modified-since,就会去和被请求资源的最后修改时间做对比，如果最后修改时间比较新就反回200，否则304")])]),a._v(" "),e("h2",{attrs:{id:"三、-缓存的优先级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、-缓存的优先级"}},[a._v("#")]),a._v(" 三、 缓存的优先级")]),a._v(" "),e("ol",[e("li",[a._v("last-modified/if-modified-since")]),a._v(" "),e("li",[a._v("etag/if-none-match //对文件做精准的 md5,能响应文件非常细致的")]),a._v(" "),e("li",[a._v("expires // 不能响应毫秒级别")]),a._v(" "),e("li",[a._v("cache-control //过期时间长度")])]),a._v(" "),e("h3",{attrs:{id:"强缓存和对比缓存的使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强缓存和对比缓存的使用场景"}},[a._v("#")]),a._v(" 强缓存和对比缓存的使用场景")]),a._v(" "),e("p",[a._v("强缓存:")]),a._v(" "),e("ul",[e("li",[a._v("由于css和js在打包时加了md5值，建议直接使用，")]),a._v(" "),e("li",[a._v("并且expires和cache-control同时使用，建议设置时长为7天较为妥当")])]),a._v(" "),e("p",[a._v("对比缓存:")]),a._v(" "),e("ul",[e("li",[a._v("图片文件由于没有加md5值，建议采用对比缓存，")]),a._v(" "),e("li",[a._v("html文件也建议采用对比缓")])]),a._v(" "),e("h2",{attrs:{id:"四、-chrome-network"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、-chrome-network"}},[a._v("#")]),a._v(" 四、 Chrome Network")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("只有当前的派生资源才进行缓存，但是派生资源放到缓存中是不大对的\n只有内存中放不下了才会放到硬盘中\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("共同点：都不请求资源")]),a._v(" "),e("ul",[e("li",[a._v("memory //内存，放在内存是比较快，浏览器关掉下次就没有了")]),a._v(" "),e("li",[a._v("disk //硬盘，浏览器关掉下次还会有")])]),a._v(" "),e("p",[e("strong",[a._v("缓存的地方会跟电脑的环境有关系（电脑内存）")])])])}),[],!1,null,null,null);t.default=c.exports}}]);