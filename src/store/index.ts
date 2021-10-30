// 全局store demo
import { createStore } from 'vuex';

export interface State {
  count: number;
}
interface Opts {
  state: State;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}
const opts: Opts = {
  state: {
    count: 1,
  },
  mutations: {
    COUNT_ADD(state: State) {
      state.count++;
    },
  },
  actions: {},
  modules: {},
};
export default createStore(opts);
