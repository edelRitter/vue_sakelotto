<template>
  <div class="sakeLotto-content">
    <h2>お酒を探す</h2>

    <div class="sakeLotto-result">
      <div class="sakeLotto-result-wrap">
        <vue-aos animation-class="fadeIn animated" threshold="0.5">
          <div class="sakeLotto-result-item">
            <div class="sakeLotto-result-itemName">Jack Daniels</div>
            <div class="sakeLotto-result-itemType">文字数8あたり…</div>
            <div class="sakeLotto-result-itemDegree">20度</div>
            <sakeLottoUIShare />
          </div>
        </vue-aos>
        <vue-aos animation-class="fadeIn animated">
          <div class="sakeLotto-result-item">
            <div class="sakeLotto-result-itemName">Jack Daniels</div>
            <div class="sakeLotto-result-itemType">Whisky</div>
            <div class="sakeLotto-result-itemDegree">20度</div>
          </div>
        </vue-aos>
        <vue-aos animation-class="fadeIn animated">
          <div class="sakeLotto-result-item">
            <div class="sakeLotto-result-itemName">Jack Daniels</div>
            <div class="sakeLotto-result-itemType">Whisky</div>
            <div class="sakeLotto-result-itemDegree">20度</div>
          </div>
        </vue-aos>
      </div>
    </div>

    <form id="app" @submit="checkForm" action="/something" method="post">
      <vue-aos animation-class="fadeIn animated">
        <div class="sakeLotto-options">
          <p>
            <input type="submit" class="sakeLotto-submit" value="くじをひく">  
          </p>
          <p v-if="errors.length" class="sakeLotto-error">
            <span>以下の項目の入力が必要です</span>
            <ul>
              <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
            </ul>
          </p>
          <p class="sakeLotto-input">
            <label for="drinkNum">オーダー数</label>
            <input type="text" name="drinkNum" id="drinkNum" v-model="drinkNum" placeholder="2">
            <span>杯</span>
          </p>
          <p class="sakeLotto-input">
              <label for="drinkType">ドリンク種類</label>
              <multiselect 
              v-model="value" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" label="name" track-by="name" >
                <template slot="selection" slot-scope="{ values, search, isOpen }">
                  <span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }}</span>
                </template>
              </multiselect>
              <span></span>
          </p>
          <pre class="language-json"></pre>
          <p class="sakeLotto-input">
            <label for="drinkDegree">度数</label>
            <input type="number" name="drinkDegree" id="drinkDegree" v-model="drinkDegree" placeholder="99" min="0">
            <span>度以下</span>
          </p>
        </div>
      </vue-aos>
    </form>
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
      errors:[],
      drinkNum:null,
      drinkDegree:null,
      drinkType: null,
      value: [],
      options: [
            { name: 'whiskey' },
            { name: 'wine' },
            { name: 'scotch' },
            { name: 'beer' },
            { name: 'shochu' },
            { name: 'sake' }
      ]
    }
  },
  methods:{
    checkForm: function(e) {
      if(this.drinkNum && this.drinkDegree) return true;
      this.errors = [];
      if(!this.drinkNum) this.errors.push("オーダー数を入力してください");
      if(!this.drinkDegree) this.errors.push("度数を入力してください");
      e.preventDefault();
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

.sakeLotto-result {
  clear: both;
  margin: 0 auto;
  max-width: 960px;
  width: 80%;
}
.sakeLotto-result .sakeLotto-result-wrap {
  margin: 40px auto;
}
.sakeLotto-result .sakeLotto-result-wrap .sakeLotto-result-item {
  position: relative;
  display: flex;
  align-items: center;
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
  background: #ffffff;
}
.sakeLotto-result .sakeLotto-result-wrap .sakeLotto-result-item:first-child {
  margin: 0 0 8px 0;
}
.sakeLotto-result-itemName {
  font-size: 18px;
  width: 60%;
  text-align: left;
}
.sakeLotto-result-itemType {
  font-size: 14px;
  width: 30%;
}
.sakeLotto-result-itemDegree {
  font-size: 14px;
  width: 10%;
}

.sakeLotto-options {
  clear: both;
  position: relative;
  box-sizing: border-box;
  max-width: 960px;
  width: 80%;
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
  margin: 12px 0;
  font-size: 14px;
}
.sakeLotto-options .sakeLotto-input label {
  font-size: 14px;
  width: 30%;
  text-align: left;
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
.sakeLotto-submit {
  box-sizing: border-box;
  width: 50%;
  appearance: none;
  margin: 20px auto;
  outline: none;
  font-size: 14px;
  padding: 8px;
  border: 1px solid #8f8f8f;
  border-radius: 4px;
  background: #ffffff;
}
.sakeLotto-error {
  margin: 8px 0;
}
.sakeLotto-error span {
  font-size: 18px;
  color: #333;
}

@media only screen and (max-width: 620px) {
  .sakeLotto-result {
    max-width: 88%;
  }
  .sakeLotto-options {
    margin: 40px auto;
    max-width: 88%;
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
    width: 30%;
  }
  .sakeLotto-result-itemDegree {
    font-size: 3vw;
    width: 10%;
  }
  .sakeLotto-result .sakeLotto-result-wrap .sakeLotto-result-item {
    flex-wrap: wrap;
  }
  .sakeLotto-share {
    width: 100%;
    margin: 12px 0 0 0;
  }
}
</style>
