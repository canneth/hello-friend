<script setup lang="ts">

import TheNavBar from '@/components/TheNavBar.vue';
import useRootStore from '@/composables/useRootStore';
import SvgLogo from '../components/svg/SvgLogo.vue';
import CommonButton from '../components/common/CommonButton.vue';

const store = useRootStore();

</script>

<template>
  <div class="overall-container">
    <header>
      <TheNavBar />
    </header>
    <main class="page-content-container">
      <div class="hero-container">
        <SvgLogo class="logo-svg" />
        <div class="hero-content-container">
          <div class="hero-title-container">
            <h2>Welcome to</h2>
            <h1>HelloFriend!</h1>
          </div>
          <menu class="button-bar">
            <CommonButton text="Get Chatting!" url="/chat" />
            <CommonButton text="About" noBackground url="/about" />
          </menu>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.page-content-container {
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
}
.hero-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
}
.logo-svg {
  width: clamp(220px, 40vw, 500px);
  height: auto;
}
.hero-content-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.hero-title-container {
  position: relative;
  display: flex;
  flex-direction: column;
}
.hero-title-container > h2 {
  font-size: clamp(20px, 3vw, 40px);
}
.hero-title-container > h1 {
  font-size: clamp(50px, 8vw, 100px);
}
.button-bar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
}

@media (max-width: 800px) {
  .hero-container {
    flex-direction: column;
  }
  .hero-title-container {
    align-items: center;
  }
  .button-bar {
    justify-content: center;
  }
}
</style>