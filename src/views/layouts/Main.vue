<template>
  <div class="container-fluid main-padding">
    <!-- nav bar -->
    <!-- ////////////////////////////////////////////////////////////////////////// -->
    <NavBar />
    <!-- ////////////////////////////////////////////////////////////////////////// -->
    <!-- nav bar -->

    <div class="container-fluid" style="background-color: #f3f7fe !important">
      <div class="row">
        <!-- side bar -->
        <!-- ////////////////////////////////////////////////////////////////////////// -->
        <SideBar />
        <!-- ////////////////////////////////////////////////////////////////////////// -->
        <!-- side bar -->
        <main
          role="main"
          class="col-md-9 ml-sm-auto col-lg-10 px-md-4"
          @click="hideSideMenu"
        >
          <!-- for meta customComponents -->
          <!-- //////////////////////////////////////////////// -->
          <div class="mob-res-hide">
            <Fade>
              <ReferFriendPromoHeadline
                v-if="customComponents?.headline === 'ReferFriendPromoHeadline'"
              />
              <PromoHeadline v-else />
            </Fade>
          </div>
          <!-- //////////////////////////////////////////////// -->
          <!-- for meta customComponents -->

          <router-view v-slot="{ Component }">
            <Fade>
              <component :is="Component" />
            </Fade>
          </router-view>
        </main>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import { useSettings } from "@/hooks/useSettings";
import Fade from "@/views/components/transitions/Fade.vue";

import SideBar from "@/views/components/my-account/SideBar.vue";
import NavBar from "@/views/components/my-account/NavBar.vue";
import PromoHeadline from "@/views/components/my-account/PromoHeadline.vue";
import ReferFriendPromoHeadline from "@/views/components/my-account/ReferFriendPromoHeadline.vue";
export default defineComponent({
  components: {
    SideBar,
    NavBar,
    PromoHeadline,
    ReferFriendPromoHeadline,
    Fade,
  },
  setup() {
    const showSlot = ref(false);
    onMounted(() => {
      setTimeout(() => {
        showSlot.value = true;
      }, 1000);
    });

    const route = useRoute();
    const customComponents = computed(
      () => route.meta.customComponents ?? null
    );

    return {
      hideSideMenu: useSettings().do.sideMenu.hide,
      showSlot,
      customComponents,
    };
  },
});
</script>

<style scoped>
.main-padding {
  padding-top: 100px;
}

@media screen and (max-width: 992px) {
  .main-padding {
    padding-top: 50px;
  }

  .mob-res-hide {
    display: none;
  }
}
</style>
