import { reactive, computed } from "vue";

// state data
const state = reactive({
  loading: {
    show: false,
  },
});
export const stateLoading = computed(() => {
  return state.loading;
});

export const useLoading = (): {
  do: {
    show: () => void;
    hide: () => void;
  };
} => {
  const show = () => {
    state.loading.show = true;
  };
  const hide = () => {
    state.loading.show = false;
  };
  return {
    do: {
      show,
      hide,
    },
  };
};
