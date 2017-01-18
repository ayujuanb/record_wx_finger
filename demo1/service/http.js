var rootDocment = '';//你的域名  
function req(setting){  
    wx.request({  
      url: rootDocment + setting.url,  
      data: setting.data, 
      method: setting.type || 'GET',  
      header: {'Content-Type': 'application/json'},  
      success: function(res){  
        return typeof setting.success == "function" && setting.success(res.data)  
      },  
      fail: function(res){  
        return typeof setting.fail == "function" && setting.fail(res)  
      }  
    })  
}  
  
  
module.exports = {  
  req: req  
}