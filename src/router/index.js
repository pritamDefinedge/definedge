import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../pages/Home.vue");
const About = () => import("../pages/About.vue");
const Associate = () => import("../pages/Associate.vue");
const Login = () => import("../pages/Login.vue");
const Pricing = () => import("../pages/Pricing.vue");
const Product = () => import("../pages/Product.vue");
const Api = () => import("../pages/Api.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/associate",
      name: "associate",
      component: Associate,
    },
    {
      path: "/pricing",
      name: "pricing",
      component: Pricing,
    },
    {
      path: "/product",
      name: "product",
      component: Product,
    },
    {
      path: "/api",
      name: "api",
      component: Api,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

export default router;
