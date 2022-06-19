<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text pa-4">Dashboard</h1>

    <v-btn v-on="on" text small flat color="grey" @click="testPut(2)">
      <v-icon small left>folder</v-icon>
      <span class="caption text-lowercase">Test Button</span>
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
          console.log("Test Function Triggered [GET]");
          axios.get("/todo", {
              params: {}
          })
            .then(res => {
              console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            })
        },
        testGetById(id) {
          console.log("Test Function Triggered [GET BY ID]");
          axios.get("/todo/" + id, {
            params: {}
          })
            .then(res => {
              console.log(res);
              console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            })
        },
        testCreate() {
          console.log("Test Function Triggered [CREATE]");
          axios.post("/todo", {
            content: ["test Y", 1]
          })
            .then(res => {
              console.log(res);
              console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            })
        },
        testPut(id) {
          console.log("Test Function Triggered [PUT]");
          axios.put("/todo/2" + id, {
            content: ["test Z", 1]
          })
            .then(res => {
              console.log(res);
              console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            })
        },
    },


        //This shows how to use axios params
        //testGetById() {
        //    console.log("Test Function Triggered [GET BY ID]");
        //    axios.get("http://192.168.2.120:8000/todo/id", {
        //      params: {
        //        id: 4,
        //      }
        //    })
        //      .then(res => {
        //        console.log(res);
        //        console.log(res.data);
        //      })
        //      .catch(err => {
        //        console.log(err);
        //      })
        //},
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