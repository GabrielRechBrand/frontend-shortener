<template>
  <div class="regist-box">
    <h1>REGISTER YOUR URL</h1>
    <div class="form">
      <div>
        <h1>Insert the URL you want to be shortened</h1>
        <input type="text" placeholder="Original Url" id="originalUrl">
      </div>
      <div>
        <h1>Insert the alias you want for it</h1>
        <input type="text" placeholder="Url alias" id="alias">
      </div>
      <div>
        <h1></h1>
        <button type="submit" value="submit" @click="getInputValue()">Submit</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "UrlRegist",

  methods: {
    getInputValue() {
      const inputUsername = document.getElementById("originalUrl").value;
      const inputPassword = document.getElementById("alias").value;
      console.log(inputUsername, inputPassword)
    }
  }
}
</script>

<style scoped>

  .regist-box {
    width: 800px;
    height: 300px;
    border: 6px solid deepskyblue;
    padding: 50px;
    border-radius: 25px;
    font-family: "Arial Black";
    font-size: 12px;
    background-color: #0a0a0a;
    color: deepskyblue;
  }

</style>
