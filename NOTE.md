# 网络安全威胁感知系统NTDS

## [环境搭建]

> 使用Vue CLI2.x构建项目

`vue init webpack yt_admin`

```
? Project name yt_admin
? Project description A Vue.js project
? Author Bob
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) npm

   vue-cli · Generated "yt_admin".

# Installing project dependencies ...

# Project initialization finished!
# ========================

To get started:

  cd yt_admin
  npm run dev

Documentation can be found at https://vuejs-templates.github.io/webpack
```

## 初始化项目目录

```
├─.babelrc
├─.editorconfig
├─.eslintignore
├─.eslintrc.js
├─.gitignore
├─.postcssrc.js
├─index.html
├─NOTE.md
├─package-lock.json
├─package.json
├─README.md
├─static
|   └.gitkeep
├─src
|  ├─App.vue
|  ├─main.js
|  ├─router
|  |   └index.js
|  ├─components
|  |     └HelloWorld.vue
|  ├─assets
|  |   └logo.png
├─config
|   ├─dev.env.js
|   ├─index.js     // proxyTable配置，解决跨域 
|   └prod.env.js
├─build
|   ├─build.js
|   ├─check-versions.js
|   ├─logo.png
|   ├─utils.js
|   ├─vue-loader.conf.js
|   ├─webpack.base.conf.js
|   ├─webpack.dev.conf.js
|   └webpack.prod.conf.js
```

## 上线项目目录
```
├─.babelrc
├─.editorconfig
├─.eslintignore
├─.eslintrc.js
├─.gitignore
├─.postcssrc.js
├─anheng.ico
├─index.html
├─package-lock.json
├─package.json
├─README.md
├─result.txt
├─static
|   ├─.gitkeep
|   ├─anheng.ico
|   ├─utils
|   |   ├─bmap.js
|   |   ├─echarts.4.0.js
|   |   └─echarts.js
|   ├─img
|   |  ├─anheng_logo.png
|   |  ├─bj1.d61f284.jpg
|   |  ├─bj3.a30320c.jpg
|   |  ├─face_0.png
|   |  ├─failed.png
|   |  ├─gongansansuo_logo.png
|   |  ├─go_home.png
|   |  ├─guanan_logo.jpg
|   |  ├─guanan_logo.png
|   |  ├─hongji_logo.png
|   |  ├─kejibg.7834c79.png
|   |  ├─login_bg.ffb4f0f.png
|   |  ├─notStarted.png
|   |  ├─processing.png
|   |  ├─route1.42465da.png
|   |  ├─success.png
|   |  ├─three_attack.a654b25.png
|   |  ├─tianyiyun_logo.png
|   |  ├─title_logo.ffa4ac6.png
|   |  ├─top_bg.943e252.jpg
|   |  ├─top_big.c1b69a3.jpg
|   |  ├─top_title.2d4822b.png
|   |  ├─totol_bg.71795b6.png
|   |  ├─wangqiang_logo.png
|   |  ├─xintong_logo.png
|   |  ├─xxaq_logo.png
|   |  ├─yingtai_logo.jpg
|   |  ├─yingtai_logo.png
|   |  ├─zhongren_logo.png
|   |  ├─zhongtang_logo.png
|   |  ├─zh_logo.png
|   |  ├─icon
|   |  |  ├─alert_manage.png
|   |  |  ├─asset_scan.png
|   |  |  ├─export.png
|   |  |  ├─log_manage.png
|   |  |  ├─network_manage.png
|   |  |  ├─poly_manage.png
|   |  |  ├─risk_asset.png
|   |  |  ├─risk_check.png
|   |  |  ├─task_manage.png
|   |  |  └user_manage.png
|   |  ├─events
|   |  |   ├─DDOS攻击.png
|   |  |   ├─僵尸网络.png
|   |  |   ├─其他威胁.png
|   |  |   ├─攻击事件.png
|   |  |   ├─数据泄漏.png
|   |  |   ├─漏洞利用.png
|   |  |   ├─网站后门.png
|   |  |   ├─网络欺诈.png
|   |  |   ├─网络盗号.png
|   |  |   ├─网页篡改.png
|   |  |   ├─设备安全.png
|   |  |   └远程控制.png
|   |  ├─asset
|   |  |   ├─all.png
|   |  |   ├─ap.png
|   |  |   ├─app.png
|   |  |   ├─asset.png
|   |  |   ├─bridge.png
|   |  |   ├─broadband router.png
|   |  |   ├─camera.png
|   |  |   ├─fall_icon.png
|   |  |   ├─fax.png
|   |  |   ├─firewall.png
|   |  |   ├─game console.png
|   |  |   ├─gateway.png
|   |  |   ├─general purpose.png
|   |  |   ├─hub.png
|   |  |   ├─load balancer.png
|   |  |   ├─media device.png
|   |  |   ├─modem.png
|   |  |   ├─nas.png
|   |  |   ├─other.png
|   |  |   ├─pbx.png
|   |  |   ├─pda.png
|   |  |   ├─phone.png
|   |  |   ├─port.png
|   |  |   ├─power-device.png
|   |  |   ├─printer-server.png
|   |  |   ├─printer.png
|   |  |   ├─proxy server.png
|   |  |   ├─remote management.png
|   |  |   ├─risk_icon.png
|   |  |   ├─router.png
|   |  |   ├─safe_icon.png
|   |  |   ├─security-misc.png
|   |  |   ├─specialized.png
|   |  |   ├─storage-misc.png
|   |  |   ├─switch.png
|   |  |   ├─telecom-misc.png
|   |  |   ├─terminal server.png
|   |  |   ├─terminal.png
|   |  |   ├─total_asset.png
|   |  |   ├─voip adapter.png
|   |  |   ├─voip phone.png
|   |  |   ├─voip.png
|   |  |   ├─vpn.png
|   |  |   ├─vul.png
|   |  |   ├─waf.png
|   |  |   ├─wap.png
|   |  |   ├─weak_icon.png
|   |  |   └webcam.png
├─src
|  ├─App.vue
|  ├─main.js
|  ├─router                                       // 路由
|  |   └index.js
|  ├─js
|  | └utils.js                                    // 加密解密
|  ├─iconfont                                     // 字体图标
|  |    ├─iconfont.css
|  |    ├─iconfont.eot
|  |    ├─iconfont.js
|  |    ├─iconfont.svg
|  |    ├─iconfont.ttf
|  |    └iconfont.woff
|  ├─components
|  |     ├─eventManage.vue                           // 【威胁事件】
|  |     ├─login.vue                                 // 登录
|  |     ├─statisticalReport.vue                     // 【统计报告】
|  |     ├─threatSituation.vue                       // 【威胁态势】
|  |     ├─system                                    // 【系统管理】
|  |     |   ├─dangerManage.vue                      // 告警管理（威胁检测）
|  |     |   ├─lineConfig.vue                        // 网络管理（控制中心）
|  |     |   ├─probeManage.vue                       // 分布设置（威胁检测）
|  |     |   ├─userManage.vue                        // 用户管理（控制中心）
|  |     |   ├─tree_pro                              // （分布设置子组件）
|  |     |   |    ├─OrganizationChartContainer.vue
|  |     |   |    └OrganizationChartNode.vue
|  |     |   ├─systemInformation                    // 【控制中心】
|  |     |   |         ├─diskMainten.vue
|  |     |   |         ├─localMaintenance.vue
|  |     |   |         ├─operationLog.vue
|  |     |   |         ├─systemInformation.vue
|  |     |   |         ├─systemLog.vue
|  |     |   |         ├─systemRight.vue
|  |     |   |         └systemSafety.vue
|  |     |   ├─probeContent
|  |     |   |      ├─probeContChild.vue
|  |     |   |      └probeContFater.vue
|  |     |   ├─equipment
|  |     |   |     ├─equipment.vue        // 全局设置
|  |     |   |     ├─firewall.vue         // 防火墙设置
|  |     |   |     └loophole.vue          // 漏洞
|  |     ├─home                           // 【监测概况】 （首页）
|  |     |  ├─attack.vue
|  |     |  ├─home.vue
|  |     |  ├─homeContent.vue
|  |     |  ├─lineChart.vue
|  |     |  ├─tableItemo.vue
|  |     |  ├─tableItemt.vue
|  |     |  ├─thingCount.vue
|  |     |  ├─threaten.vue
|  |     |  ├─trafficTrend.vue
|  |     |  └userCenter.vue
|  |     ├─detection                       // 【检测策略】
|  |     |     ├─activeTest.vue            // 主动检测
|  |     |     ├─agreementRename.vue       // 协议更名
|  |     |     ├─customResponse.vue        // 定制响应
|  |     |     ├─detailRuleConfig.vue      // 策略详情 （ruleConfig子组件）
|  |     |     ├─exeManage.vue            // 例外管理
|  |     |     ├─filterManage.vue         // 过滤管理
|  |     |     ├─IPrange.vue              // IP地址信息
|  |     |     ├─keyFollow.vue            // 重点关注
|  |     |     ├─ruleConfig.vue           // 规则配置
|  |     |     ├─rule_search.vue          // 搜索弹框（ruleConfig子组件）
|  |     |     ├─testNetwork.vue          // 监测网段
|  |     |     ├─userRules.vue            // 用户规则
|  |     |     └whiteData.vue             // 白名单
|  |     ├─assets                         // 【资产管理】
|  |     |   ├─assetAlert.vue
|  |     |   ├─assetDetail.vue            // 告警管理
|  |     |   ├─assetsOverview.vue         // 资产概况
|  |     |   ├─exportManage.vue
|  |     |   ├─taskDetail.vue
|  |     |   ├─taskManage.vue             // 任务管理
|  |     |   ├─userManage
|  |     |   |     ├─userApproval.vue
|  |     |   |     └userList.vue
|  |     |   ├─systemSeting               // 【系统设置】
|  |     |   |      └emailSet.vue         // 邮箱设置
|  |     |   ├─riskAsset                  // 【风险资产】
|  |     |   |     ├─lostAsset.vue        // 失陷资产
|  |     |   |     └weakAsset.vue         // 弱点资产
|  |     |   ├─reportCenter
|  |     |   |      └basicReport.vue
|  |     |   ├─logManage                        // 【日志管理】
|  |     |   |     ├─loginLog.vue               // 登录日志
|  |     |   |     ├─operationLog.vue           // 操作日志
|  |     |   |     └systemLog.vue               // 系统日志
|  |     |   ├─detectStrategy                   // 【风险检测】
|  |     |   |       ├─detectCtrl.vue           // 检测控制
|  |     |   |       ├─detectPlugin.vue         // 检测插件
|  |     |   |       └riskWhiteList.vue         // 白名单
|  |     |   ├─collectStrategy                  // 【资产扫描】
|  |     |   |        ├─default_asset.vue       // 默认资产设置 
|  |     |   |        ├─fingerprintSet.vue      // 扫描指纹设置
|  |     |   |        ├─scanSettings.vue        // 常用端口设置
|  |     |   |        └scanSwitch.vue           // 扫描控制
|  |     |   ├─assetManage
|  |     |   |      ├─assetApproval.vue
|  |     |   |      ├─assetList.vue             // 资产列表
|  |     |   |      ├─assetSearch.vue
|  |     |   |      ├─computerManage.vue
|  |     |   |      ├─handoverApproval.vue
|  |     |   |      └machineManage.vue
|  |     |   ├─anomalyAnalysis
|  |     |   |        ├─analysisCtrl.vue
|  |     |   |        └analysisSet.vue
|  ├─assets
|  |   ├─bj1.jpg
|  |   ├─bj2.jpg
|  |   ├─bj3.jpg
|  |   ├─login_bg.png
|  |   ├─logo.jpg
|  |   ├─open_close.png
|  |   ├─title_logo.png
|  |   ├─top_bg.jpg
|  |   ├─top_big.jpg
|  |   ├─top_b_right.png
|  |   ├─threatSituation
|  |   |        ├─full_screen.png
|  |   |        ├─kejibg.png
|  |   |        ├─route1.png
|  |   |        ├─route2.png
|  |   |        ├─r_route.png
|  |   |        ├─small_screen.png
|  |   |        ├─three_attack.png
|  |   |        ├─top_title.png
|  |   |        └totol_bg.png
├─dist          // 打包文件
|  ├─index.html
|  ├─static
├─config
|   ├─dev.env.js
|   ├─index.js
|   └prod.env.js
├─build
|   ├─build.js
|   ├─check-versions.js
|   ├─logo.png
|   ├─utils.js
|   ├─vue-loader.conf.js
|   ├─webpack.base.conf.js
|   ├─webpack.dev.conf.js
|   └webpack.prod.conf.js
```

## 初始化项目 VS 上线项目

* 1. package.json
> 安装了element-ui、echarts、echarts-amap等插件

* 2. index.html
> 引入了高德地图api

* 3. static
> 静态资源文件夹，img图片，utils（bmap.js、echarts.4.0.js、echarts.js）

## [项目开发]

* 1. 首页布局

> 使用Element-UI的Container 布局容器

[https://element.eleme.cn/#/zh-CN/component/container](https://element.eleme.cn/#/zh-CN/component/container)

* 2. 样式调整

> 使用less

[https://www.cnblogs.com/qdwds/p/11516181.html](https://www.cnblogs.com/qdwds/p/11516181.html)

```
* 安装【npm install less less-loader --save】

* 在【build】文件下的【webpack.base.conf.js】文件中【rules】中加入
{ 
  test: /.less$/, 
  loader: 'style-loader!css-loader!less-loader'
}

* 在【style】标签里面写上【lang="less"】

* 【npm run dev】启动项目后，报错：

Module build failed: TypeError: loaderContext.getResolve is not a function
    at createWebpackLessPlugin (D:\Bob\yt_admin\node_modules\less-loader\dist\utils.js:36:33)
    at getLessOptions (D:\Bob\yt_admin\node_modules\less-loader\dist\utils.js:150:31)
    at Object.lessLoader (D:\Bob\yt_admin\node_modules\less-loader\dist\index.js:29:49)

 @ ./node_modules/vue-style-loader!./node_modules/css-loader?{"sourceMap":true}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-7ba5bd90","scoped":false,"hasInlineConfig":false}!./node_modules/less-loader/dist/cjs.js?{"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/App.vue 4:14-357 13:3-17:5 14:22-365
 @ ./src/App.vue
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://localhost:8080 webpack/hot/dev-server ./src/main.js

* 解决办法:
**卸载安装的高版本的less-loader，【npm uninstall less-loader】，安装指定低版本的less-loader【npm install less-loader@4.1.0 --save】
```

## 如何导出项目目录结构

* 1. 安装
`npm install treer -g`

* 2. 执行命令
`treer -e ./result.txt -i node_modules`

## 参考文档

[vue-cli2.0创建项目步骤](https://www.cnblogs.com/zhengyan/p/10772800.html)

[markdown如何写出项目目录结构](https://www.jianshu.com/p/e38a07f824a2)

## git 远程分支上传
```
git remote add origin https://github.com/bkr1987/yt-admin.git

git checkout -b ntds

git status

git add .

git commit -m "项目初始化"

git push

git push --set-upstream origin ntds
```