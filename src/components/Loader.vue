<template>
  <div class="loader">
    <div class="loader__back"></div>
    <div class="loader__icon"></div>
  </div>
</template>

<script>
export default {
  name:'Loader'
}
</script>

<style>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}

.loader__back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.loader__icon {
  z-index: 4;
  width: 100px;
  height: 100px;
  background-image: url('../assets/loader.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  animation: anim 3s linear infinite;
}

@keyframes anim{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>