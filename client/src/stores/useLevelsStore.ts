import { Can } from "@/entities/Can"
import { Level } from "@/entities/Level"
import { Trash } from "@/entities/Trash"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useLevelsStore = defineStore(
  "levels",
  () => {
    const cans = ref<Can[]>([])
    // @ts-ignore
    const trash = ref<Trash>([])

    const levels = ref<Level[]>([])

    const getLevel = (level: number) => {
      return levels.value[level]
    }

    const excludeTrash = (trash_category: string) => {
      const filteredCans = cans.value.filter(
        (can) => can.category !== trash_category
      )

      return filteredCans
    }

    return {
      getLevel,
      excludeTrash,
    }
  },
  {
    persist: true,
  }
)
