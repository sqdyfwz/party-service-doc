# 项目结构

```
elder-university:.
│  .browserslistrc		标识浏览器可用的系统版本
│  .env.development	开发环境配置
│  .env.production		生产环境配置
│  .env.test		测试环境配置
│  .eslintrc.js		代码校验规则
│  babel.config.js		代码转义规则
│  commitlint.config.js	代码提交规则
│  jsconfig.json		本地JS文件配置
│  package.json		项目所依赖的第三方包
│  postcss.config.js		postcss配置
│  README.md		项目简介
│  vue.config.js		webpack与vue-cli配置      
├─dist			构建后生成的目录           
├─mock			mock数据目录
│  │  index.js	
│  │  mock-server.js		mock服务器入口
│  ├─student		学生端mock数据   
│  └─teacher		教师端mock数据        
├─public			公共资源
└─src			项目源码入口
    │  settings.js		全局配置文件
    ├─api			接口请求
    │  │  healthyRequest.js	养生模块接口
    │  ├─student		学生端接口      
    │  └─teacher		教师端接口        	
    ├─assets		静态资源目录  
    ├─components		全局组件目录          
    ├─directive		全局指令目录         
    ├─filter			全局过滤器目录    
    ├─mixins		全局混入代码目录   
    ├─pages
    │  ├─student		学生端相关代码入口
    │  │  │  
    │  │  ├─components	学生端组件         
    │  │  ├─router		学生端路由     
    │  │  ├─store		学生端Vuex仓库         
    │  │  └─views		学生端页面
    │  │              
    │  └─teacher		教师端相关代码入口
    │      │  
    │      ├─components	教师端组件       
    │      ├─router		教师端路由      
    │      ├─store		教师端Vuex仓库       
    │      └─views		教师端页面            
    ├─scss			css预处理器配置
    └─utils			工具函数
```