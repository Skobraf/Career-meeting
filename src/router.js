import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Secteur from './views/Secteur.vue';
import Metier from './views/Metier.vue';
import Details from './views/Details.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/secteur/:secteurId',
      name: 'secteur',
      component: Metier
    },
    {
      path: '/secteur',
      name: 'secteur',
      component: Secteur
    },
    {
      path: '/details',
      name: 'listDetails',
      component: Details
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ],
  mode: 'history'
})
