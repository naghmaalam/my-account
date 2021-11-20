import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import i18n from "@/locales/localization";

import "@/assets/font/flaticon.css";
import "@/assets/styles/variables.scss";
import "@/assets/styles/global.scss";

import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fab);
library.add(far);
library.add(fas);
dom.watch();

const app = createApp(App);

// .component("font-awesome-icon", FontAwesomeIcon)
app.use(router).use(i18n).mount("#app");
