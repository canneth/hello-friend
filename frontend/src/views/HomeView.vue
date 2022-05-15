<script setup lang="ts">

import TheNavBar from '@/components/TheNavBar.vue';
import useRootStore from '@/store/useRootStore';

const store = useRootStore();

</script>

<template>
  <div class="overall-container">
    <header>
      <TheNavBar />
    </header>
    <main class="page-content-container">
      <p>I am the HomeView!</p>
    </main>
  </div>
</template>

<style scoped>
.page-content-container {
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
}
</style>