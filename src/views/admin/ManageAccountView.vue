<template>

  <side />
  <h1 style="padding-left:10px; padding:10px;">
  Manage accounts
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
        v-for="item in desserts"
        :key="item.name"
      >
        <td style="padding-left: 30px;"> {{ item.id }} </td>

        <td>{{ item.name }}</td>

        <td style="width:18%;">

          <v-btn
            depressed
            color="primary"
            min-width="10px"
            min-height="10px"
            style="margin:2px"
           >
            <i class="fa fa-pencil"></i>
          </v-btn>

          <v-btn
            depressed
            color="warning"
            min-width="10px"
            min-height="10px"
            style="margin:2px"
          >
            <i class="fa fa-key"></i>
          </v-btn>

          <v-btn
            depressed
            color="error"
            min-width="10px"
            min-height="10px"
            style="margin:2px"
          >
            <i class="fa fa-trash"></i>
          </v-btn>

        </td>





        

        <!-- <td>{{ item.calories }}</td> -->
      </tr>
    </tbody>

  </v-table>

</template>

<script>
import side from '@/components/Sidebar.vue'
export default {
  components: {
    side,
  },
  data () {
      return {
        desserts: [
          {
            id: 1,
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            id: 2,
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            id: 3,
            name: 'Eclair',
            calories: 262,
          },
          {
            id: 4,
            name: 'Cupcake',
            calories: 305,
          },
          {
            id: 5,
            name: 'Gingerbread',
            calories: 356,
          },
          {
            id: 6,
            name: 'Jelly bean',
            calories: 375,
          },
          {
            id: 7,
            name: 'Lollipop',
            calories: 392,
          },
          {
            id: 8,
            name: 'Honeycomb',
            calories: 408,
          },
          {
            id: 9,
            name: 'Donut',
            calories: 452,
          },
          {
            id: 10,
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
}
</script>

<style>

</style>