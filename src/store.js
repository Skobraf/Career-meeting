import Vue from 'vue'
import Vuex from 'vuex'
import getDiplome from './data/getDiplome';
import listSecteur from './data/listSecteur';
import listMetier from './data/listMetier';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    diplome: getDiplome.diplome,
    secteur: listSecteur.secteur,
    metier: listMetier.filier,
    items: {}
  },
  mutations: {
    MUTATE_ITEMS: (state, items) => {
      state.items = items;
    }
  },
  actions: {
    handleClick: (context, items) => {
      context.commit("MUTATE_ITEMS", items);
    }
  }
})
