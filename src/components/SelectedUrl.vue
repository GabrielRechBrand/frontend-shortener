<template>
  <div>
    <div class="selected-url" @urlSelectEvent="receive">
      <header>
        <h1>SELECTED URL INFO:</h1>
      </header>
      <div>

      </div>
    <SelectedUrlBox :selected-url="selectedUrl"></SelectedUrlBox>
    </div>
  </div>
</template>

<script>

import ShortenedUrls from "./ShortenedUrls"
import UrlBox from "./UrlBox";
import SelectedUrlBox from "./SelectedUrlBox";
import EventBus from "../EventBus";

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
    EventBus.$on('urlSelectEvent',this.receive)
  },
  destroyed() {
    EventBus.$off('urlSelectEvent')
  },
  methods: {
    receive(url) {
      this.selectedUrl = url;
    }
  },

}
</script>

<style scoped>

  header {
    margin-top: -20px;
    align-content: center;
    height: 30px;
  }
  .selected-url {
    margin-top: -5px;
    margin-left: -3.5px;
    width: 100%;
    height: 275px;
    border: 3px solid white;
    font-family: "Arial Black";
    font-size: 12px;
    background-color: #0a0a0a;
    color: white;
    overflow: auto;
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
