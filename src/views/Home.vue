<template lang="pug">
.home
  img(alt="Vue logo" src="../assets/logo.png")
  div
    Button(size="mini")  vantui按需引入
    Button(type="primary" size="mini") 主要按钮
    Button(type="primary" size="mini") 成功按钮
  div
    span Pinia demo
    Button(type="success" size="mini" @click="countAdd") toRefs 解构 pinia ：count++ {{ count }}
    Button(type="success" size="mini" @click="counter.countAdd") 未解构 count++ {{ counter.count }}
  div
    span State demo
    Button(type="primary" size="mini" @click="addTest") 组件内部 state++ {{ test }}
  HelloWorld(msg="Hello Vue3!" v-model:title="title")
  div 
    span 父组件 v-model:title 示例：{{ title }}
</template>

<script lang="ts" setup>
import { Button } from 'vant';
import { ref, toRefs } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { useCount } from '@/stores/useCount';
// tips: pinia 解构丢失响应性，可使用 toRefs包裹后解构。
const { count, countAdd } = toRefs(useCount());
const counter = useCount();
const test = ref(0);
const title = ref('');

const addTest = () => {
  test.value++;
};
</script>
