<template>
  <v-dialog width="800" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn elevation="5" class="success" v-on="on">Add a new Project</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>Add a new project</v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field label="Title" v-model="title" prepend-icon="hot_tub" :rules="inputRules"></v-text-field>
          <v-text-field label = "Completeness" v-model="comp" prepend-icon="hot_tub" :rules="inputRules"></v-text-field>
          <v-text-field label = "Piority" v-model="pior" prepend-icon="hot_tub" :rules="inputRules"></v-text-field>
          <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>
          <v-menu max-width="290">
            <template v-slot:activator="{ on }">
              <v-text-field
                :rules="inputRules"
                :value="formattedDate"
                label="Due date"
                prepend-icon="event_note"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-btn class="success mt-3" @click="submitOracle" :loading="loading">Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import restAPI from "../APIs/RestAPIs";
export default {
  name: "PopupCreate",
  data() {
    return {
      title: "",
      content: "",
      comp: "",
      pior: "",
      due: null,
      inputRules: [v => v.length >= 3 || "Minimum length is 3 characters"],
      loading: false,
      dialog: false
    };
  },
  methods: {
    async submitOracle() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const newProject = [
          this.title,
          this.comp,
          this.pior,
          this.due,
          this.person,
          this.content,
        ];
        await restAPI.create(newProject);
        this.loading = false;
      }
    },
  },
  computed: {
    formattedDate() {
      return this.due ? format(parseISO(this.due), "do MMM yyyy") : "";
    }
  }
};
</script>