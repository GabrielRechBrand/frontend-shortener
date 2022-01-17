<template>
  <header>
    <div class="header-title">
      <a href="/" style="text-decoration: none;"><h1 class="h1-title">URL SHORTENER</h1></a>
      <div class="redirects">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/UrlRegist">Url Regist</router-link>
        |
        <router-link to="/UserLogin">User Login</router-link>
        |
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
    background: #1D1D1D;
    height: 75px;
  }

  .header-title {
    margin-top: 10px;
    font-family: Arial;
    color: white;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  .redirects {
    margin-top: -10px;
    margin-bottom: 25px;
  }

  a {
    color: white;
  }

  a:hover {
    font-weight: bolder;
    color: white;
  }

</style>
