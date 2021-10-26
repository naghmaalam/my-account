import { reactive, ref } from "vue";
import i18n from "@/locales/localization";

interface Toast {
  title?: string;
  type?: ToastType;
  text: string;
  // show: boolean;
}

export type ToastType = "ERROR" | "PRIMARY" | undefined;

export const toasts = ref<Toast[]>([]);

export const toast: Toast = reactive({
  text: "",
});

function startPopping() {
  // console.log("toasts.value.length xxxxxx", toasts.value.length);
  let interval: number;
  if (toasts.value.length == 1) {
    interval = setInterval(function () {
      // start removing if there is 1 toast but dont execute again
      toasts.value.pop();
      // console.log("Removing xxxxxx", interval);

      // stop interval when toasts are empty
      if (toasts.value.length == 0) {
        // console.log("clearInterval xxxxxx = ", interval);
        clearInterval(interval);
      }
    }, 10000);
  }
}

export function useToast(): {
  do: {
    show(text: string): void;
    showTranslated(locale: string): void;
    error(text: string): void;
    errorTranslated(locale: string): void;
    hide(index: number): void;
  };
} {
  const show = (text: string) => {
    toasts.value = [
      {
        text,
      },
      ...toasts.value,
    ];
    startPopping();
  };

  const showTranslated = (locale: string) => {
    show(i18n.global.t(locale));
  };

  const error = (text: string) => {
    toasts.value = [
      {
        text,
        type: "ERROR",
      },
      ...toasts.value,
    ];
    startPopping();
  };

  const errorTranslated = (locale: string) => {
    error(i18n.global.t(locale));
  };

  const hide = (index: number) => {
    console.log("index", index);
    console.log("spliced = ", toasts.value.splice(index, 1));
    console.log("toasts.value", toasts.value);
  };

  return {
    do: { show, showTranslated, error, errorTranslated, hide },
  };
}
