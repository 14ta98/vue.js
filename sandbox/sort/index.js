Vue.component("custom-thead", {
  props: ["headertitlelist", "list"],
  template: `<thead>
                <tr>
                 <custom-th v-for="title in headertitlelist" :title="title.title" :sortFilterAttribute="title.sort" :key="title.title" v-on:sortEvent="sortColumn"></custom-th>
                </tr>
               </thead>`,

  methods: {
    sortColumn: function (title) {
      let targetColumn = this.headertitlelist.filter(function (item, index) {
        if (item.title == title) return true;
      });

      if (targetColumn[0].sort == 0 || targetColumn[0].sort == 2) {
        sortAsc(this.list, title);
        targetColumn[0].sort = 1;
      } else {
        sortDesc(this.list, title);
        targetColumn[0].sort = 2;
      }
    },
  },
});

Vue.component("custom-tbody", {
  props: ["list"],
  template: `<tbody>
                 <custom-td v-for="record in list" :record="record" :key="record.id"></custom-td>
               </tbody>`,
});

Vue.component("custom-th", {
  props: ["title", "sortFilterAttribute"],
  template: `<th scope="col">{{ title }}
                 <a href="#" v-on:click="sort">
                  <i v-show="sortFilterAttribute == 2" class="material-icons">arrow_drop_down</i>
                  <i v-show="sortFilterAttribute == 1" class="material-icons">arrow_drop_up</i>
                  <i v-show="sortFilterAttribute == 0" class="material-icons">sort</i>
                </a>
               </th>`,

  methods: {
    sort: function () {
      // 親コンポーネントのソートメソッドを呼び出す
      this.$emit("sortEvent", this.title);
    },
  },
});

Vue.component("custom-td", {
  props: ["record"],
  template: `<tr>
                 <td v-for="val in record">{{ val }}</td>
               </tr>`,
});

new Vue({
  el: "#sortableTable",
  data: {
    headertitlelist: [
      { title: "id", sort: 0 },
      { title: "testA", sort: 0 },
      { title: "testB", sort: 0 },
      { title: "testC", sort: 0 },
      { title: "testD", sort: 0 },
      { title: "testE", sort: 0 },
    ],

    list: [
      {
        id: "3",
        testA: "aaaaa",
        testB: "bbbb",
        testC: "ccc",
        testD: "ddddd",
        testE: "ljh",
      },
      {
        id: "4",
        testA: "sdh",
        testB: "bbsdfhabb",
        testC: "sd",
        testD: "dgla",
        testE: "egve",
      },
      {
        id: "1",
        testA: "bgf",
        testB: "w",
        testC: "hsdf",
        testD: "lkh",
        testE: "fsee",
      },
      {
        id: "2",
        testA: "aaaaa",
        testB: "bbbb",
        testC: "ccc",
        testD: "aa",
        testE: "esde",
      },
      {
        id: "5",
        testA: "bdsaa",
        testB: "dbsb",
        testC: "vc",
        testD: "hra",
        testE: "esde",
      },
    ],
  },
});

// 昇順ソート関数
function sortAsc(list, key) {
  list.sort(function (a, b) {
    let x = a[key];
    let y = b[key];
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  });
}

// 降順ソート関数
function sortDesc(list, key) {
  list.sort(function (a, b) {
    let x = a[key];
    let y = b[key];
    if (x > y) return -1;
    if (x < y) return 1;
    return 0;
  });
}
