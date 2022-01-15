<template>
  <div class="info">
    <div>
      <h1>Alias:</h1>
      <h2>{{selectedUrl.alias}}</h2>
    </div>
    <div>
      <h1>ID: </h1>
      <h2>{{selectedUrl.id}}</h2>
    </div>
    <div>
      <h1>Access Number: </h1>
      <h2>{{selectedUrl.accessNumber}}</h2>
    </div>
    <div>
      <h1>Creation Date: </h1>
      <h2>{{selectedUrl.creationDate}}</h2>
    </div>
    <div>
      <h1>Last Access: </h1>
      <h2>{{selectedUrl.lastAccessDate}}</h2>
    </div>
    <div>
      <h1>Original URL: </h1>
      <h2>{{selectedUrl.originalUrl}}</h2>
    </div>
    <div>
      <h1>Shortened URL: </h1>
      <a :href="selectedUrl.shortenedUrl">{{selectedUrl.shortenedUrl}}</a>
    </div>
    <div>
      <h1>Creator ID: </h1>
      <h2>{{selectedUrl.client}}</h2>
    </div>
  </div>
</template>

<script>

export default {
  name: "SelectedUrlBox",
  props: ["selectedUrl"]
}
</script>

<style scoped>

  .info {
    font-size: 8px;
    display: inline;
  }

  a {
    color: darkred;
  }

</style>
