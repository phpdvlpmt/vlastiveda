<template>
  <div>
    <h3 class="text-blue-700 font-bold text-lg my-3 ">Zadej letopočet a ukáže se století a tisíciletí.</h3>
    <div class="my-4 lg:flex items-center justify-center lg:justify-start">
      <div class="mb-4 md:mb-0">
        <input min="1" class="w-full lg:w-64 lg:mr-4 border-2 border-blue-700 text-gray-800 text-xl  font-bold rounded shadow-lg px-4 py-2 focus:outline-none " type="number" v-model="year" />
      </div>
      <div>
        <p v-if="year" class="text-xl font-bold text-orange-600 text-center md:text-left">Jedná se o {{ centuryFromYear(year) }}. století a {{ millenniumFromYear(year) }}. tisíciletí.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Prevod",
  data() {
    return {
      year: "1620"
    };
  },
  methods: {
    centuryFromYear(year) {
      return Math.floor((year - 1) / 100) + 1;
    },
    millenniumFromYear(year) {
      return Math.floor((year - 1) / 1000) + 1;
    }
  }
};
</script>

<style lang="scss" scoped></style>
