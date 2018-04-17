import Home from './components/Home.vue'
import Login from './components/Login.vue'
import TopUp from './components/TopUp.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/topup', component: TopUp },
];
