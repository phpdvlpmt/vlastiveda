<template>
  <div class="container mx-auto">
    <!--<Pravek></Pravek>-->
    <!--<Cas></Cas>-->
    <router-link to="/dejepis">
      <div class="flex items-center justify-center mt-3 bg-yellow-200 p-1 rounded mx-auto w-56 border-2 border-yellow-300 hover:bg-yellow-300">
        <h3 class="text-xl text-blue-900 font-bold text-center ">Rozcestí</h3>
        <svg class="w-10 h-10 pl-3 fill-current text-blue-900" viewBox="0 0 20 20">
          <path
            d="M19.799 5.165l-2.375-1.83a1.997 1.997 0 00-.521-.237A2.035 2.035 0 0016.336 3H9.5l.801 5h6.035c.164 0 .369-.037.566-.098s.387-.145.521-.236l2.375-1.832c.135-.091.202-.212.202-.334s-.067-.243-.201-.335zM8.5 1h-1a.5.5 0 00-.5.5V5H3.664c-.166 0-.37.037-.567.099-.198.06-.387.143-.521.236L.201 7.165C.066 7.256 0 7.378 0 7.5c0 .121.066.242.201.335l2.375 1.832c.134.091.323.175.521.235.197.061.401.098.567.098H7v8.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5z"
          />
        </svg>
      </div>
    </router-link>
    <router-view></router-view>
    <!--<Rozcesti></Rozcesti>-->
  </div>
</template>

<script>
//import Pravek from "./Pravek.vue";
//import Cas from "./Cas.vue";
//import Rozcesti from "./Rozcesti.vue";
export default {
  name: "History",
  components: {
    // Pravek,
    //Cas
    //Rozcesti
  }
};
</script>

<style lang="scss" scoped></style>
