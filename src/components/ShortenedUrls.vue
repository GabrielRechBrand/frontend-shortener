<template>
  <div class="shortened-urls">
    <h1>SHORTENED URLS:</h1>
    <div class="url-list" v-for="url of urls" >
      <UrlBox :url="url" v-on:click.native="selected()" id="urlbox"></UrlBox>
    </div>
  </div>
</template>

<script>
import UrlBox from "./UrlBox";
import SelectedUrlBox from "./SelectedUrlBox";

export default {
  name: "ShortenedUrls",
  components: {UrlBox},
  data() {
    return {
      urls: [],
      isSelected: false,
      props: {
        selectedUrl: ''
      }
    }
  },
  created() {
    this.$http.get('http://localhost:8080/test/')
      .then(res => res.json())
      .then(urls => this.urls = urls, err => console.log(err));
  },
  methods: {
    selected() {
      if(this.isSelected===false) {
        document.getElementById('urlbox').style.cssText = "color: red";
        this.isSelected = true;
        this.props.selectedUrl = $UrlBox.url;
      } else {
        document.getElementById('urlbox').style.cssText = "color: deepskyblue"
        this.isSelected = false;
      }
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
