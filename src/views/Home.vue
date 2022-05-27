<template lang="pug">
.home
  img(alt="Vue logo" src="../assets/logo.png")
  div
    van-button vantui按需引入
    van-button(type="primary") 主要按钮
    van-button(type="success") 成功按钮
  div
    span VUEX4 demo
    van-button(type="danger" size="mini" @click="counter.countAdd") count++ {{ counter.count }}
    van-button(type="danger" size="mini" @click="addTest") test++ {{ test }}
  HelloWorld(msg="Hello Vue3!")
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { useCount } from '@/stores/useCount';
// tips: pinia不能解构
const counter = useCount();
const test = ref(0);
const addTest = () => {
  test.value++;
};
</script>
