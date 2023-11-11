// 객체 리터럴 반환 
export default {
  // 하나의 스토어에서 모듈화해서 사용할 수 있음을 나타내는 옵션 
  namespaced: true,
  // data :취급해야하는 데이터 : 상태 
  state: function () {
    return {
      movies: [],
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
    searchMovies({ state, getters, commit }) {
    }
  },
}