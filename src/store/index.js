import { createStore } from 'vuex'
import navigation from './navigation'


//중앙 집중화된 저장소 
//app.vue에서 
//다른 컴포넌트 간의 동일 데이터를 통해 화면의 내용을 출력하고 싶을때 

export default createStore({
  modules: {
    navigation 
  }
})
