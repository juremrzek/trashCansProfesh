<template>
  <div class="main">
    <slot></slot>
  </div>
</template>

<style scoped>
.main {
  background-color: var(--ion-color-primary);
  min-width: 20vw;
  min-height: 100%;
  border: 2px solid var(--ion-color-tertiary);
  vertical-align: middle;
  text-align: center;
  padding: 1rem;
}
</style>
