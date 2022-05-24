<script setup lang="ts">

const props = defineProps<{
  chatName: string;
  chatAvatar: string | null;
}>();

</script>

<template>
  <div :class="$style.overallContainer">
    <header :class="$style.topBanner">
      <div :class="$style.titleBlock">
        <div :class="$style.avatarContainer">
          <img :class="$style.avatarImg" :src="chatAvatar ?? 'placeholder-avatar.png'" object-fit="cover" />
        </div>
        <h1 :class="$style.chatTitle">
          {{ chatName }}
        </h1>
      </div>
      <div :class="$style.optionsBlock">
        <!-- TODO -->
      </div>
    </header>
  </div>
</template>

<style module>
.overallContainer {
  position: relative;
  display: flex;
  width: 100%;
  padding: 12px 20px;
}
.overallContainer::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: var(--color-body);
  box-shadow: var(--box-shadow-standard);
  opacity: 0.05;
}

.topBanner {
  position: relative;
  display: flex;
}

.titleBlock {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
}
.avatarContainer {
  position: relative;
  overflow: clip;
  width: 50px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: white;
}
.avatarImg {
  position: relative;
  width: 100%;
  height: 100%;
}
.chatTitle {
  position: relative;
  font-size: var(--font-size-regular);
}
.optionsBlock {
  position: relative;
}
</style>