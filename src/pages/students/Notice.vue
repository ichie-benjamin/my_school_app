<template>
<q-page>
  <div class="q-pa-md bg-white">

    <q-item-label class="q-pa-lg text-center">No notice </q-item-label>
<!--    <q-toolbar class="bg-secondary text-white shadow-2">-->
<!--      <q-toolbar-title>JSS 1 Subjects</q-toolbar-title>-->
<!--    </q-toolbar>-->

<!--    <q-list bordered>-->
<!--      <template v-for="item in subjects">-->
<!--        <q-item :key="item.id" class="q-my-sm" clickable v-ripple>-->
<!--          <q-item-section>-->
<!--            <q-item-label>{{ item.name }}</q-item-label>-->
<!--            <q-item-label caption lines="1">{{ item.code }}</q-item-label>-->
<!--          </q-item-section>-->

<!--          <q-item-section side>-->
<!--            <q-item-label caption lines="1">{{ item.type }}</q-item-label>-->

<!--          </q-item-section>-->
<!--        </q-item>-->
<!--        <q-separator :key="item.id" />-->
<!--      </template>-->

<!--    </q-list>-->
  </div>
</q-page>
</template>

<script>
import {mapState, mapActions } from "vuex";

export default {
name: "Notice",

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
