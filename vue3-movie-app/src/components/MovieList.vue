<template lang="">
  <div class="container">
    <div class="inner">
      <MovieItem v-for="movie in movies" :key="movie.imdbID" />
    </div>
  </div>
</template>
<script>
import MovieItem from './MovieItem.vue'
export default {
  data() {
    return {
      movies: [],
    }
  },
  components: {
    MovieItem,
  }
}
</script>
<style lang="">
  
</style>