<template>
  <div class="mt-4">
    <div class="md:flex -mx-5 mt-3">
      <div class="w-full md:w-1/2 px-5 mb-3 md:mb-0 min-h-full flex flex-grow">
        <div class="w-full bg-white shadow-lg rounded">
          <div class="bg-red-700 px-4 py-2 rounded">
            <h4 class="text-xl text-red-100  font-medium">4. třída</h4>
            <div class="py-2"><a href="/casova_primka_1.jpg" class="text-white hover:underline" target="_blank">Časová přímka 4. třída</a></div>
          </div>
          <div class="px-4 py-4">
            <ul class="leading-relaxed text-gray-800">
              <li class="underline"><router-link to="/dejepis/cas"> Malá kapitole o čase</router-link></li>
              <li class="underline"><router-link to="/dejepis/pravek">České země v pravěku</router-link></li>
              <li class="underline"><router-link to="/dejepis/slovane">Příchod Slovanů</router-link></li>
              <li class="underline"><router-link to="/dejepis/samo">Sámův kmenový svaz</router-link></li>
              <li class="underline"><router-link to="/dejepis/povesti">Naše nejstarší minulost v pověstech</router-link></li>
              <li class="underline"><router-link to="/dejepis/morava">Velkomoravská říše</router-link></li>
              <li>Vznik českého státu, vláda přemyslovských knížat</li>
              <li>Život za vlády prvních Přemyslovců</li>
              <li>Vznik Českého králosvství, vláda přemyslovských králů</li>
              <li>Český stát za vlády Lucemburků</li>
              <li>Život ve středověku</li>
              <li>Husitské války</li>
              <li>České země p husitských válkách</li>
              <li>První Habsburkové na českém trůně</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 px-5 min-h-full flex flex-grow">
        <div class="w-full bg-white shadow-lg rounded ">
          <div class="bg-green-700 px-4 py-2 rounded">
            <h4 class="text-xl text-green-100  font-medium">5. třída</h4>
            <div class="py-2"><a href="/casova_primka_2.jpg" class="text-white hover:underline" target="_blank">Časová přímka 5. třída</a></div>
          </div>
          <div class="px-4 pt-4">
            <ul class="leading-relaxed text-gray-800">
              <li class="underline"><router-link to="/dejepis/opakovani">Opakování učiva 4. ročníku</router-link></li>
              <li class="font-bold">Novověk - naše země za vlády králů</li>
              <li class="underline"><router-link to="/dejepis/habsburkove">Habsburkové českými králi</router-link></li>
              <li>Jak se žilo na začátku novověku</li>
              <li>Baroko</li>
              <li class="underline"><router-link to="/dejepis/terezie">Marie Terezie a Josef II. zlepšují život poddaných</router-link></li>
              <li>Vynálezy mění život lidí (18. a 19. století)</li>
              <li class="underline"><router-link to="/dejepis/povstani-1848">Přichází 2. polovina 19. století</router-link></li>
              <li>První světová válka</li>
              <li>Přehled událostí v našich zemích v letech 1618 - 1918</li>
              <li class="font-bold">Novověk - naše země po vzniku republiky</li>
              <li>Jsme samostatný stát</li>
              <li>Druhá světová válka</li>
              <li>V naší republice po válce</li>
              <li>Přišla sametová revoluce</li>
              <li>Události posledních let</li>
            </ul>
          </div>
          <div class="px-4 pt-2 pb-4">
            <a class="underline text-orange-700 font-bold" href="/prehled_dejin_2.pdf" target="_blank">Zjednodušený přehled dějin</a>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/dejepis/testy">
      <div class="bg-purple-300 border-2 border-purple-400 rounded  px-3 py-1 my-4  mx-auto w-32">
        <h4 class="text-gray-800 font-bold text-xl text-center">Testy</h4>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Rozcestí",
};
</script>

<style lang="scss" scoped></style>
