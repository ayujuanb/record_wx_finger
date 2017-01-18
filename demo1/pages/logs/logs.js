//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    temp: '我是变量'
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log) => {
        console.log(this.data.temp)
        return util.formatTime(new Date(log))
      })
    })
  }
})
