import axios from 'axios'

// 객체 리터럴 반환 
export default {
  // 하나의 스토어에서 모듈화해서 사용할 수 있음을 나타내는 옵션 
  namespaced: true,
  // data :취급해야하는 데이터 : 상태 
  // 하나의 함수로 그 안에서 객체 데이터를 반환하는 구조여야 데이터 불변성에 문제 x
  state: function () {
    return {
      movies: [],
      message: '',
      loading: false,
    }
  },
  // computed : 계산된 데이터를 만들어냄 
  // 관리하는 state부분의 실제 데이터 계산해서 새로운 데이터 형식을 만듦
  // 상태 내부에서 movies 데이터에 접근하기 위해선 매개변수로 state를 넣고 연결해야함 $data
  getters: {
    movieIds(state) {
      return state.movies.map(m => m.imdbID)
    }
  },
  //methods!
  // 변이 , 관리하는 데이터를 변경 가능  state에 있는 데이터는 요걸로만 수정이 가능하다!  
  mutations: {
    // state 데이터 통합 갱신 , payload 객체데이터 = 파라미터들 
    updateState(state, payload) {
      //객체 데이터의 속성 이름들을 가지고 새로운 배열 데이터 만든다 -> ['movies','messages','loading']
      Object.keys(payload).forEach(key => {
        // 1. state.movies=payload.movies
        // 2. state[movies]=payload[movies]  
        // 1과 2는 같고 그래서 아래와 같이 사용해도 됨 -> 반복문으로 사용이 가능해진다 movie, message , loading으로 갱신을 알아서 시켜줌 
        state[key] = payload[key]

      })
    },

    resetMovies(state) {
      state.movies = [];
    }
  },
  // 상태 데이터 수정 외에 메서드 처리 부분
  // 비동기로 동작 
  actions: {
    // 객체 데이터 불러와서 사용 
    //searchMovies(context){
    // context.state , context.getters 요렇게 사용 가능 
    // payload는 해당 메서드 실행시 받은 파라미터들이 들어오는 곳 
    async searchMovies(context, payload) {
      const { title, type, number, year } = payload
      const OMDB_API_KEY = '7035c60c';

      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
      const { Search, totalResults } = res.data
      //mutation함수 사용ㅇ시 commit메서드 
      context.commit('updateState', {
        movies: Search,
        message: 'HELLO',
        loading: true

      })

      const total = parseInt(totalResults, 10)
      const pageLength = Math.ceil(total / 10)
      // 추가 요청 
      if (pageLength > 1) {
        for (let page = 2; page <= pageLength; page += 1) {
          if (page > (number / 10)) {
            break
          }
          const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`)
          const { Search } = red.data
          context.commit('updateState', {
            // 위에 꺼랑 덮어쓰기 하면 안되니까 전개연산자 써서 갱신
            movies: [...context.state.movies, ...Search]
          })
        }
      }
    }
  },
}