import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'


// html id가 app 인거랑 Vue로 만든 createApp연결
// use로 특정 플러그인 연결 
createApp(App).use(router).mount('#app')