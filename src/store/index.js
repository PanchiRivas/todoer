import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks:[
      {done: false, text: 'Comprar pan'},
      {done: false, text: 'Cocinar'},
      {done: true, text: 'Comprar arroz'}
    ],
    empty: ''
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
    },
    isDone(state, index){
      console.log("done");
      state.tasks[index].done = true;
    },
    deleteTask(state, index){
      console.log("delete");
      state.tasks.splice(index, 1);
    },
    addAgain(state, index){
      state.tasks[index].done = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
