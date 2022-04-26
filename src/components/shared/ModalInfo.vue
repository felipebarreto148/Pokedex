<template>
	<transition name="fade">
		<div class="modal" v-if="show">
			<div
				class="modal__backdrop"
				:class="[pokemonType ? `bg--${pokemonType}` : '']"
				@click="closeModal()"
			/>

			<div class="modal__dialog">
				<div class="modal__header">
					<slot name="header" />
					<h1 class="title" v-if="title">{{ title }}</h1>
					<button
						type="button"
						class="modal__close"
						@click="closeModal()"
					>
						<span class="mdi mdi-close" />
					</button>
				</div>

				<div class="modal__body">
					<slot name="body" />
				</div>

				<div class="modal__footer">
					<slot name="footer" />
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
//Assets
import '@/styles/shared/_modalInfo.scss';

export default {
	name: 'ModalInfo',
	data() {
		return {
			show: false,
			bgType: `bg--${this.pokemonType}`,
		};
	},
	methods: {
		closeModal() {
			this.show = false;
		},
		openModal() {
			this.show = true;
		},
	},
	props: {
		title: {
			type: String,
		},
		'pokemon-type': {
			type: [String, Object],
		},
	},
};
</script>
