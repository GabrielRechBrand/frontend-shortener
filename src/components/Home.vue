<template>
  <body>
  <div>
    <div class="top-nav">
      <top-bar/>
    </div>
    <div class="page">
      <div class="page-box">
        <div class="shortened-urls">
          <ShortenedUrls>
          </ShortenedUrls>
        </div>
        <div class="selected-url">
          <SelectedUrl>
          </SelectedUrl>
        </div>
      </div>
    </div>
  </div>
  </body>
</template>

<script>

import TopBar from "./TopBar";
import LoginBox from "./LoginBox";
import SelectedUrl from "./SelectedUrl";
import ShortenedUrls from "./ShortenedUrls";
import SelectedUrlBox from "./SelectedUrlBox";

  export default {
    name: "Home",
    components: {SelectedUrlBox, TopBar, LoginBox, SelectedUrl, ShortenedUrls},
  }

</script>

<style>

  .page {
    margin-top: 40px;
  }

  .selected-url {
    margin-top: 10px;
  }

  .page {
    animation: fadeInAnimation ease 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

</style>
