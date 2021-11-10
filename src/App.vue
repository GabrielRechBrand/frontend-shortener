<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style>

  body {
    background: rgb(54,54,54);
    background: linear-gradient(0deg, rgba(54,54,54,1) 0%, rgba(10,10,10,1) 88%);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .page div+div {
    margin-top: 10px;
  }

  /*.page {*/
  /*  text-align: center;*/

  /*}*/

  /*.page-box {*/
  /*  width: 50%;*/
  /*  margin: 0 auto;*/
  /*  height: 725px;*/
  /*  border: 6px solid deepskyblue;*/
  /*  padding: 25px;*/
  /*  border-radius: 25px;*/
  /*  font-family: "Arial Black";*/
  /*  font-size: 12px;*/
  /*  background-color: #0a0a0a;*/
  /*  color: deepskyblue;*/
  /*}*/

  /*.login-box {*/
  /*  position: absolute;*/
  /*  top: 50%;*/
  /*  left: 50%;*/
  /*  transform: translate(-50%, -50%);*/
  /*}*/

  /*.page-enter, .page-leave-active {*/
  /*  opacity: 0;*/
  /*}*/

  /*.page-enter-active, .page-leave-active {*/
  /*  transition: opacity .4s;*/
  /*}*/

</style>
