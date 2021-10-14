<template>
  <transition name="fade" appear mode="out-in">
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
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-leave-active {
  transition: all 0.3s;
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
