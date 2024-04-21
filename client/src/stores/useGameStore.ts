import { defineStore, storeToRefs } from "pinia"
import { useLevelsStore } from "@/stores/useLevelsStore"
import { usePlayerStore } from "@/stores/usePlayerStore"
import { Level } from "@/entities/Level"
import { computed, ref } from "vue"
import { Can } from "@/entities/Can"

export const useGameStore = defineStore("game", () => {
  const levelsStore = useLevelsStore()
  const { cans } = storeToRefs(levelsStore)
  const { getLevel } = levelsStore
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
          currentLevel.value?.current_pair?.can,
          cans.value.find((can: Can) => can.category === "plastic"),
          cans.value.find((can: Can) => can.category === "mixed"),
        ]
      case 2:
        return [
          currentLevel.value?.current_pair?.can,
          cans.value.find((can: Can) => can.category === "plastic"),
          cans.value.find((can: Can) => can.category === "mixed"),
          cans.value.find((can: Can) => can.category === "bio"),
        ]
      case 3:
        return [
          currentLevel.value?.current_pair?.can,
          cans.value.find((can: Can) => can.category === "plastic"),
          cans.value.find((can: Can) => can.category === "fabric"),
          cans.value.find((can: Can) => can.category === "bio"),
        ]
      case 4:
        return [
          currentLevel.value?.current_pair?.can,
          cans.value.find((can: Can) => can.category === "dangerous"),
          cans.value.find((can: Can) => can.category === "fabric"),
          cans.value.find((can: Can) => can.category === "bio"),
        ]
      default:
        return [
          currentLevel.value?.current_pair?.can,
          cans.value.find((can: Can) => can.category === "plastic"),
          cans.value.find((can: Can) => can.category === "paper"),
          cans.value.find((can: Can) => can.category === "glass"),
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

  const start = (level = playerStore.maxLevel) => {
    console.log("Starting level", level)
    console.log("getLevel", getLevel(level))
    currentLevel.value = getLevel(level)
    currentLevelNumber.value = level
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
