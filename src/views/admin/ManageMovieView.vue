<template>

    <side />
    <h1 style="padding-left:10px; padding:10px;">
    Manage Movies
    </h1>
    
    <v-spacer></v-spacer>
  
    <v-table 
    theme="light"

    >
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
          v-for="item in movies"
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
          movies: [
            {
              id: 1,
              name: 'Movie1',
            },
            {
              id: 2,
              name: 'Movie2',
            },
            {
              id: 3,
              name: 'Movie3',
  
            },
            {
              id: 4,
              name: 'Movie4',
            },
            {
              id: 5,
              name: 'Movie5',
            },
            {
              id: 6,
              name: 'Movie6',
            },
            {
              id: 7,
              name: 'Movie7',
            },
            {
              id: 8,
              name: 'Movie8',
            },
            {
              id: 9,
              name: 'Movie9',
            },
            {
              id: 10,
              name: 'Movie10',
            },
            {
              id: 11,
              name: 'Movie11',
            },
            {
              id: 10,
              name: 'Movie10',
            },
            {
              id: 10,
              name: 'Movie10',
            },
            {
              id: 10,
              name: 'Movie10',
            },
            {
              id: 10,
              name: 'Movie10',
            },
            {
              id: 10,
              name: 'Movie10',
            },
            {
              id: 10,
              name: 'Movie10',
            },
            {
              id: 10,
              name: 'Movie10',
            },
            {
              id: 10,
              name: 'Movie10',
            },
            {
              id: 10,
              name: 'Movie10',
            },

          ],
        }
      },
  }
  </script>
  
  <style>
  
  </style>