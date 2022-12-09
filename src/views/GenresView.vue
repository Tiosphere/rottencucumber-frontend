<template>
  <Navbar/>
    <v-app style="background-color: #deecde;">
      <v-container>
        <v-row>
          <v-col cols="8">
            <h1 class="pl-15 pt-8 pb-8">{{this.genre.name}}</h1>
          </v-col>
        </v-row>
        <v-card
          class="d-flex flex-wrap pa-5"
          elevation="7"
        >
          <v-row class="justify-center">
            <v-list
              v-for="movie in movies.slice(0,20)"
              :key="movie.id"
            >
              <v-container>
                <div class="pa-5 center">
                  <RouterLink
                    style="text-decoration: none; color: inherit;"
                    :to="'/movie/' + movie.slug">
                  <v-list-item-media>
                    <v-img
                      :aspect-ratio="3/4"
                      class="mx-auto bg-white"
                      v-bind:src="'data:image/jpeg;base64,'+ movie.image"
                      max-height="300px"
                      width="200px"
                      cover
                    >
                    </v-img>
                  </v-list-item-media>
                  <v-list-item-content class="text-center">
                    <v-list-item-title>
                      <div class="pt-3">
                    <span
                      class="d-inline-block text-truncate"
                      style="max-width: 200px;"
                    >
                      {{ movie.name }}
                    </span>
                      </div>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{movie.year}}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  </RouterLink>
                </div>
              </v-container>
            </v-list>
          </v-row>
        </v-card>
      </v-container>
    </v-app>
  <Footer/>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";

export default {
  name: "GenresView",
  components: {Footer, Navbar},
  data: () => ({
    movies: [{

    }],
    genre: [{

    }]

  }),
  beforeMount() {
    axios.get("http://backend.rottencucumber.tk/api/genre/" + this.$route.params.slug)
      .then((res) => {
        let data = res.data
        console.log(data)
        this.genre = data.records[0]
        this.movies = data.records[0].movies
      })
      .catch(() => {
        this.$router.push({name: 'home'})
      });
  }
}
</script>

<style scoped>

</style>
