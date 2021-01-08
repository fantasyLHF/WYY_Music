<template>
  <div class="loading">
    <div>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped="scoped">
.loading {
  display: flex;
  justify-content: center;
  height: 10vh;
  align-items: center;
  div {
    width: 50px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    i {
      display: inline-block;
      width: 7px;
      height: 15px;
      transform-origin: center center;
      border-radius: 20px;
      border-radius: 20px;
      animation: loading 0.5s linear 0s infinite alternate-reverse;
      &:first-of-type {
        animation-delay: -0.2s;
        background-color: rgb(206, 62, 62);
      }
      &:nth-of-type(2) {
        animation-delay: -0.4s;
        background-color: rgb(85, 179, 85);
      }
      &:nth-of-type(3) {
        animation-delay: -0.6s;
        background-color: rgb(102, 145, 17);
      }
      &:nth-of-type(4) {
        animation-delay: -0.8s;
        background-color: rgb(11, 94, 146);
      }
      &:nth-of-type(5) {
        animation-delay: -1s;
        background-color: rgb(64, 40, 112);
      }
    }
  }
}
@keyframes loading {
  from {
    transform: scaleY(0.2);
  }
  to {
    transform: scaleY(1);
  }
}
</style>