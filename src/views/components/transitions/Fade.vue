<template>
  <transition name="fade" appear>
    <div class="fade-container">
      <slot></slot>
    </div>
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
}
.fade-enter-active {
  transition: all 0.7s;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 0.7s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
