<template>
  <q-page class>
    <div class="column"  style="margin-bottom: 100px">
      <div style="height: 200px" class="bg-primary">

      </div>
      <!--      <q-parallax :height="130" :speed="0.5" style='background-image:url("/statics/images/map.png"); background-position: center center'>-->
      <!--                <q-parallax :height="150" :speed="0.5" :style="{ backgroundImage: 'url(' + $url+user.cover_pics + ')' }">-->
      <!--      </q-parallax>-->

      <div class="q-ma-md">

        <div style="min-height: 200px;margin-top:-95px;" class="bg-white shadow-1">
          <div style=" text-align: center;">
            <q-avatar style="margin-top: -95px;" size="150px" class="justify-center content-center">
              <img src="http://benxsms.ml/images/avatar.jpg">
            </q-avatar>
          </div>
            <div class="column">
            <div class="column text-center q-mt-md">
              <q-item-label class="text-h5 text-bold text-primary">Nwakonobi Benjamin</q-item-label>
              <q-item-label class="text-black q-mt-sm">Jss1</q-item-label>
            </div>
<!--            -->
<!--              <div class="row q-ml-xl q-mr-xl q-mt-md q-pb-md text-center">-->
<!--                <div class="col-6">-->
<!--                  <q-item-label class="text-bold">Following</q-item-label>-->
<!--                  <q-item-label>{{ user.followings }}</q-item-label>-->
<!--                </div>-->
<!--                <div class="col-6">-->
<!--                  <q-item-label class="text-bold">Followers</q-item-label>-->
<!--                  <q-item-label>{{ user.followers }}</q-item-label>-->
<!--                </div>-->
<!--              </div>-->
            <div class="column  q-mt-md">
              <q-list bordered>
                <q-item  v-ripple>
                  <q-item-section>Reg. No.</q-item-section>
                  <q-item-section side>
                    <q-item-label caption>20211</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator spaced />
                <q-item  v-ripple>
                  <q-item-section>ID CARD NO.</q-item-section>
                  <q-item-section side>
                    <q-item-label caption></q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator spaced />
                <q-item  v-ripple>
                  <q-item-section>GMAIL.</q-item-section>
                  <q-item-section side>
                    <q-item-label caption>benjaminchukwudi0@gmail</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>

        </div>

        <div style="" class="bg-white q-mt-md shadow-1">
          <q-tabs
            v-model="tab"
            class="text-primary"
          >
            <q-tab name="profile" icon="face" label="Profile" />
            <q-tab name="feeds" icon="list_alt" label="Feeds" />
            <q-tab name="media" icon="perm_media" label="Media" />
          </q-tabs>

        </div>

        <template >
          <div v-if="tab === 'profile'">
            <q-list bordered>
              <q-item  class="q-my-sm" v-ripple>
                <q-item-section>
                  <q-item-label class="text-bold">Full name : </q-item-label>
                  <q-item-label caption lines="1">Nwakonobi Benjamin</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator spaced />

              <q-item  class="q-my-sm" v-ripple>
                <q-item-section>
                  <q-item-label class="text-bold">Date of Birth : </q-item-label>
                  <q-item-label caption lines="1">22/12/2018</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator spaced />

              <q-item  class="q-my-sm" v-ripple>
                <q-item-section>
                  <q-item-label class="text-bold">Gender : </q-item-label>
                  <q-item-label caption lines="1">Male</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator spaced />

              <q-item  class="q-my-sm" v-ripple>
                <q-item-section>
                  <q-item-label class="text-bold">Religion : </q-item-label>
                  <q-item-label caption lines="1">Male</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator spaced />


              <q-item  class="q-my-sm" v-ripple>
                <q-item-section>
                  <q-item-label class="text-bold">Blood Group : </q-item-label>
                  <q-item-label caption lines="1">0-</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator spaced />

              <q-item  class="q-my-sm" v-ripple>
                <q-item-section>
                  <q-item-label class="text-bold">Nationality : </q-item-label>
                  <q-item-label caption lines="1">Estonia</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator spaced />

              <q-item  class="q-my-sm" v-ripple>
                <q-item-section>
                  <q-item-label class="text-bold">Email : </q-item-label>
                  <q-item-label caption lines="1">jonatan65@example.org</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator spaced />

              <q-item  class="q-my-sm" v-ripple>
                <q-item-section>
                  <q-item-label class="text-bold">  Phone No. : </q-item-label>
                  <q-item-label caption lines="1">+9232585262320</q-item-label>
                </q-item-section>
              </q-item>



              <q-separator spaced />

              <q-item  class="q-my-sm" v-ripple>
                <q-item-section>
                  <q-item-label class="text-bold">  Extra Curricular Activities : </q-item-label>
                  <q-item-label caption lines="1"></q-item-label>
                </q-item-section>
              </q-item>
              <q-separator spaced />
              <q-item  class="q-my-sm" v-ripple>
                <q-item-section>
                  <q-item-label class="text-bold">   Note : </q-item-label>
                  <q-item-label caption lines="1"></q-item-label>
                </q-item-section>
              </q-item>
            </q-list>

          </div>
          <div v-if="tab === 'media'">
            <div class="ro bg-white q-mt-md">
              <div class="">
                <div class="wd-heady">
                  <q-item-label class="text-h5 q-pa-md"> Media</q-item-label>
                  <q-separator />
                  <img src="images/photo-icon.png" alt="">
                </div>
                <div v-show="medias.length > 0" class="pf-gallery">
                  <!--                                                        {{ medias }}-->
                  <div class="row justify-center">
                    <!--                    <gallery :images="medias" :index="index" @close="index = null"></gallery>-->
                    <div
                      class=""
                      v-for="(image, imageIndex) in medias"
                      :key="imageIndex"
                      @click="index = imageIndex"
                      :style="{ backgroundImage: 'url(' + $url + image + ')', width: '45%', height: '200px' }">
                      <!--                                                                :style="{ backgroundImage: 'url('+'/media/' + image['id']+'/'+image['file_name'] + ')', width: '45%', height: '200px' }"-->
                    </div>
                  </div>
                </div><!--pf-gallery end-->
                <div class="pf-gallery" v-show="medias.length < 1">
                  <p>No Media Found</p>
                </div>
              </div>
            </div>
          </div>
          <div v-if="tab === 'feeds'">
            <div class="bg-white q-mt-sm">
              <template v-if="feeds.length < 1" >
                <div class="bg-white q-pa-md text-black">
                  <q-item-label class="text-center">No feed found</q-item-label>
                </div>
              </template>
            </div>
          </div>
        </template>


        <!--{{ user }}-->
      </div>
    </div>


    <q-dialog v-model="showBookApp" persistent>
      <q-card style="min-width: 330px" class="q-pr-lg q-pl-lg q-pt-lg">

        <q-card-actions align="right" class="text-primary">

          <q-btn flat icon="close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>

</template>

<script>
export default {
  name: "StudentProfile",
  data(){
    return {
      feeds:[],
      tab:'profile',
      img:'https://img.freepik.com/free-vector/pastel-blue-banner-background_1048-11857.jpg',
    }
  }
}
</script>
<style scoped lang="scss">


.top {
  background: linear-gradient(110deg, #4bc6ff 60%, #3bfdd6 60%);

  width: 100%;
  height: 200px;
  //border: solid 5px rgba(0, 0, 0, 0.99);
  //border-color: transparent transparent transparent;
  border-radius: 0 0 100% 100%/50%;
}

.vendors .logo {
  width:50px;
  height: 50px;
}
.account-head {

  width: 100%;
  height: 80px;
  /*border: solid 5px rgba(0, 0, 0, 0.99);*/
  border-color: transparent transparent transparent;
  border-radius: 0 0 100% 100%/50%;
}


</style>
