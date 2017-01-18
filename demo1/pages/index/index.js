
//获取应用实例
var app = getApp()
Page({
  data: {
    phone: '',
    password: '',
  },
  listenerLogin: function() {

  //打印收入账号和密码
    console.log('手机号为: ', this.data.phone);
    console.log('密码为: ', this.data.password);
    if(this.data.phone =='' || this.data.password=='') {
      wx.showModal({
        title: '提示',
        content: '输入用户名和密码',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
      // wx.showToast({
      // title: '输入用户名密码',
      // icon: 'warn',
      // duration: 2000
      // })
      return
    }
    wx.navigateTo({
      url: '../component/component'
    })
  },
    /**
   * 监听手机号输入
   */
  listenerPhoneInput: function(e) {
      this.data.phone = e.detail.value;

  },

  /**
   * 监听密码输入
   */
  listenerPasswordInput: function(e) {
      this.data.password = e.detail.value;
  },
  // 当程序启动完成展示给用户之后，从后台切换到前台会再次调用
  onShow: function() {
    console.log('index程序启动完成我会被调用')

  },

  onHide:function () {
    console.log('index程序进入后台我会被调用')
  },
})

