let app = new Vue({
  el: '#app',
  data: {
    author: {
      name: '山田',
      // company: ''
    }
  },
  mounted: function() {
    Vue.set(this.author,'company','WINGSプロジェクト');
    // <div id="app">配下にcompanyプロパティの内容が含まれているか
    console.log(this.$el.textContent.includes(this.author.company));
  }
});