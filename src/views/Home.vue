<template lang="pug">
.home
  img(alt="Vue logo" src="../assets/logo.png")
  div
    van-button vantui按需引入
    van-button(type="primary") 主要按钮
    van-button(type="success") 成功按钮
  div
    span VUEX4 demo
    van-button(type="danger" size="mini" @click="countAdd") count++ {{ state.count }}
  HelloWorld(msg="Hello Vue3!")
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { useCount } from '@/store/useState/count';
const { state, countAdd } = useCount();
</script>
