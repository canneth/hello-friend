<script setup lang="ts">

import { useRouter } from 'vue-router';

const props = defineProps<{
  text: string;
  noBackground?: boolean;
}>()

const router = useRouter();

</script>

<template>
  <button :class="`${$style.overallContainer} ${noBackground ? $style.noBackground : null}`">
    <p :class="$style.text">{{ text }}</p>
  </button>
</template>

<style module>
.overallContainer {
  position: relative;
  display: grid;
  place-items: center;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: var(--color-primary-dark);
  border: 2px solid transparent;
  transition:
    background-color 100ms ease-out,
    border-color 100ms ease-out;
}
.text {
  font-weight: bold;
  font-size: var(--font-size-regular);
  color: var(--color-grey-white);
  transition: color 100ms ease-out;
  white-space: nowrap;
}

.overallContainer.noBackground {
  background-color: var(--color-grey-white);
}
.overallContainer.noBackground > .text {
  color: var(--color-primary-dark);
}

.overallContainer:hover {
  cursor: pointer;
  background-color: white;
  border-color: var(--color-grey-black);
}
.overallContainer:hover > .text {
  color: var(--color-grey-black);
}
</style>