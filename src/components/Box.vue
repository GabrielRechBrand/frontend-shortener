<template>
  <div class="box">
    <h1 class="login-title">LOGIN</h1>
    <div class="login">
      <div class="user">
        <label>USERNAME:</label>
        <input type="text"placeholder="Type your username" id="username">
      </div>
      <div class="password">
        <label>PASSWORD:</label>
        <input type="password" placeholder="Type your password" id="password">
      </div>
      <div class="submit">
        <input type="submit" value="Submit" v-on:click="getInputValue();">
      </div>
    </div>
  </div>

</template>

<script>
  export default {

    data() {
      return {
      }
    },
    computed: {
      getInputValue() {
        var inputUsername = document.getElementById("username").value;
        var inputPassword = document.getElementById("password").value;
        console.log(inputUsername, inputPassword)
      }
    }
  }
</script>

<style>

  .box {
    width: 300px;
    height: 200px;
    border: 6px solid deepskyblue;
    padding: 50px;
    border-radius: 25px;
    font-family: "Arial Black";
    font-size: 12px;
    background-color: #0a0a0a;
    color: deepskyblue;
  }

  .login-title {
      text-align:center;
  }

  .submit {
    margin: 0;
    position: absolute;
    top: 75%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

</style>
