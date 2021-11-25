<template>
  <div class="url-box">
    <h1 class="url-h1">{{url}}</h1>
  </div>
</template>

<script>
export default {
  name: "UrlBox",
  props: {
    url: ''
  },

}
</script>

<style scoped>
.url-box {
  font-family: "Arial Black";
  font-size: 12px;
  background-color: #0a0a0a;
  color: deepskyblue;
}

</style>
