<template>
  <header>
    <div class="header-title">
      <h1>URL SHORTENER</h1>
      <div class="redirects">
        <router-link to="/">Home</router-link>
        <router-link to="/UrlRegist">Url Regist</router-link>
        <router-link to="/UserLogin">User Login</router-link>
        <router-link to="/UserRegist">User Regist</router-link>
      </div>
    </div>
  </header>
</template>

<script>

  export default {

  }

</script>

<style>

  header {
    margin-left: -10px;
    margin-top: -10px;

    background: #0a0a0a;
    height: 75px;
  }

  .header-title {
    font-family: Arial;
    color: deepskyblue;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  a {
    color: deepskyblue;
  }

  a:hover {
    font-weight: bolder;
    color: #0079a2;
  }

  .redirects a+a {
    margin: 25px;
  }
</style>
