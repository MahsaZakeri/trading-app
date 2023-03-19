<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "./BaseButton.vue";
import WebSocket from "../gateway/WebSocket";
export default defineComponent({
  name: "TheBaseListItem",
  emits: ["deleteHandler"],
  props: ["item"],
  components: { BaseButton },
  data() {
    return {};
  },
  methods: {
    deleteFromWatchList(): void {
      this.$emit("deleteHandler", this.item.isin);
    },
  },
});
</script>
<template>
  <table>
    <caption id="tableCaption">
      ISIN :
      {{
        item.isin
      }}
    </caption>

    <tr id="desktopView">
      <td>Price : {{ item.price }}</td>
      <td>ASK : {{ item.ask }}</td>
      <td>BID : {{ item.bid }}</td>
      <td>
        <BaseButton id="tableBtn" @click="deleteFromWatchList">
          <img class="deleteIcon" src="../assets/delete.svg" />
        </BaseButton>
      </td>
    </tr>
    <tr class="mobileView">
      <td>Price : {{ item.price }}</td>
      <td></td>
    </tr>
    <tr class="mobileView">
      <td>ASK : {{ item.ask }}</td>
      <td>
        <BaseButton id="tableBtn" @click="deleteFromWatchList">
          <img class="deleteIcon" src="../assets/delete.svg" />
        </BaseButton>
      </td>
    </tr>
    <tr class="mobileView">
      <td>BID : {{ item.bid }}</td>
      <td></td>
    </tr>
  </table>
</template>

<style scoped lang="scss">
table {
  width: 100%;
  height: 80px;
  #desktopView {
    display: table-row;
  }
  .mobileView {
    display: none;
  }

  #tableCaption {
    color: var(--color-background1);
  }
  #tableBtn {
    transition: box-shadow 5ms ease-out;
    .deleteIcon {
      height: 20px;
      width: 20px;
    }
    &:hover {
      box-shadow: 0px 0px 15px 10px var(--color-primary-red1);
    }
  }
}
@media only screen and (max-width: 600px) {
  #desktopView {
    display: none;
  }
}
@media only screen and (min-width: 601px) and (max-width: 900px) {
  #desktopView {
    display: none;
  }
}
</style>
