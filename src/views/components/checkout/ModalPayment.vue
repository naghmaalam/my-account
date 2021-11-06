<template>
  <SimpleFade>
    <div class="modal-backdrop" v-if="open"></div>
  </SimpleFade>
  <Fade>
    <div class="modal show d-block" v-if="open">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <img
                src="@/assets/images/password-recovery/logo-swoshs.png"
                class="img-fluid mob-res-logo"
                style="min-height: 65px"
                alt="swoshs-logo"
              />
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="closeModal"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="text-center">{{ text }}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary swoshs-btn"
              data-dismiss="modal"
              @click="closeModal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </Fade>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import Fade from "@/views/components/transitions/Fade.vue";
import SimpleFade from "@/views/components/transitions/SimpleFade.vue";

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
    text: {
      type: String,
      default: "",
    },
  },
  setup(_, context) {
    const closeModal = () => {
      context.emit("update:open", false);
    };

    return {
      closeModal,
    };
  },
});
</script>

<style lang="scss" scoped>
.modal-backdrop {
  background: #000000c4;
  z-index: 1031;
}

.modal {
  .modal-header {
    position: relative;
    border-bottom: 0;
    .close {
      position: absolute;
      right: 1rem;
    }
  }

  .modal-footer {
    border-top: 0;
  }

  .swoshs-btn {
    background: linear-gradient(#a215ff 0%, #5f29ff 100%);
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 5px;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
