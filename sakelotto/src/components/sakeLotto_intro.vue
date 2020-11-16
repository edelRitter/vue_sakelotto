<template>
  <div class="sakeLotto-intro">
    <div class="sakeLotto-intro-bg">
      <div class="sakeLotto-banner">
        <h1 class="wf-notosansjapanese">{{ msg }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SakeLottoIntro',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 32px;
  letter-spacing: 0.8em;
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
  color: #cccccc;
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
  background: #cccccc;
  z-index: 0;
}
@media only screen and (max-width: 600px) {
  h1 {
    font-size: 5vw;
  }
}
</style>
