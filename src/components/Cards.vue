<template>
  <div class="px-2 md:px-10 py-4">
    <div class="sm:flex sm:flex-wrap -mx-2">
      <div
        v-for="card in cards"
        :key="card.id"
        class="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4 flex flex-col"
      >
        <div class="rounded overflow-hidden shadow-lg flex-grow flex-col">
          <div class="overflow-hidden">
            <img
              class="w-full h-40 object-cover object-center scale"
              :src="card.image"
              alt="Sunset in the mountains"
            />
          </div>
          <div class="flex flex-col flex-1 justify-between">
            <div class="px-6 py-4">
              <div class="flex justify-between items-center mb-2">
                <h3 class="font-bold text-lg">{{ card.title }}</h3>
                <span
                  class="ml-2 inline-block bg-blue-500 px-2 py-1 rounded-full text-gray-100 shadow-md text-xxs"
                  href="#"
                >{{ card.category }}. třída</span>
              </div>
              <p class="text-gray-600 text-sm">{{ card.desc }}</p>
            </div>
            <div class="px-6 py-4 flex justify-end">
              <a
                class="flex items-center text-xs leading-none bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded-lg text-gray-100 shadow-md"
                :href="card.link"
                target="_blank"
                rel="noopener"
              >
                <span>
                  <svg class="h-4 w-4 fill-current text-white" viewBox="0 0 20 20">
                    <path
                      d="M11.933 13.069s7.059-5.094 6.276-10.924a.465.465 0 00-.112-.268.436.436 0 00-.263-.115C12.137.961 7.16 8.184 7.16 8.184c-4.318-.517-4.004.344-5.974 5.076-.377.902.234 1.213.904.959l2.148-.811 2.59 2.648-.793 2.199c-.248.686.055 1.311.938.926 4.624-2.016 5.466-1.694 4.96-6.112zm1.009-5.916a1.594 1.594 0 010-2.217 1.509 1.509 0 012.166 0 1.594 1.594 0 010 2.217 1.509 1.509 0 01-2.166 0z"
                    />
                  </svg>
                </span>
                <span class="ml-3">Spustit test</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
        <div class="bg-gray-500 h-12"></div>
      </div>
      <div class="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
        <div class="bg-gray-400 h-12"></div>
      </div>
      <div class="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
        <div class="bg-gray-400 h-12"></div>
      </div>-->
    </div>
    <!--cards flex wrapper-->
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: {},
  data() {
    return {
      cards: [
        {
          id: 1,
          image:
            "https://images.unsplash.com/photo-1553570739-330b8db8a925?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          title: "Světadíly a oceány",
          desc: "Doplň správně názvy světadílů a oceánů, pak stiskni kontrola.",
          link: "http://rysava.websnadno.cz/vlastiveda_5.roc/svetadily.htm",
          category: "5"
        },
        {
          id: 2,
          image:
            "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          title: "Evropa - poloha",
          desc:
            "Doplň správně polohu a popiš, kudy vede hranice Evropy, pak stiskni kontrola.",
          link:
            "http://rysava.websnadno.cz/vlastiveda_5.roc/evropa_poloha_na_zemi.htm",
          category: "5"
        },
        {
          id: 3,
          image:
            "https://images.unsplash.com/photo-1561472014-a4d9f1eec52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          title: "Ostrovy a poloostrovy",
          desc:
            "Doplň tabulku, v prvním sloupci jméno obecné a ve druhém jméno vlastní.",
          link:
            "http://rysava.websnadno.cz/vlastiveda_5.roc/evropa_ostrovy_poloostrovy.htm",
          category: "5"
        },
        {
          id: 4,
          image:
            "https://images.unsplash.com/2/04.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          title: "Evropa - nížiny",
          desc:
            "Nížiny jsou krajiny, které mají nadmořskou výšku od 0 do 200 m n.m.",
          link:
            "http://rysava.websnadno.cz/vlastiveda_5.roc/evropa_povrch1.htm",
          category: "5"
        },
        {
          id: 5,
          image:
            "https://images.unsplash.com/photo-1543191878-f6a3e470454e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          title: "Evropa - státy",
          desc:
            "Doplň k číslu nejprve stát, potom jeho hlavní město. Pak stiskni kontrola.",
          link: "http://rysava.websnadno.cz/vlastiveda_5.roc/evropa_staty.htm",
          category: "5"
        },
        {
          id: 6,
          image:
            "https://images.unsplash.com/photo-1559589688-6ba6beafe1e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          title: "Evropská unie",
          desc:
            "Přiřaď odpovědi. Klikni na modrou šipku v okýnku a vyber správné slovo. ",
          link: "http://rysava.websnadno.cz/vlastiveda_5.roc/evropska_unie.htm",
          category: "5"
        },
        {
          id: 7,
          image:
            "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1466&q=80",
          title: "Slepá mapa světa",
          desc:
            "Klikni na číslo v křížovce, objeví se ti otázka. Doplň názvy světadílů.",
          link: "http://www.brumlik.estranky.cz/file/497/slepamapaevropy.htm",
          category: "5"
        },
        {
          id: 8,
          image:
            "https://images.unsplash.com/photo-1526667383715-3c42cbae3d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          title: "Slepá mapa Evropy",
          desc: "Podle čísel ve slepé mapě doplň do tabulky názvy států.",
          link: "http://www.brumlik.estranky.cz/file/913/slepamapaevropyy.htm",
          category: "5"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
