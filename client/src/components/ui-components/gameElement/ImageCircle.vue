<template>
    <div class="container">
      <div class="center">
        <img src="../../../../public/assets/trashImages/kante/embalaza.png" alt="Trash Can" class="kanta-img" />
      </div>
      <div
        v-for="(item, index) in images"
        :key="index"
        class="center-circles"
      >
        <img src="../../../../public/assets/designImages/game/circle.svg" alt="Trash Can"
        :style="getCircleStyle(index)"/>
        <span :style="getItemStyle(index)">
            <img :src="item" :alt="altText" width="5%" class="trash-images">
        </span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [], // Example items
        radius: 140, //
        centerX: 150, 
        centerY: 150, 
        degreesBetweenItems: 90, 
      };
    }, 
    created() {
        this.items = this.images; // Initialize items after component creation
    },
    methods: {
      getItemPosition(index) {
        const totalItems = this.items.length;
        const angle = ((360 / totalItems) * index - 90) * (Math.PI / 180);
        const x = this.centerX + this.radius * Math.cos(angle);
        console.log(this.items);
        const y = this.centerY + this.radius * Math.sin(angle);
        return { x, y, angle };
      },
      getCircleStyle(index) {
        const { x, y, angle } = this.getItemPosition(index);
        const rotation = angle * (180 / Math.PI) -30;
        const flip = angle > Math.PI / 2 && angle < (Math.PI * 3) / 2;
        return {
          position: "absolute",
          left: `${x}px`,
          top: `${y}px`,
          transform: `rotate(${rotation}deg)${flip ? " scaleX(-1) rotate(120deg)" : ""} scale(0.6)`
        };
      },
      getItemStyle(index) {
        const { x, y, angle } = this.getItemPosition(index);
        return {
          position: "absolute",
          left: `${x + 80}px`,
          top: `${y + 70}px`
     };
    },
    },
    props: {
      images: {
        type: Array,
        required: true,
      },
      altText: {
        type: String,
        required: true,
      },
    },
    };
  </script>
  
  <style>
  .container {
    position: relative;
    width: 100%;
    height: 80vh;
  }
  
  .center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .center-circles {
    position: relative;
    left: 20%;
  }
  .kanta-img {
    position: relative;
    width: 30%;
    left: 25%;
  }
  .trash-images {
    /* size: 40%; */
    width: 40%;
    max-width: 200px;
    max-height: 200px;
  }

  </style>
  