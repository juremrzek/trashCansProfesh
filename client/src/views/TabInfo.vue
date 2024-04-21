<template>
  <tab-template>
    <template #header>
      <tab-header>header </tab-header>
    </template>
    <template #body>
      <image-circle
      :images="images"
          :altText="`Image loaded from assets`"></image-circle>
    </template>
  </tab-template>
</template>

<script setup lang="ts">
import TabTemplate from "@/components/ui-components/tab/TabTemplate.vue"
import TabHeader from "@/components/ui-components/tab/TabHeader.vue"
import TabNoElements from "@/components/ui-components/tab/TabNoElements.vue"
import ImageCircle from "@/components/ui-components/gameElement/ImageCircle.vue"
import { ref, onMounted } from 'vue';

const images = ref<string[]>([]);
  const context = require.context('../../public/assets/trashImages/embalaza', true);
  images.value = context.keys().map(context) as string[];

</script>
