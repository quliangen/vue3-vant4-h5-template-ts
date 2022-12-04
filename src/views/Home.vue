<script lang="ts" setup>
import { Button } from 'vant';
import { ref, toRefs } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { useCount } from '@/stores/useCount';
// tips: pinia 解构丢失响应性，可使用 toRefs包裹后解构。
const { count, countAdd } = toRefs(useCount());
const counter = useCount();
const test = ref(0);
const title = ref('');
const name = ref('');

const addTest = () => {
  test.value++;
};
</script>
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <van-button type="success" size="mini">按钮自动导入</van-button>
      <Button type="primary" size="mini">组件按需导入</Button>
    </div>
    <div>
      <span>Pinia demo：</span>
      <Button type="success" size="mini" @click="countAdd">toRefs 解构 pinia ：count++ {{ count }}</Button>
      <Button type="success" size="mini" @click="counter.countAdd">未解构 count++ {{ counter.count }}</Button>
    </div>
    <div>
      <span>组件 State demo</span>
      <Button type="primary" size="mini" @click="addTest">组件内部 state++ {{ test }}</Button>
    </div>
    <HelloWorld msg="Hello Vue3!" v-model:title="title" v-model:name="name" />
    <div>父组件 v-model:title 示例：{{ title }}</div>
    <div>父组件 v-model:name 示例：{{ name }}</div>
  </div>
</template>
