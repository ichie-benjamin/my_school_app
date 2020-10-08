<template>
<q-page>
  <div class="q-pa-md bg-white">
    <q-toolbar class="bg-secondary text-white shadow-2">
      <q-toolbar-title>JSS 1 Subjects</q-toolbar-title>
    </q-toolbar>

    <q-list bordered>
      <template v-for="item in subjects">
        <q-item :key="item.id" class="q-my-sm" clickable v-ripple>
          <q-item-section>
            <q-item-label>{{ item.name }}</q-item-label>
            <q-item-label caption lines="1">{{ item.code }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-item-label caption lines="1">{{ item.type }}</q-item-label>

          </q-item-section>
        </q-item>
        <q-separator :key="item.id" />
      </template>

    </q-list>
  </div>
</q-page>
</template>

<script>
import {mapState, mapActions } from "vuex";

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
name: "Subjects",

  data(){
  return {
    contacts,
    offline
  }
  },
  mounted() {
  this.getSubjects();
  },
  methods:{
  ...mapActions('store', ['getSubjects'])
  },
  computed : {
    ...mapState('store', ['subjects'])
  }
}
</script>

<style scoped>

</style>
