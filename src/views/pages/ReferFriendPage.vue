<template>
  <div>
    <template
      v-if="
        stateUser.currentSubscription.title === `premium` &&
        !stateUser.currentSubscription.isExpired
      "
    >
      <div>
        <ReferFriendPromoHeadline @select-device="selectDevice" />
        <teleport to="body">
          <RewardsModal
            v-model:open="showModalSteps"
            :device="deviceSelected"
          />
        </teleport>
      </div>

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

import ModalSteps from "@/views/components/downloads/ModalSteps.vue";
import RewardsModal from "@/views/modals/RewardsModal.vue";

export default defineComponent({
  components: {
    ReferFriendPromoHeadline,
    ShareInvitation,
    Rewards,
    UpgradeAccount,
    Fade,
    ModalSteps,
    RewardsModal,
  },
  setup() {
    const section = ref<SectionReferral>("ShareInvitation");
    const updateSection = (newSection: SectionReferral) => {
      section.value = newSection;
      console.log(newSection);
    };
    provide("updateSection", updateSection);

    const showModalSteps = ref(false);
    const selectDevice = () => {
      showModalSteps.value = true;
    };

    return {
      stateUser,
      section,
      selectDevice,
      showModalSteps,
    };
  },
});
</script>

<style scoped></style>
