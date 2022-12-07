<template>
  <Navbar/>
    <v-app style="background-color: #deecde;">
      <v-container>
        <v-row>
          <v-col cols="8">
            <h1 class="pl-15 pt-8 pb-8">{{this.genre.name}}</h1>
          </v-col>
        </v-row>
        <v-card
          class="d-flex flex-wrap pa-5"
          elevation="7"
        >
          <v-row class="justify-center">
            <v-list
              v-for="movie in movies"
              :key="movie.id"
            >
              <v-container>
                <div class="pa-5 center">
                  <v-list-item-media>
                    <v-img
                      :aspect-ratio="3/4"
                      class="mx-auto bg-white"
                      v-bind:src="'data:image/jpeg;base64,'+ movie.image"
                      max-height="300px"
                      width="200px"
                      cover
                    >
                    </v-img>
                  </v-list-item-media>
                  <v-list-item-content class="text-center">
                    <v-list-item-title>
                      <div class="pt-3">
                    <span
                      class="d-inline-block text-truncate"
                      style="max-width: 200px;"
                    >
                      {{ movie.name }}
                    </span>
                      </div>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{movie.year}}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </div>
              </v-container>
            </v-list>
          </v-row>
        </v-card>
      </v-container>
    </v-app>
  <Footer/>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";

export default {
  name: "GenresView",
  components: {Footer, Navbar},
  data: () => ({
    movies: [{

    }],
    genre: [{

    }]


      // {
      //   title: 'Man of steel',
      //   src: 'https://resizing.flixster.com/ownHNmxE8MDUccJXu9znLuvRr1E=/206x305/v2/https://flxt.tmsimg.com/assets/p9259673_p_v8_ag.jpg',
      //   year: '2013', month: '8', day: '12',
      //   view: '15000', genre: 'Action'
      // },
      // {
      //   title: 'Spiderman no way home',
      //   src: 'https://cdn.majorcineplex.com/uploads/content/images/20220823120749_Fav5_AcUsAAtaUL.jpeg',
      //   year: '2021', month: '6', day: '12',
      //   view: '20000', genre: 'Action'
      // },
      // {
      //   title: 'Mulan',
      //   src: 'https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2020/09/mulan-598495111d425.jpg?resize=361%2C514&ssl=1',
      //   year: '1998', month: '4', day: '12',
      //   view: '35000', genre: 'Animation'
      // },
      // {
      //   title: 'Titanic',
      //   src: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
      //   year: '1997', month: '11', day: '12',
      //   view: '1000', genre: 'Sad'
      // }

  }),
  beforeMount() {
    axios.get("http://localhost:8080/api/genre/" + this.$route.params.slug)
      .then((res) => {
        let data = res.data
        console.log(data)
        this.genre = data.records[0]
        this.movies = data.records[0].movies
      })
      .catch(() => {
        this.$router.push({name: 'home'})
      });
  }
}
</script>

<style scoped>

</style>
