<template>
  <div class="sakeLotto-share">
    <ShareNetwork
      network="facebook"
      url="★★★★★★★★★★★★★"
      title="酒みくじのタイトル★★★★★★★★★★★★★"
      description="test"
      hashtags="酒みくじ,他に入れたいハッシュタグ"
    >
      <p><img src="../../assets/images/facebook_icon.png"></p>
    </ShareNetwork>
    <ShareNetwork
      network="twitter"
      url="★★★★★★★★★★★★★"
      title="酒みくじのタイトル★★★★★★★★★★★★★"
      description="test"
      hashtags="酒みくじ,他に入れたいハッシュタグ"
    >
      <p><img src="../../assets/images/twitter_icon.png"></p>
    </ShareNetwork>
    <ShareNetwork
      network="line"
      url="★★★★★★★★★★★★★"
      title="酒みくじのタイトル★★★★★★★★★★★★★"
      description="test"
      hashtags="酒みくじ,他に入れたいハッシュタグ"
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