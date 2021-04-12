import Vue from "vue"
import Vuex from "vuex"
import vehicles from '../vehicles.json';
Vue.use(Vuex)

export default new Vuex.Store({
  actions: {

  },
  mutations: {},
  state: {
    vehicles: vehicles
  },
  getters: {  
    getVehicles: (state) => (type) => {
      if(type && type !== 'whatever') {
        return state.vehicles.filter(vehicle=> vehicle.type === type);
      } else {
        return state.vehicles;
      }
    },
    getVehicle: (state) => (id) => {
     return state.vehicles.find((item) => id === item.id)
    }
  },
  modules: {},
})