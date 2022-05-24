<script setup lang="ts">

import { RouterView, useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import useUserStore from '@/composables/useUserStore';
import useUIStore from '@/composables/useUIStore';
import type { LoggedInUser } from '@/store/userStore';
import { LS_LOGGED_IN_USER_KEY_NAME } from '@/globals/constants';
import backendAxios from '@/globals/configuredAxios';

const userStore = useUserStore();

(async () => {
  const claimedUserId = localStorage.getItem(LS_LOGGED_IN_USER_KEY_NAME);
  try {
    if (!claimedUserId) return backendAxios.post('/api/auth/logout');
    const { data: { verified } } = await backendAxios.post('/api/auth/verify', { userId: claimedUserId });
    if (verified) {
      const { data: { user } } = await backendAxios.get<{ user: LoggedInUser }>(`/api/users/${claimedUserId}`);
      userStore.value.setUser(user);
    } else {
      localStorage.removeItem(LS_LOGGED_IN_USER_KEY_NAME);
      userStore.value.setUser(null);
      await backendAxios.post('/api/auth/logout');
    }
    return;
  } catch (err) {
    console.log(err);
    if (!axios.isAxiosError(err)) return;
    if (!err.response) return;
  }
})();

const router = useRouter();
const route = useRoute();
const uiStore = useUIStore();

router.beforeEach((to, from) => {
  if (to.name === 'login' || to.name === 'register') {
    if (from.name === 'login' || from.name === 'register') return;
    uiStore.value.setLastPathVisitedBeforeLogin(from.path);
    console.log(`From: ${from.path} To: ${to.path} | in store: ${uiStore.value.lastPathVisitedBeforeLogin}`);
  }
});

</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition
      :enter-from-class="$style.pageEnterFrom"
      :enter-active-class="$style.pageEnterActive"
      :enter-to-class="$style.pageEnterTo"
      :leave-from-class="$style.pageLeaveFrom"
      :leave-active-class="$style.pageLeaveActive"
      :leave-to-class="$style.pageLeaveTo">
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
</template>

<style module>
.pageEnterActive {
  position: absolute !important;
  animation: page-enter 300ms ease-out;
}
.pageLeaveActive {
  position: absolute !important;
  animation: page-exit 300ms ease-out;
}

@keyframes page-enter {
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
@keyframes page-exit {
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
</style>

<style>
/* Global styles */

* {
  box-sizing: border-box;
  font-family: 'Verdana', 'Open Sans', sans-serif;

  /* Resets */
  margin: 0;
  padding: 0;
  border: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  font-weight: normal;

  /* Font sizes */
  --font-size-web-smaller: 12px;
  --font-size-web-small: 14px;
  --font-size-web-regular: 16px;
  --font-size-web-large: 22px;
  --font-size-web-larger: 26px;
  --font-size-web-largest: 32px;
  --font-size-mobile-smaller: 11px;
  --font-size-mobile-small: 12px;
  --font-size-mobile-regular: 14px;
  --font-size-mobile-large: 16px;
  --font-size-mobile-larger: 20px;
  --font-size-mobile-largest: 26px;

  --font-size-smaller: var(--font-size-web-smaller);
  --font-size-small: var(--font-size-web-small);
  --font-size-regular: var(--font-size-web-regular);
  --font-size-large: var(--font-size-web-large);
  --font-size-larger: var(--font-size-web-larger);
  --font-size-largest: var(--font-size-web-largest);

  /* Color palette */

  --color-secondary-base: #ff6c40;
  --color-primary-base: #ffa551;
  --color-status-ok: #6AE9BF;
  --color-status-warning: #EDC84C;
  --color-status-error: #E96A6A;
  --color-body: #FFFFFF;
  --color-background: #1b1b1b;
  --color-contrast-light: #272727;
  --color-contrast-dark: #131313;

  /* Box shadows */
  --box-shadow-standard: 2px 2px 4px 1px rgba(0, 0, 0, 0.05);
  --box-shadow-hover: 3px 3px 6px 1px rgba(0, 0, 0, 0.1);

  /* Scrollbar styling for Firefox */
  scrollbar-width: thin;
  scrollbar-color: var(--color-background) var(--color-contrast-light);
}

/* Scrollbar styling for Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 8px;
}
*::-webkit-scrollbar-track {
  background-color: var(--color-background);
}
*::-webkit-scrollbar-thumb {
  background-color: var(--color-contrast-light);
  border-radius: 4px;
}
*::-webkit-scrollbar-thumb:hover {
  background-color: var(--color-primary-base);
}

body {
  background-color: var(--color-background);
}

h1 {
  color: var(--color-body);
}

p {
  color: var(--color-body);
  font-size: var(--font-size-regular);
}
label {
  color: var(--color-body);
  font-size: var(--font-size-small);
  opacity: 0.5;
}
input {
  color: var(--color-body);
  font-size: var(--font-size-regular);
}
a {
  position: relative;
  color: var(--color-secondary-base);
  text-decoration: none;
  transition: color 100ms ease-out;
}
a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0px;
  background: var(--color-primary-base);
  transform: scaleX(0);
  transition: transform 100ms ease-out;
}

button {
  background: none;
}
menu {
  list-style-type: none;
  padding-inline-start: 0px;
}

/* Media queries*/

@media (hover: hover) {
  a:hover {
    color: var(--color-primary-base);
  }
  a:hover::before {
    transform: scaleX(1);
  }
}
@media (max-width: 600px) {
  * {
    --font-size-smaller: var(--font-size-mobile-smaller);
    --font-size-small: var(--font-size-mobile-small);
    --font-size-regular: var(--font-size-mobile-regular);
    --font-size-large: var(--font-size-mobile-large);
    --font-size-larger: var(--font-size-mobile-larger);
    --font-size-largest: var(--font-size-mobile-largest);
  }
}
</style>
