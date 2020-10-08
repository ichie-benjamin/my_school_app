<template>
<q-page>
  <div class="q-pa-md bg-white">
    <q-toolbar class="bg-secondary text-white shadow-2">
      <q-toolbar-title>Attendance</q-toolbar-title>
    </q-toolbar>

    <q-list bordered>

      <template v-for="item in attendance">
        <q-item :key="item.attendance_date" class="q-my-sm" clickable v-ripple>
          <q-item-section>
            <q-item-label>{{ item.attendance_date }}</q-item-label>

          </q-item-section>

          <q-item-section side>

            <q-badge>{{ item.present }}</q-badge>

          </q-item-section>
        </q-item>
        <q-separator :key="item.attendance_date+'present'" />
      </template>

    </q-list>
  </div>
</q-page>
</template>

<script>
import {mapState, mapActions } from "vuex";

export default {
name: "Attendance",

  data(){
  return {
  }
  },
  mounted() {
  this.getAttendance();
  },
  methods:{
  ...mapActions('store', ['getAttendance'])
  },
  computed : {
    ...mapState('store', ['attendance'])
  }
}
</script>

<style scoped>

</style>
