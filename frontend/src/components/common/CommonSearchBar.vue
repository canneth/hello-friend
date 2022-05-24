<script setup lang="ts">

import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'focus-in'): void;
  (e: 'focus-out'): void;
}>();

function focusInHandlerInput(e: FocusEvent) {
  e.preventDefault();
  emit('focus-in');
}
function focusOutHandlerInput(e: FocusEvent) {
  e.preventDefault();
  emit('focus-out');
}

</script>

<template>
  <div :class="$style.overallContainer">
    <div :class="$style.searchIconContainer">
      <span class="iconify" data-icon="akar-icons:search" data-width="100%" data-height="100%"></span>
    </div>
    <input :class="$style.input" type="text" placeholder="Search for a chat" @focusin="focusInHandlerInput" @focusout="focusOutHandlerInput" />
  </div>
</template>

<style module>
.overallContainer {
  position: relative;
  width: 200px;
  height: 40px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  gap: 10px;
  overflow: clip;
}
.searchIconContainer {
  position: relative;
  display: flex;
  width: 30px;
  aspect-ratio: 1 / 1;
  color: var(--color-body);
  opacity: 0.2;
}
.input {
  position: relative;
  height: 100%;
  width: 100%;
  background: none;
  color: inherit;
  caret-color: inherit;
  font-size: inherit;
}
.input:focus {
  outline: none;
}
</style>