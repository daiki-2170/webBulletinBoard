<template>
  <div class="main-layout">
    {{ "preview" }}
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, watch } from "vue";

const router = useRouter();
const now = ref("");
</script>

<style lang="sass" scoped>
.main-layout
  /* 通常のスタイル */

  @media screen and (max-width: 600px)
    /* 600px以下の画面幅に対するスタイル */
</style>
