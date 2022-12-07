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
              :src="director.pic">
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

                    <!--  Movie rating  -->
                    <v-list-item-media>
                      <v-rating
                        v-model="movie.rating"
                        color="green"
                        readonly
                        half-increments
                        size="25"
                        density="compact"
                      ></v-rating>
                    </v-list-item-media>
                  </v-list-item-content>
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
      {
        movieName: "Feline Jones",
        pic: "https://i.pinimg.com/564x/96/dc/7e/96dc7ef799d640d3ad58ebcf2e057546.jpg",
        year: "1997",
        rating: "3.5"
      },
      {
        movieName: "Purr Wars",
        pic: "https://i.pinimg.com/564x/0a/5f/33/0a5f33856c1f869a567c2d200b41672a.jpg",
        year: "2017",
        rating: "5"
      },
      {
        movieName: "Iron Cat 3",
        pic: "https://i.pinimg.com/564x/e8/ca/18/e8ca183c2ab875df8b22161b90273018.jpg",
        year: "2013",
        rating: "4"
      },
      {
        movieName: "Cat Wars",
        pic: "https://i.pinimg.com/564x/e9/83/6e/e9836e696df6321af5ca15336f3d99e5.jpg",
        year: "2014",
        rating: "3.5"
      },
      {
        movieName: "Meautrix",
        pic: "https://i.pinimg.com/564x/19/57/56/195756cb9ed2cb66c588c5d83a278439.jpg",
        year: "2015",
        rating: "5"
      },
    ]
  }),
  beforeMount() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
    axios.get("http://localhost:8080/api/actor/" + this.$route.params.slug)
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
