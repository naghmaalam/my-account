<template>
  <div class="container-fluid main-padding">
    <!-- nav bar -->
    <!-- ////////////////////////////////////////////////////////////////////////// -->
    <NavBar />
    <!-- ////////////////////////////////////////////////////////////////////////// -->
    <!-- nav bar -->

    <div class="container-fluid">
      <div class="row">
        <!-- side bar -->
        <!-- ////////////////////////////////////////////////////////////////////////// -->
        <SideBar />
        <!-- ////////////////////////////////////////////////////////////////////////// -->
        <!-- side bar -->
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <div class="mob-res-hide">
            <ReferFriendPromoHeadline />
          </div>
          <slot></slot>
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
import { defineComponent } from "vue";
import SideBar from "@/views/components/my-account/SideBar.vue";
import NavBar from "@/views/components/my-account/NavBar.vue";
import ReferFriendPromoHeadline from "@/views/components/my-account/ReferFriendPromoHeadline.vue";
export default defineComponent({
  components: {
    SideBar,
    NavBar,
    ReferFriendPromoHeadline,
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
