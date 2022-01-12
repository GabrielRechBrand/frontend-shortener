<template>
  <div>
    <div class="top-nav">
      <top-bar/>
    </div>
    <div class="regist-box">
      <h1>REGISTER YOUR URL</h1>
      <div class="form">
        <div>
          <h1>Insert the URL you want to be shortened</h1>
          <input type="text" placeholder="Original Url" id="originalUrl" v-model="urlForm.originalUrl">
        </div>
        <div>
          <h1>Insert the alias you want for it</h1>
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
import UrlService from "../UrlService";
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
    border-radius: 25px;
    font-family: "Arial Black";
    font-size: 12px;
    background-color: #0a0a0a;
    color: white;
  }

</style>
