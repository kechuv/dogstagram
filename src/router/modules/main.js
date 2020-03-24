import Main from '@/layouts/main.vue';

import Home from '@/views/Home.vue';
const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue');

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        component: About
      }
    ]
  },
];

export default routes;