new Vue({
    el: '#app',
    data: {
        email: 'Y-Suzuki@example.com'
    },
    // emailプロパティの値を加工するlocalEmailメソッドを定義
    methods: {
        localEmail: function() {
            return this.email.split('@')[0].toLowerCase();
        }
    }
});