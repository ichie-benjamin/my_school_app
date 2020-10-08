import Vue from 'vue'
import axios from 'axios'

// import store from "../store/store";
//
//
// import {initialize} from "./general";
//
// initialize(store)

axios.defaults.baseURL = `http://127.0.0.1:8000/`;

Vue.prototype.$url = `http://127.0.0.1:8000/`;

Vue.prototype.$axios = axios;
