<template>
  <div>
    <div class="bg-white rounded  my-4 shadow-md px-4 md:px-6 py-2 overflow-hidden">
      <h2 class="text-gray-800 text-lg font-bold text-center uppercase">Malá kapitola o čase</h2>
      <div>
        <div class="sm:flex">
          <div class="w-full sm:w-3/4 ">
            <p class="text-gray-800">I v dávné minulosti lidé potřebovali měřit čas. Měření vycházelo z pozorování přírody.</p>
            <p class="text-gray-800 mt-2 font-semibold text-center sm:text-left">Základem pro měření času je:</p>

            <ul class="leading-loose list-inside list-disc my-2 text-gray-800 text-sm md:text-base text-center sm:text-left">
              <li><strong>doba oběhu Země kolem Slunce</strong>, to je <strong>1 rok</strong>.</li>
              <li><strong>doba oběhu Měsíce kolem Země</strong> - asi 30 dní - to je <strong>1 měsíc</strong>.</li>
              <li><strong>doba otočení Země kolem své osy</strong>, to je <strong>1 den</strong>.</li>
            </ul>
            <p class="text-gray-800 mt-2 font-semibold text-center md:text-left">Na základě těchto časových úseků byl sestaven <strong>kalendář</strong>.</p>
          </div>
          <div class="sm:w-1/4">
            <img class="w-2/3 sm:w-full mx-auto" src="../assets/calendar.svg" alt="" />
          </div>
        </div>

        <h3 class="text-blue-700 font-bold text-lg my-2">Jak se označují léta v kalendáři?</h3>
        <div class="border-l-4 border-blue-700 pl-4">
          <p class="text-gray-800">
            Jako začátek pro počítání let neboli jako <strong>počátek letopočtu</strong> si lidé určili pro ně mimořádně důležitou událost. V našem kalendáři to byl
            <strong>rok narození Ježíše Krista</strong>.
          </p>
          <p class="text-gray-800">Počátek našeho letopočtu se tedy počítá od pravděpodobného roku narození Ježíše Krista</p>
          <p class="text-gray-800">U letopočtů před narozením Ježíše Krista užíváme označení <strong> před naším letopočtem</strong> (př. n. l. nebo také <strong>před Kristem</strong> (př. Kr.).</p>
          <p class="text-gray-800">U události po narození Ježíše Krista užíváme označení <strong> našeho letopočtu</strong> (n. l.) nebo také <strong>po Kristu</strong> (po Kr.).</p>
        </div>
        <!--Osa-->
        <Osa></Osa>
        <div class="md:flex my-2 -mx-4">
          <div class="w-full md:w-1/2 px-4">
            <h3 class="text-blue-700 font-bold text-lg my-2">Co je století, co tisíciletí?</h3>
            <div class="border-l-4 border-blue-700 pl-4">
              <p class="text-gray-800">Nepřetržitý tok času rozdělujeme pro přehlednost na <strong>staletí</strong> a <strong>tisíciletí</strong>.</p>
              <p class="text-gray-800"><strong>Století</strong> - doba jednoho sta let. Např. roky 2001-2100 jsou 21. století.</p>
              <p class="text-gray-800"><strong>Tisíciletí</strong> - doba jednoho tisíce let. Např. roky 2001-2100 jsou 3. tisíciletí</p>
            </div>
          </div>
          <div class="w-full md:w-1/2 px-4 ">
            <Prevod></Prevod>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Prevod from "./Prevod.vue";
import Osa from "./Osa.vue";
export default {
  name: "Cas",
  components: {
    Prevod,
    Osa
  }
};
</script>

<style lang="css" scoped>
.customStyle {
  width: 33rem;
}
</style>
