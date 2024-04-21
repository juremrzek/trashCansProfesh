<template>
  <tab-template>
    <template #header>
      <tab-header>header </tab-header>
    </template>
    <template #body>
      <TransitionGroup name="list" tag="ul">
        <li>
          <card-misshups></card-misshups>
        </li>
      </TransitionGroup>

      <tab-no-elements :elements="[]"></tab-no-elements>
    </template>
  </tab-template>
</template>

<script setup lang="ts">
import TabTemplate from "@/components/ui-components/tab/TabTemplate.vue"
import TabHeader from "@/components/ui-components/tab/TabHeader.vue"
import TabNoElements from "@/components/ui-components/tab/TabNoElements.vue"
import CardMisshups from "@/components/ui-components/cards/CardMisshups.vue"
</script>
