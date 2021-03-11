(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{563:function(_,v,t){"use strict";t.r(v);var s=t(2),a=Object(s.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"跨站脚本攻击-xss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跨站脚本攻击-xss"}},[_._v("#")]),_._v(" 跨站脚本攻击 XSS")]),_._v(" "),t("blockquote",[t("p",[_._v("XSS 是跨站脚本攻击（Cross Site Scripting）的简写，但是从首写字母命名的方式来看，应该取名 CSS，但这样就和层叠样式表 CSS 重名了，所以取名为 XSS。")])]),_._v(" "),t("p",[_._v("XSS 攻击，一般是指"),t("strong",[_._v("攻击者想尽一切方法将可执行的代码注入到网页中")]),_._v("，当用户浏览网页时，恶意脚本执行，控制用户浏览器行为的一种攻击方式。")]),_._v(" "),t("p",[_._v("XSS 的本质是：恶意代码未经过滤，与网站正常的代码混在一起；浏览器无法分辨哪些脚本是可信的，导致恶意脚本被执行。")]),_._v(" "),t("h2",{attrs:{id:"一、-xss-分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、-xss-分类"}},[_._v("#")]),_._v(" 一、 XSS 分类")]),_._v(" "),t("p",[_._v("XSS 攻击按是否把攻击数据存进服务器端，攻击行为是否伴随着攻击数据一直存在，可分为 "),t("strong",[_._v("非持久型 XSS 攻击")]),_._v(" 和 "),t("strong",[_._v("持久型 XSS 攻击")]),_._v("。")]),_._v(" "),t("p",[_._v("XSS 攻击按攻击方式又可分为：")]),_._v(" "),t("ol",[t("li",[_._v("反射型 XSS（非持久型 XSS 攻击）")]),_._v(" "),t("li",[_._v("DOM 型 XSS（非持久型 XSS 攻击）")]),_._v(" "),t("li",[_._v("存储型 XSS（持久型 XSS 攻击）")])]),_._v(" "),t("h3",{attrs:{id:"_1-1-反射型-xss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-反射型-xss"}},[_._v("#")]),_._v(" 1.1 反射型 XSS")]),_._v(" "),t("p",[_._v('反射型 XSS，简单的把用户输入的数据"反射"给浏览器，')]),_._v(" "),t("p",[_._v('即黑客往往需要诱使用户"点击"一个恶意链接攻击才能成功，用户通过点击这个恶意链接，攻击者可以成功获取用户隐私数据的一种方式。如："盗取用户 Cookie 信息"、"破坏页面结构"、"重定向到其他网站"，盗取内网 IP 等。')]),_._v(" "),t("p",[_._v("那么既然反射型 XSS 也可以是 HTML 注入，那么它注入的关键自然也就从前端的 HTML 页面开始下手：")]),_._v(" "),t("ol",[t("li",[_._v("用户能够与浏览器页面产生交互动作（输入搜索的关键词，点击按钮，点击链接等等），但这些都需要去诱使用户去操作，说起来容易，做起来难。")]),_._v(" "),t("li",[_._v('用户输入的数据会被攻击方拼接出合适的 html 去执行恶意的 js 脚本，这样的过程就像是"一次反射"')])]),_._v(" "),t("p",[_._v("反射型 XSS 的数据流向是："),t("code",[_._v("浏览器 -> 后端 -> 浏览器")])]),_._v(" "),t("h3",{attrs:{id:"_1-2-存储型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-存储型"}},[_._v("#")]),_._v(" 1.2 存储型")]),_._v(" "),t("p",[_._v("存储型 XSS,顾名思义就是将恶意代码存储到数据库中，只要访问页面，恶意代码即可执")]),_._v(" "),t("p",[_._v("例如：访问某黑客写下的一篇含有恶意 JavaScript 代码的博客文章，黑客把恶意脚本保存到服务端。")]),_._v(" "),t("p",[_._v("存储行 XSS 的数据流向是： "),t("code",[_._v("浏览器 -> 后端 -> 数据库 -> 后端 -> 浏览器")])]),_._v(" "),t("h3",{attrs:{id:"_1-3-dom-型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-dom-型"}},[_._v("#")]),_._v(" 1.3 DOM 型")]),_._v(" "),t("p",[_._v('从效果上来说，也是"反射型 XSS"，单独划分出来，是因为其形成是通过修改页面的'),t("code",[_._v("DOM节点")]),_._v("形成的 XSS。")]),_._v(" "),t("p",[_._v("例如：通过修改 DOM 节点上的绑定方法，用户无意间通过点击、输入等行为执行这些方法获取到用户的相关信息")]),_._v(" "),t("p",[_._v("可以触发 DOM XSS 的属性有：")]),_._v(" "),t("ul",[t("li",[_._v("document.referer 属性")]),_._v(" "),t("li",[_._v("window.name 属性")]),_._v(" "),t("li",[_._v("location 属性")]),_._v(" "),t("li",[_._v("innerHTML 属性")]),_._v(" "),t("li",[_._v("documen.write 属性等\nDOM XSS 并没有经过服务端和数据库，只在浏览器前端，通过 DOM 的操作执行恶意脚本。因此 DOM XSS 的数据流如下："),t("code",[_._v("URL -> 浏览器")])])]),_._v(" "),t("h2",{attrs:{id:"二、如何去检测是否存在-xss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、如何去检测是否存在-xss"}},[_._v("#")]),_._v(" 二、如何去检测是否存在 XSS")]),_._v(" "),t("p",[_._v("一般方法是，用户可以在有关键字输入搜索的地方输入****后点击搜索，若弹框出现展示 123，说明存在 XSS 漏洞，这就说明前端并没有对用户输入的内容过滤处理。")]),_._v(" "),t("h2",{attrs:{id:"三、-xss-的攻击方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、-xss-的攻击方式"}},[_._v("#")]),_._v(" 三、 XSS 的攻击方式")]),_._v(" "),t("h3",{attrs:{id:"_3-1-cookie-劫持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-cookie-劫持"}},[_._v("#")]),_._v(" 3.1 Cookie 劫持")]),_._v(" "),t("p",[_._v("通过伪装一些"),t("code",[_._v("图片和按钮")]),_._v("等，诱使用户对其操作，使网页执行了攻击者的恶意脚本，使攻击者能够获取当前用户的 Cookie 信息")]),_._v(" "),t("h3",{attrs:{id:"_3-2-构造-get-和-post-请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-构造-get-和-post-请求"}},[_._v("#")]),_._v(" 3.2 构造 GET 和 POST 请求")]),_._v(" "),t("p",[_._v("若某攻击者想删除某网站的一篇文章，首先获得当前文章的 id，然后通过使用脚本"),t("code",[_._v("插入图片")]),_._v("发送一个"),t("code",[_._v("GET请求")]),_._v("，或"),t("code",[_._v("构造表单")]),_._v("，"),t("code",[_._v("XMLHTTPRequest")]),_._v("发送"),t("code",[_._v("POST请求")]),_._v("以达到删除该文章的目的")]),_._v(" "),t("h3",{attrs:{id:"_3-3-xss-钓鱼"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-xss-钓鱼"}},[_._v("#")]),_._v(" 3.3 XSS 钓鱼")]),_._v(" "),t("p",[t("code",[_._v("钓鱼")]),_._v("这个词一般认识是起源于"),t("code",[_._v("社会工程学")]),_._v("，黑客使用这个这门学科的理念思想，在未授权不知情的情况下诱骗用户，并得到对方对方的姓名、年龄、邮箱账号、甚至是银行卡密码等私人信息。")]),_._v(" "),t("p",[_._v('比如："某用户在某网站（已被攻击）上操作黑客伪造的一个登录框，当用户在登录框中输入了用户名（这里可能是身份证号等）和密码之后，将其信息上传至黑客的服务器上（该用户的信息就已经从该网站泄漏）"')]),_._v(" "),t("h3",{attrs:{id:"_3-4-获取用户真实的-ip-地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-获取用户真实的-ip-地址"}},[_._v("#")]),_._v(" 3.4 获取用户真实的 IP 地址")]),_._v(" "),t("p",[_._v("通过第三方软件获取，比如客户端安装了 Java 环境（JRE），则可通过调用"),t("code",[_._v("Java Applet")]),_._v("的接口获取客户端本地的 IP 地址")]),_._v(" "),t("h2",{attrs:{id:"四、-防御方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、-防御方法"}},[_._v("#")]),_._v(" 四、 防御方法")]),_._v(" "),t("p",[_._v("XSS 攻击有两大要素：")]),_._v(" "),t("ol",[t("li",[_._v("攻击者提交恶意代码。")]),_._v(" "),t("li",[_._v("浏览器执行恶意代码。")])]),_._v(" "),t("p",[_._v("XSS 产生的原因呢？是由于输入数据的不可控，未对数据进行过滤。 那么我们防御 XSS 要从以下几个方面着手")]),_._v(" "),t("ul",[t("li",[_._v("输入校验：长度限制、值类型是否正确、是否包含特殊字符（<>”等）、是否包含 alert、onclick、script 等关键字。")]),_._v(" "),t("li",[_._v("输出编码：根据输出的位置进行相应的编码，如 HTML 编码、JavaScript 编码、URL 编码。原则是该数据不要超出自己所在的区域，也不要被当做指令执行。")]),_._v(" "),t("li",[_._v("考虑 set-cookie 中设置 http-only,避免 cookie 盗用。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);