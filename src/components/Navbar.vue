<script>
import { isJwtExpired } from 'jwt-check-expiration';
import axios from "axios";

export default {

  methods: {
    go:function(slug) {
      window.location.href = '/genres/' + slug
    },
    go1:function(slug) {
      window.location.href = '/platform/' + slug
    },
    goProfile:function(where ,needSlug ,slug) {
      if (needSlug) {
      this.$router.push({ name: where, params: { slug: slug }});
      }
      else {
        this.$router.push({name: where})
      }
    },
    getSlug() {
      let slug = localStorage.getItem("slug");
      if (slug != null) {
        this.slug = slug;
      }
      return slug;
    }
  },
  data: () => ({
    slug:"",
    url: "",
    isLogin: false,
    items: [
      {
        title: 'Profile',
        pathName: 'profile',
        needSlug: true,
      },

        {
          title: 'Log Out',
          pathName: 'logout',
          needSlug: false,
        },
      ],
    genres: [

    ],
  }),


  beforeMount() {
    axios.get("http://backend.rottencucumber.tk/api/genres")
      .then((res) => {
        let data = res.data
        console.log(data)
        this.genres = data
      })
      .catch(() => {
        this.$router.push({ name: 'home' })
      });

    axios.get("http://backend.rottencucumber.tk/api/platforms")
      .then((res) => {
        let data = res.data
        console.log(data)
        this.platforms = data
      })
      .catch(() => {
        this.$router.push({ name: 'home' })
      });


    let token = localStorage.getItem("access_token");
    this.getSlug();
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
  <v-card color="grey-lighten-4" flat height="95px" rounded="0">
    <v-toolbar density="compact" style="background-color: #ffffff">
      <div style="display: flex; align-items:center;">
        <v-toolbar-title style="padding-left: 10px; padding-right: 40px;">
          <a href="/" style="-webkit-text-fill-color:whitesmoke; text-decoration: none; ">
            <v-img src="/src/assets/RottenCucumber_logo.png" height="50px" width="120px">
            </v-img>
          </a>
        </v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <div style="padding: 14px;">

        <!-- <RouterLink :to="{ name: this.url }" id="user"> -->

          <!-- <v-avatar v-if="this.isLogin" color="#E8F5E9"> -->
            <v-btn v-if="this.isLogin"
            icon
            >

            <v-avatar color="#E8F5E9">
              <v-icon dark size="260%">
              mdi-account-circle
              </v-icon>
            </v-avatar>

            <v-menu activator="parent">
              <v-list>
                <v-list-item
                v-for="item in items"
                :key="item"
                >
                  <v-list-item-title>
                  <v-btn variant="flat"
                  @click="goProfile(item.pathName,item.needSlug, slug)">
                  {{ item.title }}
                  </v-btn>


                </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            </v-btn>



          <!-- <v-btn v-else variant="flat" color="success"> -->
          <div v-else>
            <RouterLink
            style="text-decoration: none; color: inherit;"
            :to="{ name: 'login' }" id="user">
            <v-btn variant="flat" color="success" style="margin:5px">
            Login
            </v-btn>
            </RouterLink>
            <RouterLink
            style="text-decoration: none; color: inherit;"
            :to="{ name: 'signup' }" id="user">
            <v-btn variant="flat" color="success" style="margin:5px">
              Sign up
            </v-btn>
            </RouterLink>
          </div>
        <!-- </RouterLink> -->


      </div>

    </v-toolbar>
    <v-card-item style="background-color: #ffffff">
      <RouterLink
      style="text-decoration: none; color: inherit;"
      :to="{ name: 'popular' }">
        <v-btn variant="text" color="#6FAC49">
          Popular
        </v-btn>
      </RouterLink>

      <RouterLink
      style="text-decoration: none; color: inherit;"
      :to="{ name: 'latest' }">
        <v-btn variant="text" color="#6FAC49">
          Latest
        </v-btn>
      </RouterLink>


        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn variant="text" color="#6FAC49" v-bind="props">
              Genres
            </v-btn>
          </template>
          <v-list
              style="text-decoration: none; color: inherit;">
            <v-list-item
              v-for="genre in genres"
              :key="genre.id"
            >
              <v-list-item-title>
                <v-btn variant="text" @click="go(genre.slug)" color="black">
                  {{genre.name}}
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn variant="text" color="#6FAC49" v-bind="props">
            Platform
          </v-btn>
        </template>
        <v-list
          style="text-decoration: none; color: inherit;">
          <v-list-item
            v-for="platform in platforms"
            :key="platform.id"
          >
            <v-list-item-title>
              <v-btn variant="text" @click="go1(platform.slug)" color="black">
                {{platform.name}}
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>


    </v-card-item>
  </v-card>
</template>

<style scoped>
#user {
  color: white;
}
</style>
