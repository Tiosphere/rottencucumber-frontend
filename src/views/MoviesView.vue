<template>
  <Navbar/>
  <v-app style="padding: 50px; padding-left: 250px; padding-right: 250px;background-color: #DEECDE;">
    <v-main>
      <v-container>
        <v-row>
          <div class="pb-3">
            <!-- Movie name -->
            <h1 class="d-flex">{{ movie.name }}</h1>
          </div>
          <v-spacer></v-spacer>
        </v-row>
        <v-row
          class="mb-3"
        >
          <v-col cols="4" no gutters>
            <!-- Movie Poster -->
            <v-img
              aspect-ratio="4/3"
              :width="250"
              v-bind:src="'data:image/jpeg;base64,'+movie.pic">
            </v-img>
            <!-- ADD btn -->

            <div v-show="!added">
              <v-btn @click="addToWatchlist"
                     variant="flat"
                     rounded
                     x-small
                     color="#6FAC49"
                     class="ma-4">
                <v-icon style="color: #2A2C32">mdi-plus</v-icon>
                Add to watchlist
              </v-btn>
            </div>

            <div v-show="added">
              <v-btn
                     variant="flat"
                     rounded
                     x-small
                     disabled
                     class="ma-4">
                <v-icon style="color: #2A2C32">mdi-check</v-icon>
                On your watchlist
              </v-btn>
            </div>

            <!-- Movie info -->
            <div class="pa-2">
              <h3>Language</h3>
              <p>{{ movie.language }}</p>
              <h3 class="pt-2">Genres</h3>
              <a v-bind:href="'/genres/'+ genre.slug" v-for="genre in movie.genres" class="link">
                {{ genre.name }},&nbsp;
              </a>
              <h3 class="pt-2">Platform</h3>
              <p v-for="name in movie.platforms">{{ name.name }}</p>
            </div>
          </v-col>

          <!-- Movie detail -->
          <v-col cols="8">
            <v-sheet class="rounded-xl" elevation="4">
              <!-- Preview movie -->
              <div class="pt-5" align="center">
                <iframe width="500" height="300" :src="movie.preview"></iframe>
              </div>

              <div class="pa-7">
                <h3 class="text-green">Release date</h3>
                <span class="mr-2">{{ movie.releaseDate.day }}-{{ movie.releaseDate.month }}-{{
                    movie.releaseDate.year
                  }} </span>
                <h3 class="pt-2 text-green">Director</h3>
                <a v-bind:href="'/director/'+ name.slug" v-for="name in movie.directors" class="link">
                  {{ name.name }},&nbsp;
                </a>
                <h3 class="pt-2 text-green">Writers</h3>
                <a v-bind:href="'/writer/'+ name.slug" v-for="name in movie.writers" class="link">
                  {{ name.name }},&nbsp;
                </a>
                <h3 class="pt-2 text-green">Actors</h3>
                <a v-bind:href="'/actor/'+ name.slug" v-for="name in movie.actors" class="link">
                  {{ name.name }},&nbsp;
                </a>
                <h3 class="pt-2 text-green">Summary</h3>
                <p class="pr-2">{{ movie.summary }}</p>
              </div>
            </v-sheet>
          </v-col>
        </v-row>

        <v-divider></v-divider>


        <!-- reviews -->
        <h2 class="pt-8 pb-3">REVIEWS</h2>
        <!-- review box -->
        <div v-if="isLogin">
          <v-card
            variant="outlined"
            style="background-color: #ffffff;"
            class="d-flex justify-center">
            <v-col cols="10">
              <form class="content" id="review" v-on:submit.prevent="submitForm" ref="reviewForm">
                <input type="hidden" name="username" :value=username>
                <v-textarea
                  name="comment"
                  form="review"
                  clearable
                  v-model="message"
                  variant="outlined"
                  label="Write your review here"
                  type="text"
                  append-icon="mdi-send"
                  @click:append="submitForm()"
                >
                </v-textarea>
              </form>
            </v-col>
          </v-card>
        </div>

        <!--review column-->
        <div class="column_wrapper">
          <v-container class="d-flex flex-wrap justify-space-around">
            <v-list v-for="review in movie.reviews"
                    style="background-color: #DEECDE;">
              <v-card
                class="pa-7"
                variant="outlined"
                max-width="300px"
                style="background-color: #ffffff;">
                <v-list-item-content>
                  <p>{{ review.comment }}</p>
                  <v-list-item-subtitle class="pb-2">- {{ review.user.username }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-card>
            </v-list>
          </v-container>
        </div>
      </v-container>
    </v-main>
  </v-app>
  <Footer/>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";
import {isJwtExpired} from "jwt-check-expiration";

export default {
  name: "MoviesView",
  components: {Navbar, Footer},
  data: () => ({
    username: localStorage.getItem("user"),
    isLogin: false,
    message: "",
    added: false,
    movie: {
      name: "",
      pic: "",
      releaseDate: {
        day: "",
        month: "",
        year: ""
      },
      preview: "",
      summary: "",
      directors: [],
      writers: [],
      actors: [],
      language: "",
      genres: [],
      platforms: [],
      reviews: []
    },

  }),
  methods: {
    clearMessage() {
      this.message = ''
    },
    addToWatchlist() {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
      axios.get("http://backend.rottencucumber.tk/api/fav/" + this.$route.params.slug)
        .then((res) => {
          let data = res.data
          console.log(data)
          if(data.success) {
            this.added = true
            this.$router.go()
          }
        })
    },
    // removeFromWatchlist() {
    //   axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
    //   axios.delete("http://localhost:8080/api/fav/" + this.$route.params.slug)
    //   this.added = false
    //   this.$router.go()
    // },
    submitForm() {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
      let form = new FormData(this.$refs.reviewForm);
      axios.post("http://backend.rottencucumber.tk/api/review/" + this.$route.params.slug, form)
        .then((res) => {
          let data = res.data
          console.log(data)
          if (data.success) {
            this.clearMessage()
            this.$router.go()
          }
        })
    }
  },
  beforeMount() {
    let token = localStorage.getItem("access_token");
    if (token != null && !isJwtExpired(token)) {
      this.isLogin = true
      axios.get("http:///backend.rottencucumber.tk/api/fav/check/" + this.$route.params.slug)
        .then((res) => {
          let data = res.data
          console.log(data)
          if (data.success) {
            this.added = true
          } else {
            this.added = false
          }
        })
    } else {
      this.isLogin = false
    }

    axios.get("http://backend.rottencucumber.tk/api/movie/" + this.$route.params.slug)
      .then((res) => {
        let data = res.data
        console.log(data)
        this.movie.name = data.records[0].name
        this.movie.pic = data.records[0].image
        this.movie.releaseDate.day = data.records[0].day
        this.movie.releaseDate.month = data.records[0].month
        this.movie.releaseDate.year = data.records[0].year
        this.movie.summary = data.records[0].summary
        this.movie.preview = data.records[0].preview
        this.movie.language = data.records[0].language.name
        this.movie.genres = data.records[0].genres
        this.movie.platforms = data.records[0].platform
        this.movie.actors = data.records[0].actors
        this.movie.directors = data.records[0].directors
        this.movie.writers = data.records[0].writers
        this.movie.reviews = data.records[0].reviews
      })
      .catch(() => {
        // this.$router.push({ name: 'home' })
      });
  }
}
</script>

<style scoped>
.column_wrapper {
  column-count: 3;
}

.link {
  text-decoration: none;
  color: black;
}
</style>
