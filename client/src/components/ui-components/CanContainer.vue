<template>
  <div class="trash-box">
    <slot></slot>
  </div>
</template>

<style scoped>
.trash-box {
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  position: fixed;
  bottom: 150px;
  width: 100%;
  opacity: 1;
}

img {
  width: 50%;
  object-fit: cover;
}
</style>
