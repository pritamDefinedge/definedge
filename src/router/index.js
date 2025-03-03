import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../pages/Home.vue");
const About = () => import("../pages/About.vue");
const Associate = () => import("../pages/Associate.vue");
const Login = () => import("../pages/Login.vue");
const Pricing = () => import("../pages/Pricing.vue");
const Product = () => import("../pages/Product.vue");
const Api = () => import("../pages/Api.vue");
import VerifyMobile from "../pages/VerifyMobile.vue";
import VerifyEmail from "../pages/VerifyEmail.vue";
import CapturePan from "../pages/CapturePan.vue";
import VerifyAadhar from "../pages/VerifyAadhar.vue";
import VerifyPan from "../pages/VerifyPan.vue";

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
    {
      path: "/mobile-verification",
      name: "mobile-verification",
      component: VerifyMobile,
    },
    {
      path: "/email-verification",
      name: "email-verification",
      component: VerifyEmail,
    },
    {
      path: "/capture-pan",
      name: "capture-pan",
      component: CapturePan,
    },
    {
      path: "/aadhar-verification",
      name: "aadhar-verification",
      component: VerifyAadhar,
    },
    {
      path: "/pan-verification",
      name: "pan-verification",
      component: VerifyPan,
    },
  ],
});

export default router;
