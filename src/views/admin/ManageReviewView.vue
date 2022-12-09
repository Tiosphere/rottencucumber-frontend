<template>

    <side />

    <h1 style="padding-left:10px; padding:10px;">
    Manage Reviews
    </h1>

    <v-spacer></v-spacer>

    <v-table theme="light">

      <thead>
        <tr>
          <th class="text-left" style="width:4%; padding-left: 30px;">
            <h2>
            Id
            </h2>
          </th>
          <th class="text-left" style="width:15%; padding-left: 20px">
            <h2>
            Commnet
            </h2>
          </th>
          <th class="text-left" style="width:15%; padding-left: 24px">
            <h2>
            Belong
            </h2>
          </th>
          <th class="text-left">

          </th>

        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in reviews"
          :key="item.id"


        >
            <td style="padding-left: 30px;"> {{ item.id }} </td>


            <td>
                {{ tenChar(item.comment) }}


                    <v-dialog
                    v-model="dialog[item.id]"
                    >
                    <template v-slot:activator="{ props }">
                        <v-btn
                        style="padding-bottom: 2.5px;"
                        variant="plain"
                        v-bind="props"
                        >
                        More...
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                        <span class="text-h5">{{item.user.username}} Comment</span>
                        </v-card-title>
                        <v-card-text>
                            {{item.comment}}
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
            </td>

            <td>{{ item.user.username }}</td>




            <td style="width:15%;">


            <v-btn
              depressed
              color="error"
              min-width="10px"
              min-height="10px"
              style="margin:4px"
              @click="del(item.id)"
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
    name: 'ManageReview',
    components: {
      side,
    },
    data () {
        return {
            dialog: [],
            reviews: [
            {
    "id": 1605,
    "user": {
      "is_staff": true,
      "id": 2,
      "username": "admin",
      "slug": "admin",
      "email": "admin"
    },
    "rated": 2,
    "comment": "ASDK;LAWKL;QWKE'L/,das/d,a.sd,asd,/as,d./as,asd,as.d,a.sd,a/sd,as.d,as./QWKEL;QWKELQWK;ssssssssssssLQWKL;QWKE;LQWKEL;QWKEL;QWKEL;WQasdasdasdsadEKLWQ;KE;QKWEL;QWKEQW;EKQWLEKWQL;"
  },
          ],
        }
      },
      methods: {
        del:function(id) {
          this.$router.push({ name: 'review-delete', params: { id: id }});
        },
        tenChar:function(sentence) {
            if (sentence.length < 10) {
                return sentence;
            }
            return sentence.slice(0,10);
        },
      },

      beforeMount() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
        axios.get("http://backend.rottencucumber.tk/api/admin/review/get/all")
                  .then((res) => {
                      let data = res.data
                      console.log(res)
                      this.reviews = data
                  })
                  .catch(() => {
                      this.$router.push({ name: 'home' })
                  });
      }
  }
  </script>

  <style>

  </style>
