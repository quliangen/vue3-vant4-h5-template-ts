<template lang="pug">
.hello
  h1 {{ msg }}
  p
    | Vue3 + Pinia + Vant3 + Pug + ViewPort + TS
    br
    a(href="https://cli.vuejs.org" target="_blank" rel="noopener") vue-cli documentation
    br
    span 组件多 v-model title
    input(type="text" :value="title" @input="emits('update:title', $event.target?.value)")
    br
    span 组件多 v-model name
    input(type="text" :value="name" @input="emits('update:name', $event.target?.value)")
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
defineProps(['msg', 'title', 'name']);
const emits = defineEmits(['update:title', 'update:name']);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
