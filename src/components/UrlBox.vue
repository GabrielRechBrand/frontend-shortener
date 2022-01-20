<template>
  <div class="url-box" :class="url.id === urlSelect.id ? 'url-select' : ''">
    <h1 class="url-h1">{{url.shortenedUrl}}</h1>
  </div>
</template>

<script>
export default {
  name: "UrlBox",
  props: {
    url: '',
    urlSelect: '',
  },
}
</script>

<style scoped>

.url-box {
  font-family: Arial;
  font-size: 10px;
  background-color: #0a0a0a;
  color: white;
  border: 2px solid grey;
  cursor: pointer;

}

.url-h1:hover {
  font-weight: bolder;
  font-size: 21px;
}

.url-select {
  border: 2px solid dimgrey;
  background: repeating-linear-gradient(
    -55deg,
    #222,
    #222 10px,
    #1D1D1D 10px,
    #1D1D1D 20px
  );
  color: #f0da3a;
}
</style>
