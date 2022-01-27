import { createApp } from 'vue'
import App from '~/App.vue'
import router from '~/routes' // index.js 는 생략가능 (뒤에 index.js가 붙어있음을 이해, 그리고 router store는 plugin임을 알수있다)
import store from '~/store'
import fetch from '~/plugins/fetch'
import search from './plugins/search'
import lazyLoad from './plugins/lazyLoad'


const app = createApp(App)
app.use(router) //use 는 plugin을 설치하는 것임 
app.use(store)
app.use(fetch)
app.use(search)
app.use(lazyLoad)
app.mount('#app')
