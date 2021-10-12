import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import i18n from "@/locales/localization";
import "@/assets/font/flaticon.css";
import "@/assets/styles/global.css";

createApp(App).use(store).use(router).use(i18n).mount("#app");
