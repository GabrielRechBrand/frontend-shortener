<template>
  <div class="info">
    <div>
      <h1>URL ID: </h1>
      <h2>{{selectedUrl.id}}</h2>
    </div>
    <div>
      <h1>Alias:</h1>
      <h2>{{selectedUrl.alias}}</h2>
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
    color: #f0da3a;
  }

  h1 {
    border: 2px solid white;
    font-size: 20px;
    background: repeating-linear-gradient(
      -55deg,
      #222,
      #222 10px,
      #1D1D1D 10px,
      #1D1D1D 20px
    );
  }

  h2 {
    margin-bottom: -40px;
  }
</style>
