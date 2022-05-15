<script setup lang="ts">

import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CommonButton from '@/components/common/CommonButton.vue';
import TheNavBarProfileButton from '@/components/TheNavBarProfileButton.vue';
import useRootStore from '@/composables/useRootStore';
import SvgLogo from '@/components/svg/SvgLogo.vue';

const store = useRootStore();
const router = useRouter();
const route = useRoute();

const displayName = computed(() => {
  // Grab just the first word in the name.
  return store.value.loggedInUser?.name.split(' ')[0];
});

function clickHandlerLoginButton(e: MouseEvent) {
  e.preventDefault();
  router.push('/login');
}

function clickHandlerSignupButton(e: MouseEvent) {
  e.preventDefault();
  router.push('/register');
}

function clickHandlerHomeButton(e: MouseEvent) {
  e.preventDefault();
  router.push('/');
}

function clickHandlerProfileButton(e: MouseEvent) {
  e.preventDefault();
  // TODO: Route to profile page.
}

function clickHandlerLogOut(e: MouseEvent) {
  e.preventDefault();
  store.value.setLoggedInUser(null);
  // TODO: Send call to backend to log user out.
}

</script>

<template>
  <div :class="$style.overallContainer">
    <button
      v-if="route.name !== 'home'"
      :class="$style.homeButton"
      @click="clickHandlerHomeButton">
      <SvgLogo :class="$style.logoSvg" />
    </button>
    <menu v-if="store.loggedInUser" :class="$style.loggedInOptionsContainer">
      <CommonButton :class="$style.logOutButton" text="Log Out" noBackground @click="clickHandlerLogOut" />
      <TheNavBarProfileButton
        v-if="store.loggedInUser"
        :class="$style.profileButton"
        :displayName="displayName!"
        :avatarSrc="store.loggedInUser.avatarSrc"
        @click="clickHandlerProfileButton" />
    </menu>
    <menu v-else :class="$style.notLoggedInOptionsContainer">
      <CommonButton text="Log In" noBackground @click="clickHandlerLoginButton" />
      <CommonButton text="Sign Up" @click="clickHandlerSignupButton" />
    </menu>
  </div>
</template>

<style module>
.overallContainer {
  position: fixed;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
}
.loggedInOptionsContainer {
  position: absolute;
  height: 100%;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
}
.notLoggedInOptionsContainer {
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
}
.profileButton {
  position: relative;
  height: 100%;
  padding: 10px;
}
.logOutButton {
  padding: 5px 12px;
  border-radius: 4px;
  font-size: var(--font-size-small);
}
.homeButton {
  position: absolute;
  left: 20px;
  transition: transform 100ms ease-out;
}
.logoSvg {
  height: 80%;
  width: auto;
}

@media (hover: hover) {
  .homeButton:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
}

@media (max-width: 600px) {
  .loggedInOptionsContainer,
  .notLoggedInOptionsContainer {
    right: 10px;
  }
  .homeButton {
    left: 10px;
  }
}
</style>