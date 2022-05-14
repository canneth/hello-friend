<script setup lang="ts">
import { useStore } from '@/store';

const store = useStore();

</script>

<template>
  <div class="overall-container">
    <p>I am the HomeView!</p>
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