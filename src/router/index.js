import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import DoStream from '@/components/DoStream';
import ViewStream from '@/components/ViewStream';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/DoStream',
      name: 'DoStream',
      component: DoStream,
    },
    {
      path: '/ViewStream',
      name: 'ViewStream',
      component: ViewStream,
    },
  ],
});
