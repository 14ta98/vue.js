let app = new Vue({
    el: '#app',
    data: {
        email: 'Y-Suzuki@example.com'
    },
    // 既存のプロパティを演算（算出）した結果を取得するためのゲッター
    computed: {
        localEmail: function() {
            return this.email.split('@')[0].toLowerCase();
        }
    }
});