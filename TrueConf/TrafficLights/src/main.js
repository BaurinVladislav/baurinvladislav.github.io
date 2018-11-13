import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ScreenRun from './components/FullScreen/ScreenRun.vue';
import ScreenRed from './components/FullScreen/ScreenRed.vue';
import ScreenGreen from './components/FullScreen/ScreenGreen.vue';
import ScreenYellow from './components/FullScreen/ScreenYellow.vue';




const routes =  [
    { path: '/', component: ScreenRun},
    { path: '/1', component: ScreenRed},
    { path: '/2', component: ScreenYellow},
    { path: '/3', component: ScreenGreen}
  ];

const router = new VueRouter({
    routes
  });
  
new Vue({
  el: '#app',
  router,
  render: h => h(App)

});
