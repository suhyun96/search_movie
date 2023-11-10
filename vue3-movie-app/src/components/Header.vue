<template lang="">
    <header>
      <Logo/>
      <!-- nav-pills클래스 사용해서 active클래스 있으면 그거 스타일 적용 -->
      <div class="nav nav-pills">
        <div class="nav-item" v-for="nav in navigations" :key="nav.name">
          <!-- a 태그 대체용 : router-link-->
          <!-- active-class의 값을 active로 설정해서 선택되면 active클래스가 적용되어 헤더 색칠되도록 됨  -->
          <router-link v-bind:to="nav.href" active-class="active" class="nav-link">
            {{nav.name}}
          </router-link >
        </div>
      </div>
    </header>
</template>

<script>
import Logo from './Logo.vue';

export default {
  data() {
    return {
      navigations: [
        {
          name: 'Search',
          href: '/',
        },
        {
          name: 'Movie',
          href: '/movie',
        },
        {
          name: 'About',
          href: '/about',
        }
      ]
    }
  },
  components: {
    Logo,
  }
}
</script>
<style lang="scss" scoped>
header {
  height: 70px;
  padding: 0 40px;
  // 수평정렬
  display: flex;
  // 아이템들 가운데 정렬
  align-items: center;

  // header 클래스 안에 있는 Logo클래스만 적용 
  .logo {
    margin-right: 40px;
  }
}
</style>
