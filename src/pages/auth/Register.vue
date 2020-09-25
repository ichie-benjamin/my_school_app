<template>
  <q-page class="flex q-pa-md bg-teal flex-center">
    <div class="column full-width q-mt-md ">
      <div class="column items-center q-mb-md">
      </div>

      <div class="row text-center q-mb-lg justify-center vertical-middle ">
        <img src="~assets/logo.png" style="height: 100px; width: 100px" >
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
          <q-input
                   v-model="formData.email"
                   class=""
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



          <div>
            <q-input
              v-model="formData.email"
              class=""
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
            class=""
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
            v-model="formData.password_confirmation"
            class="q-mb-md"
            type="text"
            label="Confirm Pin" />

          <div class="row full-width">
            <q-space />
            <q-btn class="col" rounded
                   :loading="loading"
                   color="secondary"
                   type="submit"
                   label="Submit" />
          </div>

          <div class="column">
            <!--              <q-item-label class="text-center q-ma-sm">OR</q-item-label>-->
            <q-space />
          </div>
        </q-form>
      </q-tab-panel>

      <div  class="text-center q-ma-sm">

        <q-item class="text-white text-center text-bold" clickable to="/auth/login">Already have an Account?  Log in</q-item>
      </div>



    </div>
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
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
      // this.$store.commit("store/loginFailed", '');
    },

    methods:{
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
            this.errors = error.response.data.errors;
            console.log(this.errors)
            this.has_error = true;
          })

      },
    },

    components: {
    }
  }
</script>

<style>
</style>
