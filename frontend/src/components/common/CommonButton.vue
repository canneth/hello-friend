<script setup lang="ts">

import { useRouter } from 'vue-router';

const props = defineProps<{
  text: string;
  url: string;
  noBackground?: boolean;
}>()

const router = useRouter();

function clickHandler(e: MouseEvent) {
  e.preventDefault();
  router.push(props.url);
}

</script>

<template>
  <button
    :class="`overall-container ${noBackground ? 'no-background' : null}`"
    @click="clickHandler">
    <p class="text">{{ text }}</p>
  </button>
</template>

<style scoped>
.overall-container {
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
}

.overall-container.no-background {
  background-color: var(--color-grey-white);
}
.overall-container.no-background > .text {
  color: var(--color-primary-dark);
}

.overall-container:hover {
  cursor: pointer;
  background-color: white;
  border-color: var(--color-grey-black);
}
.overall-container:hover > .text {
  color: var(--color-grey-black);
}
</style>