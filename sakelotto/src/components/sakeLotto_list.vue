<template>
  <div class="sakeLotto-list">
    <article class="sakeLotto-list-area" :class="accordionClasses">
      <h2>お酒の一覧</h2>
      <div class="sakeLotto-list-default">
        <div class="sakeLotto-list-wrap">
          <div class="sakeLotto-list-item">
            <a href="">
              <div class="sakeLotto-list-item-top">
                <p class="sakeLotto-list-itemName">Jack Daniels</p>
                <p class="sakeLotto-list-itemType">ウィスキー</p>
                <p class="sakeLotto-list-itemDegree">30％</p>
              </div>
              <div class="sakeLotto-list-item-btm">
                <p class="sakeLotto-list-shopName">会社名テキストテキスト</p>
                <p class="sakeLotto-list-shopDesc">お酒詳細テキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </div>
            </a>
          </div>
          <div class="sakeLotto-list-item">
            <a href="">
              <div class="sakeLotto-list-item-top">
                <p class="sakeLotto-list-itemName">マール・ド・ブルゴーニュ</p>
                <p class="sakeLotto-list-itemType">ワイン</p>
                <p class="sakeLotto-list-itemDegree">45％</p>
              </div>
              <div class="sakeLotto-list-item-btm">
                <p class="sakeLotto-list-shopName">会社名テキストテキスト</p>
                <p class="sakeLotto-list-shopDesc">お酒詳細テキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </div>
            </a>
          </div>
          <div class="sakeLotto-list-item">
            <a href="">
              <div class="sakeLotto-list-item-top">
                <p class="sakeLotto-list-itemName">マール・ド・ブルゴーニュ</p>
                <p class="sakeLotto-list-itemType">ワイン</p>
                <p class="sakeLotto-list-itemDegree">45％</p>
              </div>
              <div class="sakeLotto-list-item-btm">
                <p class="sakeLotto-list-shopName">会社名テキストテキスト</p>
                <p class="sakeLotto-list-shopDesc">お酒詳細テキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </div>
            </a>
          </div>
          <div class="sakeLotto-list-item">
            <a href="">
              <div class="sakeLotto-list-item-top">
                <p class="sakeLotto-list-itemName">マール・ド・ブルゴーニュ</p>
                <p class="sakeLotto-list-itemType">ワイン</p>
                <p class="sakeLotto-list-itemDegree">45％</p>
              </div>
              <div class="sakeLotto-list-item-btm">
                <p class="sakeLotto-list-shopName">会社名テキストテキスト</p>
                <p class="sakeLotto-list-shopDesc">お酒詳細テキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </div>
            </a>
          </div>
          <div class="sakeLotto-list-item">
            <a href="">
              <div class="sakeLotto-list-item-top">
                <p class="sakeLotto-list-itemName">マール・ド・ブルゴーニュ</p>
                <p class="sakeLotto-list-itemType">ワイン</p>
                <p class="sakeLotto-list-itemDegree">45％</p>
              </div>
              <div class="sakeLotto-list-item-btm">
                <p class="sakeLotto-list-shopName">会社名テキストテキスト</p>
                <p class="sakeLotto-list-shopDesc">お酒詳細テキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </div>
            </a>
          </div>
          <div class="sakeLotto-list-item">
            <a href="">
              <div class="sakeLotto-list-item-top">
                <p class="sakeLotto-list-itemName">マール・ド・ブルゴーニュ</p>
                <p class="sakeLotto-list-itemType">ワイン</p>
                <p class="sakeLotto-list-itemDegree">45％</p>
              </div>
              <div class="sakeLotto-list-item-btm">
                <p class="sakeLotto-list-shopName">会社名テキストテキスト</p>
                <p class="sakeLotto-list-shopDesc">お酒詳細テキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="sakeLotto-list-header" @click="toggleAccordion">
        <p class="sakeLotto-list-accordion-txt"></p>
        <sakeLottoUIArrow />
      </div>

      <div class="message-body">
        <div class="sakeLotto-list-wrap">
          <div class="sakeLotto-list-item">
            <a href="">
              <div class="sakeLotto-list-item-top">
                <p class="sakeLotto-list-itemName">Jack Daniels</p>
                <p class="sakeLotto-list-itemType">ウィスキー</p>
                <p class="sakeLotto-list-itemDegree">30％</p>
              </div>
              <div class="sakeLotto-list-item-btm">
                <p class="sakeLotto-list-shopName">会社名テキストテキスト</p>
                <p class="sakeLotto-list-shopDesc">お酒詳細テキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </div>
            </a>
          </div>
          <div class="sakeLotto-list-item">
            <a href="">
              <div class="sakeLotto-list-item-top">
                <p class="sakeLotto-list-itemName">マール・ド・ブルゴーニュ</p>
                <p class="sakeLotto-list-itemType">ワイン</p>
                <p class="sakeLotto-list-itemDegree">45％</p>
              </div>
              <div class="sakeLotto-list-item-btm">
                <p class="sakeLotto-list-shopName">会社名テキストテキスト</p>
                <p class="sakeLotto-list-shopDesc">お酒詳細テキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </div>
            </a>
          </div>
          <div class="sakeLotto-list-item">
            <a href="">
              <div class="sakeLotto-list-item-top">
                <p class="sakeLotto-list-itemName">アイテルスバッハー・カルトホイザー・ホーフベルグ・クローネンベルク・リースリング・トロッケンベーレンアウスレーゼ</p>
                <p class="sakeLotto-list-itemType">ウィスキー</p>
                <p class="sakeLotto-list-itemDegree">30％</p>
              </div>
              <div class="sakeLotto-list-item-btm">
                <p class="sakeLotto-list-shopName">会社名テキストテキスト</p>
                <p class="sakeLotto-list-shopDesc">お酒詳細テキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import sakeLottoUIArrow from './ui/sakeLotto_ui_icon_arrow.vue'

export default {
  components: {
    sakeLottoUIArrow
  },
  name: 'SakeLottoList',
  props: {
    msg: String
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleAccordion: function() {
      this.isOpen = !this.isOpen;
    }
  },
  computed: {
    accordionClasses: function() {
      return {
        'is-closed': !this.isOpen,
        'is-primary': this.isOpen,
        'is-dark': !this.isOpen
      };
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  box-sizing: border-box;
  margin: 12px 0;
  font-size: 18px;
}
.sakeLotto-list {
  clear: both;
  margin: 0 auto;
  max-width: 960px;
  width: 86%;
}
.sakeLotto-list-area {
  position: relative;
  box-sizing: border-box;
  padding: 8px;
  margin: 12px 0;
  border-radius: 4px;
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.2);
  -webkit-transition: 0.4s ease-in-out;
  -moz-transition: 0.4s ease-in-out;
  -o-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  background: #ffffff;
}
.sakeLotto-list-wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.sakeLotto-list-item {
  box-sizing: border-box;
  width: 49.5%;
  padding: 4px;
  border-radius: 4px;
  margin: 0 0 8px 0;
  border: 1px solid #ccc;
}
.sakeLotto-list-item:nth-child(2n) {
  margin: 0 0 8px 1%;
}
.sakeLotto-list-item .sakeLotto-list-item-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  font-size: 12px;
}
.sakeLotto-list-item .sakeLotto-list-item-top .sakeLotto-list-itemName {
  position: relative;
  width: 60%;
}
.sakeLotto-list-item .sakeLotto-list-item-top .sakeLotto-list-itemName::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: 1px;
  height: 100%;
  background: #cccccc;
}
.sakeLotto-list-item .sakeLotto-list-item-top .sakeLotto-list-itemType {
  width: 25%;
}
.sakeLotto-list-item .sakeLotto-list-item-top .sakeLotto-list-itemDegree {
  width: 10%;
}
.sakeLotto-list-item-btm {
  text-align: left;
  font-size: 12px;
}

/* accordion Section 
-------------------- */
.sakeLotto-list-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  padding: 8px 0;
  margin: 12px auto;
  border-radius: 4px;
  border: 1px solid #333333;
  cursor: pointer;
}
.sakeLotto-list-accordion-txt::before {
  content: '閉じる'
}
.sakeLotto-list-arrows {
  margin: -6px 0 0 12px;
}
.message-body {
  height: 100%;
  visibility: visible;
  opacity: 1;
  transition: 0.3s ease all;
}
.is-closed .message-body {
  height: 0;
  visibility: hidden;
  opacity: 0;
}
.is-closed .sakeLotto-list-accordion-txt::before {
  content: 'もっと見る'
}

/* mediaQuery 
-------------------- */
@media only screen and (max-width: 620px) {
  .sakeLotto-list-item {
    width: 100%;
    margin: 0 0 8px 0;
  }
  .sakeLotto-list-item:nth-child(2n) {
    margin: 0 0 8px 0;
  }
  .sakeLotto-list-itemName {
    font-size: 3.6vw;
    width: 55%;
    text-align: left;
  }
  .sakeLotto-list-itemType {
    font-size: 3.2vw;
    width: 30%;
  }
  .sakeLotto-list-itemDegree {
    font-size: 3.2vw;
    width: 10%;
  }
}
</style>
