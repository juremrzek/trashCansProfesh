<template>
  <div class="trash-box">
    <slot></slot>
  </div>
</template>

<style scoped>
.trash-box {
  width: 100%;
  height: 20vh;
  border: 10px solid var(--ion-color-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  position: fixed;
  bottom: 0%;
  width: 100%;
  background-color: var(--ion-color-primary);
  opacity: 1;
}
img {
  width: 50%;
  object-fit: cover;
}
</style>
