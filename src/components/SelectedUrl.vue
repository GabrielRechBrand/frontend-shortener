<template>
  <div class="selected-url" @urlSelectEvent="receive">
    <h1>SELECTED URL INFO:</h1>
    <SelectedUrlBox :selected-url="selectedUrl"></SelectedUrlBox>
  </div>
</template>

<script>
import ShortenedUrls from "./ShortenedUrls"
import UrlBox from "./UrlBox";
import SelectedUrlBox from "./SelectedUrlBox";
export default {
  name: "SelectedUrl",
  components: {
    UrlBox, ShortenedUrls, SelectedUrlBox
  },
  data() {
    return {
        selectedUrl: {}
    }
  },
  mounted() {
    this.$on('urlSelectEvent',this.receive)
  },
  destroyed() {
    this.$off('urlSelectEvent')
  },
  methods: {
    receive(url) {
      this.selectedUrl = url;

    }
  },

}
</script>

<style scoped>

  .selected-url {
    margin-top: -5px;
    width: 100%;
    height: 275px;
    border: 4px solid deepskyblue;
    font-family: "Arial Black";
    font-size: 12px;
    background-color: #0a0a0a;
    color: deepskyblue;
  }

</style>
