<template>
    <div style="padding: 30px">
      <flickity ref="flickity" :options="flickityOptions">
        <!-- <div class="carousel-cell">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" alt="orange tree" />
        </div> -->
        
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

        <!-- <div class="carousel-cell">1</div>
        <div class="carousel-cell">2</div>
        <div class="carousel-cell">3</div>
        <div class="carousel-cell">4</div>
        <div class="carousel-cell">5</div> -->
      </flickity>
      <button @click="resize"></button>
    </div>
  </template>

<script>
import Flickity from '@/components/Flickity.vue';
export default {
    name: "home",
  components: {
    Flickity
  },
  data() {
    return {
      flickityOptions: {
        pageDots: true,
        wrapAround: true,
        initialIndex: 0,
        // prevNextButtons: true,
        // pageDots: true,
        // wrapAround: false
      }
    }
  },
  // mounted() {
  //   this.resize();
  // },
  // methods: {
  //   resize() {
  //     this.$refs.flickity.resize();
  //   }
  // }
};
</script>

<style>
/* external css: flickity.css */

* { box-sizing: border-box; }

body { font-family: sans-serif; }

.carousel {
  background: #EEE;
}

.carousel-cell {
  margin-right: 20px;
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