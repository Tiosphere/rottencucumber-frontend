<template>
  <Navbar/>
  <v-app style="padding: 50px; padding-left: 250px; padding-right: 250px; background-color: #DEECDE;">
    <v-main>
      <!-- User detail  -->
      <v-card
        rounded
        elevation="4">
        <!-- Username -->
        <div class="pt-2">
          <v-card-title class="text-h4">
            {{ user.name }}
          </v-card-title>
        </div>


        <!-- Actor bio -->
        <v-card-text
          class="pa-4">
          <div><strong>Email</strong> {{ user.email }}</div>
        </v-card-text>
      </v-card>

      <!-- List of movie -->
      <h3 class="pt-7">MY WATCHLIST</h3>

      <div v-if="movieList.length">
      <flickity class="flickity" ref="flickity" :options="flickityOptions">
        <div class="carousel-cell"
             v-for="movie in movieList">
          <RouterLink
            style="text-decoration: none; color: inherit;"
            :to="'/movie/' + movie.slug">
          <v-img
            :aspect-ratio="3/4"
            class="mx-auto bg-white"
            v-bind:src="'data:image/jpeg;base64,' + movie.image"
            max-height="300px"
            width="200px"
            cover
          >
          </v-img>
          <div style="color:dimgray; padding:10px;">
            {{ movie.name }}
          </div>
          </RouterLink>
        </div>
      </flickity>
      </div>
    </v-main>
  </v-app>
  <Footer/>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Flickity from "@/components/Flickity";
import axios from "axios";

export default {
  name: "ActorsView",
  components: {Flickity, Footer, Navbar},
  data() {
    return {
      flickityOptions: {
        pageDots: true,
        wrapAround: true,
        initialIndex: 0,
        contain: true,
        autoPlay: true,
        // prevNextButtons: true,
        pageDots: true,
        wrapAround: false,
        groupCells: true,
        groupCells: 2
      },
      user: {
        name: "",
        email: "",
      },
      movieList: [
      ]
    }
  },
  beforeMount() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
    axios.get("http://backend.rottencucumber.tk/api/user/" + this.$route.params.slug)
      .then((res) => {
        let data = res.data
        console.log(res)
        this.user.name = data.records[0].username
        this.user.email = data.records[0].email
        this.movieList = data.records[0].movies
      })
      .catch(() => {
        this.$router.push({ name: 'home' })
      });
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* body { font-family: sans-serif; } */
.carousel {
  background: #EEE;
}

.carousel-cell {
  margin: 20px;
  overflow: hidden;
}

.carousel-cell img {
  display: block;
  height: 200px;
}

@media screen and ( min-width: 700px ) {
  .carousel-cell img {
    height: 300px;
  }
}

</style>
