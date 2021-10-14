<template>
  <Main>
    <DevicesTable />
  </Main>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Main from "@/views/layouts/Main.vue";
import DevicesTable from "@/views/components/my-account/DevicesTable.vue";

export default defineComponent({
  components: {
    Main,
    DevicesTable,
  },
  setup() {
    onMounted(() => {
      console.log("Devices Mounted");
    });
    return {};
  },
});
</script>

<style scoped></style>
