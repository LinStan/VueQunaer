<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul v-if="this.recommendList.length">
      <!-- 动态绑定路由跳转 tag修改routerlink的类型 -->
      <!-- :to="'./detail' + item.id" -->
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <div class="item-img-wrapper">
          <img :src="item.imgurl" :alt="item.id" class="item-img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: { recommendList: Array },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/varibles.styl';

.recommend-title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: $titleBgColor;
  text-indent: 0.2rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }

    .item-button {
      padding: 0.05rem;
      border-radius: 0.06rem;
      margin-top: 0.2rem;
      background: #ff9300;
      color: #fff;
    }
  }
}
</style>
