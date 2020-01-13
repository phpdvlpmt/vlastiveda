<template>
  <div id="app" class="antialiased bg-gray-100 min-h-screen min-h-full flex flex-col">
    <Header></Header>
    <router-view class="flex-grow" />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>

<style></style>
