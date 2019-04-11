//app.js
App({
  onLaunch: function() {
    var that = this;

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 获取授权信息
    wx.getSetting({
      success: res => {

        // 已经授权
        if (res.authSetting['scope.userInfo']) {

          // 获取用户微信信息
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo;

              // 由于异步，所以此处加入 callback 处理
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    token: ''
  }
})