<template>
  <tab-template>
    <template #header>
      <tab-header>Statistike </tab-header>
    </template>
    <template #body>
      <list-container>
        <template #title>
          <list-title> Statistike </list-title>
        </template>
        <template #default>
          <!-- Score -->
          <list-item>
            <template #title>Seštevek točk</template>
            <template #value>{{ score }}</template>
          </list-item>
          <!-- Fails -->
          <list-item>
            <template #title>Spodrslaji</template>
            <template #value>{{ fails.length }}</template>
          </list-item>
          <!-- Streak -->
          <list-item>
            <template #title>Niz pravilnih rešitev</template>
            <template #value>{{ streak }}</template>
          </list-item>
          <!-- Max streak -->
          <list-item>
            <template #title>Najdaljši niz pravilnih rešitev</template>
            <template #value>{{ maxStreak }}</template>
          </list-item>
          <!-- Max level -->
          <list-item>
            <template #title>Doseženi level</template>
            <template #value>{{ maxLevel }}</template>
          </list-item>
        </template>
      </list-container>
    </template>
  </tab-template>
</template>

<script setup lang="ts">
import TabTemplate from "@/components/ui-components/tab/TabTemplate.vue"
import TabHeader from "@/components/ui-components/tab/TabHeader.vue"

import ListContainer from "@/components/ui-components/list/ListContainer.vue"
import ListTitle from "@/components/ui-components/list/ListTitle.vue"
import ListItem from "@/components/ui-components/list/ListItem.vue"

import { usePlayerStore } from "@/stores/usePlayerStore"
import { storeToRefs } from "pinia"

const { score, fails, streak, maxStreak, maxLevel } = storeToRefs(
  usePlayerStore()
)
</script>
