export default {
  activePath: (state) => {
    const activeKey = state.Header.activeKey;
    let activePath;
    switch (activeKey) {
      case '1':
        activePath = '';
        break;
      case '2':
        activePath = 'todoList';
        break;
      case '3':
        activePath = 'codeSegments';
        break;
      case '4':
        activePath = 'blog';
        break;
      case '5':
        activePath = 'about';
        break;
      case '6':
        activePath = 'login';
        break;
      default:
        activePath = '';
        break;
    }
    return activePath;
  },
};
