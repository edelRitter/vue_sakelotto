<template>
  <div class="sakeLotto-share">
    <ShareNetwork
      network="facebook"
      url="https://news.vuejs.org/issues/180"
      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
      description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
      quote="The hot reload is so fast it\'s near instant. - Evan You"
      hashtags="vuejs,vite"
    >
      <p><img src="../../assets/images/facebook_icon.png"></p>
    </ShareNetwork>
    <ShareNetwork
      network="twitter"
      url="https://news.vuejs.org/issues/180"
      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
      description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
      quote="The hot reload is so fast it\'s near instant. - Evan You"
      hashtags="vuejs,vite"
    >
      <p><img src="../../assets/images/twitter_icon.png"></p>
    </ShareNetwork>
    <ShareNetwork
      network="line"
      url="https://news.vuejs.org/issues/180"
      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
      description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
      quote="The hot reload is so fast it's near instant. - Evan You"
      hashtags="vuejs,vite"
    >
      <p><img src="../../assets/images/line_icon.png"></p>
    </ShareNetwork>
  </div>
</template>

<script>
export default {
  name: 'sakeLottoUIShare'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sakeLotto-share {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.sakeLotto-share a {
  box-sizing: border-box;
  display: block;
  width: 30px;
  margin: 0 0 0 8px;
}
.sakeLotto-share a p {
  margin: 0;
  padding: 0;
}
.sakeLotto-share a img {
  width: 100%;
  height: auto;
}
</style>