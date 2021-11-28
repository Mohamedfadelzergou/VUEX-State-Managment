import { createStore } from 'vuex'

export default createStore({
  state: {
    counter:1,
    name:"mohamed fadel zergou"
  },
  mutations: {
    increment(state,payloud){
      state.counter+=payloud.data;

    }
  },
  actions: {
  },
  modules: {
  }
})
