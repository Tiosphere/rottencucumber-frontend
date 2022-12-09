<template>

  <side />
  <h1 style="padding-left:10px; padding:10px;">
  Manage Accounts
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
        <th class="text-left" style="width:15%; padding-left: 26px;">
          <h2>
          Name
          </h2>
        </th>
        <th class="text-left" style="width:15%; padding-left: 26px;">
          <h2>
          Email
          </h2>
        </th>
        <th class="text-left" >
          <h2>
          Staff
          </h2>
        </th>
        <th class="text-left">
          <v-btn
              depressed
              color="success"
              min-width="105px"
              min-height="10px"
              style="margin:4px; margin-bottom:10px; "
              @click="this.$router.push({ name: 'account-create' })"
              >
                create
          </v-btn>
        </th>

      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in users"
        :key="item.name"
      >
        <td style="padding-left: 30px;"> {{ item.id }} </td>
        <td style="padding-left: 30px;">{{ item.username }}</td>
        <td style="padding-left: 30px;">{{ item.email }}</td>
        <td style="">{{ item.is_staff }}</td>


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
        users: [
          {
            is_staff: false,
            id: 1, username: 'user',
            slug: 'user',
            email: 'user'
            }

        ]
      }
    },
    methods: {
      edit:function(slug) {
        this.$router.push({ name: 'account-edit', params: { slug: slug }});
      },
      del:function(slug) {
        this.$router.push({ name: 'account-delete', params: { slug: slug }});
      },
    },
    beforeMount() {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
      axios.get("http://backend.rottencucumber.tk/api/admin/user/get/all")
                .then((res) => {
                    let data = res.data
                    console.log(res)
                    this.users = data
                })
                .catch(() => {
                    this.$router.push({ name: 'home' })
                });
    }
}
</script>

<style>

</style>
