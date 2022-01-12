<template>
  <div class="url-box" :class="url.id === urlSelect.id ? 'url-select' : ''">
    <h1 class="url-h1">{{url}}</h1>
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
  font-size: 8px;
  background-color: #0a0a0a;
  color: white;
}



.url-h1:hover {
  color: grey;
  font-family: bolder;
}

</style>
