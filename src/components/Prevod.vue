<template>
  <div class="my-8 md:flex items-center justify-center">
    <div class="mb-4 md:mb-0">
      <input min="1" class="mr-4 border-2 border-gray-600 text-gray-800 text-lg font-bold rounded shadow-lg px-4 py-2 focus:outline-none " type="number" v-model="year" />
    </div>
    <div>
      <p class="text-lg font-bold text-orange-600">Jedná se o {{ centuryFromYear(year) }}. století, {{ millenniumFromYear(year) }}. tisíciletí</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Prevod",
  data() {
    return {
      year: "1"
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
