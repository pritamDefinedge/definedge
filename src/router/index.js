import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/postList",
      name: "postList",
      component: () => import("../components/PostList.vue")
    },
    {
      path: "/post/:id",
      name: "postDetail",
      component: () => import("../components/PostDetail.vue")
    },
    {
      path: "/add",
      name: "addPost",
      component: () => import("../components/AddPost.vue")
    },
    {
      path: "/search",
      name: "searchPost",
      component: () => import("../components/SearchPost.vue")
    },
  ]
})

export default router
