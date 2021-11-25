<template>
  <div class="shortened-urls">
    <h1>SHORTENED URLS:</h1>
    <div class="url-list" v-for="url of urls" >
      <UrlBox :url="url" :urlSelect="selectedUrl" v-on:click.native="select(url)" id="urlbox"></UrlBox>
    </div>
  </div>
</template>

<script>
import UrlBox from "./UrlBox";

export default {
  name: "ShortenedUrls",
  components: {UrlBox},
  data() {
    return {
      urls: [],
      selectedUrl: ''
    }
  },
  created() {
    this.$http.get('http://localhost:8080/urls/all')
      .then(res => res.json())
      .then(urls => this.urls = urls, err => console.log(err));
  },
  methods: {
    select(url) {
      this.selectedUrl = url.id;

    }
  }
}
</script>

<style scoped>

.shortened-urls {
    margin-top: -5px;
    width: 100%;
    height: 450px;
    border: 2px solid deepskyblue;
    border-radius: 25px;
    font-family: "Arial Black";
    font-size: 12px;
    background-color: #0a0a0a;
    color: deepskyblue;
  }

</style>
