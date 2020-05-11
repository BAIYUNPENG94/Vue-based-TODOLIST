<template>
  <div>
    <h1 class="subtitle-1 grey--text pa-4">Team</h1>
    <v-container class="my-5">
      <v-row>
        <v-col v-for="person in team" :key="person.name" cols="12" sm="6" md="4" lg="3">
          <v-card>
            <v-responsive class="pl-4 pt-4">
              <v-avatar size="60" class>
                <img :src="person.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn small depressed="true" color="blue white--text">
                <v-icon small left color="white">message</v-icon>
                <span class="pr-1">Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>:w


<script>
export default {
  data: () => {
    return {
      team: [
        { name: "Jim.Bai", role: "Web developer", avatar: "/avatar01.png" },
        { name: "Ryu", role: "Graphic designer", avatar: "/avatar02.png" },
        { name: "Chun Li", role: "Web developer", avatar: "/avatar03.png" },
        {
          name: "Gouken",
          role: "Social media maverick",
          avatar: "/avatar04.png"
        },
        { name: "Yoshi", role: "Sales guru", avatar: "/avatar05.png" }
      ]
    };
  }
};
</script>