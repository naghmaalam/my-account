import { reactive, ref } from "vue";

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

export function useToast(): {
  actions: {
    show(param: Toast): void;
    error(param: Toast): void;
  };
} {
  const show = (toast: Toast) => {
    toasts.value = [toast, ...toasts.value];
    startPopping();
  };

  const error = (toast: Toast) => {
    toasts.value = [
      {
        ...toast,
        type: "ERROR",
      },
      ...toasts.value,
    ];
    startPopping();
  };

  function startPopping() {
    console.log("toasts.value.length xxxxxx", toasts.value.length);
    let interval: number;
    if (toasts.value.length == 1) {
      interval = setInterval(function () {
        // start removing if there is 1 toast but dont execute again
        toasts.value.pop();
        console.log("Removing xxxxxx", interval);

        // stop interval when toasts are empty
        if (toasts.value.length == 0) {
          console.log("clearInterval xxxxxx = ", interval);
          clearInterval(interval);
        }
      }, 3000);
    }
  }

  return {
    actions: { show, error },
  };
}
