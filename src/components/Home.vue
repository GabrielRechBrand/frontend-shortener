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
          <SelectedUrlBox></SelectedUrlBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "./TopBar";
import LoginBox from "./LoginBox";
import SelectedUrlBox from "./SelectedUrlBox";
import ShortenedUrls from "./ShortenedUrls";

  export default {
    name: "Home",
    components: {TopBar, LoginBox, SelectedUrlBox, ShortenedUrls},
  }
</script>

<style>

</style>
