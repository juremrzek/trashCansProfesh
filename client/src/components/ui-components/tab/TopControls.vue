<template>
  <div class="main">
    <div class="start">
      <slot name="start"></slot>
    </div>

    <div class="end">
      <slot name="end"></slot>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  color: var(--ion-text-color);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 10vh;
  padding: 1.5rem;
}

.start {
  text-align: left;
}

.middle {
  text-align: center;
}

.end {
  text-align: right;
}
</style>
