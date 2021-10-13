<template>
  <transition name="slide-left" appear mode="out-in">
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
.slide-left-enter-from {
  // opacity: 0;
  transform: translateX(-100%);
}
.slide-left-enter-active {
  transition: all 0.7s;
}
.slide-left-enter-to {
  // opacity: 1;
  transform: translateX(0);
}

.slide-left-leave-from {
  // opacity: 1;
}
.slide-left-leave-active {
  transition: all 0.7s;
}
.slide-left-leave-to {
  // opacity: 0;
  transform: translateX(-100%);
}
</style>
