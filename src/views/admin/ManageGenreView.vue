<template>

  <side />
  <h1 style="padding-left:10px; padding:10px;">
  Manage Genres
  </h1>
  
  <v-spacer></v-spacer>

  <v-table theme="light">

    <thead>
      <tr>
        <th class="text-left" style="width:12%; padding-left: 26px;">
          <h2>
          Id
          </h2>
        </th>
        <th class="text-left" >
          <h2>
          Name
          </h2>
        </th>
        <th class="text-left">
        </th>

      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in genres"
        :key="item.name"
      >
        <td style="padding-left: 30px;"> {{ item.id }} </td>

        <td>{{ item.name }}</td>





        <td style="width:15%;">
          <!-- <RouterLink :to="{ name: 'genre-edit', params: { slug: genres.slug } }"> -->
          <v-btn
            depressed
            color="primary"
            min-width="10px"
            min-height="10px"
            style="margin:4px;"
            @click="goLink(item.slug)"
           >
            <i class="fa fa-pencil"></i>
          </v-btn>
          <!-- </RouterLink> -->
          
          




          <v-btn
            depressed
            color="error"
            min-width="10px"
            min-height="10px"
            style="margin:4px"
          >
            <i class="fa fa-trash"></i>
          </v-btn>

        </td>

      </tr>
    </tbody>

  </v-table>

</template>

<script>
import side from '@/components/Sidebar.vue'
import axios from 'axios';
export default {
  components: {
    side,
  },
  data () {
      return {
        genres: [
        {
          "id": "",
          "name": "",
          "slug": ""
      },
        ],
      }
    },
    methods: {
      goLink(slug) {
      this.$router.push({ name: 'genre-edit', params: { slug: slug }});
      },
    },
    
    beforeMount() {
      axios.get("http://localhost:8080/api/admin/genre/get/all")
                .then((res) => {
                    let data = res.data
                    console.log(res)
                    this.genres = data
                })
                .catch(() => {
                    this.$router.push({ name: 'home' })
                });
    }
}
</script>

<style>

</style>