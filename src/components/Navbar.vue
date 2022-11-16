<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    }),
  }
</script>

<template>
    <v-card
    color="grey-lighten-4"
    flat
    height="95px"
    rounded="0"
  >
    <v-toolbar density="compact" style="background-color: #6fac49">
      <div style="display: flex; align-items:center;">
        <v-toolbar-title style="padding: 10px;">
          <a href="/" style="-webkit-text-fill-color:whitesmoke; text-decoration: none; ">
            <strong >
              ROTTEN CUCUMBER
            </strong>
          </a>
        </v-toolbar-title>
        <form id="search" autocomplete="off" method="GET" style="height:auto;">
          <div>
            <input type="text" placeholder="search" style="border: 1px solid black; color: black; border-radius: 8px; background-color: white; padding-left: 10px;">
          </div>
        </form>
      </div>

      <v-spacer></v-spacer>
      <div style="padding: 12px;">
        <v-avatar color="#E8F5E9">
          <v-icon dark size="270%">mdi-account-circle</v-icon>
        </v-avatar>
      </div>

    </v-toolbar>
    <v-card-item>
        <a style="padding: 5px">
            Top
        </a>

        <a style="padding: 5px">
            Latest
        </a>

        <a style="padding: 5px">
            Genres
        </a>

        <a style="padding: 5px">
            Platform
        </a>


    </v-card-item>
  </v-card>

  <v-footer style="background-color: #6fac49; height: 110px;">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>


