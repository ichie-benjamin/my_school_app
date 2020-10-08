<template>
  <q-page class=" bg-teal-1 full-height bg-teal-1" style="" >
    <div class="absolute-top fixed-top text-white top" style="padding-top: 80px;">
    <div class="q-pa-lg  justify-center">
      <div style="padding-bottom: 100px" class="row q-col-gutter-md" >
        <div class="col-sm-6 col-md-4 col-xs-6" @click="goto('/student/profile')">
          <div class="box">
            <q-icon name="person_pin" color="primary" size="64px" />
            <q-item-label class="q-mt-sm text-bold icon-text">Profile</q-item-label>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xs-6" @click="goto('/student/timetable')">
          <div class="box">
            <q-icon name="event" color="primary" size="64px" />
            <q-item-label class="q-mt-sm text-bold icon-text">Timetable</q-item-label>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xs-6" @click="goto('/student/attendance')">
          <div class="box">
            <q-icon name="event_note" color="primary" size="64px" />
            <q-item-label class="q-mt-sm text-bold icon-text">Attendance</q-item-label>
          </div>
        </div>

        <div class="col-sm-6 col-md-4 col-xs-6" @click="goto('/student/subjects')">
          <div class="box">
            <q-icon name="menu_book" color="primary" size="64px" />
            <q-item-label class="q-mt-sm text-bold icon-text">Subjects</q-item-label>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xs-6" @click="goto('/student/exam')">
          <div class="box">
            <q-icon name="menu_book" color="primary" size="64px" />
            <q-item-label class="q-mt-sm text-bold icon-text">Exam</q-item-label>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xs-6" @click="goto('/admin/check/stores')">
          <div class="box">
            <q-icon name="library_books" color="primary" size="64px" />
            <q-item-label class="q-mt-sm text-bold icon-text">Result</q-item-label>
          </div>
        </div>

        <div class="col-sm-6 col-md-4 col-xs-6" @click="goto('/student/teachers')">
          <div class="box">
            <q-icon name="assignment_ind" color="primary" size="64px" />
            <q-item-label class="q-mt-sm text-bold icon-text">Teacher</q-item-label>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xs-6" @click="goto('/admin/check/stores')">
          <div class="box">
            <q-icon name="score" color="primary" size="64px" />
            <q-item-label class="q-mt-sm text-bold icon-text">Growth</q-item-label>
          </div>
        </div>

      </div>

    </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "StudentIndex",
  methods:{
    goto(url){
      this.$router.push(url)
    },
  }
}
</script>
<style scoped lang="scss">
.icon-text {
  font-size: 1.2em;
}
.box{
  background-color: #fff;
  border-radius: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
  //height: 100%;
  //width: 27%;
  //position: relative;
  color: black;
}

.top {
  background: linear-gradient(110deg, #4bc6ff 60%, #3bfdd6 60%);

  z-index: 1;
  width: 100%;
  height: 200px;
  //border: solid 5px rgba(0, 0, 0, 0.99);
  //border-color: transparent transparent transparent;
  border-radius: 0 0 100% 100%/50%;
}

.my-content{
  padding: 10px 15px;
  //background: rgba(86,61,124,.15);
  border: 1px solid rgba(86,61,124,.2);
}

</style>
