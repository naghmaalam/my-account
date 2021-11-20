<template>
  <transition name="fade-loading" appear mode="out-in">
    <div
      v-if="stateLoading.show"
      class="page-loader d-flex justify-content-center align-items-center"
    >
      <div class="spinner-grow text-primary" role="status">
        <span class="sr-only">{{ $t("loading_dots") }}</span>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, watch } from "vue";
import { stateLoading } from "@/hooks/useLoading";
export default defineComponent({
  components: {},
  setup() {
    watch(
      () => stateLoading.value.show,
      (vl) => {
        if (vl) document.body.classList.add("isLoading");
        else document.body.classList.remove("isLoading");
      }
    );

    return { stateLoading };
  },
});
</script>

<style lang="scss" scoped>
.page-loader {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  background: var(--swoshs-color3);
  z-index: 1050;
  overflow: hidden;
  .spinner-grow.text-primary {
    color: var(--swoshs-color2) !important;
    width: 5rem;
    height: 5rem;
  }
}

////////////////////////
.fade-loading-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-loading-enter-active {
  transition: all 0s;
}
.fade-loading-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-loading-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-loading-leave-active {
  transition: all 0.5s;
}
.fade-loading-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>

<style lang="scss">
body.isLoading {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}
</style>
