<template lang="">
  <div class="container">
    <!-- form-contorl : 부트스트랩 기본 스타일 , 클릭시 프라이머리로 테두리  -->
    <!-- 양방향 데이터 바인딩으로 값을 title로 지정해둠 -->
    <!-- enter키를 key를 땟다가 놓았을 때 apply메서드 실행-->
    <input class="form-control" keyup.enter="apply" v-model="title" type="text" placeholder="Search for Movies, Series & more "/>
    <div class="selects">
      <select v-for="filter in filters" :key="filter.name" class="form-select" v-model="$data[filter.name]">
        <!-- value태그가 없는 경우 option태그 내의 값을 디폴트로 value 값으로 사용 밑에 data보면 다 값 지정했는데 years만 빈문자열이니까 옵션값 저거 씀-->
        <option v-if="filter.name=='year'" value="">All Years</option>
        <option v-for="item in filter.items" :key="item">{{ item }}</option>
      </select>
    </div>
   <button class="btn btn-primary" @click="apply">APPLY</button>

  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      title: '',
      type: 'movie',
      number: 10,
      year: '',
      filters: [
        {
          name: 'type',
          items: ['movie', 'series', 'episode']
        },
        {
          name: 'number',
          items: [10, 20, 30]
        },
        {
          name: 'year',
          // 반복문으로 년도 지정 
          // 즉시 실행 함수 개념 : 첫번쨰 소괄호 안에 있는 함수를 선언하면서 실행 리턴값을 밖으로 내보내서 사용
          items: (function () {
            const years = []
            const thisYear = new Date().getFullYear() //2023
            for (let i = thisYear; i >= 1985; i -= 1) {
              years.push(i)
            }
            return years
          })()
        },
      ],
    }
  },
  methods: {
    // 비동기 처리함수 
    async apply() {
      //search movies
      const OMDB_API_KEY = '7035c60c';

      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${this.title}&type=${this.type}&y=${this.year}&page=1`)
      console.log(res);
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  /* 컨테이너 하위 아이템들은 다 수평 정렬로 변경됨 */
  display: flex;

  >* {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }

  // select 태그 밑에 있는 애들도 수평정렬되도록 지정
  .selects {
    display: flex;

    select {
      width: 120px;
      margin-right: 10px;
      font-size: 15px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  // 120px보다 작게 보여지는데 감소 비율을 없애서 감소 안 되도록 해야함 : flex-shrink
  .btn {
    width: 120px;
    height: 50px;
    font-weight: 700;
    flex-shrink: 0;
  }
}
</style>