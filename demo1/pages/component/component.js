// 网页吗注册5个slider方法
var pageData1 = {}
for (var i = 1; i < 5; i++) {
  (function (index) {
    pageData1['slider' + index + 'change'] = function(e) {
      console.log('slider' + 'index' + '发生 change 事件，携带值为', e.detail.value)
    }
  })(i)
}
//获取应用实例
var app = getApp()
var pageData2 = {
  data: {
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
  },
  switch1Change: function (e){
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  switch2Change: function (e){
    console.log('switch2 发生 change 事件，携带值为', e.detail.value)
  },

}
var pageData = Object.assign(pageData1, pageData2);
Page(pageData)
