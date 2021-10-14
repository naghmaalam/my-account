<template>
  <Main>
    <SelectOsType />
  </Main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Main from "@/views/layouts/Main.vue";
import SelectOsType from "@/views/components/my-account/SelectOsType.vue";
export default defineComponent({
  components: {
    Main,
    SelectOsType,
  },
  setup() {
    onMounted(() => {
      console.log("Downloads Mounted");
    });
    return {};
  },
});
</script>
<style scoped></style>
