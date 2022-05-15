<script setup lang="ts">

import TheNavBar from '@/components/TheNavBar.vue';
import useRootStore from '@/composables/useRootStore';
import SvgLogo from '../components/svg/SvgLogo.vue';
import CommonButton from '../components/common/CommonButton.vue';

const store = useRootStore();

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
            <CommonButton text="Get Chatting!" url="/chat" />
            <CommonButton text="About" noBackground url="/about" />
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
  font-size: clamp(20px, 3vw, 40px);
}
.heroTitleContainer > h1 {
  font-size: clamp(50px, 8vw, 100px);
}
.buttonBar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
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