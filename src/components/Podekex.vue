<template>
  <main id="pokedex">
    <Header />
    <Searcher />
    <Pokemons />
  </main>
</template>

<script>
//Components
import Header from "./Header/Header.vue";
import Searcher from "./Searcher/Searcher.vue";
import Pokemons from "./Pokemons/Pokemons.vue";

export default {
  name: "Pokedex",
  components: {
    Header,
    Searcher,
    Pokemons,
  },
};
</script>
