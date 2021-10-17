<template>
  <div>
    <SelectOsType @select-device="selectDevice" />
    <ModalSteps v-model:open="showModalSteps" :device="deviceSelected" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Device } from "@/types/Devices";

import SelectOsType from "@/views/components/downloads/SelectOsType.vue";
import ModalSteps from "@/views/components/downloads/ModalSteps.vue";

export default defineComponent({
  components: {
    SelectOsType,
    ModalSteps,
  },
  setup() {
    const deviceSelected = ref<Device>();
    const showModalSteps = ref(false);
    const selectDevice = (device: Device) => {
      deviceSelected.value = device;
      showModalSteps.value = true;
      console.log(device);
    };
    return {
      selectDevice,
      deviceSelected,
      showModalSteps,
    };
  },
});
</script>
