<template>
  <!-- this transition needs to have a max height -->
  <transition name="expand">
    <slot />
  </transition>
</template>
<style lang="scss" scoped>
.expand-enter-from {
  max-height: 0;
}
.expand-enter-to {
  max-height: 350px;
}
.expand-leave-from {
  max-height: 350px;
}
.expand-leave-to {
  max-height: 0;
}

.expand-enter-active,
.expand-leave-active {
  transition: all 1s;
  overflow-y: hidden;
}
</style>
