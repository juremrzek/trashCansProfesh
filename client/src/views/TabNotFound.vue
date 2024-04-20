<template>
  <tab-template>
    <template #header>
      <tab-header>header </tab-header>
    </template>
    <template #body>
      <TransitionGroup name="list" tag="ul">
        <li>banan</li>
      </TransitionGroup>

      <tab-no-elements :elements="[]"></tab-no-elements>
    </template>
  </tab-template>
</template>

<script setup lang="ts">
import TabTemplate from "@/components/ui-components/tab/TabTemplate.vue"
import TabHeader from "@/components/ui-components/tab/TabHeader.vue"
import TabNoElements from "@/components/ui-components/tab/TabNoElements.vue"
</script>
