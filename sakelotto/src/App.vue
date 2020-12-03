<template>
  <div id="app" class="wf-notosansjapanese">
    <sakeLottoHeader />
    <sakeLottoMain />
    <sakeLottoList />
    <sakeLottoFooter />
  </div>
</template>

<script>
import sakeLottoHeader from './components/sakeLotto_header.vue'
import sakeLottoMain from './components/sakeLotto_main.vue'
import sakeLottoList from './components/sakeLotto_list.vue'
import sakeLottoFooter from './components/sakeLotto_footer.vue'

export default {
  name: 'App',
  components: {
    sakeLottoHeader,
    sakeLottoMain,
    sakeLottoList,
    sakeLottoFooter
  }
}
</script>

<style>
@import './stylesheets/reset.css';
@import './stylesheets/vue_mutiselect.css';

body {
  padding: 0 0 80px 0;
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
