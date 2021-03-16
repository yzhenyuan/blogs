(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{564:function(a,e,t){"use strict";t.r(e);var r=t(2),_=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"跨站点请求伪造-csrf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跨站点请求伪造-csrf"}},[a._v("#")]),a._v(" 跨站点请求伪造 csrf")]),a._v(" "),t("p",[a._v("跨站点请求伪造，指利用用户身份操作用户账户的一种攻击方式，即攻击者诱使用户访问一个页面，就以该用户身份在第三方有害站点中执行了一次操作，泄露了用户的身份信息，接着攻击者就可以使用这个伪造的，但真实存在的身份信息，到某网站冒充用户执行恶意操作。")]),a._v(" "),t("p",[a._v("但是，攻击者只有预测到 URL 的所有参数与参数值，才能成功地伪造一个请求（当然了，他可以在安全站点里以自己的身份实际去操作一下，还是能拿到参数的）；反之，攻击者无法攻击成功")]),a._v(" "),t("h4",{attrs:{id:"一个典型的-csrf-攻击有着如下的流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一个典型的-csrf-攻击有着如下的流程"}},[a._v("#")]),a._v(" 一个典型的 CSRF 攻击有着如下的流程")]),a._v(" "),t("ul",[t("li",[a._v("受害者登录 a.com，并保留了登录凭证（Cookie）。")]),a._v(" "),t("li",[a._v("攻击者引诱受害者访问了 b.com。")]),a._v(" "),t("li",[a._v("b.com 向 a.com 发送了一个请求：a.com/act=xx。浏览器会默认携带 a.com 的 Cookie。")]),a._v(" "),t("li",[a._v("a.com 接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是受害者自己发送的请求。")]),a._v(" "),t("li",[a._v("a.com 以受害者的名义执行了 act=xx。")]),a._v(" "),t("li",[a._v("攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让 a.com 执行了自己定义的操作。")])]),a._v(" "),t("h4",{attrs:{id:"完成一次-csrf-攻击-必须满足两个条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完成一次-csrf-攻击-必须满足两个条件"}},[a._v("#")]),a._v(" 完成一次 CSRF 攻击，必须满足两个条件")]),a._v(" "),t("ol",[t("li",[a._v("用户登录受信任网站 A，并且在本地生成 Cookie")]),a._v(" "),t("li",[a._v("在不登出网站 A 的情况下，访问有害网站 B")])]),a._v(" "),t("h2",{attrs:{id:"一、原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、原理"}},[a._v("#")]),a._v(" 一、原理")]),a._v(" "),t("p",[a._v("是攻击者利用用户身份操作 用户账户 的一种攻击方式")]),a._v(" "),t("h2",{attrs:{id:"二、攻击方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、攻击方式"}},[a._v("#")]),a._v(" 二、攻击方式")]),a._v(" "),t("h3",{attrs:{id:"_2-1-浏览器的-cookie-策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-浏览器的-cookie-策略"}},[a._v("#")]),a._v(" 2.1 浏览器的 Cookie 策略")]),a._v(" "),t("p",[a._v("浏览器所持有的策略一般分为两种：")]),a._v(" "),t("ul",[t("li",[a._v("Session Cookie，临时 Cookie。保存在浏览器进程的内存中，浏览器关闭了即失效。")]),a._v(" "),t("li",[a._v("Third-party Cookie，本地 Cookie。服务器在 Set-Cookie 时指定了 Expire Time。过期了本地 Cookie 失效，则网站会要求用户重新登录。")])]),a._v(" "),t("p",[a._v("在浏览网站的过程中，即使浏览器打开了 Tab 页，Session Cookie 都是有效的，因此发起 CSRF 攻击是可行的。")]),a._v(" "),t("h3",{attrs:{id:"_2-2-p3p-头的副作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-p3p-头的副作用"}},[a._v("#")]),a._v(" 2.2 P3P 头的副作用")]),a._v(" "),t("p",[a._v('"P3P Header"是 "W3C" 制定的一项关于隐私的标准，全称是 "The Platform for Privacy Preference"（隐私偏好平台）')]),a._v(" "),t("p",[a._v('如果网站返回给浏览器的 HTTP 头包含有 P3P 头，则在某种程度上来说，将允许 浏览器发送第三方 Cookie。在 IE 下即使是"'),t("code",[a._v("<iframe>")]),a._v("、"),t("code",[a._v("<script>")]),a._v("等标签页将不再拦截第三方 Cookie 的发送。主要应用在类似广告等需要跨域访问的页面。")]),a._v(" "),t("h3",{attrs:{id:"_2-3-get-post-请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-get-post-请求"}},[a._v("#")]),a._v(" 2.3 GET，POST 请求")]),a._v(" "),t("p",[a._v("这里有个误区\n大多数 CSRF 攻击，都是通过\n"),t("code",[a._v("<img> 、 <iframe> 、 <script> 等带 src 属性的标签，这类标签只能发送一次 GET 请求，而不能发送 POST 请求，由此也有了认为 CSRF 攻击只能由 GET 请求发起的错误观点")]),a._v("。")]),a._v(" "),t("p",[a._v("构造一个 POST 请求，只需要在一个不可见的 iframe 窗口中，构造一个 form 表单，然后使用 JavaScript 自动提交这个表单。那么整个自动提交表单的过程，对于用户来说就是不可见的。")]),a._v(" "),t("h2",{attrs:{id:"三、防御方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、防御方式"}},[a._v("#")]),a._v(" 三、防御方式")]),a._v(" "),t("p",[a._v("CSRF 通常从第三方网站发起，被攻击的网站无法防止攻击发生，只能通过增强自己网站针对 CSRF 的防护能力来提升安全性。")]),a._v(" "),t("h4",{attrs:{id:"上文中讲了-csrf-的两个特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上文中讲了-csrf-的两个特点"}},[a._v("#")]),a._v(" 上文中讲了 CSRF 的两个特点：")]),a._v(" "),t("ul",[t("li",[a._v("CSRF（通常）发生在第三方域名。")]),a._v(" "),t("li",[a._v("CSRF 攻击者不能获取到 Cookie 等信息，只是使用。")])]),a._v(" "),t("h4",{attrs:{id:"针对这两点-我们可以专门制定防护策略-如下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#针对这两点-我们可以专门制定防护策略-如下"}},[a._v("#")]),a._v(" 针对这两点，我们可以专门制定防护策略，如下：")]),a._v(" "),t("ul",[t("li",[a._v("阻止不明外域的访问")]),a._v(" "),t("li",[a._v("同源检测：通过 header 中的 origin header、referer header 确定")]),a._v(" "),t("li",[a._v("Samesite Cookie，新增 Samesite 属性用来标明是同站的")]),a._v(" "),t("li",[a._v("提交时要求附加本域才能获取的信息")]),a._v(" "),t("li",[a._v("CSRF Token 效验")]),a._v(" "),t("li",[a._v("双重 Cookie 验证")])]),a._v(" "),t("p",[t("a",{attrs:{href:"https://tech.meituan.com/2018/10/11/fe-security-csrf.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("参考"),t("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=_.exports}}]);