$(function () {
  var Page = function() {};
  // 原型
  Page.prototype = {
    init:function () {
      console.log('init');

      $.get('/data/json.json', function (data) {
        if (!data) {
            return;
        }
        
        console.log(data);
    });

    }
  }

  var page = new Page();
  page.init(); // 页面初始化
});