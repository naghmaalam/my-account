<template>
  <div>
    <SelectOsType />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import SelectOsType from "@/views/components/my-account/SelectOsType.vue";
export default defineComponent({
  components: {
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
