<template>
  <div class="shortened-urls">
    <header>
      <h1 class="title">SHORTENED URLS:</h1>
    </header>
    <div class="url-list" v-for="url of urls" >
      <UrlBox :url="url" :urlSelect="selectedUrl" v-on:click.native="select(url)" id="urlbox"></UrlBox>
    </div>
  </div>
</template>

<script>

import UrlBox from "./UrlBox";
import EventBus from "../EventBus";

export default {
  name: "ShortenedUrls",
  components: {UrlBox},
  data() {
    return {
      urls: [],
      selectedUrl: '',
    }
  },
  created() {
    this.$http.get('http://localhost:8080/urls/all')
      .then(res => res.json())
      .then(urls => this.urls = urls, err => console.log(err));
  },
  methods: {
    select(url) {
      this.selectedUrl = url;
      EventBus.$emit('urlSelectEvent', this.selectedUrl)
    }
  }
}
</script>

<style scoped>

  header {
    margin-top: -20px;
    align-content: center;
    height: 30px;
    overflow: initial;
  }

  .shortened-urls {
    margin-top: -10px;
    margin-left: -3.5px;
    width: 100%;
    height: 450px;
    border: 3px solid white;
    font-family: "Arial Black";
    font-size: 12px;
    background-color: #0a0a0a;
    color: white;
    overflow: auto;
  }

.title {
    font-size: 25px;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>
