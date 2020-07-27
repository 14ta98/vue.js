new Vue({
  el: '#app',
  data: {
    // 現在日時
    current: new Date()
  },
  created: function() {
    let that = this;
    this.timer = setInterval(function() {
      that.current = new Date();
    }, 1000);
  },
  beforeDestroy: function() {
    clearInterval(this.timer);
  }
});
