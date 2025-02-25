import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import "./assets/base.css";
import "animate.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
