<template>
  <div class="container-fluid account-bg m-0 p-0">
    <div class="container m-0">
      <!-- toggle button -->
      <div class="container pt-5">
        <div class="button-container py-1 px-0">
          <div class="row">
            <div class="col px-0 mr-1">
              <div
                class="toggle-btn-title p-2"
                @click="switchSection('ShareInvitation')"
              >
                <div>
                  {{ $t("share") }}
                </div>
              </div>
            </div>
            <div class="col px-0 ml-1">
              <div class="toggle-btn-title switch-toggle-btn p-2">
                <div class="toggle-btn-title-color">
                  {{ $t("rewards") }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- rewards -->
      <div class="container">
        <div class="row">
          <div class="col">
            <div
              class="
                container
                refer-friend-container
                mt-5
                pt-5
                pb-5
                text-center
              "
            >
              <img
                src="@/assets/images/account-settings-refer-friend/trophy.png"
                class="reward-trophy img-fluid"
                alt=""
              />
              <div class="reward-title text-center pt-4">
                <div>Want to earn your first free month?</div>
                <div>Invite a friend!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <div
              class="
                container
                refer-points-container
                pl-5
                ml-4
                pt-5
                pb-5
                mb-5
                mr-5
                dark-bg
              "
            >
              <div class="row d-flex justify-content-center align-items-center">
                <div class="col">
                  <div class="rewards-num">10</div>
                </div>
                <div class="col">
                  <div class="rewards-num">30</div>
                </div>
              </div>
              <div class="row d-flex justify-content-center align-items-center">
                <div class="col">
                  <div class="rewards-txt">Friend(s) who bought</div>
                </div>
                <div class="col">
                  <div class="rewards-txt">FREE months added</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { UpdateSection, SectionReferral } from "@/types/Section";

export default defineComponent({
  setup() {
    // const switchSection = inject("switchSection");
    const sS = inject("switchSection") as UpdateSection<SectionReferral>;
    const switchSection = (section: SectionReferral) => {
      sS(section);
    };

    return {
      switchSection,
    };
  },
});
</script>

<style lang="scss" scoped>
.reward-trophy {
  width: 5rem;
  height: auto;
}

.reward-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.5rem;
  text-align: center;
  color: #383361;
}

.dark-bg {
  border-radius: 0px 0px 12px 12px;
  background: #463770;
  box-shadow: 0px 8px 14px rgba(214, 225, 243, 0.64);
}

.rewards-num {
  font-family: Poppins;
  font-weight: bold;
  font-size: 3rem;
  line-height: 3rem;
  text-align: center;
  color: #fff;
}

.rewards-txt {
  font-family: Poppins;
  font-weight: 300;
  font-size: 0.8rem;
  line-height: 1.2rem;
  text-align: center;
  color: #a897d8;
}

.dark-bg {
  background: #463770 !important;
  box-shadow: 0px 8px 14px rgba(214, 225, 243, 0.64);
}

.active-button {
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
}

.icon-color {
  color: #fff;
  opacity: 0.5;
}

.container {
  margin-left: 0px !important;
  margin-right: 0px !important;
  max-width: 1700px !important;
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
  /* border-radius: 10px; */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #fff;
  box-shadow: 0px 8px 14px rgba(214, 225, 243, 0.64);
}

.refer-points-container {
  width: 100%;
  /* border-radius: 10px; */
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #fff;
  box-shadow: 0px 8px 14px rgba(214, 225, 243, 0.64);
}

@media screen and (max-width: 992px) {
  .rewards-txt {
    font-size: 0.6rem;
  }

  .rewards-num {
    font-size: 2rem;
  }

  .reward-title {
    font-size: 1.2rem;
  }
}
</style>
