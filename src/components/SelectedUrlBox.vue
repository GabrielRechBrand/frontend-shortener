<template>
  <div class="selected-url">
    <h1>SELECTED URL INFO:</h1>
    <h1>{{selectedUrl}}</h1>
  </div>
</template>

<script>
import ShortenedUrls from "./ShortenedUrls"
import UrlBox from "./UrlBox";
export default {
  name: "SelectedUrlBox",
  components: {UrlBox},
  data() {
    return {
      selectedUrl: ShortenedUrls.props.selectedUrl
    }
  }
}
</script>

<style scoped>

  .selected-url {
    margin-top: -5px;
    width: 100%;
    height: 275px;
    border: 2px solid deepskyblue;
    border-radius: 25px;
    font-family: "Arial Black";
    font-size: 12px;
    background-color: #0a0a0a;
    color: deepskyblue;
  }

</style>
