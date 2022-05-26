<script setup lang="ts">

const props = defineProps<{
  displayName: string;
  avatarSrc?: string;
}>()

</script>

<template>
  <button :class="$style.overallContainer">
    <p :class="$style.text">
      Welcome, {{ displayName }}
    </p>
    <div :class="$style.avatarContainer">
      <img
        :class="$style.avatarImg"
        :src="avatarSrc ?? 'placeholder-avatar.png'"
        object-fit="cover" />
    </div>
  </button>
</template>

<style module>
.overallContainer {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
}
.text {
  color: var(--color-body);
  font-size: var(--font-size-small);
  transition: color 100ms ease-out;
}
.avatarContainer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: 1px solid transparent;
  border-radius: 50%;
  padding: 1px;
  overflow: clip;
  transition: border-color 100ms ease-out;
}
.avatarImg {
  position: relative;
  width: 100%;
  height: 100%;
}

@media (hover: hover) {
  .overallContainer:hover {
    cursor: pointer;
  }
  .overallContainer:hover > .text {
    color: var(--color-primary-base);
  }
  .overallContainer:hover > .avatarContainer {
    border-color: var(--color-primary-base);
  }
}
</style>