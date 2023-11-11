import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
// 특정 폴더의 index.js 파일은 생략이 가능  -> 그래서 폴더에 파일 만들 때 index권장
//import store from './store/index.js'
import store from './store'

// html id가 app 인거랑 Vue로 만든 createApp연결
// use로 특정 플러그인 연결 
// store 연결  use : 플러그인 , 라이브러리 연결욜 메서드 
createApp(App).use(router).use(store).mount('#app')