<template>
  <nav id="nav">
    <v-snackbar v-model="snackbar" timeout="4000" top color="indigo">
      <span>Project has been already added.</span>
      <v-btn elevation="0" color="indigo white--text" @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-app-bar app flat>
      <v-app-bar-nav-icon v-show="showNavIcon" class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Jim</span>
        <span>todo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text class="grey--text" v-on="on">
            <v-icon>keyboard_arrow_down</v-icon>
            <span>Links</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            class="text blue--text"
            v-for="(link, index) in links"
            :key="index"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>keyboard_return</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-row align="center" justify="center" class="mt-5">
        <v-avatar size="100">
          <img src="/avatar01.png" />
        </v-avatar>
      </v-row>
      <v-row align="center" justify="center" class="mt-5">
        <p class="white--text subheading mt-1">Jim.Bai</p>
      </v-row>
      <v-divider class="white ma-4"></v-divider>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-row align="center" justify="center" class="mt-5">
        <PopupCreate @projectAdded="snackbar=true" />
      </v-row>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import PopupCreate from "./PopCreate";
import LoginData from '../Data/LoginData';

export default {
  components: { PopupCreate },
  data() {
    return {
      drawer: null,
      showNavIcon: true,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "Projects", route: "/projects" },
        { icon: "people_alt", text: "Team", route: "/team" }
      ],
      snackbar: false
    };
  },
  beforeCreate() {
    //if (LoginData.loginFlag == 0) {
    //  console.log(document.getElementById('nav'));
    //}
  },
  created() {
    //if (LoginData.loginFlag == 0) {
    //  console.log(document.getElementById('nav'));
    //}
    //if (LoginData.loginFlag == 0) {
    //  this.drawer = false;
    //  this.showNavIcon = false;
    //} else {
    //  this.drawer = null;
    //  this.showNavIcon = true;
    //}
  },
  updated() {
    if (LoginData.loginFlag == 0) {
      this.drawer = false;
      this.showNavIcon = false;   } else {
      this.drawer = null;
      this.showNavIcon = true;
    }
  },
  mounted() {
    if (LoginData.loginFlag == 0) {
      document.getElementById('nav').style.display = 'none';
    }
  }
};
</script>

<style>
  .hide {
    display: none !important;
  }
</style>