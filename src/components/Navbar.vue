<script>
import axios from 'axios';
import { isJwtExpired } from 'jwt-check-expiration';

export default {
    data: () => ({
        url: "",
        isLogin: false
    }),

    beforeMount() {
        let token = localStorage.getItem("access_token");
        if (token != null && !isJwtExpired(token)) {
          this.url = "home"
          this.isLogin = true
        } else {
            this.url = "login"
            this.isLogin = false
        }
    }
  }
</script>

<template>
    <v-card
    color="grey-lighten-4"
    flat
    height="95px"
    rounded="0"
  >
    <v-toolbar density="compact" style="background-color: #ffffff">
      <div style="display: flex; align-items:center;">
        <v-toolbar-title style="padding-left: 10px; padding-right: 40px;">
          <a href="/" style="-webkit-text-fill-color:whitesmoke; text-decoration: none; ">
            <v-img
              src="/src/assets/RottenCucumber_logo.png"
              height="50px"
              width="120px">
            </v-img>
          </a>
        </v-toolbar-title>
        <form id="search" autocomplete="off" method="GET" style="height:auto;">
          <div>
            <input type="text" placeholder="search" style="border-radius: 8px; background-color: #DEECDE; padding-left: 10px; height: 30px; width: 230px;">
          </div>
        </form>
      </div>

      <v-spacer></v-spacer>

      <div style="padding: 14px;">
        
        <RouterLink :to="{ name: this.url }" id="user">
          <h1 v-if="islogin">
          <v-avatar color="#E8F5E9">
            <v-icon dark size="260%">mdi-account-circle</v-icon>
          </v-avatar>
          </h1>

          <h1 v-else>
            <v-btn
              variant="flat"
              color="success"
              >
              Login
            </v-btn>
          </h1>
        </RouterLink>


      </div>

    </v-toolbar>
    <v-card-item style="background-color: #ffffff">
        <a style="padding: 25px">
            Top
        </a>

        <a style="padding: 25px">
            Latest
        </a>

        <a style="padding: 25px">
            Genres
        </a>

        <a style="padding: 25px">
            Platform
        </a>


    </v-card-item>
  </v-card>
</template>

<style scoped>
#user {
  color: white;
}
</style>
