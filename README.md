# VueQunaer

Vue2.5开发去哪儿核心网页(课程项目)

## 第一次提交

完成header  
了解stylus格式的css写法  
了解iconfont的使用  

## 第二次提交

完成首页轮播图  
使用第三方插件 vue-awesome-swiper  

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
