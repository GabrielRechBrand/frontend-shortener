<template>
    <h1 class="url-h1">{{url}}</h1>
</template>

<script>
export default {
  name: "UrlBox",
  props: {
    url: ''
  }
}
</script>

<style scoped>
.url-h1 {
  color: green;
}

</style>
