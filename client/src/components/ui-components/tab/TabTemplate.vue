<template>
  <ion-page>
    <slot name="header"></slot>
    <ion-content color="primary fade-in">
      <ion-content id="tab-template-body" class="brd">
        <slot name="body"></slot>

        <!--  -->
      </ion-content>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import type { PropType } from "vue"
import { IonPage, IonContent } from "@ionic/vue"

defineProps({
  refresh: {
    type: Function as PropType<(event: CustomEvent) => any>,
    default: async (event: CustomEvent) => {
      event.detail.complete()
    },
  },
  scroll: {
    type: Function,
    default: () => {
      return null
    },
  },
  isRefreshable: {
    type: Boolean,
    default: true,
  },
})
</script>

<style scoped>
.tab-body {
  width: 100%;
  height: 100%;
  background-color: var(--ion-background-color);
}

.header-text {
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: 500;
}

.fake-border {
  background-color: var(--ion-background-color) !important;
  min-height: 20px !important;
}

.brd {
  --ion-background-color: transparent;
  background-color: rgb(var(--ion-background-color-rgb)) !important;
  overflow: hidden;
}
</style>
