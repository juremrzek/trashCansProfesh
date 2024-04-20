<template>
  <tab-template>
    <template #header>
      <tab-header>Statistike </tab-header>
    </template>
    <template #body>
      <list-container>
        <template #title>
          <list-title> Statistike </list-title>
        </template>
        <template #default>
          <list-item>
            <template #title> en astistika </template>
            <template #value> banana party </template>
          </list-item>
          <list-item>
            <template #title> en astistika </template>
            <template #value> banana party </template>
          </list-item>
          <list-item>
            <template #title> en astistika </template>
            <template #value> banana party </template>
          </list-item>
          <list-item>
            <template #title> en astistika </template>
            <template #value> banana party </template>
          </list-item>
        </template>
      </list-container>
    </template>
  </tab-template>
</template>

<script setup lang="ts">
import TabTemplate from "@/components/ui-components/tab/TabTemplate.vue"
import TabHeader from "@/components/ui-components/tab/TabHeader.vue"

import ListContainer from "@/components/ui-components/list/ListContainer.vue"
import ListTitle from "@/components/ui-components/list/ListTitle.vue"
import ListItem from "@/components/ui-components/list/ListItem.vue"
</script>
