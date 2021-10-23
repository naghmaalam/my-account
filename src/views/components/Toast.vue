<template>
  <div
    class="position-fixed top-0 right-0 p-3"
    style="z-index: 1042; right: 0; top: 0"
  >
    <transition-group tag="div" name="toasts" style="position: relative" appear>
      <div
        v-for="(tst, i) in toasts"
        :key="i"
        class="toast show bg-primary text-white"
        :class="getClass(tst.type)"
        role="alert"
        aria-live="assertive"
      >
        <!-- <h5>{{ toasts }}</h5> -->
        <div v-if="tst.title" class="toast-header">
          <strong class="mr-auto">{{ tst.title }}</strong>
        </div>
        <div class="toast-body">
          <span v-html="tst.text" />
        </div>
      </div>
    </transition-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

import { toasts, ToastType } from "@/hooks/useToast";

export default defineComponent({
  setup() {
    const showTest = ref(true);
    const getClass = (type: ToastType) => {
      if (type === "PRIMARY") return "bg-danger";
      else if (type === "ERROR") return "bg-danger";
    };
    return {
      toasts,
      showTest,
      getClass,
    };
  },
});
</script>
<style scoped>
.toast {
  min-width: 200px;
}
.toasts-enter-from {
  opacity: 0;
  transform: translateX(10px);
}
.toasts-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.toasts-enter-active {
  transition: all 0.3s ease;
}

.toasts-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.toasts-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
.toasts-leave-active {
  transition: all 0.3s ease;
}

.toasts-move {
  transition: all 0.3s ease;
}
</style>
