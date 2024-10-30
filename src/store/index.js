import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    games: []
  },
  mutations: {
    setGames(state, games) {
      state.games = games;
    }
  },
  actions: {
    async fetchGames({ commit }) {
      try {
        const response = await fetch('https://api.rawg.io/api/games?key=284a4e81800640cdb8a1bebf70473adc');
        const data = await response.json();
        commit('setGames', data.results);
      } catch (error) {
        console.error(error);
      }
    }
  },
  getters: {
    games: state => state.games
  }
});
