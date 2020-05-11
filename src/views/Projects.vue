<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text pa-4">Projects</h1>
    <v-container class="my-5">
      <v-row class="mx-3 my-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text small flat color="grey" @click="choose = 2">
              <v-icon small left>person</v-icon>
              <span class="caption text-lowercase">Mine</span>
            </v-btn>
          </template>
          <span>Show my Projects</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text small flat color="grey" @click="choose = 1">
              <v-icon small left>group</v-icon>
              <span class="caption text-lowercase">Teams</span>
            </v-btn>
          </template>
          <span>Show projects of all teams</span>
        </v-tooltip>
      </v-row>

      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p class="font-weight-bold">{{ project.due }}</p>
            <p class="grey--text">{{ project.content }}</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb";
export default {
  data: () => {
    return {
      projects: [],
      choose: 2,
      currentUser: "Jim.Bai"
    };
  },
  computed: {
    myProjects() {
      if (this.choose == 1) {
        return this.projects;
      } else {
        return this.projects.filter(
          project => project.person === this.currentUser
        );
      }
    }
  },
  created() {
    db.collection("projects").onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  }
};
</script>