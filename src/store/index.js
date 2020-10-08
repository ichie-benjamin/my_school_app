import Vue from 'vue'
import Vuex from 'vuex'
import store from "./store";

// import example from './module-example'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      store
    },
    strict: process.env.DEV
  })

  return Store
}
