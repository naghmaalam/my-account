import { createI18n } from "vue-i18n";
import en from "@/locales/en";
import cn from "@/locales/cn";
import { Locale } from "@/types/Locale";
// import { Locale } from "@/types/Locale";

// 2. Create i18n instance with options
const i18n = createI18n<[Locale], "en" | "cn">({
  // legacy: false, // for composition API, seems to work even if not set
  locale: "en", // set locale
  fallbackLocale: "cn", // set fallback locale
  messages: {
    en: en,
    cn: cn,
  },
});

export default i18n;
