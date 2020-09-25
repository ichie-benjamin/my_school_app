<template>
  <div>
  <div class="absolute-top-right " >
    <div class="q-ma-md">
    <q-btn v-if="voice" @click="stop" icon="mic_off" round color="red" />
    <q-btn v-else @click="captureSpeechToText" icon="keyboard_voice" round color="primary" />
    </div>
  </div>
  <q-form @submit="submitForm" class=" q-mt-xl">
    <div  v-if="activeTab == 'login'">
      <div v-if="reg_success.length < 3">
        <q-item-label class="text-center q-mb-md" style="font-weight: lighter; font-size: 1.5em;">Welcome back!</q-item-label>
      </div>
    </div>
    <div class="text-center q-mb-md text-bold text-accent" v-if="authError">
      {{ authError }}
    </div>
    <div class="text-center q-mb-md text-bold text-info" v-if="reg_success">
      {{ reg_success }}
    </div>

    <q-input
      v-if="activeTab == 'register'"
      v-model="formData.name"
      :error="has_error && errors.name ? true : false"
      class="q-mb-md"
      label="Full Name">
      <template  v-slot:append>
        <q-icon v-show="formData.name.length > 0" name="cancel" @click.stop="formData.name = ''" class="cursor-pointer" />
      </template>
      <template v-slot:error>
        {{ errors.name[0] }}
      </template>
    </q-input>
    <q-input v-if="activeTab == 'register'"
      v-model="formData.email"
      class="q-mb-md"
      :error="has_error && errors.email ? true : false"
      type="email"
      label="Email">
      <template v-slot:append>
        <q-icon v-show="formData.email.length > 0" name="cancel" @click.stop="formData.email = ''" class="cursor-pointer" />
      </template>
      <template v-slot:error>
        {{ errors.email[0] }}
      </template>
    </q-input>



    <div  v-if="activeTab == 'login'">


      <q-input
        v-model="formData.email"
        class="q-mb-md"
        :error="has_error && errors.email ? true : false"
        type="text"
        label="Email/Phone">
        <template  v-slot:append>
          <q-icon v-show="formData.email.length > 0" name="cancel" @click.stop="formData.email = ''" class="cursor-pointer" />
        </template>
        <template v-slot:error>
          {{ errors.email[0] }}
        </template>
      </q-input>
    </div>

    <q-input
      v-model="formData.password"
      class="q-mb-md"
      :type="type"
      :error="has_error && errors.password ? true : false"
      label="Enter Your Pin">
      <template  v-slot:append>
        <q-icon v-show="formData.password.length > 0 && type === 'password'" name="remove_red_eye" @click.stop="type = 'text'" class="cursor-pointer" />
        <q-icon v-show="formData.password.length > 0 && type === 'text'" name="cancel" @click.stop="formData.password = ''" class="cursor-pointer" />
      </template>
      <template v-slot:error>
        {{ errors.password[0] }}
      </template>
    </q-input>

    <q-input
      v-if="activeTab == 'register'"
      v-model="formData.password_confirmation"
      class="q-mb-md"
      type="text"
      label="Confirm Pin" />

    <div class="row q-mb-md" v-if="activeTab == 'register'">
      I Agree to <router-link to="/agreement">Terms & Condition</router-link>
    </div>

    <div class="row">
      <q-space />
      <q-btn class="col" rounded v-if="activeTab == 'login'"
             :loading="loading"
        color="secondary"
        type="submit"
        :label="activeTab" />

      <q-btn class="col" rounded v-if="activeTab == 'register'"
             :loading="loading"
        color="secondary"
        type="submit"
        :label="activeTab" />
    </div>
    <div class="row" v-if="activeTab == 'login'">
      <div class="q-mt-lg">
<!--        <QBtn type="a" flat href="https://foodex.com.ng/forgot/password">-->
<!--          Forgot Password</QBtn>-->
        <q-item class="text-center" clickable to="/forgot-password">Forgot Password</q-item>
      </div>
    </div>
    <div class="column">
      <q-item-label class="text-center q-ma-sm">OR</q-item-label>
      <q-space />
      <q-btn class="col" rounded v-if="activeTab == 'login'"
             color="primary"
             to="/register"
             label="No Account Yet ? Create One" />

      <q-btn class="col" rounded v-if="activeTab == 'register'"
             color="primary"
             to="/auth/"
             label="Already have an account ? Login" />

    </div>
  </q-form>
  </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex'
  import {login} from '../boot/general'

  export default {
    props: ['tab'],

    data() {
      return {
        activeTab : this.tab,
        type:'text',
        loading:false,
        voice:true,
        agreed:1,
        formData: {
          name: 'name',
          phone: '0812..',
          login:'',
          password_confirmation: '',
          email: 'example@gmail.com',
          password: ''
        },
        errors:{},
        has_error: false,
      }
    },
    mounted() {
      this.captureSpeechToText();
      this.$store.commit("store/regSuccess", '');

    },
    methods: {
      ...mapActions('store', ['loginUser','loginFailed']),
      stop(){
        this.voice = false;
      },
      captureSpeechToText () {
        this.voice = true
        this.$speechTalk('Hello! Welcome to vmail account creation page ...')
          .then(() => {
            this.nxtStage()
          })
      },
      nxtStage () {
        this.$speechTalk('What is your name ..........   ')
          .then(() => {
            this.record(this.setName, this.secondStage);
            // setTimeout(() => {
            //   if(this.voice && this.$route.fullPath == '/register'){
            //     this.secondStage()
            //   }
            // },3000);
          })
      },
      secondStage () {
        this.$speechTalk('What is your email address')
          .then(() => {
            this.record(this.setEmail,this.enterPass);
            // setTimeout(() => {
            //   if(this.voice && this.$route.fullPath == '/register') {
            //     this.enterPass()
            //   }
            // },6000);
          })
      },
      enterPass () {
        this.$speechTalk('What is your password')
          .then(() => {
            this.record(this.setPass, this.confirmPass);
            // setTimeout(() => {
            //   if(this.voice && this.$route.fullPath == '/register') {
            //     this.confirmPass()
            //   }
            // },6000);
          })
      },
      confirmPass () {
        this.$speechTalk('Please confirm your password')
          .then(() => {
            this.record(this.setConfirmPass,this.finalStep);
            // setTimeout(() => {
            //   if(this.voice && this.$route.fullPath == '/register') {
            //     this.finalStep()
            //   }
            // }, 5000)
          })
      },
      finalStep () {
        this.$speechTalk('Creating your account please hold on ............')
        setTimeout(() => {
          if(this.voice && this.$route.fullPath == '/register') {
            this.submitForm();
          }
        }, 3000)
      },
      successStep () {
        this.$speechTalk('Account Successfully created, your will be redirected to login page in a moment ............')
        setTimeout(() => {
          if(this.voice && this.$route.fullPath == '/register') {
            this.$router.push('/auth/');
          }
        }, 7000)
      },
      // passStep () {
      //   this.$speechTalk('What is your password')
      //     .then(() => {
      //       this.record(this.setPass,this.confirmPass())
      //     })
      // },
      setName (name) {
        this.formData.name = name;
      },
      setEmail (email) {
        this.formData.email = email.replace("at", "@").split(' ').join('');
      },
      setPass (pass) {
        this.formData.password = pass
      },
      setConfirmPass (pass) {
        this.formData.password_confirmation = pass
      },
      record (step, callback = null) {
        this.$speechToText()
          .then((suc) => {
            step(suc)
            if (callback && this.voice && this.$route.fullPath == '/register') {
              setTimeout(() => {
                callback()
              }, 2000)
            }
          })
      },
      clearEmail(){
        this.formData.email = ''
      },
      submitForm() {
        this.loading = true;
        this.errors = {};
        this.has_error = false;
          this.$q.loading.show();
          this.loading = false;
          // this.registerUser(this.formData)
          this.$axios.post('auth/register', this.formData)
            .then((response) => {
              this.$store.commit("store/regSuccess", 'Registration successful, pls login to continue');
              // this.$router.push('/auth/');
              this.successStep();
              this.$q.loading.hide();
            })
            .catch(error => {
              this.loading = false;
              this.$q.loading.hide();
              this.$speechTalk('Opps, some errors encountered, please correct error and continue ............')
              this.errors = error.response.data.errors;
              console.log(this.errors)
              this.has_error = true;
            })

      },
    },
    computed: {
      ...mapState('store', ['authError','currentUser','reg_success']),
      link(){
        return this.$route.fullPath
      }
    },
    watch : {
      "formData.email": function (){
        if(this.formData.email == ''){
          this.secondStage()
        }
      },
      "formData.password": function (){
        if(this.formData.password == ''){
          this.enterPass()
        }
      },
      "formData.name": function (){
        if(this.formData.name == ''){
          this.nxtStage()
        }
      },
    },
  }
</script>
