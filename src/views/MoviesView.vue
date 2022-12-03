<template>
  <v-app>
    <Navbar/>
    <v-main class="px-16 ma-10">
      <v-row
        class="mb-3"
      >
        <v-col cols="4">
          <div>
            <!-- Movie name -->
            <h1 class="d-flex">{{ movie.name }}</h1>
          </div>
          <!-- Movie Poster -->

          <v-img
            aspect-ratio="4/3"
            :width="250"
            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
            :src="movie.pic">
          </v-img>
          <!-- ADD btn -->

          <v-btn @click="snackbar = !snackbar"
                 elevation="6"
                 rounded
                 x-small
                 color="#6FAC49"
                 class="mb-4">
            <v-icon style="color: #2A2C32">mdi-plus</v-icon>
            {{ snackbar ? 'Add to watchlist' : 'Added to watchlist' }}
          </v-btn>
          <v-snackbar
            v-model="snackbar"
            bottom
            centered
            color="#6FAC49"
            elevation="20"
          >
            Added <strong>{{ movie.name }}</strong> into your watchlist
          </v-snackbar>

          <v-snackbar
            v-model="snackbar"
            bottom
            centered
            color="#6FAC49"
            elevation="20"
          >
            Removed <strong>{{ movie.name }}</strong> from your watchlist successfully
          </v-snackbar>
        </v-col>

        <v-col cols="8">
          <!-- Movie detail -->
          <v-rating
            v-model="movie.rating"
            color="green"
            readonly
            size="x-large"
            half-increments
            density="compact">
          </v-rating>
          <span class="mr-2">
            ({{ movie.rating }})
          </span>
          <h3>Release date</h3>
          <span class="mr-2">{{ movie.releaseDate }} </span>
          <h3>Director</h3>
          <a c v-for="name in movie.directors">{{ name }}, </a>
          <h3>Writers</h3>
          <a v-for="name in movie.writers">{{ name }},</a>
          <h3>Actors</h3>
          <a v-for="name in movie.actors">{{ name }},</a>
          <h2>Summary</h2>
          <p class="pb-2">{{ movie.summary }}</p>
        </v-col>
      </v-row>

      <!-- reviews -->
      <h2>Reviews</h2>
      <v-card width="1000px" class="mx-auto d-flex">
        <v-list-item
          v-for="user in users"
          :key="users.name">
          <v-list-item-avatar>
            <img :src="user.avatar">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ user.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ user.comment }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-main>
    <Footer/>

  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "MoviesView",
  components: {Navbar},
  data: () => ({
    snackbar: false,
    movie: {
      name: "Purr Wars",
      pic: "https://i.pinimg.com/564x/0a/5f/33/0a5f33856c1f869a567c2d200b41672a.jpg",
      releaseDate: "23, October 2012",
      summary: "a chunky catIt is a period of war and the fur is flying. " +
        "Undeclawed rebel cats, striking from a hidden litterbox, have won their first victory against the evil " +
        "Veterinary Empire. During the battle, rebel spies managed to steal the passpurrs to the Empire's ultimate " +
        "weapon: the Death Purr, a weapon with enough power to destroy the entire rebel breeding program. Pursued by " +
        "the Empire's sinister Pawtroopers, Princess Flea-a races aboard her cat-transporter, custodian of the passpurrs " +
        "that could save her people, and restore freedom, catnip and a really absorbent cat-litter to the galaxy. attack " +
        "the Earth",
      directors: ["Aj.Weerapong"],
      writers: ["Aj.Kritya", "Aj.Ratchata"],
      actors: ["Shabu", "Suki"],
      rating: 4
    },
    users: [
      {avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', name: 'Test1', comment: 'gud'},
      {avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', name: 'Test2', comment: '10/10'},
    ]
  }),
}
</script>

<style scoped>

</style>
