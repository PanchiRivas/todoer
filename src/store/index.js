import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks:[
      {done: true, text: 'Pasear al doggo'}
    ]
  },
  getters: {
  },
  mutations: { //funciones
    addTask(state, text){
      if(text!==''){
        console.log(text);
      state.tasks.push({done: false, text: text});
      }else{
        console.log("empty text");
      }
      
    }
  },
  actions: {
  },
  modules: {
  }
})
