import { defineStore } from 'pinia';
import { ref } from 'vue';

// 组件中使用state.count封装
export const useCount = defineStore('counter', () => {
  const count = ref(0);
  const countAdd = () => {
    count.value++;
  };
  return {
    count,
    countAdd,
  };
});
