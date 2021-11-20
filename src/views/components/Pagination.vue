<template>
  <nav v-if="pages > 1" aria-label="...">
    <ul class="pagination">
      <li v-if="currentPage === 1" class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1">&laquo;</a>
      </li>
      <li v-else class="page-item">
        <a
          class="page-link"
          @click.prevent="gotoPage(currentPage - 1)"
          href="#"
        >
          &laquo;
        </a>
      </li>

      <template v-for="item in pages" :key="item">
        <li v-if="item !== currentPage" class="page-item">
          <a class="page-link" @click.prevent="gotoPage(item)" href="#">
            {{ item }}
          </a>
        </li>
        <li v-else class="page-item active">
          <a class="page-link" href="#">
            {{ item }} <span class="sr-only">(current)</span>
          </a>
        </li>
      </template>

      <li v-if="currentPage === pages" class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1">&raquo;</a>
      </li>
      <li v-else class="page-item">
        <a
          class="page-link"
          @click.prevent="gotoPage(currentPage + 1)"
          href="#"
        >
          &raquo;
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import { itemsPerPage } from "@/config/Tables";

export default defineComponent({
  props: {
    total: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    rowsPerPage: {
      type: Number,
      default: itemsPerPage,
    },
  },
  setup(props, context) {
    const pages = computed(() => {
      return Math.ceil(props.total / props.rowsPerPage);
    });

    const gotoPage = (page: number) => {
      context.emit("gotoPage", page);
    };
    return {
      gotoPage,
      pages,
    };
  },
});
</script>

<style lang="scss" scoped>
.page-item.active .page-link {
  background-color: var(--swoshs-color1);
  border-color: var(--swoshs-color1);
}
.page-link {
  color: var(--swoshs-color1);
}
</style>
