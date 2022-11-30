<template>
  <Navbar/>
  <v-app style="background-color: #DEECDE;">
    <v-main class="px-16 ma-10">
      <!-- Actor detail  -->
      <v-row>
        <v-col cols="3">
          <v-sheet
          elevation="2">
            <!-- Actor name -->
            <div class="pt-2">
              <v-card-title class="text-h4">
                {{ actor.name }}
              </v-card-title>
            </div>

            <!-- Actor pic -->
            <v-img
              class="mx-auto"
              aspect-ratio="4/3"
              :width="250"
              :src="actor.pic">
            </v-img>

            <!-- Actor bio -->
            <v-card-text
              class="pa-4">
              <div><strong>Birthday</strong> {{ actor.birth }}</div>
              <div class="pb-2"><strong>Birthplace</strong> {{ actor.birthplace }}</div>
              <div class="text-caption">{{ actor.description }}</div>
            </v-card-text>
          </v-sheet>
        </v-col>

        <!-- List of movie -->
        <v-col cols="8" class="mt-7">
          <div class="text-h5 pl-3 pb-2 ">Filmography</div>
          <div clas="d-flex justify-md-content-center">
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

export default {
  name: "ActorsView",
  components: {Footer, Navbar},
  data: () => ({
    actor: {
      name: "Shabu",
      pic: "https://www.nzherald.co.nz/resizer/KRPKZdaa0GawVjiNPnnVPfTO_fA=/576x613/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/SZ5QGV5WI5KOQ26XSQIMJDPM2I.jpg",
      birth: "20 October, 2020",
      birthplace: "Bangkok, Thailand",
      description: "Shabu is Aj.Kritya's cat"
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
  methods: {
    mounted() {
      axios
        .get()
    }
  }
}
</script>

<style scoped>

</style>
