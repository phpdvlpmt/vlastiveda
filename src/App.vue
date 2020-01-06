<template>
  <div id="app" class="antialiased bg-gray-100 min-h-screen min-h-full">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style></style>
