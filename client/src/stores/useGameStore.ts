import { defineStore } from "pinia"
import { useLevelsStore } from "@/stores/useLevelsStore"
import { usePlayerStore } from "@/stores/usePlayerStore"
import { Level } from "@/entities/Level"
import { computed, ref } from "vue"
import { Can } from "@/entities/Can"

export const useGameStore = defineStore("game", () => {
  const levelsStore = useLevelsStore()
  const playerStore = usePlayerStore()

  const currentLevel = ref<Level | null>(null)
  const currentLevelNumber = ref(0)
  const gameOver = computed(() => currentLevel.value?.isCompleted())

  const getTrash = () => {
    return currentLevel.value?.current_pair?.trash
  }

  const getBins = () => {
    switch (currentLevelNumber.value) {
      case 1:
        return [
          levelsStore.cans.find((can: Can) => can.category === "plastic"),
          levelsStore.cans.find((can: Can) => can.category === "mixed"),
        ]
      case 2:
        return [
          levelsStore.cans.find((can: Can) => can.category === "plastic"),
          levelsStore.cans.find((can: Can) => can.category === "mixed"),
          levelsStore.cans.find((can: Can) => can.category === "bio"),
        ]
      case 3:
        return [
          levelsStore.cans.find((can: Can) => can.category === "plastic"),
          levelsStore.cans.find((can: Can) => can.category === "fabric"),
          levelsStore.cans.find((can: Can) => can.category === "bio"),
        ]
      case 4:
        return [
          levelsStore.cans.find((can: Can) => can.category === "dangerous"),
          levelsStore.cans.find((can: Can) => can.category === "fabric"),
          levelsStore.cans.find((can: Can) => can.category === "bio"),
        ]
      default:
        return [
          levelsStore.cans.find((can: Can) => can.category === "plastic"),
          levelsStore.cans.find((can: Can) => can.category === "paper"),
          levelsStore.cans.find((can: Can) => can.category === "glass"),
        ]
    }
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
      currentLevelNumber.value = level
    } else {
      currentLevel.value = levelsStore.getLevel(playerStore.maxLevel)
      currentLevelNumber.value = playerStore.maxLevel
    }
  }

  return {
    currentLevel,
    getTrash,
    getBins,
    gameOver,
    start,
    evaluate,
  }
})
