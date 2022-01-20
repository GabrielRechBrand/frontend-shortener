<template>
  <div>
    <div class="top-nav">
      <top-bar/>
    </div>
    <div class="edit-box">
      <header class="edit-topbar">
        <h1 class="title" >EDIT URL</h1>
      </header>
      <div class="login-box">

        <div class="login">
          <div class="user">
            <h3>NEW ORIGINAL URL: </h3>
            <input type="text"placeholder="Type your username" id="username">
          </div>
          <div class="password">
            <h3>NEW ALIAS: </h3>
            <input type="password" placeholder="Type your password" id="password">
          </div>
          <div class="submit">
            <input type="submit" value="Submit" @click="submit()">
          </div>
          <div>
            <router-link to="/"><input type="submit" value="Cancel"></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TopBar from "./TopBar";
import EventBus from "../EventBus";

export default {

  name: "EditUrl",
  components: {TopBar},

  data() {
    return {
      selectedUrl: {}
    }
  },

}
</script>

<style scoped>

  .edit-box {
    width: 300px;
    height: 200px;
    border: 6px solid white;
    padding: 50px;
    font-family: Arial;
    font-size: 12px;
    background-color: #0a0a0a;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .edit-topbar {
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

  .submit {
    position: absolute;
    margin-top: 20px;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .edit-box {
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
