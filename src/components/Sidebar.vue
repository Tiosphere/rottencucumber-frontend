<template>
        <v-navigation-drawer>
        <v-sheet
          color="grey-lighten-4"
          class="pa-4"
        >
          <v-avatar
            class="mb-4"
            color="grey-darken-1"
            size="64"
          ></v-avatar>
  
          <div>Admin Panel</div>
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
  export default {
    data: () => ({
      links: [
        ['mdi-home','Home','dashboard'],
        ['mdi-account-group','Manage Accounts', 'manage-accounts'],
        ['mdi-account-group','Manage Movies', 'manage-movies'],
        ['mdi-inbox-arrow-down', 'Inbox', ''],
      ],
    }),
  }
</script>