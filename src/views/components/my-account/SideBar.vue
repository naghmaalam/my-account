<template>
  <nav id="sidebar" class="sidebar d-none d-lg-block">
    <!-- <h5>desktop</h5> -->
    <SideBarContent />
  </nav>

  <!-- for mobile -->
  <!-- ////////////////////////////////////////////////////////////// -->
  <SlideLeft>
    <nav v-if="settingsState.mobile.sideMenu" class="sidebar">
      <!-- <h5>mobile</h5> -->
      <SideBarContent :isMobile="true" />
    </nav>
  </SlideLeft>
  <!-- ////////////////////////////////////////////////////////////// -->
  <!-- for mobile -->

  <!-- to add spacer on the left section of main -->
  <div class="left-spacer d-none d-lg-block"></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import SideBarContent from "@/views/components/my-account/SideBarContent.vue";
import SlideLeft from "@/views/components/transitions/SlideLeft.vue";

import { settingsState } from "@/hooks/useSettings";
export default defineComponent({
  components: {
    SlideLeft,
    SideBarContent,
  },
  setup() {
    return {
      settingsState: settingsState,
    };
  },
});
</script>

<style lang="scss" scoped>
/* #sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1031;
  padding: 0;
  box-shadow: inset -1px 0 0 rgb(0 0 0 / 10%);
}

#sidebar {
  transition: all 0.5s;
} */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1031;
  padding: 0;
  box-shadow: inset -1px 0 0 rgb(0 0 0 / 10%);

  width: auto;
  height: 100vh;
  background: #463770;
  margin-left: 0px !important;
  max-width: 310px;
}

.left-spacer {
  width: 310px;
  // background-color: red;
  height: 100%;
}
</style>
