<template>
    <bar />
    <div style="padding: 50px; padding-left: 250px; padding-right: 250px;">
      <v-col>
      <v-row>
      <h3>TOP MOVIE ALL THE TIME</h3>
      <v-spacer></v-spacer>
      <RouterLink :to="{ name: 'popular' }" id="user">
        <v-btn variant="flat"
          min-width="10px"
          min-height="10px"
          raised
        >
          <div class="text-decoration-underline" style="color:gray; ">View all</div>
        </v-btn>
      </RouterLink>
      </v-row>
    </v-col>

      <flickity class="flickity" ref="flickity" :options="flickityOptions"
      >
        <div class="carousel-cell"
        v-for="movie in popular_movies.sort((a,b) => {
          return a.view - b.view}).reverse()">
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
    </div>

    <div style="padding: 50px; padding-left: 250px; padding-right: 250px; padding-bottom: 60px;">
      <v-col>
      <v-row>
      <h3>LASTEST MOVIES</h3>
      <v-spacer></v-spacer>
      <RouterLink :to="{ name: 'latest' }" id="user">
        <v-btn variant="flat"
          min-width="10px"
          min-height="10px"
          raised
        >
          <div class="text-decoration-underline" style="color:gray; ">View all</div>
        </v-btn>
      </RouterLink>
      </v-row>
    </v-col>

    <flickity class="flickity" ref="flickity" :options="flickityOptions"
      
      >
        <div class="carousel-cell"
        v-for="movie in lastest_movies.sort((a,b) => {
          return a.view - b.view}).reverse()">
        
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
    </div>
    <foot />
  </template>

<script>
import Flickity from '@/components/Flickity.vue';
import bar from '@/components/Navbar.vue'
import foot from '@/components/Footer.vue'
export default {
    name: "home",
  components: {
    Flickity,
    bar,
    foot

  },
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
      popular_movies: [
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
    ],
    lastest_movies: [
    {
        title: 'Man of steel',
        src: 'https://resizing.flixster.com/ownHNmxE8MDUccJXu9znLuvRr1E=/206x305/v2/https://flxt.tmsimg.com/assets/p9259673_p_v8_ag.jpg',
        year: '2013', month: '8', day: '12',
        view: '15000'
      },
      {
        title: 'Spiderman no way home',
        src: 'https://cdn.majorcineplex.com/uploads/content/images/20220823120749_Fav5_AcUsAAtaUL.jpeg',
        year: '2021', month: '6', day: '12',
        view: '20000'
      },
      {
        title: 'Mulan',
        src: 'https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2020/09/mulan-598495111d425.jpg?resize=361%2C514&ssl=1',
        year: '1998', month: '4', day: '12',
        view: '35000'
      },
      {
        title: 'Titanic',
        src: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
        year: '1997', month: '11', day: '12',
        view: '1000'
      },
      {
        title: 'Bolt',
        src: 'https://images.moviesanywhere.com/5d927f6b6564c5f2d54c74fca39af6d4/6ae6ffba-1392-464c-b9ca-8a917f5df789.jpg',
        year: '2008', month: '1', day: '12',
        view: '4000'
      },
      {
        title: 'Lilo & Stitch', src: 'https://m.media-amazon.com/images/I/51pgU6o91KL._AC_SY780_.jpg',
        year: '2002', month: '5', day: '12',
        view: '5000'
      },
      {
        title: 'The Avengers',
        src: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        year: '2012', month: '7', day: '12',
        view: '80000'
      },
      {
        title: 'Wonder Woman',
        src: 'https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
        year: '2017', month: '1', day: '12',
        view: '50000'
      },
    ]

    }
  },
};
</script>

<style>
/* external css: flickity.css */

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
/* .carousel-cell {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50vh;
  align-items: center;
  background-color: lightgray;
  display: flex;
  padding: 10px;
  font-size: 32px;
  height: 270px;
  justify-content: center;
  width: 500px;
} */

</style>
