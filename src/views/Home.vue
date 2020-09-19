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
  HelloWorld(msg="Welcome to Your Vue.js + TypeScript App")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { count } from '@/store/useState/count';
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    return {
      ...count(),
    };
  },
});
</script>
