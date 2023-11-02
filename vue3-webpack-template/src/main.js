import Vue from 'vue'
import App from './App.vue'

//html 부분에서 app이라는 id 가지고 있는 애를 Vue에 연결함 -> index.html참고 
//App이라는 임마를 가지고 와서 여기에 연결 딱 하는 거 
Vue.createApp(App).mount('#app')