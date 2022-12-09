<template>
  <Navbar/>
  <v-app style="background-color: #DEECDE;">
    <v-main class="px-16 ma-10">
      <!-- Writer detail  -->
      <v-container>
      <v-row>
        <v-col cols="3">
          <v-sheet
            elevation="2">
            <!-- Writer name -->
            <div class="pt-2">
              <v-card-title class="text-h4">
                {{ writer.name }}
              </v-card-title>
            </div>

            <!-- Writer pic -->
            <v-img
              class="mx-auto"
              aspect-ratio="4/3"
              :width="250"
              v-bind:src="'data:image/jpeg;base64,'+writer.image">
            </v-img>

            <!-- Writer bio -->
            <v-card-text
              class="pa-4">
              <div><strong>Birthday</strong> {{ writer.birth }}</div>
              <div class="pb-2"><strong>Birthplace</strong> {{ writer.birthplace }}</div>
              <div class="text-caption">{{ writer.description }}</div>
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
                      v-bind:src="'data:image/jpeg;base64,'+movie.image"
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
                      {{ movie.name }}
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
      </v-container>
    </v-main>
  </v-app>
  <Footer/>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";

export default {
  name: "ActorsView",
  components: {Footer, Navbar},
  data: () => ({
    writer: {
      name: "",
      birth: "",
      birthplace: "",
      description: "",
      pic: ""
    },
    movieList: [
    ],

  }),
  beforeMount() {
    axios.get("http://backend.rottencucumber.tk/api/writer/" + this.$route.params.slug)
      .then((res) => {
        let data = res.data
        console.log(data)
        this.writer.name = data.records[0].name
        this.writer.birth = data.records[0].birthday
        this.writer.birthplace = data.records[0].birth_place
        this.writer.description = data.records[0].description
        this.writer.pic = data.records[0].image
        this.movieList = data.records[0].movies
      })
      .catch(() => {
        // this.$router.push({ name: 'home' })
      });
  }
}
</script>

<style scoped>

</style>
