import axios from 'axios';
// axios.defaults.baseURL = `https://afiaanyi.com/api/`;
// axios.defaults.baseURL = `http://localhost/afiaanyi_backend/public/api/`;
// import {getLocalUser} from "../router";
import { LocalStorage } from 'quasar'
const user = [];
const state = {
  currentUser: {"id":1,"username":"benny","avatar":"/images/avatar.png","referral":"R9mQR","first_name":"Benjamin","last_name":"Chukwudi","state":"delta","city":"Asaba","phone":"08131652852","level":"1","user_type":"admin","address":"Federal College Of Education","email":"benjaminchukwudi0@gmail.com","is_admin":1,"email_verified_at":"2019-10-26 09:39:41","created_at":"2019-10-26 09:39:41","updated_at":"2020-04-28 10:48:46","deleted_at":null,"name":"Benjamin Chukwudi","res_id":1,"referral_code":"EKNXK","ref_name":"Maduemezia Jesse","gravatar":"https://cdn.quasar.dev/img/avatar.png","account":{"id":1,"user_id":"1","balance":"38531","point":"0","created_at":"2019-10-26 09:39:41","updated_at":"2020-09-25 20:30:53","deleted_at":null}},
  subjects:[],
  attendance:[],
  marks:[],
  teachers:[],

  has_shown_update:0,
  has_shown_promo:0,
  // isLoggedIn: !user,
  isLoggedIn: !!user,
  loading: false,
  carts:[],
  lists:[],
  wish_lists:[],
  reg_success:'',
  site_details:[],
  types: [],
  authError: null,
}
const mutations = {


  updatePromo(state){
    state.has_shown_promo = 1;
  },

  updateSubjects(state, payload) {
    state.subjects = payload;
  },

  updateTeachers(state, payload) {
    state.teachers = payload;
  },

  updateAttendance(state, payload) {
    state.attendance = payload;
  },

  updateMarks(state, payload) {
    state.marks = payload;
  },

  login(state) {
    state.loading = true;
    state.authError = null;
    // state.reg_success = null;
  },
  regSuccess(state, payload){
    state.reg_success = payload
  },
  loginSuccess(state, payload) {
    state.authError = null;
    state.isLoggedIn = true;
    state.loading = false;
    state.currentUser =  payload;
    // state.currentUser = Object.assign({}, payload);
    state.currentUser = Object.assign({}, payload, {token: payload.access_token});
    LocalStorage.set("user", JSON.stringify(state.currentUser));
    axios.post('/me/profile')
      .then((response) => {
        if(response.data.user.verified === 0){
          this.$router.push({path: '/verify'});
        }

      })
  },
  logout(state) {
    LocalStorage.remove("user");
    state.isLoggedIn = false;
    state.currentUser = null;
  },
  loginFailed(state, payload) {
    state.loading = false;
    state.authError = payload.error;
  },

}
const getters = {

  currentUser(state) {
    return state.currentUser;
  }

  // lists(state){
  //   return state.lists;
  // }
}
const actions = {
  loginUser({commit}) {
    commit("login");
  },

  getSubjects({commit}){
    axios.get('/dash/public/get-student-subject?student_id=22')
      .then((response) => {
        commit('updateSubjects', response.data.data);
      })
  },

  getAttendance({commit}){
    axios.get('/dash/public/get-student-attendance?student_id=22')
      .then((response) => {
        commit('updateAttendance', response.data);
      })
  },

  getMarks({commit}){
    axios.get('/dash/public/get-student-marks?student_id=22')
      .then((response) => {
        commit('updateMarks', response.data.data);
      })
  },

  getTeachers({commit}){
    axios.get('/dash/public/get-student-teachers?student_id=22')
      .then((response) => {
        commit('updateTeachers', response.data.data);
      })
  },


  getCategories({commit}) {
    axios.get('/categories')
      .then((response) => {
        commit('updateCategories', response.data);
      })
  },
  getTopBrands({commit}) {
    axios.get('/top_brands')
      .then((response) => {
        commit('updateTopBrands', response.data);
      })
  },
  getSlides({commit}) {
    axios.get('/home/sliders')
      .then((response) => {
        commit('updateSlides', response.data);
      })
  },

  getCatFeaturedProducts({commit}) {
    axios.get('/products/category/featured')
      .then((response) => {
        commit('updateCatFeaturedProducts', response.data);
      })
  },

  getFeaturedProducts({commit}) {
    axios.get('/products/featured')
      .then((response) => {
        commit('updateFeaturedProducts', response.data);
      })
  },

  getBestSellingProducts({commit}) {
    axios.get('/products/best_selling')
      .then((response) => {
        commit('updateBestSellingProducts', response.data);
      })
  },

  getWishList({commit}) {
    axios.post('/products/all_wish')
      .then((response) => {
        commit('updateWishLists', response.data);
      })
  },

  getFollowings({commit}) {
    axios.post('/stores/all_followed')
      .then((response) => {
        commit('updateFollowings', response.data);
      })
  },

  getOrders({commit}) {
    axios.get('/orders/pending')
      .then((response) => {
        commit('updatePendingOrders', response.data);
      })
  },
  addToCart({commit}, payload) {
    axios.post("/cart/addtocart", payload)
      .then((response) => {
        this.dispatch('store/getCarts');
        // commit('add_cart', response.data);
      })
  },
  increaseCartQty(payload){
    axios.post("/carts/update", payload)
      .then((response) => {

        // if(response.data.type == 1 && response.data.status == 1){
        //     commit('increase_cart_qty', response.data.id);
        // }else if(response.data.type == 0 && response.data.status == 1){
        //     commit('decrease_cart_qty', response.data.id);
        // }
      })
  },
  registerUser(payload){
    axios.post('auth/register', payload)
      .then((response) => {
        console.log("registered")
      })
  },
  getCarts(context) {
    if(state.isLoggedIn) {
      axios.post('/carts')
        .then((response) => {
          context.commit('updateCarts', response.data);
        });
    }
    this.state.hasCart = true;
  },
  getStoreFollowingIds({state, commit}) {
    console.log(state.isLoggedIn)
    if(state.isLoggedIn){
      axios.post('/stores/following/ids')
        .then((response) => {
          commit('updateStoreFollowingId', response.data);
        });
    }else {
      commit('updateStoreFollowingId', []);
    }
  },
  getCheckoutDetails({commit}) {
    axios.post('/checkout/details')
      .then((response) => {
        commit('updateCheckoutDetails', response.data);
      })
  },
  getDetails({commit}) {
    axios.post('/site/details')
      .then((response) => {
        commit('updateDetails', response.data);
      })
  },
  getCurrentUser({state}) {
    axios.post('/me/profile')
      .then((response) => {
        console.log(response.data.user);
        let user = Object.assign({}, response.data.user, {token: state.currentUser.token});

        LocalStorage.set("user", JSON.stringify(user));
      })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

