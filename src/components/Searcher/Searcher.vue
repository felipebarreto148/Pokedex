<template>
	<section id="searcher">
		<div class="label-float">
			<input
				type="text"
				placeholder=" "
				@keypress.enter="searchPokemon(name)"
				v-model="name"
			/>
			<label>Pokémon</label>
		</div>
	</section>
</template>

<script>
//Assets
import "@/styles/components/Searcher/_searcher.scss";
//Vuex
import { mapActions } from "vuex";

export default {
	name: "Searcher",
	data() {
		return {
			name: null,
		};
	},
	methods: {
		...mapActions(["searchPokemon", "getPokemons"]),
	},
	watch: {
		name(val){
			if (val == ''){
				this.getPokemons(true)
			}
		}
	}
};
</script>
