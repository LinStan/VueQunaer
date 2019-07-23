# VueQunaer

Vue2.5开发去哪儿核心网页(首页，城市选择，详情页)√

* 第三方插件：
  * Bmap
  * vue-awesome-swiper
  * better-scroll
  * axios

启动项目 npm dev run

## 第一次提交

完成header  
了解stylus格式的css写法  
了解iconfont的使用  

## 第二次提交

完成首页轮播图  
使用第三方插件 vue-awesome-swiper  
使用css实现图片宽度高度成固定比例：
>一个元素的 padding，如果值是一个百分比，那这个百分比是相对于其父元素的宽度而言的，即使对于 padding-bottom 和 padding-top 也是如此。  
>在计算 Overflow 时，是将元素的内容区域（即 width / height 对应的区域）和 Padding 区域一起计算的。换句话说，即使将元素的 overflow 设置为 hidden，“溢出”到 Padding 区域的内容也会照常显示。  
>综上两条所述，我们可以使用 padding-bottom 来代替 height 来实现高度与宽度成比例的效果。同时将其 height 设置为 0 以使元素的“高度”等于 padding-bottom 的值。下面代码就是一个宽高比为2:1的div

```javascript
overflow:hidden;
height: 0;
padding-bottom: 50%;
```

## 第三次提交

完成图标的布局编写  
图标图片直接从官网获取  
编写数据分页算法  
可以在保持scoped修饰符的情况下实现 vue中的css样式穿透 (>>>)  
操作css方法封装和调用

```javascript
// 使得文本过长时出现省略号
  overflow: hidden
  white-space: nowrap
  text-overflow: ellipsis
```

## 第四次提交

修改了Icon组件中之前由于样式编写错误导致的多个轮播组件同时占据空间的问题

```javascript
.icons >>> .swiper-container {
  height: 0;
  height: 100%;//之前写成100%就会将未轮播到的swiper标签的位置也空出来
  padding-bottom: 50%;
}
```

使用基本指令完成推荐景点功能  
文本过长省略号不显示的问题可以通过设置min-width:0解决

## 第五次提交

完成周末去哪儿模块，首页基本布局完成 实现过程是简单的指令应用

## 第六次提交

将数据改为由axios获取  
配置proxy路径请求映射  /config/index.js/proxyTable  
将之前HOME组件下的数据都统一在Home进行分发，练习组件传值  
注意一下 由于icon需要进行分页操作，因此如果立即创建swiper会导致创建一个空的swiper 可以通过v-if来限制 

## 第七次提交

利用百度云api完成当前城市定位以及城市选择页面的顶部栏

## 第八次提交

完成city页面布局实现  
进入city组件自动定位当前城市  
基于better-scroll实现滑动  

## 第九次提交

v-for循环Object需要用key做key而不是index  
axios获取cities数据并进行渲染  
使用props emit 实现兄弟组件传值  
完成根据字母定位列表位置以及字母表拖动事件  应用节流函数  
应用watch监听  

## 第十次提交

基于watch完成根据拼音和文字匹配搜索功能实现  
添加节流函数减少计算开支  

## 第十一次提交

通过vuex完成首页和城市选择页面的数据共享

>Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）通过在根实例中注册 store 选项，该store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到。

通过vuex 将定位获得的city更新到state  
并且点击city列表和搜索结果的列表也会更新首页城市  
点击城市后返回首页

## 第十二次提交

应用localStorage  注意一下 localstorage最好用try catch包裹一下 防止浏览器报错  
mapState, mapActions, mapMutations 了解这三个指令的应用  
应用keep-alive 减少ajax请求  
城市切换时首页内容也做一个替换 json数据修改太庞大,未做修改,实际请求效果可在chrome调试的network中查看 xhr请求  

## 第十三次提交

详情页的基本布局  
背景渐变的css写法  
background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));  

## 第十四次提交

完成点击detailBanner 出现的可翻看画廊组件布局以及逻辑实现  
注意一下画廊组件的CSS写法  由于swiper内置css有overflow hidden的属性,需要写一个css穿透来修改该属性为inherit  
完成Detail中的Header栏随着滑动渐隐并变换  
注意 滚动监听事件的解绑  通过activated和deactivated两个生命钩子函数实现  
由于15次提交改动了detail不参与keepalive 因此改用mounted和unmounted实现  

## 第十五次提交

练习递归组件的使用 组件可以直接通过标签调用自身 注意租价内数据,不要形成死循环  
axios获取detail组件内容  
处理进入不同详情页重新进行Ajax请求  通过exclude实现

## 第十六次提交

给Gallary添加了一个简单的动画效果  
应用插槽slot和vue动画v-enter, v-leave-to | v-enter-active, v-leave-active  

## 最终提交

真机测试的时候发现点击事件在手机上无效，经检查发现是better-scroll引起的  
其默认阻止touch事件，需要加上配置即可

```javascript
this.scroll=new Bscroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true })
```
