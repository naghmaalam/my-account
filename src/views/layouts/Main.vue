<template>
  <div class="container-fluid" style="padding-top: 100px">
    <!-- nav bar -->
    <!-- ////////////////////////////////////////////////////////////////////////// -->
    <NavBar />
    <!-- ////////////////////////////////////////////////////////////////////////// -->
    <!-- nav bar -->

    <div class="container-fluid bg-light-gray">
      <div class="row">
        <!-- side bar -->
        <!-- ////////////////////////////////////////////////////////////////////////// -->
        <SideBar />
        <!-- ////////////////////////////////////////////////////////////////////////// -->
        <!-- side bar -->
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
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
export default defineComponent({
  components: {
    SideBar,
    NavBar,
  },
});
</script>
