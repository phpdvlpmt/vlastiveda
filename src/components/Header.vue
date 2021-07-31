<template>
  <header class="bg-blue-900 text-white py-3 px-3 md:px-10 shadow-md leading-none md:flex justify-between md:items-center">
    <h1 class="text-center text-xs text-white tracking-wider">Učíme se online!</h1>
    <nav class="flex justify-center md:m-0 mt-2 mb-2">
      <router-link to="/" class="text-center text-xs tracking-wider">Domů</router-link>
      <router-link to="/ceska-republika" class="text-center text-xs tracking-wider ml-3">ČR</router-link>
      <router-link to="/evropa" class="text-center text-xs tracking-wider ml-3">Evropa</router-link>
      <router-link to="/sousedni-staty" class="text-center text-xs tracking-wider ml-3">Sousední státy</router-link>
      <router-link to="/dejepis" class="text-center text-xs tracking-wider ml-3">Dějepis</router-link>
      <!-- <router-link to="/staty" class="text-center text-xs tracking-wider ml-3">Státy</router-link>-->
    </nav>
    <div class="md:flex items-center">
      <h2 class="text-center text-xs text-white tracking-wider">Základní škola a mateřská škola Mnetěš</h2>
      <a class="text-center text-xs tracking-wider ml-3 hover:text-gray-100" href="http://mail.zsmsmnetes.cz" target="_blank">
        <svg class="hidden md:block w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M1.574 5.286l7.5 4.029c.252.135.578.199.906.199.328 0 .654-.064.906-.199l7.5-4.029c.489-.263.951-1.286.054-1.286H1.521c-.897 0-.435 1.023.053 1.286zm17.039 2.203l-7.727 4.027c-.34.178-.578.199-.906.199s-.566-.021-.906-.199-7.133-3.739-7.688-4.028C.996 7.284 1 7.523 1 7.707V15c0 .42.566 1 1 1h16c.434 0 1-.58 1-1V7.708c0-.184.004-.423-.387-.219z"
          />
        </svg>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {}
};
</script>

<style scoped></style>
