<template>
  <div class="toast-container position-fixed top-0 right-0 p-3">
    <transition-group tag="span" name="toasts">
      <div v-for="(tst, i) in toasts" :key="tst" class="toasts-item">
        <div
          class="toast show"
          :class="getClass(tst.type)"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            <img
              src="@/assets/images/account-settings/Swoshs-logo.png"
              class="rounded mr-2"
              alt="Swoshs Logo"
              style="height: 20px; min-width: 20px"
            />
            <strong v-if="tst.title" class="mr-auto my-2">{{
              tst.title
            }}</strong>
            <strong v-else class="mr-auto my-2">SwoshsVPN</strong>
            <button
              type="button"
              class="ml-2 mb-1 close"
              data-dismiss="toast"
              aria-label="Close"
              @click="hide(i)"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="toast-body"><span v-html="tst.text" /></div>
        </div>
      </div>
    </transition-group>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { toasts, useToast, ToastType } from "@/hooks/useToast";

export default defineComponent({
  setup() {
    const getClass = (type: ToastType) => {
      if (type === "PRIMARY") return "";
      else if (type === "ERROR") return "bg-danger";
    };

    const toast = useToast();
    const hide = (index: number) => {
      toast.do.hide(index);
    };

    // toast.do.show("Lorem excepteur id laboris pariatur.");

    return {
      toasts,
      getClass,
      hide,
    };
  },
});
</script>
<style lang="scss" scoped>
.toast-container {
  z-index: 1042;
  right: 20px;
  top: 60px;
}

.toast.show {
  min-width: 200px;
  background-image: var(--swoshs-linear-gradient);
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  box-shadow: var(--swoshs-box-shadow);

  .toast-header {
    color: #fff;
    background: transparent;
    border-bottom: 0;
    button {
      color: #fff;
    }
  }
  .toast-body {
    color: #fff;
  }
}
.toast.show.bg-danger {
  background-image: var(--swoshs-linear-gradient3);
}
//////////////////////////////////////

.toasts-item {
  transition: all 0.6s;
  display: flex;
}

.toasts-enter-to,
.toasts-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.toasts-enter-from,
.toasts-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.toasts-leave-active {
  position: absolute;
}
</style>
