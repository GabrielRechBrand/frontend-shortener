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
      <a :href="selectedUrl.shortenedUrl"><h2>{{selectedUrl.shortenedUrl}}</h2></a>
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
    display: inline;
  }

  div {
    padding: 20px;
    min-width: 25px;
    min-height: 25px;
  }

  a {
    color: darkred;
  }

  h1 {
    border: 2px solid white;
    font-size: 20px;
    background: #1D1D1D;
  }

  h2 {
    margin-bottom: -40px;
  }
</style>
