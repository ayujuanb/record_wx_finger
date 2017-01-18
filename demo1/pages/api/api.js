var my_data = require('../../service/data.js')

//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    result:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    // 在开发者配置页面配置合法的请求域名
    app.func.req({
      url:'http://gank.io/api/data/Android/30/1',
      type:'GET',
      success:function(res) {
        console.log(res)
        that.setData({
          result: res.results
        })
      },
      fail:function(error) {
        console.log(error)
        // 先模拟一下接口数据
        that.setData({
          result: my_data.default.results
        })
      }
    })
  },
      // 当程序启动完成展示给用户之后，从后台切换到前台会再次调用
  onShow: function() {
    console.log('api程序启动完成我会被调用')
  },
  onHide:function () {
    console.log('api程序进入后台我会被调用')
  },
})
