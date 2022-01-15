<template>
  <div>
    <div class="top-nav">
      <top-bar/>
    </div>
    <div class="regist-box">
      <header class="regist-topbar">
        <h1 class="title">REGISTER YOUR URL</h1>
      </header>
      <div class="form">
        <div>
          <h1>Insert the URL you want to be shortened:</h1>
          <input type="text" placeholder="Original Url" id="originalUrl" v-model="urlForm.originalUrl">
        </div>
        <div>
          <h1>Insert the alias you want for it:</h1>
          <input type="text" placeholder="Url alias" id="alias" v-model="urlForm.alias">
        </div>
        <div>
          <h1></h1>
          <button type="submit" value="submit" @click="save()">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TopBar from "./TopBar";

export default {
  name: "UrlRegist",
  components: {TopBar},
  data(){
    return {
      urlForm: {

      }
    }
  },

  methods: {
    save() {
      // UrlService.save(this.urlForm);
      // console.log(this.urlForm);
      document.getElementById("originalUrl").value = null;
      document.getElementById("alias").value = null;
      console.log(this.urlForm)
      this.$http.post('http://localhost:8080/', this.urlForm)
        .then(res => res.json())
        .then(res => console.log(res), err => console.log(err));
    }
  }
}
</script>

<style scoped>

  .regist-box {
    width: 800px;
    height: 300px;
    border: 6px solid white;
    padding: 50px;
    font-family: Arial;
    font-size: 12px;
    background-color: #0a0a0a;
    color: white;
    position: absolute;
  }

  .regist-box {
    animation: fadeInAnimation ease 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .regist-topbar {
    margin-top: -60px;
    margin-left: -50px;
    align-content: center;
    height: 30px;
    overflow: initial;
    width: 900px;
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

  .form {
    margin-top: 80px;
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
