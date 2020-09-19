<template lang="pug">
.about
  h1 This is an about page
  div
    span VUEX4 demo 来自Home的count
    van-button(type="danger" size="mini" @click="countAdd") count++ {{ state.count }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { count } from '@/store/useState/count';

export default defineComponent({
  setup() {
    return {
      ...count(),
    };
  },
});
</script>

<style scoped></style>
