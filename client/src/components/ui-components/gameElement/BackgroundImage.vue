<template>
  <div class="background-div">
    <slot></slot>
  </div>
</template>

<style scoped>
.background-div {
  width: 100%;
  height: 100%; /* Set the height of your background div */
  background-image: url("../../../../public/assets/designImages/game/backgrounds/background\ with\ forest.png"); /* Specify the path to your PNG image */
  background-size: cover; /* Cover the entire background */
  background-position: center; /* Center the background image */
}
</style>
