<template>
  <div>
    <h1>Login</h1>
    <button type="button" class="btn btn-primary" @click="login">
      Primary
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { useUser } from "@/hooks/useUser";

export default defineComponent({
  setup() {
    const user = useUser();
    const login = async () => {
      await user.actions.login({
        username: "rrsdr84@gmail.com",
        password: "asdf1234",
        device_code: "device_code_xyz",
        device_name: "device_name window",
        device_type: "ios, android, windows, mac",
        myaccount: true,
        lang: "en",
        version: "version",
      });
    };
    return {
      login,
    };
  },
});
</script>
