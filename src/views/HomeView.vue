<template>
    <bar />
    <div style="padding: 50px; padding-left: 250px; padding-right: 250px;">
      <v-col>
      <v-row>
      <h3>TOP MOVIES</h3>
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
        v-for="movie in popular_movies">
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
            <span
              class="d-inline-block text-truncate"
              style="max-width: 200px;"
            >
            {{ movie.title }}
            </span>
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

    <flickity class="flickity" ref="flickity" :options="flickityOptions">
        <div class="carousel-cell"
        v-for="movie in latest_movies">

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
            <span
              class="d-inline-block text-truncate"
              style="max-width: 200px;"
            >
            {{ movie.title }}
            </span>
          </div>
        </div>
      </flickity>
    </div>
    <foot />
  </template>

<script>
import Flickity from '@/components/Flickity.vue';
import bar from '@/components/Navbar.vue';
import foot from '@/components/Footer.vue';
import axios from 'axios';
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
        imagesLoaded: true,
        pageDots: true,
        wrapAround: true,
        initialIndex: 0,
        contain: true,
        autoPlay: true,
        // prevNextButtons: true,
        pageDots: true,
        wrapAround: false,
        groupCells: true,
        groupCells: 2,
      },
      popular_movies: [
        {
          title: 'Spider-Man: No Way Home',
          src: 'https://cdn.majorcineplex.com/uploads/content/images/20220823120749_Fav5_AcUsAAtaUL.jpeg',
          year: '2022',
        },
        {
          title: 'Frozen',
          src: 'https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810',
          year: '2013',
        },
        {
          title: 'The Conjuring: The Devil Made Me Do It',
          src: 'https://play-lh.googleusercontent.com/SWkA0rhB0_kQ7TJSHUMxLLDCVIamxicbeq2fexEM0w8_Hlr63YefIVrI1OrjG3_RtpgcClx4jxzF3yvL4pzU',
          year: '2021',
        },
        {
          title: 'Wonder Woman',
          src: 'https://www.themoviedb.org/t/p/w500/8AQRfTuTHeFTddZN4IUAqprN8Od.jpg',
          year: '2017',
        },
        {
          title: 'Howl\'s Moving Castle',
          src: 'https://play-lh.googleusercontent.com/jVswhiXbnSh1bK8RXVbdSHV117R-xjoYLmeMyTXhyAhKiM4MKd_5kVWh6lAHVlf-g1wAFMq8QmaSk1ZAAMY=w240-h480-rw',
          year: '2005',
        }
      ],
      latest_movies: [
      {
        title: 'Avatar: The Way of Water',
        src: 'https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg',
        year: '2022'
      },
      {
        title: 'Jurassic World Dominion',
        src: 'https://m.media-amazon.com/images/M/MV5BOTBjMjA4NmYtN2RjMi00YWZlLTliYTktOTIwMmNkYjYxYmE1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
        year: '2022'
      },
      {
        title: 'Spider-Man: No Way Home',
        src: 'https://cdn.majorcineplex.com/uploads/content/images/20220823120749_Fav5_AcUsAAtaUL.jpeg',
        year: '2022',
      },
      {
        title: 'Top Gun: Maverick',
        src: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX190_CR0,0,190,281_.jpg',
        year: '2022'
      },
      {
        title: 'Violent Night',
        src: 'https://m.media-amazon.com/images/M/MV5BYzg2NWNhOWItYjA3Yi00MzhhLTg4ZmItYzM3ZTIwN2U0ZGQ5XkEyXkFqcGdeQXVyMzEyMDQzNzY@._V1_FMjpg_UX1000_.jpg',
        year: '2022'
      },
    ]

    }
  },

  render() {
    axios.get("http://localhost:8080/api/movies")
      .then((res) => {
        let data = res.data
        console.log(data)
        for (let i = 0; i < data.length; i++) {
          (this.i_movies).push({
            title: data[i].name,
            // src: 'data:image/jpeg;base64,'+ data[i].image,
            year: data[i].year, month: data[i].month, day: data[i].day,
            view: data[i].views,
          })
        }
        console.log(this.i_movies)
        // this.movies = data
      })
      .catch(() => {
      });
  }
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
