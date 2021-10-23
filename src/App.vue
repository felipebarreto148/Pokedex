<template>
  <div id="app">
    <Pokedex />
  </div>
</template>

<script>
//Assets
import "./styles/global.scss";
import "./styles/reset.scss";

//Components
import Pokedex from "./components/Podekex.vue";

export default {
  name: "App",
  components: {
    Pokedex,
  },
};
</script>