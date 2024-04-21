<template>
  <div class="tab-navigation" ref="tabNavigation">
    <button @click="prevTab">&lt;</button>
    <div ref="tabContent" class="tab-content">
      <slot></slot>
    </div>
    <button @click="nextTab">&gt;</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Hammer from 'hammerjs';

onMounted(() => {
  const tabContent = ref<HTMLElement | null>(null);

  // Initialize Hammer.js for swipe detection
  const mc = new Hammer(tabContent.value);
  mc.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
  mc.on('swipeleft', nextTab);
  mc.on('swiperight', prevTab);

  function nextTab() {
    // Implement logic to switch to the next tab
    // For example, emit an event or update a data property
  }

  function prevTab() {
    // Implement logic to switch to the previous tab
    // For example, emit an event or update a data property
  }
});
</script>

<style scoped>
.tab-navigation {
  display: flex;
  align-items: center;
}

.tab-content {
  flex: 1;
  overflow-x: hidden; /* Ensure tabs don't overflow */
}
</style>
