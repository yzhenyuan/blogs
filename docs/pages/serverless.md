# serverLess
`serverLess` 是一种执行模型`（execution model）`。

在这种模型中，云服务商负责通过动态地分配资源来执行一段代码。云服务商仅仅收取执行这段代码所需要资源的费用。代码通常会被运行在一个无状态的容器内，并且可被多种事件触发（http 请求、数据库事件、监控报警、文件上传、定时任务……）。代码常常会以函数（function）的形式被上传到云服务商以供执行，因此`Serverless`也会被称作`Functions as a Service` 或者 `FaaS`。

+ **BaaS**: Backend as a Service，这里的Backend可以指代任何第三方提供的应用和服务，比如提供云数据库服务的Firebase和Parse，提供统一用户身份验证服务的Auth0和Amazon Cognito等。
+ **FaaS**: Functions as a Service，应用以函数的形式存在，并由第三方云平台托管运行，比如之前提到的AWS Lambda，Google Cloud Functions等。
  
## 使用