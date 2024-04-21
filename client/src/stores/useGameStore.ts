import { defineStore } from "pinia"
import { useLevelsStore } from "@/stores/useLevelsStore"
import { usePlayerStore } from "@/stores/usePlayerStore"
import { Level } from "@/entities/Level"
import { computed, ref } from "vue"

export const useGameStore = defineStore("game", () => {
  const levelsStore = useLevelsStore()
  const playerStore = usePlayerStore()

  const currentLevel = ref<Level | null>(null)
  const gameOver = computed(() => currentLevel.value?.isCompleted())

  const getTrash = () => {
    return currentLevel.value?.current_pair?.trash
  }

  const getBins = () => {
    // TODO: dodaj random vrednosti glede na level.number
    return [currentLevel.value?.current_pair?.can]
  }

  const evaluate = (selectedCan: string) => {
    if (currentLevel.value?.current_pair?.can.category === selectedCan) {
      playerStore.updateStreak()
      playerStore.score += 1
      currentLevel.value?.getNextPair()
    } else {
      playerStore.fail(selectedCan)
    }
  }

  const start = (level?: number) => {
    if (level) {
      currentLevel.value = levelsStore.getLevel(level)
    } else {
      currentLevel.value = levelsStore.getLevel(playerStore.maxLevel)
    }
  }

  return {
    currentLevel,
    getTrash,
    getBins,
    gameOver,
    start,
  }
})
