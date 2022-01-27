<template>
  <h1>Home page..</h1>
  <h2>{{ heropyMessage }}</h2>
</template>

<script>
export default {
  computed: {
    heropyMessage() {
      return this.$store.state.heropy.message
    }
  }
}
</script>

// scoped를 통해 해당 template태그 안에서만 사용하게 한다고 설정
// 안할경우 디렉 전체의 h1테그에 속성이 적용됨
//사실상 vue에서 scoped는 필수임 (현재 파일 내에서만 적용되도록 해주는 것)
<style scoped>
h1{
  color: red;
}
</style>
