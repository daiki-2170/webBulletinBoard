<template>
  <div class="main-layout">
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.main-layout
  /* 通常のスタイル */

  @media screen and (max-width: 600px)
    /* 600px以下の画面幅に対するスタイル */
</style>
