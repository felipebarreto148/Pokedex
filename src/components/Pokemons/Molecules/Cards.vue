<template>
	<div>
		<section
			class="card"
			:class="`bg--${pokemon.types[0]}`"
			@click="open"
		>
			<h3>{{ pokemon.name }}</h3>
			<img
				:src="pokemon.sprite"
				:alt="`Pokemon - ${pokemon.name}`"
				width="150"
				height="150"
			/>
		</section>
		<ModalInfo ref="modal" :title="pokemon.name" :pokemon-type="pokemon.types[0]"></ModalInfo>
	</div>
</template>

<script>
//Assets
import "@/styles/components/Pokemons/Molecules/_cards.scss";

//Components
import ModalInfo from "@/components/shared/ModalInfo.vue";

export default {
	name: "Cards",
	components: {
		ModalInfo,
	},
	props: {
		pokemon: {
			type: Object,
			required: true,
		},
	},
	methods: {
		open() {
			console.log(this.pokemon.types[0]);
			const MODALINFO = this.$refs.modal;

			if (MODALINFO) {
				MODALINFO.openModal();
			}
		},
	},
};
</script>