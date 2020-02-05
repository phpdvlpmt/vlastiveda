<template>
  <div>
    <div class="bg-white rounded  mt-4 shadow-md px-6 py-4 overflow-hidden">
      <h2 class="text-gray-900 text-lg font-bold text-center uppercase">Malá kapitola o čase</h2>
      <div>
        <div class="md:flex items-center py-6">
          <div class="w-full md:w-2/3">
            <p>I v dávné minulosti lidé potřebovali měřit čas. Měření vycházelo z pozorování přírody.</p>
            <p>Základem pro měření času je:</p>

            <ul class="list-inside list-disc my-2">
              <li><strong>doba oběhu Země kolem Slunce</strong>, to je <strong>1 rok</strong>.</li>
              <li><strong>doba oběhu Měsíce kolem Země</strong> - asi 30 dní - to je <strong>1 měsíc</strong>.</li>
              <li><strong>doba otočení Země kolem své osy</strong>, to je <strong>1 den</strong>.</li>
            </ul>
            <p>Na základě těchto časových úseků byl sestaven <strong>kalendář</strong>.</p>
          </div>
          <div class="w-full p-4 md:p-0 md:w-1/3 flex justify-center">
            <img class="w-2/3 md:w-1/2" src="../assets/calendar.svg" alt="" />
          </div>
        </div>

        <h3 class="text-blue-700 font-bold text-lg my-2">Jak se označují léta v kalendáři?</h3>
        <p>
          Jako začátek pro počítání let neboli jako <strong>počátek letopočtu</strong> si lidé určili pro ně mimořádně důležitou událost. V našem kalendáři to byl
          <strong>rok narození Ježíše Krista</strong>.
        </p>
        <p>Počátek našeho letopočtu se tedy počítá od pravděpodobného roku narození Ježíše Krista</p>
        <p>U letopočtů před narozením Ježíše Krista užíváme označení <strong> před naším letopočtem</strong> (př. n. l. nebo také <strong>před Kristem</strong> (př. Kr.).</p>
        <p>U události po narození Ježíše Krista užíváme označení <strong> našeho letopočtu</strong> (n. l.) nebo také <strong>po Kristu</strong> (po Kr.).</p>

        <div class="flex justify-center w-full mb-3">
          <div id="image" class="mt-6 ">
            <div class="customStyle  text-center text-gray-800 font-bold mb-6">narození Krista</div>
            <div class="mt-1 flex items-base">
              <div>
                <div class="w-64 text-center text-gray-800">léta před Kristem</div>
                <div class="bg-green-700 w-64 h-2 "></div>
                <div class="w-64 text-center"><strong>před naším letopočtem</strong></div>
              </div>
              <div>
                <!--<div><strong>narození Krista</strong></div>-->
                <div class="bg-red-700 w-2 h-10 items-center relative">
                  <span class="absolute -mt-6 font-bold text-red-700">0</span>
                </div>
                <!-- <div>
              <strong>počátek<br />letopočtu</strong>
            </div>-->
              </div>
              <div>
                <div class="w-64 text-center text-gray-800">po Kristu</div>
                <div class=" bg-yellow-400 w-64 h-2 "></div>
                <div class="w-64 text-center"><strong>našeho letopočtu</strong></div>
              </div>
            </div>
            <div class="customStyle  text-center text-gry-800 font-bold mb-3">počátek<br />letopočtu</div>
          </div>
        </div>
        <h3 class="text-blue-700 font-bold text-lg my-2">Co je století, co tisíciletí?</h3>
        <p>Nepřetržitý tok času rozdělujeme pro přehlednost na <strong>staletí</strong> a <strong>tisíciletí</strong>.</p>
        <p><strong>Století</strong> - doba jednoho sta let. Např. roky 2001-2100 jsou 21. století.</p>
        <p><strong>Tisíciletí</strong> - doba jednoho tisíce let. Např. roky 2001-2100 jsou 3. tisíciletí</p>
        <Prevod></Prevod>
      </div>
    </div>
  </div>
</template>

<script>
import Prevod from "./Prevod.vue";
export default {
  name: "Cas",
  components: {
    Prevod
  }
};
</script>

<style lang="css" scoped>
.customStyle {
  width: 33rem;
}
</style>
