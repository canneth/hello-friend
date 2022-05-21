<script setup lang="ts">

import { useRouter } from 'vue-router';
import TheNavBar from '@/components/TheNavBar.vue';
import SvgLogo from '@/components/svg/SvgLogo.vue';
import CommonButton from '@/components/common/CommonButton.vue';
import useUserStore from '@/composables/useUserStore';

const store = useUserStore();
const router = useRouter();

function clickHandlerChatButton(e: MouseEvent) {
  e.preventDefault();
  router.push('/chat');
}
function clickHandlerAboutButton(e: MouseEvent) {
  e.preventDefault();
  router.push('/about');
}

</script>

<template>
  <div :class="$style.overallContainer">
    <header>
      <TheNavBar :class="$style.navBar" />
    </header>
    <main :class="$style.pageContentContainer">
      <div :class="$style.heroContainer">
        <SvgLogo :class="$style.logoSvg" />
        <div :class="$style.heroContentContainer">
          <div :class="$style.heroTitleContainer">
            <h2>Welcome to</h2>
            <h1>HelloFriend!</h1>
          </div>
          <menu :class="$style.buttonBar">
            <CommonButton type="primary" text="Get Chatting!" @click="clickHandlerChatButton" />
            <CommonButton type="secondary" text="About" noBackground @click="clickHandlerAboutButton" />
          </menu>
        </div>
      </div>
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
.heroContainer {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
}
.logoSvg {
  width: clamp(220px, 40vw, 500px);
  height: auto;
  opacity: 0.8;
}
.heroContentContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.heroTitleContainer {
  position: relative;
  display: flex;
  flex-direction: column;
}
.heroTitleContainer > h2 {
  color: var(--color-primary-base);
  font-size: clamp(20px, 3vw, 30px);
}
.heroTitleContainer > h1 {
  font-weight: bold;
  color: var(--color-secondary-base);
  font-size: clamp(50px, 7vw, 100px);
}
.buttonBar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
}

@media (max-width: 800px) {
  .heroContainer {
    flex-direction: column;
  }
  .heroTitleContainer {
    align-items: center;
  }
  .buttonBar {
    justify-content: center;
  }
}
</style>