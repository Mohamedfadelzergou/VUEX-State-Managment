import mutations from './mutations.js' 
import getters from './getters.js'
import actions from './actions.js'
export default {
  namespaced:true,
  state: {
    counter:1,
    name:"mohamed fadel zergou",
  },
  mutations: mutations,
  getters:getters,
  actions: actions
}
