import { createI18n } from "vue-i18n";

import en from "@/locales/en";
import cn from "@/locales/cn";
// import { Locale } from "@/types/Locale";

// 2. Create i18n instance with options
const i18n = createI18n({
  // legacy: false, // for composition API
  locale: "en", // set locale
  fallbackLocale: "cn", // set fallback locale
  messages: {
    en: <any>en,
    cn: <any>cn,
  },
});

export default i18n;
