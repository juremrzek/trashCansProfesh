import { defineStore } from "pinia"
import { ref } from "vue"

export const usePlayerStore = defineStore(
  "player",
  () => {
    const score = ref(0)
    // Fails type poglej kako narediti
    const fails = ref([])
    const streak = ref(0)
    const maxStreak = ref(0)
    const maxLevel = ref(1)

    const updateMaxLevel = (level?: number) => {
      if (level) {
        if (level > maxLevel.value) maxLevel.value = level
      } else {
        maxLevel.value += 1
      }
    }

    const updateStreak = () => {
      streak.value += 1

      if (streak.value > maxStreak.value) {
        maxStreak.value = streak.value
      }
    }

    const fail = (fail: any) => {
      // @ts-ignore
      fails.value.push(fail)
      resetStreak()
    }

    const resetStreak = () => {
      streak.value = 0
    }

    return {
      score,
      fails,
      maxLevel,
      // Streak
      streak,
      updateStreak,
      fail,
      resetStreak,
      maxStreak,
      // Level
      updateMaxLevel,
    }
  },
  {
    persist: true,
  }
)
