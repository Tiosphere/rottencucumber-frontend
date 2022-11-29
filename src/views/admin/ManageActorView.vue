<template>

    <side />
    <h1 style="padding-left:10px; padding:10px;">
    Manage Actors
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
          v-for="item in users"
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
             >
              <i class="fa fa-pencil"></i>
            </v-btn>
  
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
  export default {
    components: {
      side,
    },
    data () {
        return {
          users: [
            {
              id: 1,
              name: 'Frozen Yogurt',
            },
            {
              id: 2,
              name: 'Ice cream sandwich',
            },
            {
              id: 3,
              name: 'Eclair',
  
            },
            {
              id: 4,
              name: 'Cupcake',
            },
            {
              id: 5,
              name: 'Gingerbread',
            },
            {
              id: 6,
              name: 'Jelly bean',
            },
            {
              id: 7,
              name: 'Lollipop',
            },
            {
              id: 8,
              name: 'Honeycomb',
            },
            {
              id: 9,
              name: 'Donut',
            },
            {
              id: 10,
              name: 'KitKat',
            },
          ],
        }
      },
  }
  </script>
  
  <style>
  
  </style>