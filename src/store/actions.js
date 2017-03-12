import * as types from './types';

export default {
  handleHeaderClick({
    dispatch,
  }, value) {
    dispatch('setHeaderActive', value);
  },
  setHeaderActive(store, value) {
    store.commit(types.SET_ACTIVE_KEY, value.activeKey);
    store.dispatch('handleRouter', {
      router: value.router,
      path: store.getters.activePath,
    });
  },
  handleRouter(store, value) {
    const config = value;
    if (!config.path) {
      config.path = '/';
    }
    if (config.callbackurl) {
      config.router.push({
        path: config.path,
        query: {
          callbackurl: config.callbackurl,
        },
      });
    } else {
      config.router.push({
        path: config.path,
      });
    }
  },
};
