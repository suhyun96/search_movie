<template lang="">
  <router-link to="/" class="logo">
    <span>OMDbAPI</span>.COM
  </router-link>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
//scss에서 정의된 값들을 스타일에 적용 $black
//@import "../../node_modules/bootstrap/scss/variables"; 여기에 정의된 거를 가져와서 여기서 사용
@import "../scss/main.scss";

.logo {
  font-family: "Oswald", "sans-serif";
  font-size: 20px;
  color: $black;
  text-decoration: none;

  //가상 명시자
  &:hover {
    color: $black;
  }

  span {
    color: $primary;
  }
}
</style>