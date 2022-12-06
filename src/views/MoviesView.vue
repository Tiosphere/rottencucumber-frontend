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
        <v-rating
          v-model="movie.rating"
          color="green"
          readonly
          density="compact"
          size="x-large"
          half-increments
        >
        </v-rating>
        </v-row>
        <v-row
          class="mb-3"
        >
          <v-col cols="4" no gutters>
            <!-- Movie Poster -->
            <v-img
              aspect-ratio="4/3"
              :width="250"
              :src="movie.pic">
            </v-img>
            <!-- ADD btn -->

            <div v-show="!added">
            <v-btn @click="added = !added"
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
            <v-btn @click="added = !added"
                   variant="flat"
                   rounded
                   x-small
                   color="grey"
                   class="ma-4">
              <v-icon style="color: #2A2C32">mdi-check</v-icon>
              On your watchlist
            </v-btn>
            <v-snackbar
              v-model="remove"
              bottom
              centered
              color="grey-darken"
              elevation="20"
            >
              Removed <strong>{{ movie.name }}</strong> from your watchlist
            </v-snackbar>
            </div>

            <!-- Movie info -->
              <div class="pa-2">
                <h3>Language</h3>
                <p>{{ movie.language }}</p>
                <h3 class="pt-2">Genres</h3>
                <p v-for="type in movie.genres">{{ type }}</p>
                <h3 class="pt-2">Platform</h3>
                <p v-for="name in movie.platforms">{{ name }}</p>
              </div>
          </v-col>
            <!-- Movie detail -->

          <v-col cols="8">
            <v-sheet class="rounded-xl" elevation="4">
              <div class="pa-7">
                <h3 class="text-green">Release date</h3>
                <span class="mr-2">{{ movie.releaseDate }} </span>
                <h3 class="pt-2 text-green">Director</h3>
                <a c v-for="name in movie.directors">{{ name }} </a>
                <h3 class="pt-2 text-green">Writers</h3>
                <a v-for="name in movie.writers">{{ name }} </a>
                <h3 class="pt-2 text-green">Actors</h3>
                <a v-for="name in movie.actors">{{ name }} </a>
                <h3 class="pt-2 text-green">Summary</h3>
                <p class="pr-2">{{ movie.summary }}</p>
              </div>
            </v-sheet>
          </v-col>
        </v-row>


        <v-divider></v-divider>
        <!-- reviews -->
        <h2 class="pt-10">REVIEWS</h2>
        <div class="column_wrapper">
        <v-container class="d-flex flex-wrap justify-space-around">
              <v-list v-for="user in users"
              style="background-color: #DEECDE;">
                  <v-card
                    class="pa-7"
                    variant="outlined"
                  max-width="300px"
                    style="background-color: #ffffff;">
                    <v-list-item-content>
                      <v-rating
                        v-model="movie.rating"
                        color="green"
                        readonly
                        half-increments
                        size="25"
                        density="compact"
                      ></v-rating>
                      <p>{{ user.comment }}</p>
                    <v-list-item-subtitle class="pb-2">- {{ user.name }}</v-list-item-subtitle>
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

export default {
  name: "MoviesView",
  components: {Navbar,Footer},
  data: () => ({
    added: false,
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
      language: "English",
      genres: ["Action", "Adventure", "Fantasy", "Comedy"],
      platforms: ["Prime Video"]
    },
    users: [
      { name: 'glor', comment: 'Crossover comfort food with a redemptive twist'},
      { name: 'nut', comment: 'Throughout all of it, the weird and complex history of Spider-Man as a cinematic icon isn\'' +
          't a hindrance to the story; instead, it\'s an enhancement, using the quirks of the character\'' +
          's legacy as a source of illumination into why he has endured so long.'},
      { name: 'hong', comment: 'By the end, the direction of both the story and the MCU was murkier than before. But at some ' +
          'point all you can do is let the brains at the MCU hive-mind figure it out and then hope they’re ' +
          'able to bring it all together. It’s the best approach.'},
      { name: 'meww', comment: 'Spider-Man: No Way Home is almost a psycho-study of the two-decade-long ' +
          'Spider-Man phenomenon.'},{ name: 'hong', comment: 'By the end, the direction of both the story and the MCU was murkier than before. But at some ' +
          'point all you can do is let the brains at the MCU hive-mind figure it out and then hope they’re ' +
          'able to bring it all together. It’s the best approach.'},
      { name: 'meww', comment: 'Spider-Man: No Way Home is almost a psycho-study of the two-decade-long ' +
          'Spider-Man phenomenon.'},{ name: 'hong', comment: 'By the end, the direction of both the story and the MCU was murkier than before. But at some ' +
          'point all you can do is let the brains at the MCU hive-mind figure it out and then hope they’re ' +
          'able to bring it all together. It’s the best approach.'},
      { name: 'meww', comment: 'Spider-Man: No Way Home is almost a psycho-study of the two-decade-long ' +
          'Spider-Man phenomenon.'},{ name: 'hong', comment: 'By the end, the direction of both the story and the MCU was murkier than before. But at some ' +
          'point all you can do is let the brains at the MCU hive-mind figure it out and then hope they’re ' +
          'able to bring it all together. It’s the best approach.'},
      { name: 'meww', comment: 'Spider-Man: No Way Home is almost a psycho-study of the two-decade-long ' +
          'Spider-Man phenomenon.'},
    ]
  }),
}
</script>

<style scoped>
.column_wrapper {
  column-count: 3;
}
</style>
