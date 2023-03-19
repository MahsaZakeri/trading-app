<script lang="ts">
import { defineComponent } from "vue";
import "./index.css";

export default defineComponent({});
</script>

<template>
  <router-view />
</template>

<style>
#app {
  font-family: var(--font-regular);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
