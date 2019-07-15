# VueQunaer

Vue2.5开发去哪儿核心网页(课程项目)

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