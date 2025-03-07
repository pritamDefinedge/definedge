import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import "./assets/base.css";
import LenisVue from 'lenis/vue';
import '@fortawesome/fontawesome-free/css/all.css';
import VueSignature from "vue-signature-pad";

const app = createApp(App);


app.use(VueSignature);

app.use(router);
app.use(LenisVue);
app.mount("#app");
