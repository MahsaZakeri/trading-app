<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Header.vue";
import Main from "../components/Main.vue";

export default defineComponent({
  name: "TheHomeView",
  components: {
    Header,
    Main,
  },
});
</script>

<template>
  <div class="w-h-100 home">
    <Header />
    <Main />
  </div>
</template>

<style>
.home {
  background: var(--color-primary-blue2);
  background: linear-gradient(
    100deg,
    var(--color-foreground1) 0%,
    var(--color-secondary-blue3) 100%
  );
}
</style>
