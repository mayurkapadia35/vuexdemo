<template>
  <div>
  <v-content>
    <v-container fluid fill-height>
      <v-layout
        justify-center
        align-center>
        <v-flex text-xs-center>
          <v-tooltip left>
            <v-btn icon large :href="source" target="_blank" slot="activator">
              <v-icon large>code</v-icon>
            </v-btn>
            <span>Source</span>
          </v-tooltip>
          <v-tooltip right>
            <v-btn icon large href="https://codepen.io/johnjleider/pen/rJdVMq" target="_blank" slot="activator">
              <v-icon large>mdi-codepen</v-icon>
            </v-btn>
            <span>Codepen</span>
          </v-tooltip>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
  <v-footer color="indigo" app>
    <span class="white--text">&copy; 2017</span>
  </v-footer>
  </div>
</template>
<script>

export default {
  props: {
    source: String
  }
}
</script>
