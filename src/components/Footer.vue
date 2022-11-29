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
      paths: [
        
      ]

    }),


  }
</script>

<template>
    <v-footer style="background-color: #6fac49; height: 110px;">
    <!-- <v-row justify="center" no-gutters> -->
      <!-- <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ link }}
      </v-btn> -->
      <v-col class="text-center">
       <h3> {{ new Date().getFullYear() }} — <strong>Rotten Cucumber</strong> </h3>
      </v-col>
    <!-- </v-row> -->
  </v-footer>
</template>