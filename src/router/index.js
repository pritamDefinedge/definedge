import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import UserDetail from '../components/UserDetail.vue'
import AddUser from '../components/AddUser.vue'
import PostDetail from '../components/PostDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/user/:id",
      name: "userDetail",
      component: () => import("../components/UserDetail.vue")
    },
    {
      path: "/post/:id",
      name: "postDetail",
      component: () => import("../components/PostDetail.vue")
    }
  ]
})

export default router
