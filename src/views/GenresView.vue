<template>

</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "GenresView",
  components: {Footer, Navbar},
  data: () => ({
    movies: [
      {
        title: 'Man of steel',
        src: 'https://resizing.flixster.com/ownHNmxE8MDUccJXu9znLuvRr1E=/206x305/v2/https://flxt.tmsimg.com/assets/p9259673_p_v8_ag.jpg',
        year: '2013', month: '8', day: '12',
        view: '15000', genre: 'Action'
      },
      {
        title: 'Spiderman no way home',
        src: 'https://cdn.majorcineplex.com/uploads/content/images/20220823120749_Fav5_AcUsAAtaUL.jpeg',
        year: '2021', month: '6', day: '12',
        view: '20000', genre: 'Action'
      },
      {
        title: 'Mulan',
        src: 'https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2020/09/mulan-598495111d425.jpg?resize=361%2C514&ssl=1',
        year: '1998', month: '4', day: '12',
        view: '35000', genre: 'Animation'
      },
      {
        title: 'Titanic',
        src: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
        year: '1997', month: '11', day: '12',
        view: '1000', genre: 'Sad'
      }
    ]
  })
}
</script>

<style scoped>

</style>
