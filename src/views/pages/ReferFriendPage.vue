<template>
  <div>
    <template
      v-if="
        stateUser.currentSubscription.title === `premium` &&
        !stateUser.currentSubscription.isExpired
      "
    >
      <ReferFriendPromoHeadline />
      <Fade>
        <ShareInvitation v-if="section === `shareinvitation`" />
        <Rewards v-if="section === `rewards`" />
      </Fade>
    </template>

    <UpgradeAccount v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import { stateUser } from "@/hooks/useUser";

import ReferFriendPromoHeadline from "@/views/components/my-account/ReferFriendPromoHeadline.vue";
import ShareInvitation from "@/views/components/referfriend/ShareInvitation.vue";
import Rewards from "@/views/components/referfriend/Rewards.vue";
import UpgradeAccount from "@/views/components/referfriend/UpgradeAccount.vue";
import Fade from "@/views/components/transitions/Fade.vue";

export default defineComponent({
  components: {
    ReferFriendPromoHeadline,
    ShareInvitation,
    Rewards,
    UpgradeAccount,
    Fade,
  },
  setup() {
    const section = ref("shareinvitation");
    const switchSection = (newSection: string) => {
      section.value = newSection;
      console.log(newSection);
    };
    provide("switchSection", switchSection);

    return {
      stateUser,
      section,
    };
  },
});
</script>

<style scoped></style>
