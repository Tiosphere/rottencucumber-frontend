<template>
  <v-app>

    <v-main>
      <!-- Movie name -->
      <h1>{{movie.name}}</h1>

      <!-- Movie Poster -->
        <!--  add source in v-img -->
      <v-img>
        <div class="fill-height bottom-gradient"></div>
      </v-img>

      <!-- ADD btn -->
      <v-btn @click="snackbar = true">
        <v-icon style="color: #2A2C32">mdi-plus</v-icon> Add to watchlist
      </v-btn>
      <v-snackbar
      v-model="snackbar"
      bottom
      centered>
        Added {{movie.name}} into your watchlist
      </v-snackbar>

      <!-- Movie detail -->
      <h2>Summary</h2>
        <p>{{movie.summary}}</p>
      <h2>Director</h2>
        <p>{{movie.directors}}</p>
      <h2>Writers</h2>
      <p>{{movie.writers}}</p>
      <h2>Actors</h2>
      <p>{{movie.actors}}</p>
      <!-- reviews -->
<!--      <v-list-item>-->
<!--        <v-list-item-content>-->

<!--        </v-list-item-content>-->
<!--      </v-list-item>-->
    </v-main>

    <!-- Footer -->
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "MoviesView",
  components: {Footer, Navbar},
  data: () => ({
    snackbar: false,
    movie:{
      name: "Meow meow",
      summary:"a chunky cat attack the Earth",
      directors: ["Aj.Weerapong", "Aj.Sunsern","Aj.Kanat"],
      writers:["Aj.Kritya","Aj.Ratchata"],
      actors:["Shabu","Suki"]
    },
  }),
}
</script>

<style scoped>

</style>
