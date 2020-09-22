<template lang="pug">
.about
  h1 This is an about page
  div
    span VUEX4 demo 来自Home的count
    van-button(type="danger" size="mini" @click="countAdd") count++ {{ state.count }}
  div
    span route 信息：看控制台
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { count } from '@/store/useState/count';
import { useRoute } from 'vue-router';
import { login } from '@/api/index';

export default defineComponent({
  setup() {
    const route = useRoute();
    console.log('Router with Composition API demo: ', route);
    // 详见文档：https://next.router.vuejs.org/guide/advanced/composition-api.html#accessing-the-router-and-current-route-inside-setup

    onMounted(() => {
      // axios请求demo：
      login({
        name: 'admin',
        password: '123456',
      })
        .then()
        .catch(error => {
          console.log(error);
        });
    });
    return {
      ...count(),
    };
  },
});
</script>

<style scoped></style>
