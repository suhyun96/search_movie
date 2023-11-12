// store 생성 함수 임포트 
import { createStore } from 'vuex'
import movie from './movie'
import about from './about'
export default createStore({
  //데이터 타입에 따른 사용할 모듈을 설정 
  modules: {
    movie,
    about
  }
})