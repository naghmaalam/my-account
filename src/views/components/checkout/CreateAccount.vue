<template>
  <section class="container-fluid content-word">
    <div class="container">
      <div class="row">
        <div class="col-md-12 numb-group">
          <h4 class="numb2 media-num">02</h4>
          <p class="media-title">
            <template v-if="!stateUser.authenticated">
              Create an account
            </template>
            <template v-else> Email Address</template>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div>
            <template v-if="!stateUser.authenticated">
              <form action="#" id="form">
                <label
                  >Enter your email that you'd like to use for Swoshs
                  account</label
                >
                <div class="input-box">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter Email Address"
                    v-model="email"
                  />
                </div>
              </form>
            </template>
            <template v-else>
              <h3 class="mt-4" style="overflow-wrap: break-word">
                {{ stateUser.email }}
              </h3>
            </template>

            <p class="purchase-p">
              We will not use share your email address with third parties, and
              will only contact you when necessary to ensure the best
              services.<br />

              <template v-if="!stateUser.authenticated">
                If you have already an account
                <router-link to="/">Login</router-link>
              </template>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";

import { stateUser } from "@/hooks/useUser";

export default defineComponent({
  setup(_, context) {
    const email = ref("");
    watch(
      () => email.value,
      (nVal) => {
        context.emit("update:email", nVal);
      }
    );
    return {
      stateUser,
      email,
    };
  },
});
</script>
<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  h3 {
    font-size: 1rem;
  }
}
</style>
