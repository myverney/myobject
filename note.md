### 简介
> Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目

可以适配移动端
说明：包含 html  css  js


1. 预处理脚本 （比css语法更高级的css语言） less  sass 
bootstrap的源码是（less,sass）开发的。

2. 一切都是 CSS 媒体查询（Media Query）的功劳。响应式的原理：媒体查询。

3. 学习bootstrap通过文档即可。

### 起步

1. 下载

开发当中：生产版本 

2. 文件结构

bootstrap/
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.css.map (是表示源代码和压缩代码之间的映射关系)
│   ├── bootstrap.min.css
│   ├── bootstrap-theme.css  (默认的主体是扁平化设计，如果加上了theme主体高光面)
│   ├── bootstrap-theme.css.map
│   └── bootstrap-theme.min.css
├── js/
│   ├── bootstrap.js
│   └── bootstrap.min.js
└── fonts/
    ├── glyphicons-halflings-regular.eot
    ├── glyphicons-halflings-regular.svg
    ├── glyphicons-halflings-regular.ttf
    ├── glyphicons-halflings-regular.woff
    └── glyphicons-halflings-regular.woff2
    
3. 基本模版

基于基本模版去开发页面

```html
<!--html5文档-->
<!DOCTYPE html>
<!--语言中文-->
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <!--意思：指定浏览器使用最新版本的内核来渲染页面  edge IE最高版本 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--视口：页面宽度和设备的宽度一样 默认的缩放比1.0  不予许用户缩放 -->
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <!--想优先解析上面标签-->
    <title>基本模版</title>
    <!--引入bootstrap的核心样式文件-->
    <!-- Bootstrap -->
    <link href="lib/bootstrap/css/bootstrap.css" rel="stylesheet">
    
    <!--
        html5shiv.js respond.js 帮助IE8（包含IE8）以下 去支持h5标签和媒体查询
        警告：不能在 file://预览页面   服务器下面 http://打开 
    -->
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    
    <!--条件注释-->
    <!--[if lt IE 9]>
      <script src="lib/html5shiv/html5shiv.min.js"></script>
      <script src="lib/respond/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <!--TODO-->

    <!--需要jquery 基于jquery的-->
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="lib/jquery/jquery.min.js"></script>
    <!--bootstrap的核心js文件-->
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
```


### css

1. Normalize.css  让浏览器表现一致 （重置样式的插件css）https://github.com/necolas/normalize.css/

比较像：reset.css  重置样式（让浏览器表现一致）

区别：在浏览器表现一致前提改的样式 （比如：在浏览器本就表现就一致，Normalize没有去修改，而reset去重置了样式）


2. container

3. 栅格系统
col-*-*

4. 响应式工具
hidden-*


