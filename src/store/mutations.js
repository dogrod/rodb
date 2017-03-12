import Vue from 'vue';
import * as types from './types';

export default {
  [types.SET_ACTIVE_KEY](state, value) {
    Vue.set(state.Header, 'activeKey', value);
  },
};
