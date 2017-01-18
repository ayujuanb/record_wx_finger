var app = getApp()
Page({
    data: {
        userInfo: {},
        item: {
	      index: 0,
	      msg: 'this is a template',
	      time: '2016-09-15'
    	}
    },
    onLoad: function () {
        // wx.showNavigationBarLoading();
        var _self = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            _self.setData({
                userInfo:userInfo
            })
        })
    },
       // 当程序启动完成展示给用户之后，从后台切换到前台会再次调用
  onShow: function() {
    console.log('me程序启动完成我会被调用')
  },
  onHide:function () {
    console.log('me程序进入后台我会被调用')
  },
})