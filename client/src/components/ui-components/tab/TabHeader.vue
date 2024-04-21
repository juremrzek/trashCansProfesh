<template>
  <div>
    <h3 class="ion-text-center">
      <font-awesome-icon :icon="['fas', 'bottle-water']" size="xs" />
      {{ score }}
    </h3>
    <div class="line"></div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from "@/stores/usePlayerStore"
import { storeToRefs } from "pinia"

const { score } = storeToRefs(usePlayerStore())
</script>

<style scoped>
h3 {
  text-transform: uppercase;
  font-size: 6vh;
  letter-spacing: 1px;
  font-weight: 500;
  margin: 0;
  padding-bottom: 5px;
  padding-top: 5px;
  height: 8vh;
  vertical-align: middle;
  background-color: var(--ion-color-primary);
  color: var(--ion-color-tertiary);
}
</style>

<style>
.line {
  height: 2px;
  background: black;
  width: 100vw;
  border-bottom: 5px solid var(--ion-color-tertiary);
}
</style>
