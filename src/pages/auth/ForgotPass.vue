<template>
  <q-page class="flex q-pa-md">
    <div class="column full-width q-mt-md ">
      <div class="column items-center q-mb-md">
<!--        <img class="items-center" src="~assets/foodex_logo.png" height="60px" width="60" />-->
      </div>
          <q-form @submit="submitForm" class="q-mt-xl">

                <q-item-label v-if="mail" class="text-center q-mb-md" style="font-weight: lighter; font-size: 1.5em;">Check your mail for your reset code</q-item-label>
                <q-item-label v-else class="text-center q-mb-md" style="font-weight: lighter; font-size: 1.5em;">Enter your email address to reset password!</q-item-label>

            <div class="text-center q-mb-md text-bold text-accent" v-if="Error">
              {{ Error }}
            </div>
            <div class="text-center q-mb-md text-bold text-info" v-if="success">
              {{ success }}
            </div>

            <q-input v-if="!mail"
                     v-model="email"
                     class="q-mb-md"
                     :error="has_error ? true : false"
                     type="email"
                     label="Email"
                     :rules="[ val => val && val.length > 0 || 'Please enter your email address']">
              <template v-slot:append>
                <q-icon v-show="email.length > 0" name="cancel" @click.stop="email = ''" class="cursor-pointer" />
              </template>

              <template v-slot:error>
                {{ error }}
              </template>

            </q-input>
            <div v-if="mail">
              <q-input
                v-model="key"
                class="q-mb-md"
                :error="has_error ? true : false"
                type="text"
                label="Reset Code"
                :rules="[ val => val && val.length > 0 || 'Please enter reset code']">
                <template v-slot:append>
                  <q-icon v-show="key.length > 0" name="cancel" @click.stop="key = ''" class="cursor-pointer" />
                </template>

                <template v-slot:error>
                  {{ Error }}
                </template>

              </q-input>
              <q-input
                v-model="password"
                class="q-mb-md"
                :error="has_error ? true : false"
                type="text"
                label="New Password"
                :rules="[ val => val && val.length > 0 || 'Please enter new password',
                val => val.length > 5 || 'Password should be greater than 5 character'
                ]">
                <template v-slot:append>
                  <q-icon v-show="password.length > 0" name="cancel" @click.stop="password = ''" class="cursor-pointer" />
                </template>

                <template v-slot:error>
                  {{ error }}
                </template>

              </q-input>
            </div>


            <div class="row">
              <q-btn class="col"
                     rounded
                     :loading="loading"
                     color="secondary"
                     type="submit"
                     label="Submit" />

            </div>

          </q-form>
    </div>
  </q-page>
</template>

<script>
  export default {
    data () {
      return {
        tab: 'login',
        Error:'',
        password:'',
        key:'',
        error:'',
        loading:false,
        mail:false,
        email:'',
        has_error:false,
        success:''
      }
    },
    methods : {
      submitForm() {
        this.loading = true;
        this.has_error = false;
        this.error = '';
          this.$q.loading.show();
          // this.registerUser(this.formData)
        if(this.mail){
          this.$axios.post('auth/reset',{key:this.key,password:this.password})
            .then((response) => {
              this.$q.loading.hide();
              this.loading = false;
              // this.mail = true;
              // if(response.data.message){
              //   console.log(response.data.message.length);
              // }
              this.$router.push('/auth/');
            })
            .catch(error => {
              this.loading = false;
              this.$q.loading.hide();

              this.Error = 'Invalid reset code';
              // console.log(error.data);
              // this.has_error = true;
            })
        }else {
          this.$axios.get('auth/forgot-pass?email='+this.email)
            .then((response) => {
              this.$q.loading.hide();
              this.loading = false;
              this.success = response.data.message;
              this.mail = true;
              // if(response.data.message){
              //   console.log(response.data.message.length);
              // }
              // this.$router.push('/auth/');
            })
            .catch(error => {
              this.loading = false;
              this.$q.loading.hide();
              this.error = 'User not found';
              this.has_error = true;
            })
        }

      },
    },
    computed: {
    },
    components: {

    }
  }
</script>

<style>
</style>
