<template>
    <div class="trash-box-border">
        <div class="trash-box">
            <img src="../../../../public/assets/trashImages/embalaza/vrecka.png" />
        </div>
    </div>
  </template>
  

  <style scoped>
  .trash-box {
    width: clamp(80px, 8vw, 8vw);
    height: clamp(80px, 8vw, 8vw);
    background: linear-gradient(var(--ion-color-secondary), var(--ion-color-secondary-dark-shade));
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .trash-box-border {
    width: clamp(90px, 9vw, 9vw);
    height: clamp(90px, 9vw, 9vw);
    background:  linear-gradient(var(--ion-color-danger-contrast), #A3E5FF);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 50%;
    object-fit: cover;
  }
  </style>
  