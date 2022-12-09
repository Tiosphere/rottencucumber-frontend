<template>
  <bar />
  <v-app style="padding: 50px; padding-left: 250px; padding-right: 250px;">
    <v-main>
      <!-- List of movie -->
      <div class="block-head">
        <h3 class="pt-7">POPULAR</h3>
        <RouterLink :to="{ name: 'popular' }" class="pt-7" style="color:#4583C1">
          View more
          <i class="fa fa-angle-right"></i>
        </RouterLink>
      </div>
      <div v-if="movies.length">
        <flickity class="flickity" ref="flickity" :options="flickityOptions">
          <div class="carousel-cell" v-for="movie in movies.sort((a,b) => {
            return a.views - b.views
          }).reverse().slice(0,20)">
            <a @click="goMovie(movie.slug)">
            <v-img :aspect-ratio="3 / 4" class="mx-auto bg-white" v-bind:src="'data:image/jpeg;base64,' + movie.image"
              max-height="300px" width="200px" cover>
            </v-img>
            <div style="color:dimgray; padding:10px;">
              {{ movie.name }}
            </div>
          </a>
          </div>
        </flickity>
      </div>


      <div class="block-head">
        <h3 class="pt-7">LATEST</h3>
        <RouterLink :to="{ name: 'latest' }" class="pt-7" style="color:#4583C1">
          View more
          <i class="fa fa-angle-right"></i>
        </RouterLink>
      </div>
      <div v-if="movies.length">
        <flickity class="flickity" ref="flickity" :options="flickityOptions">
          <div class="carousel-cell" v-for="movie in movies.sort((a,b) => {
          if (a.year !== b.year) {
            return a.year - b.year
          }
          else {
            if (a.month !== b.month) {
              return a.month - b.month
            }
            else {
              return a.day - b.day
            }
          }
          }).reverse().slice(0,20)">
            <a @click="goMovie(movie.slug)">
              <v-img :aspect-ratio="3 / 4" class="mx-auto bg-white" v-bind:src="'data:image/jpeg;base64,' + movie.image"
                max-height="300px" width="200px" cover>
              </v-img>
              <div style="color:dimgray; padding:10px;" class="name">
                {{ movie.name }}
              </div>
            </a>
          </div>
        </flickity>
      </div>
    </v-main>
  </v-app>
  <foot />
</template>

<script>
import Flickity from '@/components/Flickity.vue';
import bar from '@/components/Navbar.vue';
import foot from '@/components/Footer.vue';
import axios from 'axios';
import Navbar from "@/components/Navbar";

export default {
  name: "home",
  components: {
    Navbar,
    Flickity,
    bar,
    foot

  },
  data() {
    return {
      flickityOptions: {
        imagesLoaded: true,
        initialIndex: 0,
        contain: true,
        autoPlay: true,
        // prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        groupCells: true,
        groupCells: 2,
      },
      movies: [],

    }
  },
  methods: {
      goMovie:function(slug) {
        this.$router.push({ name: 'movie', params: { slug: slug }});
      },
    },

  beforeMount() {
    axios.get("http://backend.rottencucumber.tk/api/movies")
      .then((res) => {
        let data = res.data
        console.log(data)
        this.movies = data
        // for (let i = 0; i < data.length; i++) {
        //   (this.i_movies).push({
        //     title: data[i].name,
        //     // src: 'data:image/jpeg;base64,'+ data[i].image,
        //     year: data[i].year, month: data[i].month, day: data[i].day,
        //     view: data[i].views,
        //   })
        // }
        console.log(this.i.movies)
        // this.movies = data
      })
      .catch(() => {
      });
  }
};
</script>

<style>
/* external css: flickity.css */

* {
  box-sizing: border-box;
}

/* body { font-family: sans-serif; } */

.carousel {
  background: #EEE;
}

.carousel-cell {
  margin: 20px;
  overflow: hidden;
  width: calc(20%);
}

.carousel-cell .name {
  text-overflow: ellipsis;
}

.carousel-cell:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.carousel-cell a {
  color: black;
  text-decoration: none;
}

.carousel-cell img {
  display: block;
  height: 200px;

}

@media screen and (min-width: 700px) {
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

.block-head {
  display: flex;
  justify-content: space-between;
}

.block-head a {
  text-decoration: none;
  color: black;
}

.block-head a:hover {
  color: #4583C1;
}
</style>
