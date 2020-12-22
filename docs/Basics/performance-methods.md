# 方法

性能指标

1. apm ->index.js -> 执行 run(config) 
2. apm ->run.js 
   ```js
   1. checkBrowser() && checkConfig(config)
   检查 环境 和 参数
   2. 执行 函数
    setConstants(config);// constant包 添加默认环境，用于判断执行哪些服务（包括错误信息以及性能监控）
    setDefaultLogData(config); //logs 处理config 避免不必要的参数
    setSessionTraceId(); //utils 设置session vTraceAppSessionId 
    xhrInit(config);// 把XMLHttpRequest的原始属性重新绑定，以及监听 xhr 事件
    GFRun(config);// 往window.vfeTracker上面挂载了几个方法，用于外部调用
    performanceInit(config);// 执行performance监控函数
    errorInit(config);// 执行 错误监控函数
   ```
3. performance.js
   ```js
   1. 获取首绘时间 runLcp()//获取首绘时间
   2. 监听load//监控页面性能
   3. 判断执行PerformanceObserver或者load//监控资源性能
   ```

4. error.js
   ```js
    1. 执行 run()//window.addEventListener('error')监听js错误信息
    2. 执行 saveLogs()
   ```
5.  最终执行 doXhr() 发送错误信息到服务端