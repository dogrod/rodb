import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/Index';
import Home from '@/components/Home';
import TodoList from '@/components/TodoList';
import CodeSegments from '@/components/CodeSegments';
import Blog from '@/components/Blog';
import About from '@/components/About';
import Login from '@/components/Login';
import Resume from '@/components/resume/Index';

Vue.use(Router);

export default({
  linkActiveClass: 'ivu-menu-item-active ivu-menu-item-selected',
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '',
          name: 'Home',
          alias: 'home',
          component: Home,
          meta: {
            title: 'Home',
          },
        }, {
          path: 'todoList',
          name: 'TodoList',
          component: TodoList,
          meta: {
            title: 'TodoList',
          },
        }, {
          path: 'codeSegments',
          name: 'CodeSegments',
          component: CodeSegments,
          meta: {
            title: 'CodeSegments',
          },
        }, {
          path: 'blog',
          name: 'Blog',
          component: Blog,
          meta: {
            title: 'Blog',
          },
        }, {
          path: 'about',
          name: 'About',
          component: About,
          meta: {
            title: 'About',
          },
        }, {
          path: 'login',
          name: 'Login',
          component: Login,
          meta: {
            title: 'Login',
          },
        },
      ],
    }, {
      path: '/resume',
      name: 'Resume',
      component: Resume,
    },
  ],
});
