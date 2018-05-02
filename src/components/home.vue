<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      app
      v-model="drawer">
      <addheader></addheader>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>

    <addcontent></addcontent>
  </v-app>
</template>

<script>
import addheader from './leftbar.vue'
import addcontent from './content.vue'
export default {
  components:{
    addheader,
    addcontent
  },
  data: () => ({
    drawer: null
  }),
}
</script>
