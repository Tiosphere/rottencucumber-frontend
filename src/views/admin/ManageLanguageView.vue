<template>

  <side />
  <h1 style="padding-left:10px; padding:10px;">
  Manage Languages
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
          <v-btn
              depressed
              color="success"
              min-width="105px"
              min-height="10px"
              style="margin:4px; margin-bottom:10px; "
              @click="this.$router.push({ name: 'language-create' })"
              >
                create
          </v-btn>
        </th>

      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in languages"
        :key="item.name"
      >
        <td style="padding-left: 30px;"> {{ item.id }} </td>

        <td>{{ item.name }}</td>

        <td style="width:15%;">

          <v-btn
            depressed
            color="primary"
            min-width="10px"
            min-height="10px"
            style="margin:4px"
            @click="edit(item.slug)"
           >
            <i class="fa fa-pencil"></i>
          </v-btn>

          <v-btn
            depressed
            color="error"
            min-width="10px"
            min-height="10px"
            style="margin:4px"
            @click="del(item.slug)"
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
        languages: [

      ],
      }
    },
    methods: {
      edit:function(slug) {
        this.$router.push({ name: 'language-edit', params: { slug: slug }});
      },
      del:function(slug) {
        this.$router.push({ name: 'language-delete', params: { slug: slug }});
      },
    },
    beforeMount() {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
      axios.get("http://backend.rottencucumber.tk/api/admin/language/get/all")
                .then((res) => {
                    let data = res.data
                    console.log(res)
                    this.languages = data
                })
                .catch(() => {
                    this.$router.push({ name: 'home' })
                });
    }
}
</script>

<style>

</style>
