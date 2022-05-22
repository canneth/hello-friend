<script setup lang="ts">

import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import CommonButton from '@/components/common/CommonButton.vue';
import TheNavBarProfileButton from '@/components/TheNavBarProfileButton.vue';
import useUserStore from '@/composables/useUserStore';
import SvgLogo from '@/components/svg/SvgLogo.vue';
import backendAxios from '@/globals/configuredAxios';
import { LS_LOGGED_IN_USER_KEY_NAME } from '@/globals/constants';

const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const displayName = computed(() => {
  // Grab just the first word in the name.
  return userStore.value.user?.name.split(' ')[0];
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

async function clickHandlerLogOut(e: MouseEvent) {
  e.preventDefault();
  try {
    await backendAxios.post('/api/auth/logout');
    userStore.value.setUser(null);
    localStorage.removeItem(LS_LOGGED_IN_USER_KEY_NAME);
  } catch (err) {
    console.log(err);
    if (!axios.isAxiosError(err)) return;
    if (!err.response) return;
    console.log(err.response);
  }
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
    <Transition
      :enter-active-class="$style.optionsContainerEnterActive"
      :leave-active-class="$style.optionsContainerLeaveActive">
      <menu v-if="userStore.user" :class="$style.loggedInOptionsContainer">
        <CommonButton :class="$style.logOutButton" type="secondary" text="Log Out" noBackground @click="clickHandlerLogOut" />
        <TheNavBarProfileButton
          v-if="userStore.user"
          :class="$style.profileButton"
          :displayName="displayName!"
          :avatarSrc="userStore.user.avatarSrc"
          @click="clickHandlerProfileButton" />
      </menu>
      <menu v-else :class="$style.notLoggedInOptionsContainer">
        <CommonButton type="secondary" text="Log In" noBackground @click="clickHandlerLoginButton" />
        <CommonButton type="primary" text="Sign Up" @click="clickHandlerSignupButton" />
      </menu>
    </Transition>
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
  padding: 10px 20px;
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

.optionsContainerEnterActive {
  position: absolute !important;
  animation: fade-in 200ms ease-out;
}
.optionsContainerLeaveActive {
  position: absolute !important;
  animation: fade-out 200ms ease-out;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
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