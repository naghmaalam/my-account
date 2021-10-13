<template>
  <Main>
    <DevicesTable />
  </Main>
</template>
<script>
import Main from "@/views/layouts/Main.vue";
import DevicesTable from "@/views/components/my-account/DevicesTable.vue";

export default {
  components: {
    Main,
    DevicesTable,
  },
  setup() {
    return {};
  },
};
</script>
<style scoped></style>
