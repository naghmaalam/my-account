<template>
  <div class="container-fluid m-0 p-0">
    <div class="container m-0">
      <!-- toggle button -->
      <div class="container pt-5">
        <div class="button-container py-1 px-0">
          <div class="row">
            <div class="col px-0 mr-1">
              <div class="toggle-btn-title switch-toggle-btn p-2">
                <div class="toggle-btn-title-color">
                  {{ $t("share") }}
                </div>
              </div>
            </div>
            <div class="col px-0 ml-1">
              <div
                class="toggle-btn-title p-2"
                @click="updateSection('Rewards')"
              >
                <div>
                  {{ $t("rewards") }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- refer friend -->
      <div class="container refer-friend-container mt-5 pb-5">
        <div class="row">
          <div class="col text-center pt-5 mb-5">
            <img
              src="@/assets/images/account-settings-refer-friend/refer-a-friend.png"
              class="rf-gift img-fluid"
              alt=""
            />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 send-invitation-email">
            <div class="rf-title">
              {{ $t("send_email_invitation") }}
            </div>
            <div class="input-btn d-flex flex-row justify-content-between">
              <input
                class="as-input-email pl-3"
                type="text"
                name="email"
                id="email"
                v-model="email"
                placeholder="Your Friend email address"
              />
              <!-- <div class="active-toggle-btn text-center mr-1"></div> -->
              <button
                type="button"
                class="
                  swoshs
                  btn btn-primary btn-sm
                  mx-1
                  my-1
                  py-1
                  px-3
                  d-flex
                  justify-content-center
                  align-items-center
                "
                :disabled="isLoading"
                @click="submit"
              >
                {{ $t("send") }}
                <span
                  v-if="isLoading"
                  class="spinner-border spinner-border-sm ml-2"
                  role="status"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>
          <div class="col-md-6 share pl-3">
            <div class="rf-title">{{ $t("share_it") }}</div>
            <div
              class="
                input-btn
                d-flex
                flex-row
                justify-content-between
                align-items-center
                pl-2
              "
            >
              <i class="flaticon-link pl-3"></i>
              <div class="rf-link px-1 w-100">
                <input
                  class="as-input-email pl-3"
                  type="text"
                  name="referral_link"
                  id="referral_link"
                  readonly
                  :value="stateUser.referral_link"
                />
              </div>
              <button
                type="button"
                class="
                  swoshs
                  btn btn-outline-primary btn-sm
                  mx-1
                  my-1
                  py-1
                  px-3
                "
                @click="copyToClipboard"
              >
                {{ $t("copy") }}
              </button>
            </div>
          </div>
        </div>
        <div class="rf-title text-center pt-5">
          {{ $t("share_on_social_media") }}
        </div>
        <div
          class="
            social-icons
            d-flex
            flex-row
            justify-content-center
            align-items-center
            pt-2
          "
        >
          <a
            v-for="social in socials"
            :key="social.class"
            :href="`${social.url}${stateUser.referral_link}`"
            target="_blank"
            class="swoshs"
          >
            <i :class="social.class"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import { useRouter } from "vue-router";
import { stateUser, useUser } from "@/hooks/useUser";
import { useToast } from "@/hooks/useToast";
import { useValidation } from "@/hooks/useValidation";
import { UpdateSection, SectionReferral } from "@/types/Section";
export default defineComponent({
  components: {},
  setup() {
    const router = useRouter();
    const toast = useToast();
    const redirect = (page: string) => {
      router.push({ name: page });
    };
    const socials = [
      {
        class: `fab fa-facebook-square`,
        url: `https://www.facebook.com/sharer/sharer.php?u=`,
      },
      {
        class: `fab fa-twitter-square`,
        url: `https://www.twitter.com/share?url=`,
      },
      {
        class: `fab fa-linkedin`,
        url: `https://www.linkedin.com/sharing/share-offsite/?url=`,
      },
    ];

    const copyToClipboard = async () => {
      let toCopy = document.querySelector("#referral_link") as HTMLInputElement;
      /* Select the text field */
      toCopy.select();
      toCopy.setSelectionRange(0, 200); /* For mobile devices */

      try {
        await navigator.clipboard.writeText(toCopy.value);
        toast.do.showTranslated("copied_to_clipboard");
      } catch (err) {
        console.error(err);
        toast.do.errorTranslated("error_copying_to_clipboard");
      }
    };

    const isLoading = ref(false);
    const email = ref("");
    const vldtn = useValidation();
    const user = useUser();
    const submit = async () => {
      vldtn.checkErrors({
        email: email.value,
      });
      if (vldtn.hasErrors()) {
        toast.do.errorTranslated(vldtn.getError());
      } else {
        isLoading.value = true;
        console.log("SUBMIT");
        const success = await user.do.referFriend(email.value);
        if (success) {
          email.value = "";
        }
      }
      isLoading.value = false;
    };

    // SectionReferral
    // const updateSection = inject("updateSection");
    const sS = inject("updateSection") as UpdateSection<SectionReferral>;
    const updateSection = (section: SectionReferral) => {
      sS(section);
    };

    return {
      redirect,
      socials,
      stateUser,
      copyToClipboard,
      email,
      submit,
      isLoading,
      updateSection,
    };
  },
});
</script>

<style lang="scss" scoped>
.refunded-btn {
  width: 84px;
  height: 25px;
  border-radius: 12.5px;
  background: #e9f7f9;
  font-family: Poppins;
  font-weight: 600;
  font-size: 9px;
  text-align: center;
  color: #00ace2;
  border: 1px solid rgba(0, 0, 0, 0);
}

.order-history-empty {
  width: 100%;
  background: #fff;
}

.order-empty-title {
  font-family: Poppins;
  font-weight: normal;
  font-size: 0.7rem;
  text-align: center;
  color: #383361;
  opacity: 0.94;
}

.social-icons * + * {
  margin-left: 0.5rem;
}

.social-icons {
  color: #94a4c1;
  > a {
    font-size: 2rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}

.sidebar {
  width: auto;
  background: #463770;
  margin-left: 0px !important;
}

.active-button {
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
}

.container {
  margin-left: 0px !important;
  margin-right: 0px !important;
  max-width: 1700px !important;
}

.loggedin {
  font-family: Poppins;
  font-weight: normal;
  font-size: 11px;
  text-align: right;
  line-height: 5px;
  color: #5b5970;
}

.account-loggedin {
  background: #fff;
}

.my-devices {
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 10px;
}

.subscription {
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 10px;
}

.your-account {
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 10px;
}

.support {
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 10px;
}

.vertical-line {
  width: 0px;
  height: 149.19px;
  background: transparent;
  border: 1px solid #d4e3fc;
}

.my-account-btn {
  width: 161.68px;
  height: 43.47px;
  border-radius: 10px;
  background: transparent;
  border: 1px solid #7b47fc;
  font-family: Poppins;
  font-weight: bold;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: #724bfe;
}

.headline-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.5rem;
  text-align: left;
  color: #383361;
}

.headline-subtitle {
  font-family: Poppins;
  font-weight: normal;
  font-size: 0.9rem;
  text-align: left;
  color: #383361;
  opacity: 0.94;
}

.account-info-title {
  font-family: Poppins;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 50px;
  text-align: left;
  color: #383361;
}

.account-info-member {
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: right;
  color: #3833619c;
  border: 1px solid rgba(0, 0, 0, 0);
}

.account-info-date {
  font-family: Poppins;
  font-weight: 500;
  font-size: 1rem;
  line-height: 2rem;
  text-align: left;
  color: #383361;
}

.account-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 34px;
  text-align: left;
  color: #383361;
}

.row-line {
  width: 555px;
  height: 0px;
  background: transparent;
  border: 1px solid #d4e3fc;
}

.account-subtitle {
  width: 272px;
  height: 23px;
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.9rem;
  line-height: 1rem;
  text-align: left;
  color: #383361;
  border: 1px solid rgba(0, 0, 0, 0);
}

.account-info {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.7rem;
  line-height: 1rem;
  text-align: left;
  color: #383361;
  border: 1px solid rgba(0, 0, 0, 0);
}

.info-width {
  width: 25rem;
}

.active-btn {
  width: 101px;
  height: 30px;
  border-radius: 15px;
  background: #e9f9ee;
  font-family: Poppins;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  color: #15c50a;
  border: 1px solid rgba(0, 0, 0, 0);
}

.active-toggle-btn {
  width: 6rem;
  border-radius: 0.2rem;
  background: linear-gradient(#a215ff 0%, #7124ff 100%);
  border: 1px solid rgba(0, 0, 0, 0);
  color: #fff;
}

// switch button
////////////////////////////////////////////////////////////
.button-container {
  width: 13rem;
  height: 2.7rem;
  border-radius: 28.5px;
  background: #fff;
  box-shadow: 0px 8px 14px rgba(214, 225, 243, 0.64);

  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
}

.toggle-btn-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.7rem;
  color: #383361;
  border: 1px solid rgba(0, 0, 0, 0);
  width: 6rem;
  text-align: center;
  cursor: pointer;
}

.toggle-btn-title-color {
  color: #fff;
}
.switch-toggle-btn {
  border-radius: 1rem;
  background: linear-gradient(#a215ff 0%, #7124ff 100%);
  border: 1px solid rgba(0, 0, 0, 0);
  color: #fff;
  cursor: default;
}

////////////////////////////////////////////////////////////
// switch button

.refer-friend-container {
  width: 100%;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 8px 14px rgba(214, 225, 243, 0.64);
}

.rf-gift {
  width: 15rem;
  height: auto;
}

.rf-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 3rem;
  text-align: left;
  color: #383361;
}

.input-btn {
  width: 100%;
  border-radius: 10px;
  background: #fff;
  border: 1px solid #707070;
  /* opacity: 0.66; */
  overflow: hidden;
  input {
    outline: none;
  }
}

.rf-link {
  font-family: Poppins;
  font-weight: normal;
  font-size: 0.7rem;
  line-height: 2rem;
  text-align: left;
  /* color: #383361; */
  color: #000000;
}

.as-input-email {
  width: 100%;
  border: 1px solid transparent;
}

.link-btn {
  border-radius: 10px;
  background: transparent;
  border: 1px solid #7b47fc;
  font-family: Poppins;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  color: #7b47fc;
}

.reward-rules {
  font-family: Poppins;
  font-weight: 300;
  font-size: 0.9rem;
  text-align: left;
  color: #a163f5;
  border: 1px solid rgba(0, 0, 0, 0);
}

@media screen and (max-width: 992px) {
  .share {
    padding-left: 1rem !important;
  }

  .rf-title {
    font-size: 1rem;
  }

  .flaticon-link {
    padding-left: 0rem !important;
  }

  .rf-link {
    font-size: 0.6rem;
  }

  .as-input-email {
    font-size: 0.8rem;
  }

  .link-btn {
    font-size: 0.8rem;
    padding-left: 0.25rem !important;
    padding-right: 00.25rem !important;
  }
}
</style>
