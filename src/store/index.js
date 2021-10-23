import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import Pokeapi from '../services/pokeapi';
//Utils
import { parsePokemonInfo } from '@/utils';

export default new Vuex.Store({
	state: {
		pokemons: [],
		next: null,
		limit: 25,
		offset: 0,
	},
	getters: {
		pokemonsList: (state) => state.pokemons.map(parsePokemonInfo),
		hasNext: (state) => state.next != null,
	},
	actions: {
		async getPokemons({ state, commit }, payload) {
			if (payload){
				commit('resetOffset')
				commit('resetList')
			}
			const params = {
				limit: state.limit,
				offset: state.offset,
			};
			const pokemonsList = await Pokeapi.getPokemons(params);

			if (pokemonsList.data.results.length){
				const prepareInfo = pokemonsList.data.results.map(item => Pokeapi.getPokemon(item.name));
				const pokemonsInfo = await Promise.all(prepareInfo);
				
				commit('setPokemonList', pokemonsInfo.map(item => item.data));
			}

			if (pokemonsList.data?.next != null) commit('updateOffset');
			commit('hasNext', pokemonsList.data?.next);
		},

		async searchPokemon({ state, commit }, name) { //eslint-disable-line
			if (!name){
				alert('Pokemon não encontrado');
				return
			}

			const pokemon = state.pokemons.find(info => info.name.toLowerCase() === name.toLowerCase());

			if (pokemon) {
				return;
			}

			const req = await Pokeapi.getPokemon(name.toLowerCase());
			commit('setPokemonSearched', req.data)
		},
	},
	mutations: {
		setPokemonList(state, pokemons) {
			state.pokemons.push(...pokemons);
		},

		setPokemonSearched(state, pokemon){
			state.pokemons = [pokemon]
		},

		hasNext(state, next) {
			state.next = next;
		},

		updateOffset(state) {
			state.offset += state.limit;
		},

		resetOffset(state){
			state.offset = 0
		},

		resetList(state){
			state.pokemons = []
		}
	},
});
