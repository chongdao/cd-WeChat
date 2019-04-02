// pages/orders/orders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeTab: 0,
    orderList: [1, 2, 3],
    payready: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  changeTab:function (e) {
    this.setData({
      activeTab: e.currentTarget.dataset.index
    });
  },
  gopay: function (e) {
    this.setData({
      payready: true
    })
  },
  hidepanel: function (e) {
    this.setData({
      payready: false
    })
  }, 
  preventhide: function (e) {
    return false;
  },
  //禁止滑动
  disMove: function () {
  },
  confirmTopay: function() {
    wx.request({
      //我把文件夹名改为了wxpayapi,SERVER_PATH为服务器的域名
      url: 'http://39.96.46.173/dpet-core/ipet/orderinfo/payment',
      data: {
        
        orderId:'b6d009c2acd142bf8653b529c662f5a6',
      },
      header: {
        'content-type': 'application/json', // 默认值
        'x-auth-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Nzc2MzUyMDAwMDAsInVzZXJfaW5mbyI6IntcImlkXCI6XCIxMjM0NTZcIixcInByb3ZpZGVyS2V5XCI6XCJhc2Rhc2RcIixcInJvbGVfa2V5XCI6XCIxMTAyXCJ9In0.0a2_sMVAbtDGXyIotG7IiHBJRqZtgijqiRNrd-jBVk0',
      },
      success: function (res) {
        console.log(res.data);
        var data = res.data;
        wx.requestPayment({
          'timeStamp': data.timeStamp,
          'nonceStr': data.nonceStr,
          'package': data.package,
          'signType': 'MD5',
          'paySign': data.paySign,
          'success': function (res) {
            console.log("支付成功！")
          },
          'fail': function (res) {
          }
        })
      }
    })
  }
})