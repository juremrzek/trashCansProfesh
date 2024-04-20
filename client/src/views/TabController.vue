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
        <img src="../../public/assets/designImages/menu/user.svg" width="40px"/>
        </ion-tab-button>
        <!-- Profile -->
        <ion-tab-button
          tab="profile"
          @click.prevent="redirectTo('profile')"
          :class="selectedTabStyle('profile')"
        >

        <img class="svg-color-change" src="../../public/assets/designImages/menu/games.svg" alt="Games SVG">

        </ion-tab-button>
        <!-- Roadmap -->
        <ion-tab-button
          tab="roadmap"
          @click.prevent="redirectTo('roadmap')"
          :class="selectedTabStyle('roadmap')"
        >
        <img src="../../public/assets/designImages/menu/recycle-bin.svg"/>
        </ion-tab-button>
        <!-- Misshups -->
        <ion-tab-button
          tab="misshups"
          @click.prevent="redirectTo('misshups')"
          :class="selectedTabStyle('misshups')"
        >
        <img src="../../public/assets/designImages/menu/laugh.svg"/>
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
img {
  width: 40px;
  /*filter: brightness(100);*/
} 
</style>
