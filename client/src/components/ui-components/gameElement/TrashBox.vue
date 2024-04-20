<template>
    <div class="trash-box-border">
        <div class="trash-box">
            <img src="../../../../public/assets/trashImages/embalaza/vrecka.png" />
        </div>
    </div>
  </template>
  

  <style scoped>
  .trash-box {
    width: 150px; 
    height: 150px; 
    background: linear-gradient(var(--ion-color-secondary), var(--ion-color-secondary-dark-shade));
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .trash-box-border {
    width: 170px; 
    height: 170px; 
    background:  linear-gradient(var(--ion-color-danger-contrast), var(--ion-background-color), #A3E5FF);
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
  