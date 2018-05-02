<template>
  <div>
    <button class="btn btn-outline-primary" @click="asyncincrement({by: 100, time: 500})">+</button>
    <button class="btn btn-outline-primary" @click="asyncdecrement({by: 100, time: 500})">-</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions([
        'asyncincrement',
        'asyncdecrement'
      ])
    }
  }
</script>

<style scoped>

</style>
