<template>
    <bar />
    <div style="padding: 50px; padding-left: 120px; padding-right: 120px;">
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
        <!-- <div class="carousel-cell"
        v-for="movie in moviesPic"
        :key="movie"
        >
          <img :src="moive" alt="orange tree"/>
          <div style="color:dimgray; padding:10px;">
            {{ movie.name }}
          </div>
        </div> -->

        <div class="carousel-cell">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" alt="orange tree" />
          <div style="color:dimgray; padding:10px;">
            Movie1
          </div>
        </div>
        <div class="carousel-cell">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg" alt="submerged" />
          <div style="color:dimgray; padding:10px;">
          Movie2
          </div>
        </div>
        <div class="carousel-cell">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg" alt="look-out" />
          <div style="color:dimgray; padding:10px;">
          Movie3
          </div>
        </div>
        <div class="carousel-cell">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg" alt="One World Trade" />
          <div style="color:dimgray; padding:10px;">
          Movie4
          </div>
        </div>
        <div class="carousel-cell">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg" alt="drizzle" />
          <div style="color:dimgray; padding:10px;">
          Movie5
          </div>
        </div>
      </flickity>
    </div>

    <div style="padding: 50px; padding-left: 120px; padding-right: 120px; padding-bottom: 60px;">
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

        <div class="carousel-cell">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" alt="orange tree" />
          <div style="color:dimgray; padding:10px;">
            Movie1
          </div>
        </div>
        <div class="carousel-cell">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg" alt="submerged" />
          <div style="color:dimgray; padding:10px;">
          Movie2
          </div>
        </div>
        <div class="carousel-cell">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg" alt="look-out" />
          <div style="color:dimgray; padding:10px;">
          Movie3
          </div>
        </div>
        <div class="carousel-cell">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg" alt="One World Trade" />
          <div style="color:dimgray; padding:10px;">
          Movie4
          </div>
        </div>
        <div class="carousel-cell">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg" alt="drizzle" />
          <div style="color:dimgray; padding:10px;">
          Movie5
          </div>
        </div>
      </flickity>
    </div>


    <!-- <div style="padding: 100px">

      <flickity class="flickity" ref="flickity" :options="flickityOptions"
      >
        <div class="carousel-cell">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" alt="orange tree" />
        </div>
        <div class="carousel-cell">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg" alt="submerged" />
        </div>
        <div class="carousel-cell">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg" alt="look-out" />
        </div>
        <div class="carousel-cell">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg" alt="One World Trade" />
        </div>
        <div class="carousel-cell">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg" alt="drizzle" />
        </div>
      </flickity>

    </div> -->

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
        wrapAround: false
      },
      moviesPic: [
        {
          name: 'Movie1',
          url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg'
        },
        {
          name: 'Movie2',
          url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg'
        },
        {
          name: 'Movie3',
          url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg'
        },
        {
          name: 'Movie4',
          url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg'
        },
        {
          name: 'Movie5',
          url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg'
        },
      ],

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

@media screen and ( min-width: 768px ) {
  .carousel-cell img {
    height: 400px;
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
