<script>
import { isJwtExpired } from 'jwt-check-expiration';
// import { ref } from 

export default {
  data: () => ({
    url: "",
    isLogin: false,
    items: [
        { title: 'Click Me',
          pathName: 'movie'
        },
        { title: 'Click Me',
          pathName: ''
        },
        { title: 'Click Me',
          pathName: ''
        },
        { title: 'Log Out',
          pathName: 'logout'
        },
      ],

  }),

  // data() {
  //   isLogin = this.isLogin
  // },

  beforeMount() {
    let token = localStorage.getItem("access_token");
    if (token != null && !isJwtExpired(token)) {
      this.url = "home"
      this.isLogin = true
    } else {
      this.url = "login"
      this.isLogin = false
    }
  }
}
</script>

<template>
  <v-card color="grey-lighten-4" flat height="95px" rounded="0">
    <v-toolbar density="compact" style="background-color: #ffffff">
      <div style="display: flex; align-items:center;">
        <v-toolbar-title style="padding-left: 10px; padding-right: 40px;">
          <a href="/" style="-webkit-text-fill-color:whitesmoke; text-decoration: none; ">
            <v-img src="/src/assets/RottenCucumber_logo.png" height="50px" width="120px">
            </v-img>
          </a>
        </v-toolbar-title>
        <form id="search" autocomplete="off" method="GET" style="height:auto;">
          <div>
            <input type="text" placeholder="search"
              style="border-radius: 8px; background-color: #DEECDE; padding-left: 10px; height: 30px; width: 230px;">
          </div>
        </form>
      </div>

      <v-spacer></v-spacer>

      <div style="padding: 14px;">

        <!-- <RouterLink :to="{ name: this.url }" id="user"> -->
        
          <!-- <v-avatar v-if="this.isLogin" color="#E8F5E9"> -->
            <v-btn v-if="this.isLogin"
            icon
            >
            
            <v-avatar color="#E8F5E9">
              <v-icon dark size="260%">
              mdi-account-circle
              </v-icon>
            </v-avatar>
            
            <v-menu activator="parent">
              <v-list>
                <v-list-item
                v-for="item in items"
                :key="item"
                >
                
                <v-list-item-title>
                  <RouterLink :to="{ name: item.pathName }" id="user">
                  <v-btn variant="flat">
                  {{ item.title }}
                  </v-btn>
                  </RouterLink>


                </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            </v-btn>
        


          <!-- <v-btn v-else variant="flat" color="success"> -->
          <div v-else>
            <RouterLink :to="{ name: 'login' }" id="user">
            <v-btn variant="flat" color="success" style="margin:5px">
            Login
            </v-btn>
            </RouterLink>
            <RouterLink :to="{ name: 'signup' }" id="user">
            <v-btn variant="flat" color="success" style="margin:5px">
              Sign up
            </v-btn>
            </RouterLink>
          </div>
        <!-- </RouterLink> -->


      </div>

    </v-toolbar>
    <v-card-item style="background-color: #ffffff">
      <RouterLink 
      style="text-decoration: none; color: inherit;"
      :to="{ name: 'popular' }">
        <v-btn variant="text" color="#6FAC49">
          Popular
        </v-btn>
      </RouterLink>

      <RouterLink 
      style="text-decoration: none; color: inherit;"
      :to="{ name: 'latest' }">
        <v-btn variant="text" color="#6FAC49">
          Latest
        </v-btn>
      </RouterLink>

      <RouterLink 
      style="text-decoration: none; color: inherit;"
      :to="{ name: '' }">
        <v-btn variant="text" color="#6FAC49">
          Genres
        </v-btn>
      </RouterLink>

      <RouterLink 
      style="text-decoration: none; color: inherit;"
      :to="{ name: '' }">
        <v-btn variant="text" color="#6FAC49">
          Platform
        </v-btn>
      </RouterLink>


    </v-card-item>
  </v-card>
</template>

<style scoped>
#user {
  color: white;
}
</style>
