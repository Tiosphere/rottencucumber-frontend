<script setup>

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
        <v-toolbar-title style="padding-left: 10px; padding-right: 40px;">
          <a href="/" style="-webkit-text-fill-color:whitesmoke; text-decoration: none; ">
            <strong style="background-color: #6fac49">
              ROTTEN CUCUMBER
            </strong>
          </a>
        </v-toolbar-title>
        <form id="search" autocomplete="off" method="GET" style="height:auto;">
          <div>
            <input type="text" placeholder="search" style="color: black; border-radius: 8px; background-color: white; padding-left: 10px; height: 30px; width: 230px;">
          </div>
        </form>
      </div>

      <v-spacer></v-spacer>
      <div style="padding: 12px;">
        <a href="/user/login">
          <v-avatar color="#E8F5E9">
            <v-icon dark size="270%">mdi-account-circle</v-icon>
          </v-avatar>
        </a>
      </div>

    </v-toolbar>
    <v-card-item>
        <a style="padding: 25px">
            Top
        </a>

        <a style="padding: 25px">
            Latest
        </a>

        <a style="padding: 25px">
            Genres
        </a>

        <a style="padding: 25px">
            Platform
        </a>


    </v-card-item>
  </v-card>
</template>


