# Nexus

### why privite npm
>为了项目组内生态的建设，减少重复开发的问题，引入了私有的npm仓库。试想一下，当你仅需要开发一个组件，并发布这个组件到私有npm上，其他项目租成员都能享受到这个组件带来的便利。

### 如何查看线上仓库依赖包
+ [访问Nexus地址](http://all.bnuz.edu.cn:8606/#browse/browse)
+ 使用账号密码登录
+ 点击Browse
+ 点击zhsj-local-npm进入查看组内私有npm包
+ 点击zhsj-npm-group进入查看已缓存的包

### 如何使用
+ npm config set registry http://all.bnuz.edu.cn:8606/repository/zhsj-npm-group/ 将npm源指向私有仓库
+ npm install 你想要的依赖包

:::warning
值得注意的是我们registry指向的是group类型npm仓库，里面包含了blob类型（私有仓库），proxy类型（转发官方npm源）两个仓库，这可以方便我们安装私有仓库也方便我们加速安装包下载（原因是此处会做一个缓存）。但是我们使用npm publish时建议npm config set registry http://all.bnuz.edu.cn:8606/repository/zhsj-local-npm/zhsj-npm-group/  将私有仓库包发布到blob类型仓库
:::