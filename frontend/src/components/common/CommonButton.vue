<script setup lang="ts">

import { useRouter } from 'vue-router';

const props = defineProps<{
  text: string;
  type: 'primary' | 'secondary';
}>()

const router = useRouter();

</script>

<template>
  <button :class="`${$style.overallContainer} ${$style[props.type]}`">
    <p :class="$style.text">{{ text }}</p>
  </button>
</template>

<style module>
.overallContainer {
  position: relative;
  display: grid;
  place-items: center;
  padding: 13px 26px;
  border: 2px solid transparent;
  font-size: var(--font-size-regular);
  overflow: clip;
  box-shadow: var(--box-shadow-standard);
  background-color: var(--color-contrast-light);
  transition:
    background-color 100ms ease-out,
    box-shadow 100ms ease-out;
}
.overallContainer.secondary {
  background-color: var(--color-contrast-dark);
}
.overallContainer:hover {
  cursor: pointer;
  box-shadow: var(--box-shadow-hover);
  background-color: var(--color-primary-base);
}

.text {
  font-size: inherit;
  color: var(--color-body);
  white-space: nowrap;
  transition: opacity 100ms ease-out;
}
.overallContainer:hover > .text {
  opacity: 1;
}
</style>