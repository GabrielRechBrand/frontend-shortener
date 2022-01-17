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
  color: grey;
  font-weight: bolder;
}

.url-select {
  border: 2px solid dimgrey;
}
</style>
