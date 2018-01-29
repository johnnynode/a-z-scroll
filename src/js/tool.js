(function(w) {
  // 构造函数
  var Tool = function () {
    // 字母表
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  }
  // 原型
  Tool.prototype = {
    sortByAlphabet: function(arr, field) {
        // 根据 field 添加
        var res = [];
        for (var i = 0; i < this.alphabet.length; i++) {
            var resItem = []; // 单项的字母数组
            var item = this.alphabet[i]; // 单项字母
            for (var j = 0; j < arr.length; j++) {
                var one = arr[j];
                one.type = one[field].slice(0, 1).toLowerCase();
                one.field = one[field];
                (one.type === item) && resItem.push(one);
            }
            resItem.length && res.push(resItem);
        }
        return res;
    },
    /* 悬浮导航的字母过滤 */
    getTopCateFixedLetter: function(arr) {
        var res = [];
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i][0].type.toUpperCase();
            // 构建单个对象
            var json = {
                archor: 'top' + i,
                type: item
            };
            res.push(json);
        }
        return res;
    }
  }

  window.tool = new Tool();
})(window);