<template>
  <!-- nav bar -->
  <!-- ////////////////////////////////////////////////////////////////////////// -->
  <NavBar />
  <!-- ////////////////////////////////////////////////////////////////////////// -->
  <!-- nav bar -->

  <div class="container-fluid" style="background-color: red">
    <div class="row">
      <!-- side bar -->
      <!-- ////////////////////////////////////////////////////////////////////////// -->
      <SideBar />
      <!-- ////////////////////////////////////////////////////////////////////////// -->
      <!-- side bar -->
      <main>
        <slot></slot>
      </main>
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
