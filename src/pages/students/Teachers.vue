<template>
  <q-page class="bg-white" style="margin-bottom: 100px">
    <div class="">

      <div class="text-center q-ma-lg">
        <q-item-label class="text-h6">2020/2021 (1st Term) Result</q-item-label>
      </div>
      <div class="q-pa-md" style="">
        <q-toolbar class="bg-primary text-white shadow-2">
          <q-toolbar-title>Contacts</q-toolbar-title>
        </q-toolbar>

        <q-list bordered>

          <template v-for="item in teachers">
            <q-item :key="item.id" class="q-mb-sm" clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img :src="`${item.img}`">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ item.name }}</q-item-label>
                <q-item-label caption lines="1">{{ item.email }}</q-item-label>
                <q-item-label caption lines="1">{{ item.phone_no }}</q-item-label>
                <q-item-label lines="3">Subjects :
                  <span v-for="i in item.subjects" :key="i.name+i">{{ i.name }}</span>
                </q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="chat" color="primary" />
              </q-item-section>
            </q-item>
            <q-separator :key="item.email" />
          </template>
        </q-list>
      </div>
    </div>

  </q-page>

</template>

<script>
import {mapActions, mapState} from "vuex";
const contacts = [ {
  id: 1,
  name: 'Ruddy Jedrzej',
  email: 'rjedrzej0@discuz.net',
  letter: 'R'
}, {
  id: 2,
  name: 'Mallorie Alessandrini',
  email: 'malessandrini1@marketwatch.com',
  letter: 'M'
}, {
  id: 3,
  name: 'Elisabetta Wicklen',
  email: 'ewicklen2@microsoft.com',
  letter: 'E'
}, {
  id: 4,
  name: 'Seka Fawdrey',
  email: 'sfawdrey3@wired.com',
  letter: 'S'
} ]

const offline = [ {
  id: 5,
  name: 'Brunhilde Panswick',
  email: 'bpanswick4@csmonitor.com',
  avatar: 'avatar2.jpg'
}, {
  id: 6,
  name: 'Winfield Stapforth',
  email: 'wstapforth5@pcworld.com',
  avatar: 'avatar6.jpg'
} ]
export default {
name: "Teachers",
  data(){
  return {
    contacts,
    offline,
    separator: 'cell',
    days:['Mon','Tue','Weds','Thur','Fri'],
  }
  },
  mounted() {
    this.getTeachers();
  },
  methods:{
    ...mapActions('store', ['getTeachers'])
  },
  computed : {
    ...mapState('store', ['teachers'])
  }
}
</script>

<style scoped>

</style>
