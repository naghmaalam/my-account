<template>
  <Main>
    <DevicesTable />
  </Main>
</template>
<script>
import { onMounted } from "vue";
import Main from "@/views/layouts/Main.vue";
import DevicesTable from "@/views/components/my-account/DevicesTable.vue";

export default {
  components: {
    Main,
    DevicesTable,
  },
  setup() {
    console.log("setup");
    onMounted(() => {
      console.log("MOUTED");
    });
    return {};
  },
};
</script>
<style scoped></style>
