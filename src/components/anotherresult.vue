<template>
  <div>
    <p>this is a another counter {{doubleCounter}}</p>
    <p>Number of clicks {{stringCounter}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'doubleCounter',
      'stringCounter'
    ])
  }
}
</script>

<style scoped>

</style>
