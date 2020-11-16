<template>
  <div class="sakeLotto-bottom">

    <div class="sakeLotto-adFloating">
      <div class="sakeLotto-adFloating-bg">
        <div v-on:click="isHidden = true" class="sakeLotto-adFloating-close">test</div>
        <a href="">
          <p><img src="../assets/images/ad_demo_image.png" width="1080"></p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SakeLottoFooter',
  data () {
    return {
      isHidden: false
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sakeLotto-adFloating {
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
  max-height: 83px;
  background: #fff4d8;
  z-index: 999;
}
.sakeLotto-adFloating .sakeLotto-adFloating-close {
  position: absolute;
  top: 0;
  right: 0;
}
.sakeLotto-adFloating .sakeLotto-adFloating-bg {
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
}
.sakeLotto-adFloating .sakeLotto-adFloating-bg img{
  width: auto;
  height: 83px;
  margin: 0 auto;
  text-align: center;
}
@media only screen and (max-width: 620px) {
  .sakeLotto-adFloating .sakeLotto-adFloating-bg {
    position: relative;
    width: 100%;
    margin: 0 auto;
  }
  .sakeLotto-adFloating .sakeLotto-adFloating-bg img{
    width: 100%;
    height: auto;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
