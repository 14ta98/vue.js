let app = new Vue({
  el: '#app',
  data: {
    author: {
      name: '山田',
      // company: ''
    }
  },
  created: function() {
    let that = this;
    
    this.timer = setTimeout(function() {
      // that.author.name = 'Y.YAMADA';
      // that.author.company = 'WINGSプロジェクト';
      // Vue.set(that.author, 'company', 'WINGSプロジェクト');
      // app.$set(that.author, 'company', 'WINGSプロジェクト');
      that.author = Object.assign({},that.author,{ company: 'WINGSプロジェクト', sex: 'male', age: 18});      
    }, 3000);
  },
  
  beforeDestroy: function() {
    clearInterval(this.timer);
  }
});