<template>
  <div class="container-fluid pt-80">
    <!-- nav bar -->
    <!-- ////////////////////////////////////////////////////////////////////////// -->
    <router-view name="navigation" />
    <!-- ////////////////////////////////////////////////////////////////////////// -->
    <!-- nav bar -->

    <div id="main-content-container" class="container-fluid" style="">
      <div class="row">
        <div class="col d-flex flex-row justify-content-start p-0 m-0">
          <!-- side bar -->
          <!-- ////////////////////////////////////////////////////////////////////////// -->
          <router-view name="sidebar" />
          <!-- ////////////////////////////////////////////////////////////////////////// -->
          <!-- side bar -->

          <main
            id="main-content"
            class="pr-4 pl-4 pt-3 pb-4"
            role="main"
            @click="hideSideMenu"
          >
            <!-- for headline -->
            <!-- //////////////////////////////////////////////// -->
            <div id="headline">
              <!-- <component :is="$route.meta.headline" /> -->

              <router-view name="headline" v-slot="{ Component }">
                <Fade>
                  <component :is="Component" />
                </Fade>
              </router-view>
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

export default defineComponent({
  components: {
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

<style lang="scss">
#app {
  background: #f3f7fe !important;
}
</style>
