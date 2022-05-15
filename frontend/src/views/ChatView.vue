<script setup lang="ts">

import { useRouter } from 'vue-router';
import useRootStore from '@/composables/useRootStore';

const router = useRouter();
const store = useRootStore();

if (!store.value.loggedInUser) router.push('/login');

</script>

<template>
  <div class="overall-container">
    <p>I am the ChatView!</p>
  </div>
</template>

<style scoped>
.overall-container {
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
}
</style>