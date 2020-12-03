<template>
  <p class="sakeLotto-list-arrows"></p>
</template>

<script>
export default {
  name: 'sakeLottoUIArrow'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sakeLotto-list-arrows {
  position: relative;
}
.sakeLotto-list-arrows::before {
  content: '';
  display: block;
  position: absolute;
  top:1px;
  right: 2px;
  width:0;
  border-top: none;
  border-bottom:solid 6px white;
  border-right:solid 4px transparent;
  border-left:solid 4px transparent;
  z-index: 2;
}
.sakeLotto-list-arrows::after {
  content: '';
  display: block;
  position: absolute;
  top:0;
  right: 0;
  width:0;
  border-top: none;
  border-bottom:solid 8px black;
  border-right:solid 6px transparent;
  border-left:solid 6px transparent;
  z-index: 1;
}
.is-closed .sakeLotto-list-arrows::before {
  content: '';
  display: block;
  position: absolute;
  top:1px;
  right: 2px;
  width:0;
  border-top:solid 6px white;
  border-bottom:none;
  border-right:solid 4px transparent;
  border-left:solid 4px transparent;
  z-index: 2;
}
.is-closed .sakeLotto-list-arrows::after {
  content: '';
  display: block;
  position: absolute;
  top:0;
  right: 0;
  width:0;
  border-top:solid 8px black;
  border-bottom:none;
  border-right:solid 6px transparent;
  border-left:solid 6px transparent;
  z-index: 1;
}
</style>