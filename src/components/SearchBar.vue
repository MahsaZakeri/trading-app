<script lang="ts">
import { defineComponent } from "vue";
import BaseTextField from "./BaseTextField.vue";
import BaseButton from "./BaseButton.vue";
import WebSocket from "../gateway/WebSocket";

export default defineComponent({
  name: "TheSearchBar",
  emits: ["showWatchList", "getSearchItem"],
  components: {
    BaseTextField,
    BaseButton,
  },
  data() {
    return {
      wsClient: {} as WebSocket,
      inputValue: "",
    };
  },
  created() {
    this.wsClient = WebSocket.getInstance(":8426");
  },
  methods: {
    searchHandler(): void {
      let pattern = /[A-Z]{2}[0-9A-Z]{9}[0-9]{1}/;
      let searchCondition =
        this.inputValue.length <= 11 ||
        this.inputValue.length > 12 ||
        !pattern.test(this.inputValue);
      if (searchCondition) {
        alert("Please enter valid ISIN.");
      } else if (pattern.test(this.inputValue)) {
        this.$emit("showWatchList", true);
        this.wsClient.sendMessage(this.inputValue, 1);
      }
    },
  },
  mounted() {
    const socket = this.wsClient.getSocket();
    socket.onmessage = (event: any) => {
      this.$emit("getSearchItem", event.data);
    };
  },
});
</script>

<template>
  <div class="searchBar">
    <base-button @click="searchHandler">
      <img class="searchBarIcon" src="../assets/search.svg" />
    </base-button>
    <base-text-field
      placeholder="Search ISIN here..."
      :inputValue="inputValue"
      v-model="inputValue"
    />
  </div>
</template>

<style lang="scss">
.searchBar {
  width: 90%;
  display: flex;
  align-items: center;
  background-color: var(--color-foreground2);
  padding: 1% 5%;
  border-radius: 25px;
  height: 80px;

  transition: box-shadow 1s ease-out;

  &:hover {
    box-shadow: 0px 0px 15px 10px var(--color-background3);
  }

  .searchBarIcon {
    height: 20px;
    width: 20px;
  }
}
@media only screen and (max-width: 600px) {
  .searchBar {
    height: 60px;
  }
}
@media only screen and (min-width: 601px) and (max-width: 900px) {
  .searchBar {
    height: 70px;
  }
}
</style>
