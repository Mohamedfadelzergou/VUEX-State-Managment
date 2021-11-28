import { createStore } from 'vuex'

const categoriesModule={
  namespaced:true,
  state: {
    categories:[]
  },
  mutations: {
    addCategories(category){},
    updateCategories(id,category){},
    deleteCategories(id){},

  },
  getters:{
    getCategories(state){

    }
  },
  actions: {
    persisteCaterory({commit},payloud){

    }
  },
}
const counterModule={
  namespaced:true,
  state: {
    counter:1,
    name:"mohamed fadel zergou",
  },
  mutations: {
    increment(state,payloud){
      state.counter+=payloud.data;
    }

  },
  getters:{
    getName(state){
      return state.name.toUpperCase();
    },
    getCounter(state){
      return state.counter*2;
    },
    getCounterMormalise(state){
      const counter=state.counter*2;
      if(counter<0){
        state.counter=1;
      }if (counter>=100) {
        state.counter=1;
      }
        return counter;
    }
  },
  actions: {
    increment({commit},payloud){
      commit('increment',payloud)
    }
  },
}
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
