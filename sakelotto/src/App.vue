<template>
  <div id="app">
    <sakeLottoIntro msg="酒みくじ"/>
    <sakeLottoMain />
  </div>
</template>

<script>
import sakeLottoIntro from './components/sakeLotto_intro.vue'
import sakeLottoMain from './components/sakeLotto_main.vue'

export default {
  name: 'App',
  components: {
    sakeLottoIntro,
    sakeLottoMain
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background: #f1f1f1;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}
.wf-hannari { font-family: "Hannari"; }
.wf-notosansjapanese { font-family: "Noto Sans JP"; }
</style>
