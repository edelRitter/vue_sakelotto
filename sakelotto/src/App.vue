<template>
  <div id="app">
    <sakeLottoHeader />
    <sakeLottoMain />
  </div>
</template>

<script>
import sakeLottoHeader from './components/sakeLotto_header.vue'
import sakeLottoMain from './components/sakeLotto_main.vue'

export default {
  name: 'App',
  components: {
    sakeLottoHeader,
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
