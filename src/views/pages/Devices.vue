<template>
  <div>
    <DevicesTable />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import DevicesTable from "@/views/components/my-account/DevicesTable.vue";

export default defineComponent({
  components: {
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
