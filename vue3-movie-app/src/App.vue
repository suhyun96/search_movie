<template>
  <Header />
  <RouterView />
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header,
  }
}
</script>

<!-- scss를 가지고 와서 적용 scope 없으니까 하위 컴포넌트까지 다 적용됨 -->
<style lang="scss">
@import "./scss/main.scss"
</style>