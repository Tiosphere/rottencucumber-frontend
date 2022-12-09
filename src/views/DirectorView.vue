<template>
  <Navbar/>
  <v-app style="background-color: #DEECDE;">
    <v-main class="px-16 ma-10">
      <!-- Director detail  -->
      <v-row>
        <v-col cols="3">
          <v-sheet>
            <!-- Director name -->
            <div class="pt-2">
              <v-card-title class="text-h4">
                {{ director.name }}
              </v-card-title>
            </div>

            <!-- Director pic -->
            <v-img
              class="mx-auto"
              aspect-ratio="4/3"
              :width="250"
              v-bind:src="'data:image/jpeg;base64,'+director.image">
            </v-img>

            <!-- Director bio -->
            <v-card-text
              class="pa-4">
              <div><strong>Birthday</strong> {{ director.birth }}</div>
              <div class="pb-2"><strong>Birthplace</strong> {{ director.birthplace }}</div>
              <div class="text-caption">{{ director.description }}</div>
            </v-card-text>
          </v-sheet>
        </v-col>

        <!-- List of movie -->
        <v-col cols="8" class="mt-7">
          <h3 class="pl-4 pb-2">FILMOGRAPHY</h3>
          <div clas="d-flex">
            <v-card
              class="d-flex flex-wrap pa-7"
              elevation="7">

              <v-list v-for="movie in movieList">
                <div class="pa-3 px-7">
                  <RouterLink
                    style="text-decoration: none; color: inherit;"
                    :to="'/movie/' + movie.slug">
                  <!-- movie image -->
                  <v-list-item-media>
                    <v-img
                      :aspect-ratio="3/4"
                      class="mx-auto bg-white"
                      :src="movie.pic"
                      max-height="270px"
                      width="180px"
                      cover
                    ></v-img>
                  </v-list-item-media>

                  <v-list-item-content>
                    <!--  Movie name  -->
                    <v-list-item-title class="pt-2">
                    <span
                      class="d-inline-block text-truncate"
                      style="max-width: 130px;">
                      {{ movie.movieName }}
                    </span>
                    </v-list-item-title>

                    <!--  Movie year  -->
                    <v-list-item-subtitle>
                      {{ movie.year }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  </RouterLink>
                </div>
              </v-list>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
  <Footer/>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";

export default {
  name: "DirectorView",
  components: {Footer, Navbar},
  data: () => ({
    director: {
      name: "",
      birth: "",
      birthplace: "",
      description: "",
      pic:""
    },
    movieList: [
    ]
  }),
  beforeMount() {
    axios.get("http://backend.rottencucumber.tk/api/actor/" + this.$route.params.slug)
      .then((res) => {
        let data = res.data
        console.log(data)
        this.director.name = data.records[0].name
        this.director.birth = data.records[0].birthday
        this.director.birthplace = data.records[0].birth_place
        this.director.description = data.records[0].description
        this.director.pic = data.records[0].image
      })
      .catch(() => {
        // this.$router.push({ name: 'home' })
      });
  }
}
</script>

<style scoped>

</style>
