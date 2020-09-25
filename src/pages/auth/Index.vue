<template>
  <q-page class="flex q-pa-md bg-teal flex-center">
    <div class="column full-width q-mt-md ">
      <div class="column items-center q-mb-md">
      </div>

      <div class="row text-center q-mb-lg justify-center vertical-middle ">
        <img src="~assets/logo.png" style="height: 150px; width: 150px" >
      </div>

        <q-tab-panel name="register" class="bg-white shadow-4 q-pb-lg form">

          <q-form @submit="submitForm">

<!--              <div v-if="reg_success.length < 3">-->
<!--                <q-item-label class="text-center q-mb-md" style="font-weight: lighter; font-size: 1.5em;">Welcome back!</q-item-label>-->
<!--              </div>-->

<!--            <div class="text-center q-mb-md text-bold text-accent" v-if="authError">-->
<!--              {{ authError }}-->
<!--            </div>-->
<!--            <div class="text-center q-mb-md text-bold text-info" v-if="reg_success">-->
<!--              {{ reg_success }}-->
<!--            </div>-->



              <q-input
                v-model="formData.email"
                class="q-mb-md"
                :error="has_error && errors.email ? true : false"
                type="text"
                :hint="formData.email.length > 0 ? 'say email to reenter email address' : '' "
                label="Email Address">
                <template  v-slot:append>
                  <q-icon v-show="formData.email.length > 0" name="cancel" @click.stop="formData.email = ''" class="cursor-pointer" />
                </template>
                <template v-slot:error>
                  {{ errors.email[0] }}
                </template>
              </q-input>


            <q-input
              v-model="formData.password"
              class=""
              :type="type"
              :error="has_error && errors.password ? true : false"
              label="Enter Your Pin">
              <template  v-slot:append>
                <q-icon v-show="formData.password.length > 0 && type === 'password'" name="remove_red_eye" @click.stop="type = 'text'" class="cursor-pointer" />
                <q-icon v-show="formData.password.length > 0 && type === 'text'" name="cancel" @click.stop="type = 'password'" class="cursor-pointer" />
              </template>
              <template v-slot:error>
                {{ errors.password[0] }}
              </template>
            </q-input>

              <q-item class="float-right" clickable to="/forgot-password">Forgot Password</q-item>

            <div class="row full-width">
              <q-space />
<!--              <q-btn class="col" rounded-->
<!--                     :loading="loading"-->
<!--                     color="secondary"-->
<!--                     type="submit"-->
<!--                     label="Login" />-->
<!--            </div>-->

            <q-btn class="col" rounded
                     :loading="loading"
                     color="secondary"
                     type="button"
                   to="/student/home"
                     label="Login" />
            </div>

            <div class="column">
<!--              <q-item-label class="text-center q-ma-sm">OR</q-item-label>-->
              <q-space />
            </div>
          </q-form>
        </q-tab-panel>

      <div  class="text-center q-ma-sm">

        <q-item class="text-white" clickable to="/register">Dont Have an Account yet?  CREATE ACCOUNT</q-item>
      </div>



    </div>
  </q-page>
</template>

<script>
  import {mapActions, mapState} from "vuex";
  // import {login} from "boot/general";

  import axios from "axios";

  export default {
    data () {
      return {
        email:'',
        type:'password',
        loading:false,
        command:'',
        agreed:1,
        formData: {
          login:'',
          email: '',
          password: ''
        },
        errors:{},
        has_error: false,
      }
    },
    mounted() {
      this.$store.commit("store/loginFailed", '');
      this.$store.commit("store/regSuccess", '');
    },
    methods : {

      // ...mapActions('store', ['loginUser','loginFailed']),
      clearEmail(){
        this.formData.email = ''
      },

      submitForm() {
        this.loading = true;
        this.errors = {};
        this.has_error = false;
        this.authenticate();
      },

      register(){
        this.$router.push('/register');
      },
      authenticate() {
        this.loginUser;
        login(this.formData)
          .then((res) => {
            this.$store.commit("store/loginSuccess", res);
            this.$q.loading.hide();
            this.$speechTalk('Login Successful. you will be redirected to inbox in a moment')
            this.loading = false;
              setTimeout(() => {
                this.$router.push('/');
              }, 5000)
          })
          .catch((error) => {
            this.$speechTalk('Oppss......... '+ error);
            this.$store.commit("store/loginFailed", {error});
            this.$q.loading.hide();
            this.loading = false;
          });
      },

    },
    computed: {
      // ...mapState('store', ['authError','currentUser','reg_success']),
    },
    watch : {
    },
  }
</script>

<style lang="scss">
.form {
  border-radius: 10px;
}
</style>
