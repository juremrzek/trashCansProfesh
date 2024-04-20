<template>
  <h3 class="ion-text-center">
    <slot></slot>
  </h3>
  <div class="line"></div>
</template>

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
