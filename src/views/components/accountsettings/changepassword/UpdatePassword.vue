<template>
  <SimpleFade>
    <div class="modal-backdrop" v-if="open"></div>
  </SimpleFade>
  <Fade>
    <div class="modal show d-block" v-if="open">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-body">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="close"
            >
              <i class="fas fa-times"></i>
            </button>

            <div class="text-center mob-res-header pt-4">
              <img
                src="@/assets/images/password-recovery/logo-swoshs.png"
                class="img-fluid mob-res-logo mb-4"
                style="min-height: 65px"
                alt="swoshs-logo"
              />
              <div class="create-password-title text-center mr-5 ml-5">
                {{ $t("reset_password") }}
              </div>
              <form
                action="#"
                class="
                  d-flex
                  flex-column
                  justify-content-center
                  align-items-center
                  mob-res-form
                "
              >
                <div class="mt-4 text-left">
                  {{ $t("current_password") }}
                  <div class="create-new-password-input d-flex flex-row mt-1">
                    <input
                      :type="isPasswordCurrentHidden ? 'password' : 'text'"
                      class="form-control"
                      v-model="passwordCurrent"
                      :placeholder="$t('current_password')"
                    />
                    <button
                      type="button"
                      class="btn btn-secondary btn-sm"
                      @click="
                        isPasswordCurrentHidden = !isPasswordCurrentHidden
                      "
                    >
                      <i
                        v-if="isPasswordCurrentHidden"
                        class="flaticon-invisible pr-3 pl-3"
                      ></i>
                      <i v-else class="flaticon-view pr-3 pl-3"></i>
                    </button>
                  </div>
                </div>
                <div class="mt-4 text-left">
                  {{ $t("password") }}
                  <div class="create-new-password-input d-flex flex-row mt-1">
                    <input
                      :type="isPasswordHidden ? 'password' : 'text'"
                      class="form-control"
                      v-model="passwordNew"
                      @input="atKeyUp"
                      :placeholder="$t('password')"
                    />
                    <button
                      type="button"
                      class="btn btn-secondary btn-sm"
                      @click="isPasswordHidden = !isPasswordHidden"
                    >
                      <i
                        v-if="isPasswordHidden"
                        class="flaticon-invisible pr-3 pl-3"
                      ></i>
                      <i v-else class="flaticon-view pr-3 pl-3"></i>
                    </button>
                  </div>
                </div>
                <div class="mt-4 text-left">
                  {{ $t("confirm_password") }}
                  <div class="create-new-password-input d-flex flex-row mt-1">
                    <input
                      class="form-control"
                      :type="isPasswordConfirmHidden ? 'password' : 'text'"
                      v-model="passwordConfirm"
                      :placeholder="$t('confirm_password')"
                    />
                    <button
                      type="button"
                      class="btn btn-secondary btn-sm"
                      @click="
                        isPasswordConfirmHidden = !isPasswordConfirmHidden
                      "
                    >
                      <i
                        v-if="isPasswordConfirmHidden"
                        class="flaticon-invisible pr-3 pl-3"
                      ></i>
                      <i v-else class="flaticon-view pr-3 pl-3"></i>
                    </button>
                  </div>
                </div>
              </form>

              <div class="ml-5 mr-5">
                <div class="indicator text-center mt-4 ml-5 mr-5">
                  <span :class="{ marked: passwordStrength >= 1 }"></span>
                  <span :class="{ marked: passwordStrength >= 2 }"></span>
                  <span :class="{ marked: passwordStrength >= 3 }"></span>
                  <span :class="{ marked: passwordStrength >= 4 }"></span>
                  <span :class="{ marked: passwordStrength >= 5 }"></span>
                </div>
              </div>

              <div class="ml-3 mr-3">
                <div class="create-password-info mt-3 ml-5 mr-5">
                  {{ $t("password_info_never_reuse") }}
                </div>
              </div>

              <div class="ml-5 mr-5 mt-4 mb-4">
                <a href="#" @click.prevent="submit">
                  <div
                    class="swoshs btn btn-primary btn-lg"
                    :disabled="isLoading"
                  >
                    <span
                      v-if="isLoading"
                      class="spinner-border spinner-border-sm mr-2 mb-1"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    {{ $t("reset_password") }}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fade>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

import SimpleFade from "@/views/components/transitions/SimpleFade.vue";
import Fade from "@/views/components/transitions/Fade.vue";

import { useValidation } from "@/hooks/useValidation";
import { stateUser, useUser } from "@/hooks/useUser";
import { useToast } from "@/hooks/useToast";

export default defineComponent({
  components: {
    Fade,
    SimpleFade,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const user = useUser();
    const toast = useToast();
    const vldt = useValidation();
    const isLoading = ref(false);
    const passwordCurrent = ref("");
    const passwordNew = ref("");
    const passwordConfirm = ref("");
    const isPasswordCurrentHidden = ref(true);
    const isPasswordHidden = ref(true);
    const isPasswordConfirmHidden = ref(true);
    const passwordStrength = ref(0);

    const close = () => {
      context.emit("update:open", false);
    };

    const atKeyUp = () => {
      console.log("atKeyUp");
      passwordStrength.value = vldt.getPasswordStrength(passwordNew.value);
    };

    const submit = async () => {
      vldt.checkErrors({
        password_email: {
          email: stateUser.value.email,
          password: passwordNew.value,
        },
        confirm_password: {
          confirm: passwordConfirm.value,
          password: passwordNew.value,
        },
        password: passwordNew.value,
      });
      if (vldt.hasErrors()) {
        toast.do.errorTranslated(vldt.getError());
      } else {
        console.log("SUBMIT NEW PASSWORD");
        isLoading.value = true;
        const success = await user.do.account.updatePassword(
          passwordCurrent.value,
          passwordNew.value
        );
        if (success === true) {
          passwordCurrent.value = "";
          passwordNew.value = "";
          passwordConfirm.value = "";
          isPasswordCurrentHidden.value = true;
          isPasswordHidden.value = true;
          isPasswordConfirmHidden.value = true;
          toast.do.showTranslated("password_changed_msg_title");
          close();
        }
        isLoading.value = false;
      }
    };

    return {
      close,
      isLoading,
      passwordCurrent,
      passwordNew,
      passwordConfirm,
      isPasswordCurrentHidden,
      isPasswordHidden,
      isPasswordConfirmHidden,
      passwordStrength,
      atKeyUp,
      submit,
    };
  },
});
</script>

<style lang="scss" scoped>
.modal {
  z-index: 1041;
}

.modal-backdrop {
  background: #000000c4;
}

.indicator {
  height: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}

.indicator > * + * {
  margin-left: 0.5rem;
}

.indicator span {
  width: 100%;
  height: 100%;
  background: var(--swoshs-color2);
  position: relative;
  opacity: 0.21;
  transition: opacity 0.4s;
}

.indicator span.marked {
  opacity: 1;
}

.indicator span:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.create-password-title {
  font-family: Poppins;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2rem;
  text-align: center;
  color: #312b54;
  border: 1px solid rgba(0, 0, 0, 0);
}

.create-new-password-input {
  border: 1px solid var(--swoshs-color2);
  border-radius: 5px;
  padding: 0;
  overflow: hidden;
  input:active,
  input:focus,
  input {
    border: 0;
    outline: none;
    box-shadow: none;
  }
  button {
    border-radius: 0;
    background-color: var(--swoshs-light-gray);
    box-shadow: none;
    border: 0;
    i {
      color: #000;
    }
  }
}
</style>
