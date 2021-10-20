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
        <component :is="section" />
      </Fade>
    </template>

    <UpgradeAccount v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import { stateUser } from "@/hooks/useUser";
import { Section, SectionReferral, UpdateSection } from "@/types/Section";

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
    const section = ref<SectionReferral>("ShareInvitation");
    const switchSection = (newSection: SectionReferral) => {
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
