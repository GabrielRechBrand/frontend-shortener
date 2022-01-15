<template>
  <div>
    <div class="top-nav">
      <top-bar/>
    </div>
    <div class="login-box">
      <header class="regist-topbar">
        <h1 class="title">LOGIN</h1>
      </header>
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
          <input type="submit" value="Submit" @click="submit()">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TopBar from "./TopBar";

  export default {
    name: "LoginBox",
    components: {TopBar},
    data() {
      return {
      }
    },
    methods: {
      submit() {
        const inputUsername = document.getElementById("username").value;
        const inputPassword = document.getElementById("password").value;
        console.log(inputUsername, inputPassword)
        document.getElementById("username").value = null;
        document.getElementById("password").value = null;
      }
    }
  }
</script>

<style>

  .login-box {
    width: 300px;
    height: 200px;
    border: 6px solid white;
    padding: 50px;
    font-family: Arial;
    font-size: 12px;
    background-color: #0a0a0a;
    color: white;
  }

  .login {
    margin-top: 80px;
  }

  .submit {
    position: absolute;
    margin-top: 20px;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .regist-topbar {
    margin-top: -60px;
    margin-left: -50px;
    align-content: center;
    height: 30px;
    overflow: initial;
    width: 400px;
  }

  .title {
    margin-top: 10px;
    font-family: Arial;
    color: white;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  .login-box {
    animation: fadeInAnimation ease 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

</style>
