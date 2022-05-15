<script setup lang="ts">

import TheNavBar from '@/components/TheNavBar.vue';
import CommonButton from '@/components/common/CommonButton.vue';
import useRootStore from '@/composables/useRootStore';
import mockUser from '@/mocks/mockUser';

const store = useRootStore();

function clickHandlerLogInButton(e: MouseEvent) {
  e.preventDefault();
  store.value.setLoggedInUser(mockUser);
}

</script>

<template>
  <div :class="$style.overallContainer">
    <header>
      <TheNavBar :class="$style.navBar" />
    </header>
    <main :class="$style.pageContentContainer">
      <CommonButton text="Temporary log in button" @click="clickHandlerLogInButton" />
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