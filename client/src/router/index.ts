import { createRouter, createWebHistory } from "@ionic/vue-router"
import { RouteRecordRaw } from "vue-router"

// New imports
import TabController from "@/views/TabController.vue"
import TabGame from "@/views/TabGame.vue"
import TabProfile from "@/views/TabProfile.vue"
import TabRoadMap from "@/views/TabRoadmap.vue"
import TabMisshups from "@/views/TabMisshups.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: { name: "game" },
  },
  {
    path: "/roadmap",
    name: "roadmap",
    component: TabRoadMap,
  },
  {
    path: "/main/",
    name: "main",
    component: TabController,
    children: [
      {
        path: "game",
        name: "game",
        component: TabGame,
      },
      {
        path: "profile",
        name: "profile",
        component: TabProfile,
      },
      {
        path: "misshups",
        name: "misshups",
        component: TabMisshups,
      },
    ],
  },

  { path: "/:pathMatch(.*)*", redirect: { name: "game" } },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
