import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'
import Movie from './Movie'


// createRouter 메서드 결과를 밖으로 내보내고 이걸 main.js가 받아서 사용  
export default createRouter({
    // Hash , History
    // /#/ : 특정 페이지 새로고침 할 때 페이지 찾을 수 없음을 방지 -> 프론트만 쓰니까 해쉬사용 백이랑 같이쓰면 히스토리 쓸 듯 
    history: createWebHashHistory(),
    //pages 
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/movie',
            component: Movie
        },

    ]
})