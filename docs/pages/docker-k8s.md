# k8s
K8S，就是基于容器的集群管理平台，它的全称，是kubernetes。

在Docker容器技术被炒得热火朝天之时，大家发现，如果想要将Docker应用于具体的业务实现，是存在困难的——编排、管理和调度等各个方面，都不容易。于是，人们迫切需要一套管理系统，对Docker及容器进行更高级更灵活的管理。

K8S的创造者，是众人皆知的行业巨头——Google。然而，K8S并不是一件全新的发明。它的前身，是Google自己捣鼓了十多年的Borg系统。K8S是2014年6月由Google公司正式公布出来并宣布开源的。同年7月，微软、Red Hat、IBM、Docker、CoreOS、 Mesosphere和Saltstack 等公司，相继加入K8S。

一个K8S系统，通常称为一个K8S集群（Cluster）。

这个集群主要包括两个部分：

+ 一个Master节点（主节点）
+ 一群Node节点（计算节点）

Master节点主要还是负责管理和控制。Node节点是工作负载节点，里面是具体的容器
#### Master节点
![](https://pic2.zhimg.com/80/v2-7fa63b292368c8f21bd4582861a6983d_1440w.jpg)
+ Master节点包括API Server、Scheduler、Controller manager、etcd
+ Scheduler负责对集群内部的资源进行调度，相当于“调度室”。
+ Controller manager负责管理控制器，相当于“大总管”。
#### Node节点
![](https://pic4.zhimg.com/80/v2-8cb338cd8923fa0e6857f45facc8f00f_1440w.jpg)
+ Node节点包括Docker、kubelet、kube-proxy、Fluentd、kube-dns（可选），还有就是Pod
+ Pod是Kubernetes最基本的操作单元。一个Pod代表着集群中运行的一个进程，它内部封装了一个或多个紧密相关的容器。除了Pod之外，K8S还有一个Service的概念，一个Service可以看作一组提供相同服务的Pod的对外访问接口
+ Docker，不用说了，创建容器的
+ Kubelet，主要负责监视指派到它所在Node上的Pod，包括创建、修改、监控、删除等
+ Kube-proxy，主要负责为Pod对象提供代理
+ Fluentd，主要负责日志收集、存储与查询

#### 利用 Kubernetes，您能够达成以下目标
+ 跨多台主机进行容器编排。
+ 更加充分地利用硬件，最大程度获取运行企业应用所需的资源。
+ 有效管控应用部署和更新，并实现自动化操作。
+ 挂载和增加存储，用于运行有状态的应用。
+ 快速、按需扩展容器化应用及其资源。
+ 对服务进行声明式管理，保证所部署的应用始终按照部署的方式运行。
+ 利用自动布局、自动重启、自动复制以及自动扩展功能，对应用实施状况检查和自我修复。