import { createStore } from 'vuex'
import counterModule from './counter'
import categoriesModule from './category'
export default createStore({
  state: {},
  mutations: {},
  getters:{},
  actions: {},
  modules: {
    counter:counterModule,
    category:categoriesModule
  }
})
