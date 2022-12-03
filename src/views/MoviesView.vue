<template>
  <Navbar/>
  <v-app style="padding: 50px; padding-left: 250px; padding-right: 250px;">
    <v-main>
      <div class="pb-3">
        <!-- Movie name -->
        <h1 class="d-flex">{{ movie.name }}</h1>
      </div>
      <v-row
        class="mb-3 pb-10"
      >

        <v-col cols="4" no gutters>

          <!-- Movie Poster -->

          <v-img
            aspect-ratio="4/3"
            :width="250"
            :src="movie.pic">
          </v-img>
          <!-- ADD btn -->

          <v-btn @click="snackbar = !snackbar"
                 elevation="6"
                 rounded
                 x-small
                 color="#6FAC49"
                 class="ma-4">
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
          <v-row class="mt-2">
          <v-rating
            v-model="movie.rating"
            color="green"
            readonly
            density="compact"
            size="x-large"
            half-increments
            >
          </v-rating>
          <span class="mr-2 align-end">
            ({{ movie.rating }})
          </span>

          <v-spacer></v-spacer>
          <RouterLink :to="{ name: 'popular' }" id="user">
            <v-btn variant="flat"
                   min-width="10px"
                   min-height="10px"
                   raised
            >
              <div class="text-decoration-underline" style="color:gray; ">Edit</div>
            </v-btn>
          </RouterLink>
          </v-row>

          <h3 class="pt-6">Release date</h3>
          <span class="mr-2">{{ movie.releaseDate }} </span>
          <h3 class="pt-2">Director</h3>
          <a c v-for="name in movie.directors">{{ name }} </a>
          <h3 class="pt-2">Writers</h3>
          <a v-for="name in movie.writers">{{ name }} </a>
          <h3 class="pt-2">Actors</h3>
          <a v-for="name in movie.actors">{{ name }} </a>
          <h3 class="pt-2">Summary</h3>
          <p class="pr-2">{{ movie.summary }}</p>
          <h3 class="pt-2">Genres</h3>
          <p v-for="type in movie.genres">{{ type }}</p>
          <h3 class="pt-2">Platform</h3>
          <p v-for="name in movie.platforms" >{{ name }}</p>
        </v-col>
      </v-row>

      <v-divider></v-divider>
      <!-- reviews -->
      <h2 class="pt-10">Reviews</h2>
      <v-col>
      <v-card class="mx-auto d-flex">
        <v-list-item
          v-for="user in users"
          :key="users.name">
          <v-row>
          <v-list-item-avatar>
            <img :src="user.avatar">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ user.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ user.comment }}</v-list-item-subtitle>
          </v-list-item-content>
          </v-row>
        </v-list-item>
      </v-card>
      </v-col>
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
      name: "Spider-Man: No Way Home",
      pic: "https://cdn.majorcineplex.com/uploads/content/images/20220823120749_Fav5_AcUsAAtaUL.jpeg",
      releaseDate: "13 December, 2021",
      summary: "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity " +
        "is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those " +
        "he cares about most at risk. When he enlists Doctor Strange's help to restore his secret, the spell tears " +
        "a hole in their world, releasing the most powerful villains who've ever fought a Spider-Man in any universe. " +
        "Now, Peter will have to overcome his greatest challenge yet, which will not only forever alter his own future " +
        "but the future of the Multiverse.",
      directors: ["Jon Watts"],
      writers: ["Chris McKenna", "Erik Sommers"],
      actors: ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Jacob Batalon", "Jon Favreau", "Jamie Foxx",
        "Willem Dafoe", "Alfred Molina", "Benedict Wong", "Tony Revolori", "Marisa Tomei", "Andrew Garfield", "Tobey Maguire"],
      rating: 4,
      genres:["Action", "Adventure", "Fantasy", "Comedy"],
      platforms:["Prime Video"]
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
