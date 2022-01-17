<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style>

  body {
    background: #272727;
  }

  .page {
    text-align: center;

  }

  .page-box {
    width: 50%;
    margin: 0 auto;
    height: 725px;
    border: 3px solid white;
    padding: 25px;
    border-radius: 15px;
    font-family: "Arial Black";
    font-size: 12px;
    background-color: #0a0a0a;
    color: white;
  }

  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .regist-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .page-enter, .page-leave-active {
    opacity: 0;
  }

  .page-enter-active, .page-leave-active {
    transition: opacity .4s;
  }

</style>
