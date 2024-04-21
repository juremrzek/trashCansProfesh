<template>
  <tab-template>
    <template #header>
      <tab-header>header </tab-header>
    </template>
    <template #body>
      <div class="roadmap">
        <ButtonAnimal
          @click.prevent="
            () => {
              redirectTo('game')
              start(index)
            }
          "
          v-for="(src, index) in images"
          :key="src"
          :imgSrc="src"
          class="node"
          :class="{ 'with-line': index < images.length - 1 }"
        >
        </ButtonAnimal>
      </div>
    </template>
  </tab-template>
</template>

<script setup lang="ts">
import TabTemplate from "@/components/ui-components/tab/TabTemplate.vue"
import TabHeader from "@/components/ui-components/tab/TabHeader.vue"
import ButtonAnimal from "@/components/ui-components/button/ButtonAnimal.vue"
import { ref, onMounted } from "vue"
import { useTabNavigation } from "@/composables/useTabNavigation"
import { useGameStore } from "@/stores/useGameStore"

const gameStore = useGameStore()
const { start } = gameStore

const { redirectTo } = useTabNavigation()

const images = ref<string[]>([])

onMounted(() => {
  const context = require.context(
    "../../public/assets/designImages/roadmap/animals",
    true
  )
  images.value = context.keys().map(context)
})
</script>

<style>
.roadmap {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.node {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 50px;
}
.node.with-line::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 85px;
  background-color: var(--ion-color-tertiary);
  transform: translateX(-50%);
}
</style>
