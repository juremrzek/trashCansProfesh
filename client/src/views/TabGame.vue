<template>
  <tab-template>
    <template #body>
      <top-controls>
        <template #start>
          <font-awesome-icon
            @click="routes.push({ name: 'roadmap' })"
            :icon="['fas', 'x']"
            size="2xl"
            fixed-width
            style="cursor: pointer; padding-top: 1rem"
          />
        </template>
        <template #end>
          <box-info>
            <div class="streak-label">Zaporedje: {{ streak }}</div>
          </box-info>
        </template>
      </top-controls>
      <can-container v-if="!gameOver">
        <trash-box
          @click="evaluate(can?.category as string)"
          v-for="can in getBins()"
          :key="can?.category"
        ></trash-box>
      </can-container>
      <backgroud-image>
        <trash-footer>
          <!-- getTrash -->
          <trash-box v-if="!gameOver"></trash-box>
          <p v-else-if="currentLevel?.completed">Uspešno ste zaključili nivo</p>
          <p v-else>Tokrat vam ni uspelo, več sreče prihodnjič</p>
        </trash-footer>
      </backgroud-image>
    </template>
  </tab-template>
</template>

<script setup lang="ts">
import TabTemplate from "@/components/ui-components/tab/TabTemplate.vue"
import TrashBox from "@/components/ui-components/gameElement/TrashBox.vue"
import TopControls from "@/components/ui-components/tab/TopControls.vue"
import BoxInfo from "@/components/ui-components/gameElement/BoxInfo.vue"
import BackgroudImage from "@/components/ui-components/gameElement/BackgroundImage.vue"
import TrashFooter from "@/components/ui-components/TrashFooter.vue"
import CanContainer from "@/components/ui-components/CanContainer.vue"
import { useRouter } from "vue-router"
import { usePlayerStore } from "@/stores/usePlayerStore"
import { useGameStore } from "@/stores/useGameStore"
import { storeToRefs } from "pinia"
import { onMounted } from "vue"
const { streak } = storeToRefs(usePlayerStore())

const gameStore = useGameStore()
const { getTrash, getBins, evaluate } = gameStore
const { currentLevel, gameOver, gameCompleted } = storeToRefs(gameStore)

const routes = useRouter()

onMounted(() => {
  console.log(getBins())
})
</script>

<style scoped>
.trash-footer {
  position: absolute;
  bottom: 0;
}

.trash-box-inside {
  transform: scale(0.8);
}

.streak-label {
  text-transform: uppercase;
  font-weight: 600;
  word-spacing: 0.8rem;
}
</style>
