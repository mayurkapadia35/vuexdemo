<template>
  <div>
    <button class="btn btn-outline-primary" @click="increment({by: 100, time: 500})">+</button>
    <button class="btn btn-outline-primary" @click="decrement({by: 100, time: 500})">-</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'increment',
      'decrement'
    ])
  }
}
</script>

<style scoped>

</style>
