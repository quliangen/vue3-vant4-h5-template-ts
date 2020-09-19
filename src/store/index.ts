// 全局store demo
import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 1,
  },
  mutations: {
    COUNT_ADD(state) {
      state.count++;
    },
  },
  actions: {},
  modules: {},
});
