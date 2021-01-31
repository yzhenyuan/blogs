
# 跨站脚本攻击 XSS
XSS 是跨站脚本攻击（Cross Site Scripting）的简写，但是从首写字母命名的方式来看，应该取名 CSS，但这样就和层叠样式表CSS重名了，所以取名为 XSS。

XSS 攻击，一般是指**攻击者通过在网页中注入恶意脚本**，当用户浏览网页时，恶意脚本执行，控制用户浏览器行为的一种攻击方式。

XSS 的本质是：恶意代码未经过滤，与网站正常的代码混在一起；浏览器无法分辨哪些脚本是可信的，导致恶意脚本被执行。
## 一、 XSS 分类
XSS 攻击按是否把攻击数据存进服务器端，攻击行为是否伴随着攻击数据一直存在，可分为 **非持久型 XSS 攻击** 和 **持久型 XSS 攻击**。

XSS 攻击按攻击方式又可分为： 
1. 反射型 XSS（非持久型 XSS 攻击）
2. DOM 型 XSS（非持久型 XSS 攻击）
3. 存储型 XSS（持久型 XSS 攻击）

### 1.1 反射型 XSS
反射型XSS，简单的把用户输入的数据"反射"给浏览器，

即黑客往往需要诱使用户"点击"一个恶意链接攻击才能成功，用户通过点击这个恶意链接，攻击者可以成功获取用户隐私数据的一种方式。如："盗取用户Cookie信息"、"破坏页面结构"、"重定向到其他网站"，盗取内网IP等。 

那么既然反射型XSS也可以是HTML注入，那么它注入的关键自然也就从前端的HTML页面开始下手：
1. 用户能够与浏览器页面产生交互动作（输入搜索的关键词，点击按钮，点击链接等等），但这些都需要去诱使用户去操作，说起来容易，做起来难。
2. 用户输入的数据会被攻击方拼接出合适的html去执行恶意的js脚本，这样的过程就像是"一次反射"

反射型 XSS 的数据流向是：`浏览器 -> 后端 -> 浏览器`
### 1.2 存储型 XSS
存储型XSS,顾名思义就是将恶意代码存储到数据库中，只要访问页面，恶意代码即可执

例如：访问某黑客写下的一篇含有恶意JavaScript代码的博客文章，黑客把恶意脚本保存到服务端。

存储行 XSS 的数据流向是： `浏览器 -> 后端 -> 数据库 -> 后端 -> 浏览器`

### 1.3 DOM型 XSS
从效果上来说，也是"反射型XSS"，单独划分出来，是因为其形成是通过修改页面的`DOM节点`形成的XSS。

例如：通过修改DOM节点上的绑定方法，用户无意间通过点击、输入等行为执行这些方法获取到用户的相关信息

可以触发DOM XSS的属性有：
+ document.referer属性
+ window.name属性
+ location属性
+ innerHTML属性
+ documen.write属性等
DOM XSS并没有经过服务端和数据库，只在浏览器前端，通过DOM的操作执行恶意脚本。因此DOM XSS的数据流如下：`URL -> 浏览器`

## 二、如何去检测是否存在XSS
一般方法是，用户可以在有关键字输入搜索的地方输入****后点击搜索，若弹框出现展示123，说明存在XSS漏洞，这就说明前端并没有对用户输入的内容过滤处理。

## 三、 XSS的攻击方式
### 3.1 Cookie劫持
通过伪装一些`图片和按钮`等，诱使用户对其操作，使网页执行了攻击者的恶意脚本，使攻击者能够获取当前用户的Cookie信息

### 3.2 构造GET和POST请求
若某攻击者想删除某网站的一篇文章，首先获得当前文章的id，然后通过使用脚本`插入图片`发送一个`GET请求`，或`构造表单`，`XMLHTTPRequest`发送`POST请求`以达到删除该文章的目的

### 3.3 XSS钓鱼
`钓鱼`这个词一般认识是起源于`社会工程学`，黑客使用这个这门学科的理念思想，在未授权不知情的情况下诱骗用户，并得到对方对方的姓名、年龄、邮箱账号、甚至是银行卡密码等私人信息。

比如："某用户在某网站（已被攻击）上操作黑客伪造的一个登录框，当用户在登录框中输入了用户名（这里可能是身份证号等）和密码之后，将其信息上传至黑客的服务器上（该用户的信息就已经从该网站泄漏）"
### 3.4 获取用户真实的IP地址
通过第三方软件获取，比如客户端安装了Java环境（JRE），则可通过调用`Java Applet`的接口获取客户端本地的IP地址

## 四、 防御方法
XSS 攻击有两大要素：
1. 攻击者提交恶意代码。
2. 浏览器执行恶意代码。

XSS产生的原因呢？是由于输入数据的不可控，未对数据进行过滤。 那么我们防御XSS要从以下几个方面着手

+ 输入校验：长度限制、值类型是否正确、是否包含特殊字符（<>”等）、是否包含alert、onclick、script等关键字。
+ 输出编码：根据输出的位置进行相应的编码，如HTML编码、JavaScript编码、URL编码。原则是该数据不要超出自己所在的区域，也不要被当做指令执行。
+ 考虑set-cookie中设置http-only,避免cookie盗用。