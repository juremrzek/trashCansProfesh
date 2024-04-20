<template>
      <div class="trash-box">
        <slot></slot>
      </div>
  </template>
  
  <script setup lang="ts">
    import TrashBox from "@/components/ui-components/gameElement/TrashBox.vue";
</script>

  <style scoped>
  .trash-box {
    width: 100%;
    height: 20vh;
    background: var(--ion-color-primary); 
    border: 10px solid var(--ion-color-tertiary);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 50%;
    object-fit: cover;
  }
  </style>
  