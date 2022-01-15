<template>
  <div>
    <div class="selected-url" @urlSelectEvent="receive">
      <header>
        <h1 class="title">SELECTED URL INFO</h1>
      </header>
      <div class="icons">
        <div class="deleteDiv" @click="deleteUrl()">
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" class="deleteUrlImg">
        </div>
        <div class="editDiv" @click="editUrl()">
          <img src="https://cdn-icons.flaticon.com/png/512/5996/premium/5996831.png?token=exp=1642285803~hmac=50b082c8a779c4e2472b647dbf21cfea" class="editUrlImg">
        </div>
      </div>
    <SelectedUrlBox :selected-url="selectedUrl"></SelectedUrlBox>
    </div>
  </div>
</template>

<script>

import ShortenedUrls from "./ShortenedUrls"
import UrlBox from "./UrlBox";
import SelectedUrlBox from "./SelectedUrlBox";
import EventBus from "../EventBus";

export default {
  name: "SelectedUrl",
  components: {
    UrlBox, ShortenedUrls, SelectedUrlBox
  },
  data() {
    return {
        selectedUrl: {}
    }
  },
  mounted() {
    EventBus.$on('urlSelectEvent', this.receive)
  },
  destroyed() {
    EventBus.$off('urlSelectEvent')
  },
  methods: {
    receive(url) {
      this.selectedUrl = url;
    },
    deleteUrl() {
      console.log("http://localhost:8080/" + this.selectedUrl.alias)
      this.$http.delete("http://localhost:8080/" + this.selectedUrl.alias)
      EventBus.$emit('refreshEvent', "Event")
    },
    editUrl() {
      console.log("Edit")
    }
  },

}
</script>

<style scoped>

  .selected-url {
    max-width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    word-wrap: break-word;
  }

  header {
    margin-top: -20px;
    align-content: center;
    height: 30px;
  }

  .selected-url {
    margin-top: -5px;
    margin-left: -3.5px;
    width: 100%;
    height: 275px;
    border: 3px solid white;
    font-family: Arial;
    font-size: 12px;
    background-color: #0a0a0a;
    color: white;
  }

  .title {
    margin-top: 20px;
    font-family: Arial;
    color: white;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  /*.deleteDiv {*/
  /*  margin-top: 10px;*/
  /*  margin-bottom: -10px;*/
  /*  margin-left: 10px;*/
  /*  font-size: 8px;*/
  /*  color: #eb4034;*/
  /*  width: 20px;*/
  /*  height: 20px;*/
  /*  position: absolute;*/
  /*}*/

  .icons {
    display: block;
  }

  .deleteUrlImg:hover {
    border-radius: 25px;
    border: 5px solid #eb4034;
  }

  .deleteUrlImg {
    width: 20px;
  }

  .editUrlImg:hover {
    border-radius: 25px;
    border: 5px solid #4287f5;
  }

  .editUrlImg {
    width: 25px;
  }


</style>
