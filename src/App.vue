<template>
  <div id="app" class="app">
    <div class="top-nav">
      <top-bar/>
    </div>
    <div class="page">
      <box class="login-box"></box>
    </div>
  </div>
</template>

<script>
import TopBar from "./components/TopBar";
import Box from "./components/Box";

  export default {
    components: {TopBar, Box}
  }
</script>

<style>

  body {
    background: rgb(54,54,54);
    background: linear-gradient(0deg, rgba(54,54,54,1) 0%, rgba(10,10,10,1) 88%);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .page div {
    display: inline-block;
    margin-top: 10px;
  }

  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

</style>
