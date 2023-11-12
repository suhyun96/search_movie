<template lang="">
  <div class="container">
    <div class="inner">
      <!-- props로 위에 알려준다 -->
      <!-- movies는 10개의 객체데이터 리스트  -->
      <MovieItem v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieItem from './MovieItem.vue'
export default {
  components: {
    MovieItem,
  },
  //계산된 데이터 옵션 
  //movies 상태에 변화가 있으면 재랜더링
  computed: {
    movies() {
      return this.$store.state.movie.movies
    }
  }
}
</script>
<style lang="">
  
</style>