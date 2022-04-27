<template>
	<div class="card">
		<section class="card-body" :class="`bg--${pokemon.types[0]}`" @click="open">
			<h3>{{ pokemon.name }}</h3>
			<img
				:src="pokemon.sprite"
				:alt="`Pokemon - ${pokemon.name}`"
				width="150"
				height="150"
			/>
		</section>
		<ModalInfo ref="modal" :pokemon-type="pokemon.types[0]">
			<template v-slot:header>
				<div class="custom-header">
					<h1 class="title">{{ pokemon.name }}</h1>
					<div class="types">
						<section class="type primary" :class="`bg--${pokemon.types[0]}`">
							{{ pokemon.types[0] }}
						</section>
						<section class="type secondary" :class="`bg--${pokemon.types[1]}`" v-if="pokemon.types[1]">
							{{ pokemon.types[1] }}
						</section>
					</div>
				</div>
			</template>
			<template v-slot:body>
				<div class="panel">
					<section class="stats">
						<ul>
							<li v-for="(item, index) in pokemon.stats" :key="index">
								{{item.stat.name}}: {{ item.base_stat }}
							</li>
						</ul>
					</section>
				</div>
			</template>
		</ModalInfo>
	</div>
</template>

<script>
//Assets
import '@/styles/components/Pokemons/Molecules/_cards.scss';

//Components
import ModalInfo from '@/components/shared/ModalInfo.vue';

export default {
	name: 'Cards',
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
			const MODALINFO = this.$refs.modal;

			if (MODALINFO) {
				MODALINFO.openModal();
			}
		},
	},
};
</script>
