<script setup lang="ts">

import { useRouter } from 'vue-router';
import TheNavBar from '@/components/TheNavBar.vue';
import TheAuthForm from '@/components/TheAuthForm.vue';

const router = useRouter();

function clickHandlerLoginRedirectLink(e: MouseEvent) {
  e.preventDefault();
  router.push('/login');
}
function clickHandlerRegisterButton(e: MouseEvent) {
  e.preventDefault();
  /*
    TODO:
    * Make call to backend to register user.
    * Make call to backend to log user in.
    * Store logged in userId in local storage.
    * Set logged in user in store.
  */
  router.back();
}

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