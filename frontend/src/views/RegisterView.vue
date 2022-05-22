<script setup lang="ts">

import { useRouter } from 'vue-router';
import TheNavBar from '@/components/TheNavBar.vue';
import TheAuthForm from '@/components/TheAuthForm.vue';
import useUserStore from '@/composables/useUserStore';

const router = useRouter();
const userStore = useUserStore();

if (userStore.value.user) router.back();

</script>

<template>
  <div :class="$style.overallContainer">
    <header>
      <TheNavBar :class="$style.navBar" />
    </header>
    <main :class="$style.pageContentContainer">
      <TheAuthForm type="register" />
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