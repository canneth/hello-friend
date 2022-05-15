<script setup lang="ts">

// const props = defineProps<{
//
// }>()

</script>

<template>
  <div :class="$style.overallContainer">
    <div :class="$style.searchIconContainer">
      <span class="iconify" data-icon="akar-icons:search" data-width="100%" data-height="100%"></span>
    </div>
    <input :class="$style.input" type="text" placeholder="Search for a chat" />
  </div>
</template>

<style module>
.overallContainer {
  position: relative;
  width: 200px;
  height: 40px;
  background: var(--color-primary-lighter);
  border-radius: 7px;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  gap: 10px;
}
.searchIconContainer {
  position: relative;
  display: flex;
  width: 30px;
  aspect-ratio: 1 / 1;
  color: var(--color-grey-dark);
}
.input {
  position: relative;
  height: 100%;
  width: 100%;
  background: none;
  color: var(--color-grey-black);
}
.input:focus {
  outline: none;
}
</style>