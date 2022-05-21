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
  border-radius: 7px;
  overflow: clip;
}
.overallContainer::before {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background-color: var(--color-primary);
  transition:
    background-color 100ms ease-out,
    opacity 100ms ease-out;
}
.overallContainer.secondary::before {
  background-color: var(--color-contrast-dark);
}

.text {
  font-size: inherit;
  color: var(--color-body);
  white-space: nowrap;
  transition: color 100ms ease-out;
}

.overallContainer:hover {
  cursor: pointer;
}
.overallContainer:hover::before {
  opacity: 1;
}
.overallContainer.secondary:hover::before {
  background-color: var(--color-contrast-light);
}
</style>