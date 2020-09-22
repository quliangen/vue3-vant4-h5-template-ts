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
import { defineComponent } from 'vue';
import { count } from '@/store/useState/count';
import { useRoute } from 'vue-router';
export default defineComponent({
  setup() {
    const route = useRoute();
    console.log('Router with Composition API demo: ', route);
    // 详见文档：https://next.router.vuejs.org/guide/advanced/composition-api.html#accessing-the-router-and-current-route-inside-setup
    return {
      ...count(),
    };
  },
});
</script>

<style scoped></style>
