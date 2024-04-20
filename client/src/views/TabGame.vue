<template>
  <tab-template>
    <template #body>
      <top-controls>
        <template #start>
          <font-awesome-icon
            :icon="['fas', 'x']"
            size="2xl"
            fixed-width
            style="cursor: pointer; padding-top: 1rem"
          />
        </template>
        <template #end>
          <box-info>banan</box-info>
        </template>
      </top-controls>
      <backgroud-image>
        <trash-box></trash-box>
        <trash-box></trash-box>
        <trash-box></trash-box>
        <trash-box></trash-box>
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
</script>
<style scoped>
  .trash-footer {
    position: absolute;
    bottom: 0;
  }
  .trash-box-inside {
    transform: scale(0.8);
  }

</style>
