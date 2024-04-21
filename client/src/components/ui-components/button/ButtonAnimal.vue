<template>
    <ion-button :color="color" :style="{ width: '100px', height: '100px' }">
        <img :src="imgSrc" :alt="altText" style="max-width: 100%; max-height: 100%;">
    </ion-button>
  </template>

  <script setup lang="ts">
  import { IonButton } from "@ionic/vue"

  defineProps({
    color: {
      type: String,
      default: "var(--ion-color-primary)"
    },
    imgSrc: {
        type: String
    }
  })
  </script>

  <style scoped>
  ion-button {
    --border-radius: 100000rem;
    --border-color: var(--ion-color-tertiary);
    --border-width: 5px;
    --border-style: solid;
  }
  </style>
