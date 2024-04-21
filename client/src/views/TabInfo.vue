<template>
  <tab-template>
    <template #header>
      <tab-header>header</tab-header>
    </template>
    <template #body>
      <swiper class="mySwiper">
        <swiper-slide v-for="(imageArray, index) in imagesArray" :key="index" class="swiper-slide">
          <image-circle
            class="image-circle-position"
            :images="imageArray.value"
            :altText="altText"
            :kanta="trashCanImg[index]"
          ></image-circle>
        </swiper-slide>
      </swiper>
    </template>
  </tab-template>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import TabTemplate from "@/components/ui-components/tab/TabTemplate.vue"
import TabHeader from "@/components/ui-components/tab/TabHeader.vue"
import ImageCircle from "@/components/ui-components/gameElement/ImageCircle.vue"
import { Swiper, SwiperSlide } from 'swiper/vue';
import { defineComponent } from 'vue';

// Import Swiper styles
import 'swiper/css';



// Get all folders inside the trashImages directory
const context = require.context('../../public/assets/trashImages', true);

// Extract folder names from the context keys and remove duplicates
const folders = Array.from(new Set(context.keys().map(key => {
  const match = key.match(/^\.\/([^/]+)/);
  return match ? match[1] : '';
})))
console.log("Folders: " + folders[1]);

const altText = "Image loaded from assets";
const images1 = ref<string[]>([]);
const imageContext1 = require.context("../../public/assets/trashImages/bioOdpadki", true);
images1.value = imageContext1.keys().map(imageContext1) as string[];

const images2 = ref<string[]>([]);
const imageContext3 = require.context("../../public/assets/trashImages/elektronski", true);
images2.value = imageContext3.keys().map(imageContext3) as string[];

const images3 = ref<string[]>([]);
const imageContex4 = require.context("../../public/assets/trashImages/embalaza", true);
images3.value = imageContex4.keys().map(imageContex4) as string[];

const images4 = ref<string[]>([]);
const imageContex5 = require.context("../../public/assets/trashImages/kosovni", true);
images4.value = imageContex5.keys().map(imageContex5) as string[];

const images5 = ref<string[]>([]);
const imageContex6 = require.context("../../public/assets/trashImages/mesaniOdpadki", true);
images5.value = imageContex6.keys().map(imageContex6) as string[];

const images6 = ref<string[]>([]);
const imageContext7 = require.context("../../public/assets/trashImages/papir", true);
images6.value = imageContext7.keys().map(imageContext7) as string[];

const images7 = ref<string[]>([]);
const imageContex8 = require.context("../../public/assets/trashImages/steklo", true);
images7.value = imageContex8.keys().map(imageContex8) as string[];

const images8 = ref<string[]>([]);
const imageContext9 = require.context("../../public/assets/trashImages/tekstilni", true);
images8.value = imageContext9.keys().map(imageContext9) as string[];
const images9 = ref<string[]>([]);
const imageContext10 = require.context("../../public/assets/trashImages/zbirniCenter", true);
images9.value = imageContext10.keys().map(imageContext10) as string[];
 const imagesArray = [images1,images5, images2,  images3, images4, images6, images7, images8, images9];

const trashCanImg = ref<string[]>([]);
const trashCanContext = require.context("../../public/assets/trashImages/kante", true);
trashCanImg.value = trashCanContext.keys().map(trashCanContext) as string[];
console.log(trashCanImg.value[0]);

const chooseTrashCan = (index: number) => {
  var endIndex = 0;
  return trashCanImg.value[index];
}
</script>

<style>
.image-circle-position {
  position: absolute;
  top: 30%;
  left: 25%;
}
.swiper-slide {
  height: 80vh;
}
</style>
