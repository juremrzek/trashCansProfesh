import { Can } from "@/entities/Can"
import { Level } from "@/entities/Level"
import { Trash } from "@/entities/Trash"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useLevelsStore = defineStore(
  "levels",
  () => {
    const cans = ref<Can[]>([
      new Can("paper", ""),
      new Can("plastic", ""),
      new Can("plastic", ""),
      new Can("dangerous", ""),
      new Can("bio", ""),
      new Can("fabric", ""),
      new Can("mixed", ""),
    ])
    // @ts-ignore
    const trash = ref<Trash>([new Trash("apple", "bio", ""), new Trash("bananaPeel", "bio", ""),
      new Trash("cajnaVrecka", "bio", ""), new Trash("eggShell", "bio", ""),
      new Trash("ostankiKave", "bio", ""), new Trash("roza", "bio", ""),
      new Trash("handMixer", "dangerous", ""),  new Trash("monitor", "dangerous", ""),
      new Trash("phone", "dangerous", ""), new Trash("roomba", "dangerous", ""),
      new Trash("can", "plastic", ""), new Trash("loncek", "plastic", ""), 
      new Trash("mleko", "plastic", ""), new Trash("sokec", "plastic", ""), 
      new Trash("sprite", "plastic", ""), new Trash("vrecka", "plastic", ""), 
      new Trash("mattress", "bulky", ""), new Trash("rug", "bulky", ""),
      new Trash("sofa", "bulky", ""), new Trash("vozicek", "bulky", ""),
      new Trash("ash", "mixed", ""), new Trash("bone", "mixed", ""),
      new Trash("plate", "mixed", ""), new Trash("stiropor", "mixed", ""),
      new Trash("eggCarton", "paper", ""), new Trash("newspaper", "paper", ""),
      new Trash("wrappingPaper", "paper", ""), new Trash("shirt", "fabric", ""),
      new Trash("socks", "fabric", ""), new Trash("tekstil", "fabric", ""),
      new Trash("trousers", "fabric", "")
    ]);
    
    const levels = ref<Level[]>([new Level(
      [{
        trash: trash.value.find((trash: Trash) => trash.category === "loncek"),
        can: cans.value.find((can: Can) => can.category === "plastic")
      }, 
      {
        trash: trash.value.find((trash: Trash) => trash.category === "sokec"),
        can: cans.value.find((can: Can) => can.category === "plastic")
      }, 
      {
        trash: trash.value.find((trash: Trash) => trash.category === "vrecka"),
        can: cans.value.find((can: Can) => can.category === "plastic")
      }], 2
    ), new Level(
      [{
        trash: trash.value.find((trash: Trash) => trash.category === "apple"),
        can: cans.value.find((can: Can) => can.category === "bio")
      }, 
      {
        trash: trash.value.find((trash: Trash) => trash.category === "can"),
        can: cans.value.find((can: Can) => can.category === "plastic")
      }, 
      {
        trash: trash.value.find((trash: Trash) => trash.category === "bananaPeel"),
        can: cans.value.find((can: Can) => can.category === "bio")
      }], 3
    ), new Level(
      [{
        trash: trash.value.find((trash: Trash) => trash.category === "eggShell"),
        can: cans.value.find((can: Can) => can.category === "bio")
      }, 
      {
        trash: trash.value.find((trash: Trash) => trash.category === "apple"),
        can: cans.value.find((can: Can) => can.category === "bio")
      }, 
      {
        trash: trash.value.find((trash: Trash) => trash.category === "shirt"),
        can: cans.value.find((can: Can) => can.category === "fabric")
      }], 3
    )])

    const getLevel = (level: number) => {
      return levels.value[level]
    }

    const excludeTrash = (trash_category: string) => {
      const filteredCans = cans.value.filter(
        (can: Can) => can.category !== trash_category
      )

      return filteredCans
    }

    return {
      cans,
      getLevel,
      excludeTrash,
    }
  },
  {
    persist: true,
  }
)
