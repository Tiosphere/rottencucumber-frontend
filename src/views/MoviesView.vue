<template>
  <v-app>
    <Navbar />
    <v-main class="px-16 ma-10">
      <div>
        <!-- Movie name -->
        <h1 class="d-flex">{{movie.name}}</h1>
      </div>
      <!-- Movie Poster -->
        <!--  add source in v-img -->
      <v-img>
        <div class="fill-height bottom-gradient"></div>
        <img src="https://cdn01.pinkoi.com/product/HVfCd474/0/2/640x530.jpg"/>
      </v-img>

      <!-- ADD btn -->

<!--      <v-btn-->
      <v-btn @click="snackbar = !snackbar"
      elevation="6"
      rounded
      x-small
      color="#6FAC49"
      class="mb-4">
        <v-icon style="color: #2A2C32">mdi-plus</v-icon> Add to watchlist
      </v-btn>
      <v-snackbar
        v-model = "snackbar"
        bottom
        centered
        color="#6FAC49"
        elevation="20"
      >
        Added <strong>{{movie.name}}</strong> into your watchlist
      </v-snackbar>

      <v-snackbar
        v-model ="snackbar"
        bottom
        centered
        color="#6FAC49"
        elevation="20"
    >
        Removed <strong>{{movie.name}}</strong> from your watchlist successfully
    </v-snackbar>

      <!-- Movie detail -->
      <h2>Summary</h2>
        <p class ="pb-2">{{movie.summary}}</p>
      <h2>Director</h2>
        <a c v-for="name in movie.directors">{{name}}, </a>
      <h2>Writers</h2>
      <a v-for="name in movie.writers">{{name}},</a>
      <h2>Actors</h2>
      <a v-for="name in movie.actors">{{name}},</a>
      <!-- reviews -->
      <h2>Reviews</h2>
      <v-card width="1000px" class="mx-auto d-flex">
        <v-list-item
        v-for="user in users"
        :key="users.name">
          <v-list-item-avatar rounded-s>
            <img :src="user.avatar">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{user.name}}</v-list-item-title>
            <v-list-item-subtitle>{{user.comment}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-main>
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
    users: [
      {avatar:'https://cdn.vuetifyjs.com/images/lists/2.jpg',name:'Test1',comment:'gud'},
      {avatar:'https://cdn.vuetifyjs.com/images/lists/3.jpg',name:'Test2',comment:'10/10'},
    ]
  }),
}
</script>

<style scoped>

</style>
