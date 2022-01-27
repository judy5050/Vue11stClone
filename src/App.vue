<template>
  <!-- 내가 만든 컴포넌트를 이 자리에 띄우겠다 . -->
  <LNB />  
  <TheHeader />
  <Billboard />
  <Direct />
  <RNB />
  <!-- <WideBanner /> -->
  <HotFocus />
  <GlobalBanner />
  <!-- router에 있는 페이지들을 이 자리에 출력하겠다. -->

  <TimeDeal />
  <Airlift />
  <PlanBanner />
  <WideBanner />
  <BestProduct />
  <TodaysChance />
  <Promotion />
  <MdsRecommendation />
  <Partner />
  <MyFooter />
</template>

<script>
import LNB from '~/components/LNB'
import TheHeader from '~/components/TheHeader'
import Billboard from './components/Billboard.vue'
import Direct from '~/components/Direct'
import RNB from '~/components/RNB'
import HotFocus from '~/components/HotFocus.vue'
import GlobalBanner from '~/components/GlobalBanner'
import BestProduct from '~/components/BestProduct'
import TodaysChance from '~/components/TodaysChance'
import MyFooter from '~/components/MyFooter'
import TimeDeal from '~/components/TimeDeal'
import Airlift from '~/components/Airlift'
import PlanBanner from './components/PlanBanner.vue'
import WideBanner from './components/WideBanner.vue'
import Promotion from '~/components/Promotion'
import MdsRecommendation from '~/components/MdsRecommendation'
import Partner from '~/components/Partner'
export default {
  components: {
    LNB, //지역등록, 순서에 따라 화면 배치 바뀜 
    TheHeader,
    Billboard,
    Direct,
    RNB,
    HotFocus,
    WideBanner,
    PlanBanner,
    GlobalBanner,
    BestProduct,
    TodaysChance,
    Promotion,
    MdsRecommendation,
    Partner,
    MyFooter,
    TimeDeal,
    Airlift
  }
}
</script>

<style lang="scss">

  @import "~/scss/main";

</style>
