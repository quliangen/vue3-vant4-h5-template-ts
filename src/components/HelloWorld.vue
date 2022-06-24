<template lang="pug">
.hello
  h1 {{ msg }}
  p
    | Vue3 + Pinia + Vant3 + Pug + ViewPort + TS
    br
    a(href="https://cli.vuejs.org" target="_blank" rel="noopener") vue-cli documentation
    br
    span 组件内部输入
    input(type="text" :value="title" @input="$emit('update:title', $event.target?.value)")
</template>

<script lang="ts">
export default {
  props: {
    msg: String,
    title: String,
  },
  emits: ['update:title'],
};
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
