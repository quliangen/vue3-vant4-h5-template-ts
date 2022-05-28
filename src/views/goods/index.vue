<template lang="pug">
.goods
  Swipe.goods-swipe(:autoplay="3000")
    SwipeItem(v-for="thumb in goods.thumb" :key="thumb")
      img(:src="thumb")
  CellGroup
    Cell
      template(#title)
        .goods-title {{ goods.title }}
        .goods-price {{ formatPrice() }}
    .goods-express
      Col(span="10") 运费：{{ goods.express }}
      Col(span="14") 剩余：{{ goods.remain }}
  CellGroup.goods-cell-group
    Cell(value="进入店铺" icon="shop-o" is-link @click="sorry")
      template(#title)
        span.van-cell-text 有赞的店
        Tag.goods-tag(type="danger") 官方
    Cell(title="线下门店" icon="location-o" is-link @click="sorry")

  CellGroup.goods-cell-group
    Cell(title="查看商品详情" is-link @click="sorry")

  ActionBar
    ActionBarIcon(icon="chat-o" @click="sorry") 客服
    ActionBarIcon(icon="cart-o" @click="onClickCart") 购物车
    ActionBarButton(type="warning" @click="sorry") 加入购物车
    ActionBarButton(type="danger" @click="sorry") 立即购买
</template>

<script lang="ts" setup>
import { Tag, Col, Cell, CellGroup, Swipe, SwipeItem, ActionBar, ActionBarIcon, ActionBarButton } from 'vant';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

interface Goods {
  title: string;
  price: number;
  express: string;
  remain: number;
  thumb: string[];
}

const router = useRouter();
const goods = ref({} as Goods);
const formatPrice = () => {
  return '¥' + (goods.value.price / 100).toFixed(2);
};
const onClickCart = () => {
  router.push('Cart');
};

const sorry = () => {
  // $toast('暂无后续逻辑~');
};
goods.value = {
  title: '美国伽力果（约680g/3个）',
  price: 2680,
  express: '免运费',
  remain: 19,
  thumb: [
    'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
    'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg',
  ],
};
</script>

<style lang="less">
.goods {
  padding-bottom: 50px;

  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }

  &-title {
    font-size: 16px;
  }

  &-price {
    color: #f44;
  }

  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }

  &-cell-group {
    margin: 15px 0;

    .van-cell__value {
      color: #999;
    }
  }

  &-tag {
    margin-left: 5px;
  }
}
</style>
