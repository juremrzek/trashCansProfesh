<template>
  <ion-page>
    <ion-tabs>
      <!-- Component view -->
      <ion-router-outlet></ion-router-outlet>

      <div class="line"></div>
      <!-- Bootom tool bar -->
      <ion-tab-bar slot="bottom">
        <!-- Game -->
        <ion-tab-button
          tab="game"
          @click.prevent="redirectTo('game')"
          :class="selectedTabStyle('game')"
        >
          <font-awesome-icon :icon="['fas', 'paw']" size="2xl" fixed-width />
        </ion-tab-button>
        <!-- Profile -->
        <ion-tab-button
          tab="profile"
          @click.prevent="redirectTo('profile')"
          :class="selectedTabStyle('profile')"
        >
          <font-awesome-icon :icon="['fas', 'paw']" size="2xl" fixed-width />
        </ion-tab-button>
        <!-- Roadmap -->
        <ion-tab-button
          tab="roadmap"
          @click.prevent="redirectTo('roadmap')"
          :class="selectedTabStyle('roadmap')"
        >
          <font-awesome-icon :icon="['fas', 'paw']" size="2xl" fixed-width />
        </ion-tab-button>
        <!-- Misshups -->
        <ion-tab-button
          tab="misshups"
          @click.prevent="redirectTo('misshups')"
          :class="selectedTabStyle('misshups')"
        >
          <font-awesome-icon :icon="['fas', 'paw']" size="2xl" fixed-width />
        </ion-tab-button>
      </ion-tab-bar>
      <!-- End bottom tool bar -->
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue"

import { useTabNavigation } from "@/composables/useTabNavigation"

const { selectedTabStyle, redirectTo } = useTabNavigation()
</script>

<style scoped>
@media (min-width: 1200px) {
  ion-router-outlet {
    margin-left: 20vw;
    margin-right: 20vw;
  }
}

ion-tabs {
  background-color: var(--ion-color-primary);
}

.line {
  height: 2px;
  background: black;
  width: 100vw;
  border-bottom: 5px solid var(--ion-color-tertiary);
}
</style>
