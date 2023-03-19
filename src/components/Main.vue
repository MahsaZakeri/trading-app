<script lang="ts">
import { defineComponent } from "vue";

import WatchList from "./WatchList.vue";
import SearchBar from "./SearchBar.vue";
import OnSubscribe from "../types/onSubscribe";
export default defineComponent({
  name: "TheMain",
  components: {
    SearchBar,
    WatchList,
  },
  data() {
    return {
      isWatchListOpen: false,
      searchedItem: {} as OnSubscribe,
    };
  },

  methods: {
    showWatchList(newValue: boolean) {
      this.isWatchListOpen = newValue;
    },
    getSearchItem(searchedItem: any) {
      this.searchedItem = JSON.parse(searchedItem);
    },
  },
});
</script>

<template>
  <main class="container">
    <div class="containerItem">
      <search-bar
        @show-watch-list="showWatchList"
        @get-search-item="getSearchItem"
      />
      <watch-list v-show="isWatchListOpen" :searchedItem="searchedItem" />
    </div>
  </main>
</template>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .containerItem {
    display: flex;
    flex-direction: column;
    width: 800px;
  }
}
@media only screen and (max-width: 600px) {
  .container {
    .containerItem {
      width: 350px;
    }
  }
}
@media only screen and (min-width: 601px) and (max-width: 900px) {
  .container {
    .containerItem {
      width: 700px;
    }
  }
}
</style>
