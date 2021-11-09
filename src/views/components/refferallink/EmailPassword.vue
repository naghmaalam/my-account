<template>
  <div class="rl-box mt-5 col-md-6 col-sm-6">
    <div class="rl-ribbon ribbon-top-left">
      <span>{{ $t("ribbon") }}</span>
    </div>
    <div class="rl-title mt-5 pt-5 pl-5 ml-5 pr-5 mr-5">
      {{ $t("Hooray_friend") }}
    </div>
    <div class="rl-subtitle pl-5 ml-5 pr-5 mr-5 pt-3">
      {{ $t("friend_reffered") }}
      <b> {{ $t("days_free") }} </b>
    </div>
    <form action="#">
      <div class="mob-res-inputs d-flex mt-4 pl-5 pr-5 ml-5 mr-5">
        <!-- <input
          type="text"
          class="form-control pt-4 pb-4"
          placeholder="Enter your email address"
          v-model="email"
        /> -->
        <input
          type="text"
          class="form-control pt-4 pb-4"
          :value="$route.query.coolest"
        />
      </div>

      <div class="mob-res-inputs d-flex flex-row mt-4 ml-5 mr-5">
        <input
          :type="isPasswordHidden ? 'password' : 'text'"
          class="form-control login-pwd mob-res-inputs ml-5"
          @input="atKeyUp"
          :placeholder="$t('password')"
          v-model="password"
        />
        <button
          type="button"
          class="visiblity-btn mob-res-inputs mr-5"
          @click="isPasswordHidden = !isPasswordHidden"
        >
          <i v-if="isPasswordHidden" class="flaticon-invisible pr-3 pl-3"></i>
          <i v-else class="flaticon-view pr-3 pl-3"></i>
        </button>
      </div>
    </form>
    <div class="pass-strength mob-res-inputs mt-3 pl-5 ml-5">
      Password Strength
    </div>
    <div class="indicator mob-res-inputs mt-3 pl-5 pr-5 ml-5 mr-5">
      <span :class="{ marked: passwordStrength >= 1 }"></span>
      <span :class="{ marked: passwordStrength >= 2 }"></span>
      <span :class="{ marked: passwordStrength >= 3 }"></span>
      <span :class="{ marked: passwordStrength >= 4 }"></span>
      <span :class="{ marked: passwordStrength >= 5 }"></span>
    </div>
    <div class="rl-txt mob-res-inputs pl-5 ml-5 pr-5 mr-5 pt-4">
      {{ $t("password_strength_info") }}
    </div>
    <div class="rl-submit-btn ml-5 mr-5 mt-4">
      <div
        class="rl-btn mob-res-inputs ml-5 mr-5 pt-2 pb-2 mb-5"
        :class="{ disabled: isLoading }"
        @click="submit"
      >
        <span
          v-if="isLoading"
          class="spinner-border spinner-border-sm mr-2"
          role="status"
          aria-hidden="true"
        ></span>
        {{ $t("get_free_days") }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, ComputedRef, defineComponent, inject, ref } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useValidation } from "@/hooks/useValidation";
import { useToast } from "@/hooks/useToast";
import { useUser } from "@/hooks/useUser";
import { UpdateSection, SectionReferralLink } from "@/types/Section";

export default defineComponent({
  setup(_, context) {
    const { t } = useI18n({ useScope: "global" });
    const route = useRoute();
    const user = useUser();
    const toast = useToast();
    const vldt = useValidation();

    const isLoading = ref(false);
    const email = ref("");
    const password = ref("");
    const passwordStrength = ref(0);
    const isPasswordHidden = ref(true);
    const inviteCode: ComputedRef<string> = computed(() => {
      return route.params.inviteCode as string;
    });

    const sS = inject("updateSection") as UpdateSection<SectionReferralLink>;
    const updateSection = (section: SectionReferralLink) => {
      sS(section);
    };

    const submit = async () => {
      // validate email and password
      vldt.checkErrors({
        email: email.value,
        password_email: {
          email: email.value,
          password: password.value,
        },
        password: password.value,
      });
      if (vldt.hasErrors()) {
        toast.do.error(t(vldt.getError()));
      } else {
        console.log("SUCCESS NEW ACCOUNT");
        isLoading.value = true;
        const success = await user.do.register.inviteCode(
          email.value,
          password.value,
          inviteCode.value
        );
        if (success === true) {
          context.emit("update:email", email.value);
          context.emit("update:password", password.value);
          updateSection("VerifyCode");
        }
        isLoading.value = false;
      }
    };

    const atKeyUp = () => {
      passwordStrength.value = vldt.getPasswordStrength(password.value);
    };

    console.log("inviteCode = ", inviteCode);
    return {
      passwordStrength,
      isPasswordHidden,
      email,
      password,
      inviteCode,
      isLoading,
      atKeyUp,
      submit,
    };
  },
});
</script>
