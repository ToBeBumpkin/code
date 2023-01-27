import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import NotFound from '../components/NotFound.vue'
import Welcome from '../components/Welcome.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/welcome',
    component: Welcome
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/register',
    component: Register
  },
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'router',
        component: () => import('../views/Router.vue'),
        children: [
          {
            path: 'routerDetail1/:id',
            name: 'routerDetail1',
            component: () => import('../views/Router/RouterDetail1.vue'),
          }, {
            path: 'routerDetail2',
            name: 'routerDetail2',
            component: () => import('../views/Router/RouterDetail2.vue'),
          }, {
            path: 'routerDetail3',
            component: () => import('../views/Router/RouterDetail3.vue'),
          },
        ]
      },
      {
        path: 'vuex',
        component: () => import('../views/Vuex.vue'),
      },
      {
        path: 'axios',
        component: () => import('../views/Axios.vue'),
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from) => {
  // ...
  // 返回 false 以取消导航
  console.log(to);

  return true
})

export default router
