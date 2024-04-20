<template>
  <tab-template>
    <template #header>
      <tab-header>header </tab-header>
    </template>
    <template #body>
      <trash-footer class="trash-footer">
        <trash-box class="trash-box-inside"></trash-box>
      </trash-footer>
      <!-- <tab-no-elements :elements="[]"></tab-no-elements> -->
    </template>
  </tab-template>
</template>

<script setup lang="ts">
import TabTemplate from "@/components/ui-components/tab/TabTemplate.vue"
import TabHeader from "@/components/ui-components/tab/TabHeader.vue"
import TabNoElements from "@/components/ui-components/tab/TabNoElements.vue"
import TrashBox from "@/components/ui-components/gameElement/TrashBox.vue";
import TrashFooter from "@/components/ui-components/TrashFooter.vue";
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
