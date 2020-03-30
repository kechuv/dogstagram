import Vue from 'vue';
import Vuex from 'vuex';
import App from './modules/app.js';
import Dogstagram from './modules/dogstagram.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    App,
    Dogstagram
  }
})
