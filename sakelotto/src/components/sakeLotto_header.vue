<template>
  <div class="sakeLotto-intro">
    <div class="sakeLotto-intro-bg">
      <div class="sakeLotto-banner">
        <sakeLottoUIShare />
        <p><img src="../assets/images/bar_demo_logo.png" width="100%"></p>
        <h1 class="wf-notosansjapanese">酒みくじへ<br>ようこそ</h1>
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
  font-size: 24px;
  letter-spacing: 1.4em;
  line-height: 40px;
  margin: 0 0 0 5%;
}
.sakeLotto-intro {
  position: relative;
  width: 100%;
}
.sakeLotto-intro-bg {
  box-sizing: border-box;
  position: relative;
  padding: 12px;
}
.sakeLotto-banner {
  box-sizing: border-box;
  position: relative;
  width: 50%;
  max-width: 960px;
  margin: 40px auto;
  padding: 12px;
  border-radius: 4px;
  color: #333333;
  background: #ffffff;
  z-index: 1;
}
.sakeLotto-intro-bg::after {
  content: '';
  box-sizing: border-box;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background: url('../assets/images/bar_demo_image.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  z-index: 0;
}
@media only screen and (max-width: 600px) {
  h1 {
    font-size: 4vw;
    letter-spacing: 0.8em;
  }
}
</style>
