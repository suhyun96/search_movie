<template lang="">
  <div>
    {{movie.imdbID}}
  </div>
</template>
<script>
export default {
  props: {
    movie: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>
<style lang="">
  
</style>