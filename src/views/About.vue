<template lang="pug">
.about
  h1 This is an about page
  div
    span Pinia demo 来自Home的count
    van-button(type="danger" size="mini" @click="countAdd") count++ {{ count }}
  div
    span route 信息：看控制台
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useCount } from '@/stores/useCount';
import { useRoute } from 'vue-router';
import { login } from '@/api/index';
const { count, countAdd } = useCount();
const route = useRoute();
console.log('Router with Composition API demo: ', route);
// 详见文档：https://next.router.vuejs.org/guide/advanced/composition-api.html#accessing-the-router-and-current-route-inside-setup

onMounted(() => {
  // axios请求demo：
  login({
    name: 'admin',
    password: '123456',
  }).then();
});
</script>

<style scoped></style>
