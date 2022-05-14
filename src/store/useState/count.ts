// 组件中使用state.count封装

import { useStore } from 'vuex';
// 状态接口
interface State {
  count: number;
}
// Count接口
interface Count {
  state: State;
  countAdd: () => void;
}
// use
export function useCount(): Count {
  const store = useStore();
  const state = store.state;
  const countAdd = () => {
    store.commit('COUNT_ADD');
  };
  return {
    state,
    countAdd,
  };
}
