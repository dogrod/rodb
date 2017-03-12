import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Resume from '@/components/resume/Index';

Vue.use(Router);

export default({
  linkActiveClass: 'link-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, {
      path: '/resume',
      name: 'Resume',
      component: Resume,
    },
  ],
});
