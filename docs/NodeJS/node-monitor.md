# Node 监控 & 优化

## 监控分类

主要分为：

- 业务逻辑的监控
- 硬件的监控

## 性能监控

1. 日志监控：可以实现`PV/UV`的监控，预知访问高峰
2. 响应时间：可以在 Nginx 一类的反向代理 或者 自行产生的访问日志来监控
3. 进程监控：一般是 检查操作系统中运行的应用进程数，例如：多进程架构的 web 应用
4. 磁盘监控：监控磁盘的用量
5. 内存监控：监控服务器的内存状况可以检查应用中是否存在内存泄漏
6. CPU 监控
7. CPU 负载监控：监控 CPU 在单位时间内 正在使用和等待使用的平均任务数
8. IO 负载：主要指磁盘 IO，磁盘上的读写情况
9. 网络监控：流入和流出 流量
10. 应用状态监控
11. DNS 监控

## 性能优化

-

### web 应用层的优化

1. 动静分离
   1. node 处理静态文件的能力并不突出，可以传到专业的静态文件服务器上（Nginx、DNA）
   2. node 只处理动态请求
   3. 动静分离后可以对不同的域名消除不必要的 cookie
2. 利用缓存
   1. 提升性能不外乎：① 提升服务的速度，② 避免不必要的计算
   2. 能消除同步 IO 带来的时间浪费
3. 多进程架构：利用多核 CPU，如：PM2
4. 读写分离：主要针对数据库，数据库中 读 的速度要大于 写，有些数据库为了保证数据的一致性，会进行锁表操作，影响到读取速度

### 代码层的优化

1. 使用最新版的 node，① v8 的版本更新优化，② node 内部代码的哟花
2. 使用 fast-json-stringify 加速 json 序列化
3. 正确编写异步代码

## 错误监控

- 错误类型
  - 语法或运行时错误
  - 访问不存在或没有权限的文件
  - 除了 js 错误和系统错误，也可以自定义错误
- 监控异常日志
