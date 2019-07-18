<template>
  <div>
    <div class="item" v-for="(item, index) of this.list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{ item.title }}
      </div>
      <div v-if="item.children" class="item-chilren">
        <li v-for="(inneritem, index) of item.children" :key="index">
          {{ inneritem.title }}
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  data () {
    return {
      list: [{
        'title': '成人票',
        'children': [{
          'title': '成人三馆联票',
          'children': [{
            'title': '成人三馆联票 - 某一连锁店销售'
          }]
        }, {
          'title': '成人五馆联票'
        }]
      }, {
        'title': '学生票'
      }, {
        'title': '儿童票'
      }, {
        'title': '特惠票'
      }, {
        'title': '学生票'
      }, {
        'title': '儿童票'
      }, {
        'title': '特惠票'
      }, {
        'title': '学生票'
      }, {
        'title': '儿童票'
      }, {
        'title': '特惠票'
      }, {
        'title': '学生票'
      }, {
        'title': '儿童票'
      }, {
        'title': '特惠票'
      }, {
        'title': '学生票'
      }, {
        'title': '儿童票'
      }, {
        'title': '特惠票'
      }, {
        'title': '特惠票'
      }, {
        'title': '学生票'
      }, {
        'title': '儿童票'
      }, {
        'title': '特惠票'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.item-title-icon {
  position: relative;
  left: 0.06rem;
  top: 0.06rem;
  display: inline-block;
  width: 0.36rem;
  height: 0.36rem;
  background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat; // s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
  margin-right: 0.1rem;
  background-size: 0.4rem 3rem;
}

.item-title {
  line-height: 0.8rem;
  font-size: 0.32rem;
  padding: 0 0.2rem;
}

.item-chilren {
  padding: 0 0.2rem;
}
</style>
