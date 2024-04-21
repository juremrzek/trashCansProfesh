<template>
  <div :class="{ fail: isFail }"></div>
  <img ref="turtle" :class="{ flyingTurtle: fly }" src="../../public/assets/designImages/game/SADTURTLE.png"/>
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
      <backgroud-image>
        <trash-footer>
          <trash-box></trash-box>
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
import { useRouter } from "vue-router"
import { ref } from 'vue';
import { usePlayerStore } from "@/stores/usePlayerStore"
import { storeToRefs } from "pinia"
const { streak } = storeToRefs(usePlayerStore())

const routes = useRouter()

const isFail = ref(false);
const fly = ref(false);
const turtle = ref(null);

/* //example how to trigger fail
setTimeout(() => {
  toggleFail()

}, 1000); */

function toggleFail() {
  isFail.value = true
  fly.value = true

  setTimeout(() => {
  turnDownFail()
}, 3000);
}
function turnDownFail() {
  isFail.value = false
  fly.value = false
}
</script>

<style scoped>
.trash-footer {
  position: absolute;
  bottom: 0;
}
.trash-box-inside {
  transform: scale(0.8);
}

.flyingTurtle {
  animation: moveDown 3s normal;
  width: 90vw;
  height: 90vh;
  position: absolute;
  left: 50%;

  transform: translateX(-50%) translateY(-75%);
  z-index: 100000;
}

@keyframes moveDown {
  0% {  transform: translateX(-50%) translateY(-75%); }
  100% { transform: translateX(-50%) translateY(100%);  } /* Ensure this matches the viewport height */
}

.fail {
  position: fixed; /* Fixed position to cover the whole screen */
  top: 0;
  left: 0;
  width: 100vw; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  z-index: 9999; /* High z-index to ensure it covers other content */
  background: rgba(255, 0, 0, 0.8);
}


.streak-label {
  text-transform: uppercase;
  font-weight: 600;
  word-spacing: 0.8rem;
}
</style>
