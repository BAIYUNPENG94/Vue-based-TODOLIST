<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text pa-4">Dashboard</h1>

    <v-container class="my-5">
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="testHeaders"
          :items="testData"
          :search="search"
        ></v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      search: '',
      projects: [],
      testHeaders: [
          {
            text: 'Task',
            align: 'start',
            filterable: false,
            value: 'name',
          },
          { text: 'Completeness', value: 'comp' },
          { text: 'Priorty', value: 'poir' },
          //{ text: 'Carbs (g)', value: 'carbs' },
          //{ text: 'Protein (g)', value: 'protein' },
          //{ text: 'Iron (%)', value: 'iron' },
      ],
      testData: [
          {
            name: 'Test Task 0',
            comp: '90%',
            poir: 'High',
          },
        ],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: #ffaa2c !important;
}
.v-chip.overdue {
  background: #f83e70 !important;
}
</style>