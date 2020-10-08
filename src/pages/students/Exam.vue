<template>
  <q-page class="bg-white" style="margin-bottom: 100px">
    <div class="">

      <div class="text-center q-ma-lg">
        <q-item-label class="text-h6">2020/2021 (1st Term) Result</q-item-label>
      </div>

      <q-markup-table :separator="separator" flat bordered>
        <thead class="bg-teal">
        <tr>
          <th class="text-left">Subject</th>
          <th class="text-left" v-for="item in marks[0].distribution" :key="item">{{ item }}</th>
          <th class="text-left">Total</th>
          <th class="text-left">Grade</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in marks" :key="item.id">
          <td>{{ item.subject.name }}</td>
          <td v-for="i in item.distribution_types" :key="i">
              {{ item.marks[i] }}
            </td>
            <td>{{ item.total_marks}}</td>
            <td>{{ item.grade }}</td>
        </tr>
        </tbody>
      </q-markup-table>
    </div>

    <div class="q-mt-md text-center bg-warning q-pa-lg" v-if="$q.screen.lt.sm">
      <q-item-label >Keep phone on landscape mode for better view</q-item-label>
    </div>
  </q-page>

</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
name: "Exam",
  data(){
  return {
    separator: 'cell',
    days:['Mon','Tue','Weds','Thur','Fri'],
  }
  },
  mounted() {
    this.getMarks();
  },
  methods:{
    ...mapActions('store', ['getMarks'])
  },
  computed : {
    ...mapState('store', ['marks'])
  }
}
</script>

<style scoped>

</style>
