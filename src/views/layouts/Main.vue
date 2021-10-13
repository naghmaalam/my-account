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
          <PromoHeadline />
          <Fade>
            <div>
              <slot></slot>
            </div>
          </Fade>
        </main>
      </div>
    </div>
  </div>
  <!-- <main
    class="my-account d-flex flex-row justify-content-start align-items-start"
  >    
  </main> -->
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import { useSettings } from "@/hooks/useSettings";
import Fade from "@/views/components/transitions/Fade.vue";

import SideBar from "@/views/components/my-account/SideBar.vue";
import NavBar from "@/views/components/my-account/NavBar.vue";
import PromoHeadline from "@/views/components/my-account/PromoHeadline.vue";
export default defineComponent({
  components: {
    SideBar,
    NavBar,
    PromoHeadline,
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
