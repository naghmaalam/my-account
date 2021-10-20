<template>
  <div>
    <UpgradeAccount />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { stateUser } from "@/hooks/useUser";
import { onBeforeRouteUpdate, onBeforeRouteLeave, useRouter } from "vue-router";

// import ShareInvitation from "@/views/components/referfriend/ShareInvitation.vue";
import UpgradeAccount from "@/views/components/referfriend/UpgradeAccount.vue";

export default defineComponent({
  components: {
    // ShareInvitation,
    UpgradeAccount,
  },
  setup() {
    const router = useRouter();
    // redirect if user is not premium or expired
    onBeforeRouteUpdate((to, from) => {
      console.log(
        "onBeforeRouteUpdate title = ",
        stateUser.value.currentSubscription.title
      );
      router.push({ name: "upgradeaccount" });
    });
    onBeforeRouteLeave((to, from) => {
      console.log(
        "onBeforeRouteLeave title = ",
        stateUser.value.currentSubscription.title
      );
    });

    // onMounted()

    return {
      stateUser,
    };
  },
});
</script>

<style scoped></style>
