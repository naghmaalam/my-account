<template>
  <transition name="fade-up" appear mode="out-in">
    <slot></slot>
  </transition>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(100%);
}
.fade-up-enter-active {
  transition: all 0.5s;
}
.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-up-leave-active {
  transition: all 0.5s;
}
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>
