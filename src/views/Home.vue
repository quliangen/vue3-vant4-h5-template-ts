<template lang="pug">
.home
  img(alt="Vue logo" src="../assets/logo.png")
  div
    van-button vantui按需引入
    van-button(type="primary") 主要按钮
    van-button(type="success") 成功按钮
  HelloWorld(msg="Welcome to Your Vue.js + TypeScript App")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
});
</script>
