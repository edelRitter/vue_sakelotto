<template>
  <div class="sakeLotto-intro">
    <div class="sakeLotto-intro-bg">
      <div class="sakeLotto-banner">
        <sakeLottoUIShare />
        <p class="sakeLotto-logo"><img src="../assets/images/bar_logo.png" width="100%"></p>
        <h1 class="wf-notosansjapanese"><span>酒</span>みくじへようこそ</h1>
        <p class="sakeLotto-banner-bdr"></p>
        <p>新しいお酒を飲んでみませんか</p>
      </div>
    </div>
  </div>
</template>

<script>
import sakeLottoUIShare from './ui/sakeLotto_ui_share.vue'

export default {
  name: 'SakeLottoIntro',
  components: {
    sakeLottoUIShare
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 3vw;
  font-weight: 400;
  margin: 0 0 0 5%;
}
.sakeLotto-intro {
  position: relative;
  width: 100%;
}
.sakeLotto-intro-bg {
  box-sizing: border-box;
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  padding: 40px 0;
}
.sakeLotto-banner {
  box-sizing: border-box;
  position: relative;
  width: 50%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 4px;
  color: #333333;
  background: #ffffff;
  -webkit-transition: 0.4s ease-in-out;
  -moz-transition: 0.4s ease-in-out;
  -o-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  z-index: 1;
}
.sakeLotto-intro::after {
  content: '';
  box-sizing: border-box;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background: url('../assets/images/bar_demo_image1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  z-index: 0;
}
.sakeLotto-logo {
  width: 120px;
  height: auto;
  margin: 0 auto;
}
.sakeLotto-banner-bdr {
  clear: both;
  position: relative;
  margin: 20px auto;
  width: 60px;
  height: 1px;
  background: #333333;
}
@media only screen and (max-width: 620px) {
  h1 {
    font-size: 4vw;
    letter-spacing: 0.8em;
  }
  .sakeLotto-intro-bg {
    padding: 40px 0;
  }
  .sakeLotto-banner {
    width: 88%;
  }
}
</style>
