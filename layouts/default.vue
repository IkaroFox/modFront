<template>
  <v-app id="inspire">
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <Nuxt class="mt-3"/>
        </v-row>
      </v-container>
    </v-main>
    <down-bar-component />
  </v-app>
</template>

<script>
import downBarComponent from '../components/layout/downBarComponent.vue'
export default {
  components: { downBarComponent },
  
}
</script>