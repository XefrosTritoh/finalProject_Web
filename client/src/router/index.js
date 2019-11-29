import Vue from 'vue';
import VueRouter from 'vue-router';
import VueToasted from 'vue-toasted';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import Track from '../views/Tracker.vue';
import Friend from '../views/Friend.vue';
import Login from '../views/Login.vue';


Vue.use(VueRouter);
Vue.use(VueToasted, {
  iconPack: 'fontawesome',
});

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/profile', name: 'profile', component: Profile },
  { path: '/tracker', name: 'tracker', component: Track },
  { path: '/friend', name: 'friend', component: Friend },
  { path: '/login', name: 'login', component: Login },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
