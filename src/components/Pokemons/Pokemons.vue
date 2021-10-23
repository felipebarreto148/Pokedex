<template>
	<main id="body">
		<section id="pokemons">
			<transition-group name="slide" mode="out-in" appear tag="div">
				<Cards
					v-for="pokemon of pokemonsList"
					:key="pokemon.name"
					:pokemon="pokemon"
				/>
			</transition-group>
			<infinite-loading spinner="waveDots" @infinite="infiniteHandler" />
		</section>
	</main>
</template>

<script>
//Assets
import "@/styles/components/Pokemons/_pokemons.scss";

//Components
import Cards from "./Molecules/Cards.vue";
//Core
import { mapActions, mapGetters } from "vuex";

export default {
	name: "Pokemons",
	components: {
		Cards
	},
	computed: {
		...mapGetters(["pokemonsList", "hasNext"]),
	},
	methods: {
		...mapActions(["getPokemons"]),
		async infiniteHandler($state) {
			await this.getPokemons();

			if (this.hasNext) {
				$state.loaded();
			} else {
				$state.complete();
			}
		},
	},
};
</script>

<style>
</style>
