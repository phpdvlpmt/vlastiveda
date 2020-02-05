<template>
  <div class="flex justify-center my-3  overflow-hidden">
    <div class="mt-2 ">
      <div class="customStyle  text-center text-gray-800 font-bold mb-6">narození Krista</div>
      <div class="mt-1 flex items-base">
        <div>
          <div class="w-32 sm:w-64 text-center text-gray-800 text-xs sm:text-base">léta před Kristem</div>
          <div class="bg-green-700 w-32 sm:w-64 h-2 "></div>
          <div class="w-32 sm:w-64 text-center text-xs sm:text-base"><strong>před naším letopočtem</strong></div>
        </div>
        <div>
          <div class="bg-red-700 w-2 h-10 items-center relative">
            <span class="absolute -mt-6 font-bold text-red-700">0</span>
          </div>
        </div>
        <div>
          <div class="w-32 sm:w-64 text-center text-gray-800 text-xs sm:text-base">po Kristu</div>
          <div class=" bg-yellow-400 w-32 sm:w-64 h-2 "></div>
          <div class="w-32 sm:w-64 text-center text-xs sm:text-base"><strong>našeho letopočtu</strong></div>
        </div>
      </div>
      <div class="customStyle  text-center text-gry-800 font-bold mb-3 text-xs sm:text-base">počátek<br />letopočtu</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Osa"
};
</script>

<style lang="scss" scoped></style>
