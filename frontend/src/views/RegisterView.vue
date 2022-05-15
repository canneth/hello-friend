<script setup lang="ts">

import TheNavBar from '@/components/TheNavBar.vue';

</script>

<template>
  <div :class="$style.overallContainer">
    <header>
      <TheNavBar :class="$style.navBar" />
    </header>
    <main :class="$style.pageContentContainer">
      This is the RegisterView!
    </main>
  </div>
</template>

<style module>
.overallContainer {
  position: relative;
  width: 100%;
  height: 100%;
}
.navBar {
  z-index: 1;
}
.pageContentContainer {
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
}
</style>