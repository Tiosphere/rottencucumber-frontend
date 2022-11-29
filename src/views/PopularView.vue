<template>
  <Navbar/>
  <v-container>
    <v-row>
      <v-col cols="10">
        <h1 class="ma-2">Popular</h1>
      </v-col>
    </v-row>
  </v-container>
  <v-card
    class="d-flex align-content-space-between flex-wrap pa-8"
    elevation="7"
    >
    <v-list
      :aria-sort="movies.view"
      v-for="movie in movies">
      <div class="pa-3 pr-7">
        <v-list-item-media>
          <v-img
            :aspect-ratio="3/4"
            class="mx-auto bg-white"
            :src="movie.src"
            max-height="300px"
            width="200px"
            cover
          >
          </v-img>
        </v-list-item-media>
        <v-list-item-content class="text-center">
          <v-list-item-title>
            <div>
              <span
                class="d-inline-block text-truncate"
                style="max-width: 150px;"
                >
                {{ movie.title }}
              </span>

            </div>

          </v-list-item-title>
          <v-list-item-subtitle>
            {{movie.year}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </div>
    </v-list>
  </v-card>
  <Footer/>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "PopularView",
  components: {Footer, Navbar},
  data: () => ({
    movies: [
      { title: 'Man of steel',
        src: 'https://resizing.flixster.com/ownHNmxE8MDUccJXu9znLuvRr1E=/206x305/v2/https://flxt.tmsimg.com/assets/p9259673_p_v8_ag.jpg',
        year: '2013', view: '15000'},
      { title: 'Spiderman no way home', src: 'https://cdn.majorcineplex.com/uploads/content/images/20220823120749_Fav5_AcUsAAtaUL.jpeg',
        year: '2021', view: '20000'},
      { title: 'Mulan', src: 'https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2020/09/mulan-598495111d425.jpg?resize=361%2C514&ssl=1',
        year: '1998', view: '35000'},
      { title: 'Titanic', src: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
        year: '1997', view: '1000'},
      { title: 'Bolt', src: 'https://images.moviesanywhere.com/5d927f6b6564c5f2d54c74fca39af6d4/6ae6ffba-1392-464c-b9ca-8a917f5df789.jpg',
        year: '2008', view: '4000'},
      { title: 'Lilo & Stitch', src: 'https://m.media-amazon.com/images/I/51pgU6o91KL._AC_SY780_.jpg',
        year: '2002', view: '5000'},
      { title: 'The Avengers', src: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        year: '2012', view: '80000'},
      { title: 'Wonder Woman', src: 'https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
        year: '2017', view: '50000'},
      { title: 'Top Gun: Maverick', src: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX190_CR0,0,190,281_.jpg',
        year: '2022', view: '25000'},
      { title: 'Jurassic World: Dominion', src: 'https://m.media-amazon.com/images/M/MV5BOTBjMjA4NmYtN2RjMi00YWZlLTliYTktOTIwMmNkYjYxYmE1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
        year: '2022', view: '25000'},
      { title: 'Tfdfs: Maverick', src: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX190_CR0,0,190,281_.jpg',
        year: '2022', view: '25000'},
      { title: 'Topsfgstsdsdfsgdfg fd  d fdfdsf sdfy', src: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX190_CR0,0,190,281_.jpg',
        year: '2022', view: '25000'},
      { title: 'heloooo', src: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX190_CR0,0,190,281_.jpg',
        year: '2022', view: '25000'}
    ]
})
}
</script>

<style scoped>

</style>
