<template>
  <div>
    <div class="top-nav">
      <top-bar/>
    </div>
    <div class="page">
      <div class="page-box">
        <div>
          <ShortenedUrls></ShortenedUrls>
          <li class="url-list" v-for="url of urls">
            <h1 class="url-title">{{ url }}</h1>
          </li>
        </div>
        <div>
          <SelectedUrlBox></SelectedUrlBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "./TopBar";
import LoginBox from "./LoginBox";
import SelectedUrlBox from "./SelectedUrlBox";
import ShortenedUrls from "./ShortenedUrls";

  export default {
    name: "Home",
    components: {TopBar, LoginBox, SelectedUrlBox, ShortenedUrls},

    data() {
      return {
        urls: [

        ]
      }
    },

    created() {

     this.$http.get('http://localhost:8080/test')
        .then(res => res.json())
        .then(urls => this.urls = urls, err => console.log(err));

    }
  }
</script>

<style>

</style>
