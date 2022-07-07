<template>
  <v-dialog width="400" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn elevation="5" class="success" v-on="on">CreateAccount</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>Create Account</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-container fluid>
            <v-row>
              <v-col
                cols="12"
                sm="12"
              >
                <v-text-field
                  v-model="userName"
                  :rules="[rules.required]"
                  :type="show1 ? 'text' : 'password'"
                  name="nameText"
                  label="User Name"
                  class="input-group--focused"
                  @click:append="show2 = !show2"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="12"
              >
                <v-text-field
                  v-model="password"
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show2 ? 'text' : 'password'"
                  name="passwordText"
                  label="Password"
                  hint="At least 8 characters"
                  counter
                  @click:append="show2 = !show2"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="12"
              >
                <v-text-field
                  v-model="email"
                  :rules="[rules.required, rules.emailMatch]"
                  :type="show3 ? 'text' : 'password'"
                  name="emailText"
                  label="Email"
                  hint="Please insert valid email"
                  counter
                  @click:append="show3 = !show3"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
              >
                <v-btn
                  elevation="2"
                  block
                  color="primary"
                  @click="CreateUser"
                >
                  Create
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
//import format from "date-fns/format";
//import parseISO from "date-fns/parseISO";
import restAPI from "../APIs/RestAPIs";
export default {
  data () {
    return {
      show1: true,
      show2: false,
      show3: true,
      show4: true,
      password: '',
      userName: '',
      email: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => 1 < 2, //This rule added later
      },
    }
  },
  methods: {
    async CreateUser() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const newProject = [
          this.userName,
          this.password,
          this.email,
        ];
        var res = await restAPI.createUser(newProject)
        console.log(res);
      }
    },
  },
}

</script>