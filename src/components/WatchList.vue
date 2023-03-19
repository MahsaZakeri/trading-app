<script lang="ts">
import { defineComponent } from "vue";
import OnSubscribe from "../types/onSubscribe";
import BaseButton from "./BaseButton.vue";
import WebSocket from "../gateway/WebSocket";
import BaseCard from "./BaseCard.vue";
import BaseListItem from "./BaseListItem.vue";

export default defineComponent({
  name: "TheWatchList",
  props: ["searchedItem"],
  components: { BaseButton, BaseCard, BaseListItem },
  data() {
    return {
      items: [] as OnSubscribe[],
      wsClient: {} as WebSocket,
    };
  },
  created() {
    this.wsClient = WebSocket.getInstance(":8426");
  },
  methods: {
    deleteHandler(isin: string): void {
      const deletedItem = this.items.findIndex((el) => el.isin === isin);
      this.items.splice(deletedItem, 1);

      this.wsClient.sendMessage(isin, 0);
    },
  },

  watch: {
    searchedItem: {
      deep: true,
      handler(value: OnSubscribe) {
        let access = this.items.findIndex((el) => el.isin === value.isin);
        if (access === -1) {
          this.items.push(value);
        } else {
          this.items[access] = value;
        }
      },
    },
  },
});
</script>

<template>
  <div v-if="items.length" class="watchList">
    <base-card class="card">
      <template #card>
        <div class="items" v-for="item in items" :key="item.isin">
          <BaseListItem
            class="item"
            :item="item"
            @delete-handler="deleteHandler"
          />
        </div>
      </template>
    </base-card>
  </div>
</template>

<style lang="scss" scoped>
.watchList {
  width: 800px;
  height: 100%;
  overflow-y: auto;
  margin: 10px 0px 30px 0px;

  .card {
    width: 92%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1% 4%;
    .items {
      margin: 1% 0;
      position: relative;
      width: 100%;
      .item {
        background-color: var(--color-primary-blue2);
        width: 100%;
        border-radius: 30px;
        padding-left: 15px;
        transition: box-shadow 5ms ease-out;

        &:hover {
          box-shadow: 0px 0px 15px 10px var(--color-secondary-blue1);
        }
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .watchList {
    width: 350px;
  }
  .item {
    height: 100%;
    border-radius: 25px;
    padding: 10px;
  }
}
@media only screen and (min-width: 601px) and (max-width: 900px) {
  .watchList {
    width: 700px;
  }
  .item {
    height: 100%;
    border-radius: 25px;
    padding: 10px;
  }
}
@media only screen and (min-width: 901) and (max-width: 1200) {
  .watchList {
    width: 100%;
  }
  .item {
    height: 100%;
    border-radius: 25px;
    padding: 10px;
  }
}
</style>
