<template>
  <div class="container-fluid pt-80">
    <!-- nav bar -->
    <!-- ////////////////////////////////////////////////////////////////////////// -->
    <NavBar />
    <!-- ////////////////////////////////////////////////////////////////////////// -->
    <!-- nav bar -->

    <div id="main-content-container" class="container-fluid" style="">
      <div class="row">
        <div class="col d-flex flex-row justify-content-start p-0 m-0">
          <!-- side bar -->
          <!-- ////////////////////////////////////////////////////////////////////////// -->
          <SideBar />
          <!-- ////////////////////////////////////////////////////////////////////////// -->
          <!-- side bar -->

          <main
            id="main-content"
            class="pr-3 pl-4 pt-3 pb-4"
            role="main"
            @click="hideSideMenu"
          >
            <!-- for headline -->
            <!-- //////////////////////////////////////////////// -->
            <div id="headline">
              <Fade>
                <component :is="$route.meta.headline" />
              </Fade>
            </div>
            <!-- //////////////////////////////////////////////// -->
            <!-- for headline -->

            <router-view v-slot="{ Component }">
              <Fade>
                <component :is="Component" />
              </Fade>
            </router-view>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import { useSettings } from "@/hooks/useSettings";
import Fade from "@/views/components/transitions/Fade.vue";

import SideBar from "@/views/components/my-account/SideBar.vue";
import NavBar from "@/views/components/my-account/NavBar.vue";

export default defineComponent({
  components: {
    SideBar,
    NavBar,
    Fade,
  },
  setup() {
    const showSlot = ref(false);
    onMounted(() => {
      setTimeout(() => {
        showSlot.value = true;
      }, 1000);
    });

    return {
      hideSideMenu: useSettings().do.sideMenu.hide,
      showSlot,
    };
  },
});
</script>

<style lang="scss" scoped>
#main-content {
  width: 100%;
  max-width: 1200px;
}

#main-content-container {
  background-color: var(--swoshs-light-gray) !important;
}

.pt-80 {
  padding-top: 80px;
}
</style>
