<template>
  <div class="sakeLotto-content">
    <h2>お酒を探す</h2>
    <form id="app" @submit="checkForm" action="/something" method="post">
      <div class="sakeLotto-options">
        <p>
          <input type="submit" value="ドリンクをお探しですか？">  
        </p>
        <p v-if="errors.length" class="sakeLotto-error">
          <span>以下の項目の入力が必要です</span>
          <ul>
            <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
          </ul>
        </p>
        <p class="sakeLotto-input">
          <label for="drinkNum">オーダー数</label>
          <input type="text" name="drinkNum" id="drinkNum" v-model="drinkNum">
          <span>杯</span>
        </p>
        <p class="sakeLotto-input">
          <label for="drinkType">ドリンク種類</label>
          <select name="drinkType" id="drinkType" v-model="drinkType">
            <option>Star Wars</option>
            <option>Vanilla Sky</option>
            <option>Atomic Blonde</option>
          </select>
        </p>
        <p class="sakeLotto-input">
          <label for="drinkDegree">度数</label>
          <input type="number" name="drinkDegree" id="drinkDegree" v-model="drinkDegree" min="0">
          <span>度以下</span>
        </p>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: 'SakeLottoMain',
  props: {
    msg: String
  },
  data() {
    return {
      errors:[],
      drinkNum:null,
      drinkDegree:null,
      drinkType:null
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
.sakeLotto-options {
  clear: both;
  position: relative;
  box-sizing: border-box;
  max-width: 50%;
  margin: 80px auto;
  padding: 24px 12px;
  border-radius: 4px;
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.5);
  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.5);
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
}
.sakeLotto-options .sakeLotto-input span {
  font-size: 12px;
}
.sakeLotto-error {
  margin: 8px 0;
}
.sakeLotto-error span {
  font-size: 18px;
  color: #333;
}
@media only screen and (max-width: 620px) {
  .sakeLotto-options {
    margin: 40px auto;
    max-width: 88%;
  }
  .sakeLotto-options .sakeLotto-input label {
    font-size: 12px;
  }
}
</style>
