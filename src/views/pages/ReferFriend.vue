<template>
  <ReferFriendMain>
    <ShareInvitation />
  </ReferFriendMain>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ReferFriendMain from "@/views/layouts/ReferFriendMain.vue";
import ShareInvitation from "@/views/components/my-account/ShareInvitation.vue";

export default defineComponent({
  components: {
    ReferFriendMain,
    ShareInvitation,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
