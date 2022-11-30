<template>
  <Navbar/>
  <v-app style="padding: 50px; padding-left: 250px; padding-right: 250px;">
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
      <h3 class="pt-7">WATCH LIST</h3>

          <flickity class="flickity" ref="flickity" :options="flickityOptions"
          >
            <div class="carousel-cell"
                 v-for="movie in movieList">
              <v-img
                :aspect-ratio="3/4"
                class="mx-auto bg-white"
                :src="movie.src"
                max-height="300px"
                width="200px"
                cover
              >
              </v-img>
              <div style="color:dimgray; padding:10px;">
                {{ movie.title }}
              </div>
            </div>
          </flickity>
    </v-main>
  </v-app>
  <Footer/>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Flickity from "@/components/Flickity";

export default {
  name: "ActorsView",
  components: { Flickity, Footer, Navbar },
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
        name: "Shabu",
        email: "cat@example.com",
      },
      movieList: [
        {
          title: 'Man of steel',
          src: 'https://resizing.flixster.com/ownHNmxE8MDUccJXu9znLuvRr1E=/206x305/v2/https://flxt.tmsimg.com/assets/p9259673_p_v8_ag.jpg',
          year: '2013', view: '15000'
        },
        {
          title: 'Spiderman no way home',
          src: 'https://cdn.majorcineplex.com/uploads/content/images/20220823120749_Fav5_AcUsAAtaUL.jpeg',
          year: '2021',
          view: '20000'
        },
        {
          title: 'Mulan',
          src: 'https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2020/09/mulan-598495111d425.jpg?resize=361%2C514&ssl=1',
          year: '1998',
          view: '35000'
        },
        {
          title: 'Titanic',
          src: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
          year: '1997',
          view: '1000'
        },
        {
          title: 'Bolt',
          src: 'https://images.moviesanywhere.com/5d927f6b6564c5f2d54c74fca39af6d4/6ae6ffba-1392-464c-b9ca-8a917f5df789.jpg',
          year: '2008',
          view: '4000'
        },
        {
          title: 'Lilo & Stitch', src: 'https://m.media-amazon.com/images/I/51pgU6o91KL._AC_SY780_.jpg',
          year: '2002', view: '5000'
        },
      ]
    }
  },
}
</script>

<style scoped>
* { box-sizing: border-box; }
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
