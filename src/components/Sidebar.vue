<template>
        <v-navigation-drawer color="#FFFFFF">
        <v-sheet
          color="#6fac49"
          class="pa-4"
        >
          <v-avatar
            class="mb-4"
            color="#DEECDE"
            size="64"
          >
            <v-icon size="60px" color="black">mdi-account-tie</v-icon>
          </v-avatar>
  
          <div>
            <h1 style="color:#DEECDE">Admin Panel</h1>
          </div>
        </v-sheet>
  
        <v-divider></v-divider>
  
        <v-list>
          <v-list-item
            :to="{ name:  name  }"
            v-for="[icon, text, name] in links"
            :key="icon"
            link
          >
            <template v-slot:prepend>
                <!-- <RouterLink :to="{ name: '{{ url }}' }"> -->
                    <v-icon>{{ icon }}</v-icon>
                <!-- </RouterLink> -->
            </template>
  
            <v-list-item-title>{{ text }}</v-list-item-title>
          
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
import axios from 'axios';
import { isJwtExpired } from 'jwt-check-expiration';
  export default {
    data: () => ({
      links: [
        ['mdi-home','Home','dashboard'],
        ['mdi-account-group','Manage Accounts', 'manage-accounts'],
        ['mdi-movie','Manage Movies', 'manage-movies'],
        ['mdi-account-edit','Manage Writer', 'manage-writer'],
        ['mdi-account-box-multiple','Manage Actor', 'manage-actor'],
        ['mdi-account-hard-hat','Manage Director', 'manage-director'],
        ['mdi-bookshelf','Manage Genre', 'manage-genre'],
        ['mdi-book-open-variant','Manage Language', 'manage-language'],
        ['mdi-laptop','Manage Platform', 'manage-platform'],      
      ],
    }),

    beforeMount() {
        let token = localStorage.getItem("access_token");
        if (token != null && !isJwtExpired(token)) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;    
        } else {
            this.$router.push({ name: 'home' })
        }
    }
  }
</script>