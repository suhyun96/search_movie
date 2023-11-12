<template lang="">
  <div>
    {{movie.Title}}
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