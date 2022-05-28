<template lang="pug">
.home
  img(alt="Vue logo" src="../assets/logo.png")
  div
    van-button(size="mini")  vantui按需引入
    van-button(type="primary" size="mini") 主要按钮
    van-button(type="primary" size="mini") 成功按钮
  div
    span Pinia demo
    van-button(type="success" size="mini" @click="countAdd") toRefs 解构 pinia ：count++ {{ count }}
    van-button(type="success" size="mini" @click="counter.countAdd") 未解构 count++ {{ counter.count }}
  div
    span State demo
    van-button(type="primary" size="mini" @click="addTest") 组件内部 state++ {{ test }}
  HelloWorld(msg="Hello Vue3!")
</template>

<script lang="ts" setup>
import { ref, toRefs } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { useCount } from '@/stores/useCount';
// tips: pinia 解构丢失响应性，可使用 toRefs包裹后解构。
const { count, countAdd } = toRefs(useCount());
const counter = useCount();
const test = ref(0);
const addTest = () => {
  test.value++;
};
</script>
