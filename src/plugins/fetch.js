import axios from 'axios'

//기본 내보내기 형태로 객체 데이터 내보내기 
//export import로 가져오고 내보낸다.
export default{
  install(app){
    app.config.globalProperties.$fetch = async options=>{
      const{requestName}=options //객체로 받는것이 좋음 
      const {data}=await axios({
        url:`https://trusting-williams-8cacfb.netlify.app/.netlify/functions/main?apiKey=1216&requestName=${requestName}`,
        method:'GET'

      })
      return data
    }
  }
  // this.$fetch({
  //   requestName:'rankings',
  //   abc:123,
  // })
  //this.$fetch('requestName')
}
