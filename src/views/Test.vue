<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text pa-4">Dashboard</h1>

    <v-btn v-on="on" text small flat color="grey" @click="testGet()">
      <v-icon small left>folder</v-icon>
      <span class="caption text-lowercase">By project name</span>
    </v-btn>

  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            projects: [],
        }
    },
    methods: {
        testGet() {
            console.log("Test Function Triggered");
            axios.get("http://192.168.2.120:8000/todo", {
                params: {}
            })
              .then(res => {
                console.log(res.data);
              })
              .catch(err => {
                console.log(err);
              })
        }
    },
}

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