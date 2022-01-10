<template>
  <div>
    <div class="top-nav">
      <top-bar/>
    </div>
    <div class="page">
      <div class="page-box">
        <div>
          <ShortenedUrls>
          </ShortenedUrls>
        </div>
        <div>
          <SelectedUrl>
          </SelectedUrl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TopBar from "./TopBar";
import LoginBox from "./LoginBox";
import SelectedUrl from "./SelectedUrl";
import ShortenedUrls from "./ShortenedUrls";

  export default {
    name: "Home",
    components: {TopBar, LoginBox, SelectedUrl, ShortenedUrls},
  }

</script>

<style>

  .page {
    margin-top: 40px;
  }

</style>
