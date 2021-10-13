<template>
  <Main>
    <SelectOsType />
  </Main>
</template>

<script>
import Main from "@/views/layouts/Main.vue";
import SelectOsType from "@/views/components/my-account/SelectOsType.vue";
export default {
  components: {
    Main,
    SelectOsType,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
