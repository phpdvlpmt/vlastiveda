<template>
  <div id="app" class="antialiased flex flex-col">
    <div class="min-h-screen bg-gray-100 flex flex-col">
      <Header></Header>
      <router-view class="flex-grow" />
      <Footer></Footer>
    </div>
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
