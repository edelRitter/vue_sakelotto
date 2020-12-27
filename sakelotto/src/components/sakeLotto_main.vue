<template>
  <div class="sakeLotto-content">
    <h2>お酒を探す</h2>

    <form id="sakeLotto-gacha" @submit.prevent action="/something" method="post">
      <vue-aos animation-class="fadeIn animated">
        <div class="sakeLotto-options">
          <p class="sakeLotto-submit-area">
            <input type="submit" name="submitbtn" id="submitbtn" class="sakeLotto-submit" @click="checkForm" value="くじをひく">  
          </p>
          <p v-if="errors.length" class="sakeLotto-error">
            <span>以下の項目の入力が必要です</span>
            <ul>
              <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
            </ul>
          </p>
          <p class="sakeLotto-input">
            <label for="drinkNum">オーダー数</label>
            <input type="text" name="drinkNum" id="drinkNum" v-model="drinkNum" placeholder="何杯オーダーしますか？">
            <span>杯</span>
          </p>
          <p class="sakeLotto-input">
            <label class="typo__label">ドリンク種類</label>
            <multiselect v-model="value" tag-placeholder="ドリンクの種類を選ぶ" placeholder="ドリンクの種類を選ぶ" label="name" track-by="name" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
          </p>
          <pre class="language-json">{{ value.name }}</pre>
          <p class="sakeLotto-input">
            <label for="drinkDegree">度数</label>
            <input type="number" name="drinkDegree" id="drinkDegree" v-model="drinkDegree" placeholder="99" min="0">
            <span>度以下</span>
          </p>
        </div>
      </vue-aos>
      <div id="scrollresult"></div>
    </form>

    <div class="sakeLotto-result" id="sakeLotto-result" ref="sakeLotto-result" v-show="showFormValues">
      <div class="sakeLotto-result-wrap">
        <vue-aos animation-class="fadeIn animated">
          <div class="sakeLotto-result-item">
            <div class="sakeLotto-result-item-top">
              <p class="sakeLotto-result-itemName">Jack Daniels</p>
              <p class="sakeLotto-result-itemType">ウィスキー</p>
              <p class="sakeLotto-result-itemDegree">20％</p>
            </div>
            <div class="sakeLotto-result-item-bottom">
              <p class="sakeLotto-result-itemDesc">test</p>
            </div>
            <sakeLottoUIShare />
          </div>
        </vue-aos>
        <vue-aos animation-class="fadeIn animated">
          <div class="sakeLotto-result-item">
            <div class="sakeLotto-result-item-top">
              <p class="sakeLotto-result-itemName">マール・ド・ブルゴーニュ</p>
              <p class="sakeLotto-result-itemType">ワイン</p>
              <p class="sakeLotto-result-itemDegree">40％</p>
            </div>
            <div class="sakeLotto-result-item-bottom">
              <p class="sakeLotto-result-itemDesc">至高のブルゴーニュワインを追い求める者にとって、唯一無二であり、絶対の存在、ドメーヌ・コント・ジョルジュ・ド・ヴォギュエ。</p>
            </div>
            <sakeLottoUIShare />
          </div>
        </vue-aos>
        <vue-aos animation-class="fadeIn animated">
          <div class="sakeLotto-result-item">
            <div class="sakeLotto-result-item-top">
              <p class="sakeLotto-result-itemName">アイテルスバッハー・カルトホイザー・ホーフベルグ・クローネンベルク・リースリング・トロッケンベーレンアウスレーゼ</p>
              <p class="sakeLotto-result-itemType">ワイン</p>
              <p class="sakeLotto-result-itemDegree">40％</p>
            </div>
            <div class="sakeLotto-result-item-bottom">
              <p class="sakeLotto-result-itemDesc">至高のブルゴーニュワインを追い求める者にとって、唯一無二であり、絶対の存在、ドメーヌ・コント・ジョルジュ・ド・ヴォギュエ。</p>
            </div>
            <sakeLottoUIShare />
          </div>
        </vue-aos>
      </div>
    </div>
  </div>
</template>

<script>
import VueAos from 'vue-aos'
import sakeLottoUIShare from './ui/sakeLotto_ui_share.vue'

export default {
  components: {
    VueAos,
    sakeLottoUIShare
  },
  name: 'SakeLottoMain',
  props: {
    msg: String
  },
  data() {
    return {
      showFormValues:false,
      errors:[],
      drinkNum:null,
      drinkDegree:null,
      drinkType: null,
      value: [
        { name: 'ウィスキー'}
      ],
      options: [
        { name: 'ウィスキー'},
        { name: 'ワイン'},
        { name: '日本酒'},
        { name: '焼酎'},
        { name: 'スコッチ'},
        { name: 'ウォッカ'},
        { name: 'ラム'}
      ]
    }
  },
  methods:{
    checkForm: function(e) {
      const el = this.$el.querySelector('#scrollresult');
      if(this.drinkNum && this.drinkDegree) {
        this.showFormValues = true;
        this.errors = [];
        el.scrollIntoView({behavior: "smooth"});
      }
      this.errors = [];
      if(!this.drinkNum) this.errors.push("オーダー数を入力してください");
      if(!this.drinkDegree) this.errors.push("度数を入力してください");
      e.preventDefault();
    },
    addTag (newTag) {
      const tag = {
        name: newTag
      }
      this.options.push(tag)
      this.value.push(tag)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  box-sizing: border-box;
  font-size: 1px;
  opacity: 0;
  visibility: hidden;
}

/* sakeLotto Results
-------------------- */
.sakeLotto-result {
  clear: both;
  margin: 0 auto;
  max-width: 960px;
  width: 86%;
}
.sakeLotto-result .sakeLotto-result-wrap {
  margin: 40px auto;
}
.sakeLotto-result .sakeLotto-result-wrap .sakeLotto-result-item {
  position: relative;
  box-sizing: border-box;
  padding: 8px;
  margin: 12px 0;
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.2);
  -webkit-transition: 0.4s ease-in-out;
  -moz-transition: 0.4s ease-in-out;
  -o-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  text-align: left;
  background: #ffffff;
}
.sakeLotto-result .sakeLotto-result-wrap .sakeLotto-result-item:first-child {
  margin: 0 0 8px 0;
}
.sakeLotto-result .sakeLotto-result-wrap .sakeLotto-result-item .sakeLotto-result-item-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 8px 0;
}
.sakeLotto-result-itemName {
  font-size: 18px;
  font-weight: 700;
  width: 60%;
}
.sakeLotto-result-itemType {
  font-size: 14px;
  width: 25%;
}
.sakeLotto-result-itemDegree {
  font-size: 14px;
  width: 10%;
}
.sakeLotto-result-itemDesc {
  font-size: 14px;
}

/* sakeLotto - input
-------------------- */
.sakeLotto-options {
  clear: both;
  position: relative;
  box-sizing: border-box;
  max-width: 960px;
  width: 86%;
  margin: 40px auto;
  padding: 24px 12px;
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
.sakeLotto-options .sakeLotto-input {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: stretch;
  margin: 24px 0;
  font-size: 14px;
}
.sakeLotto-options .sakeLotto-input label {
  width: 30%;
  margin: 0 8px 0 0;
  text-align: right;
  font-size: 14px;
}
.sakeLotto-options .sakeLotto-input input {
  font-size: 16px;
}
.sakeLotto-options .sakeLotto-input input,
.sakeLotto-options .sakeLotto-input select {
  width: 50%;
  box-sizing: border-box;
  padding: 8px 8px;
  margin: 0 4px 0 0;
  min-height: 40px;
  text-align: right;
  border-radius: 4px;
  border: 1px solid #8f8f8f;
}
.sakeLotto-options .sakeLotto-input span {
  font-size: 12px;
}
.sakeLotto-submit-area {
  position: relative;
  margin: 20px auto;
}
.sakeLotto-submit {
  box-sizing: border-box;
  width: 80%;
  max-width: 400px;
  appearance: none;
  outline: none;
  font-size: 18px;
  padding: 12px;
  border: 1px solid #333333;
  border-radius: 4px;
  color: #333333;
  background: #ffffff;
  -webkit-transition: 0.1s ease-in-out;
  -moz-transition: 0.1s ease-in-out;
  -o-transition: 0.1s ease-in-out;
  transition: 0.1s ease-in-out;
}
.sakeLotto-submit:hover {
  color: #ffffff;
  background: #333333;
  border: 1px solid #333333;
}
.sakeLotto-error {
  margin: 8px 0;
}
.sakeLotto-error span {
  font-size: 18px;
  color: #333;
}

/* mediaQuery 
-------------------- */
@media only screen and (max-width: 620px) {
  .sakeLotto-result {
    max-width: 86%;
  }
  .sakeLotto-options {
    margin: 40px auto;
    max-width: 86%;
  }
  .sakeLotto-options .sakeLotto-input label {
    font-size: 12px;
  }
  .sakeLotto-submit {
    width: 75%;
    font-size: 3vw;
  }
  .sakeLotto-result-itemName {
    font-size: 4vw;
    width: 60%;
    text-align: left;
  }
  .sakeLotto-result-itemType {
    font-size: 3vw;
    width: 25%;
  }
  .sakeLotto-result-itemDegree {
    font-size: 3vw;
    width: 10%;
  }
  .sakeLotto-result-itemDesc {
    font-size: 3.4vw;
  }
  .sakeLotto-result .sakeLotto-result-wrap .sakeLotto-result-item {
    flex-wrap: wrap;
  }
  .sakeLotto-options .sakeLotto-input label {
    width: 100%;
    text-align: left;
  }
  .sakeLotto-options .sakeLotto-input input,
  .sakeLotto-options .sakeLotto-input select {
    width: 80%;
  }
  .multiselect {
    width: 100%;
  }
  .sakeLotto-options .sakeLotto-input span {
    text-align: left;
    width: 16%;
  }
  .sakeLotto-submit {
    color: #ffffff;
    background: #333333;
    border: 1px solid #333333;
  }
  .sakeLotto-share {
    width: 100%;
    margin: 12px 0 0 0;
  }
}
</style>
