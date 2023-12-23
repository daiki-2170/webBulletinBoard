<template>
  <div>
    <label for="password">Password:</label>
    <input
      id="password"
      type="password"
      v-model="password"
      @input="handleInput"
    />
    <div v-if="showPassword">Password: {{ password }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const password = ref('');
const showPassword = ref(false);

const handleInput = () => {
  // ここでパスワードを表示するかどうかのロジックを追加できます
  showPassword.value = password.value.length > 0;
};
</script>

<style lang="sass" scoped>
/* スタイリングを追加できます */
</style>
