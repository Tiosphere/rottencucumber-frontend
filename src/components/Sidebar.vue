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
            :to="path"
            v-for="[icon, text, path] in links"
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
        ['mdi-home','Home','/admin/'],
        ['mdi-account-group','Manage Accounts', '/admin/manage'],
        ['mdi-inbox-arrow-down', 'Inbox', ''],
        ['mdi-send', 'Send', ''],
        ['mdi-delete', 'Trash', ''],
        ['mdi-alert-octagon', 'Spam', ''],
      ],
    }),
  }
</script>