// pages/orders/orders.js
let apiOrder = require('../../utils/api/order.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeTab: 0,
    orderList: [1, 2, 3],
    payready: false,
    pageNum: 0
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
    let that = this;
    wx.showLoading({
      title: '玩命加载中',
    });
    let datalist = that.data.orderList;
    apiOrder.getOrderList({
      pageNum: that.data.pageNum + 1,
      pageSize: 10
    }).then((res) => {
      wx.hideLoading();
      if(res.code) {
        wx.showToast({
          title: res.message
        });
        return false;
      }
      let list = that.data.orderList.concat(res.data.orders)
      that.setData({
        orderList: list,
        pageNum: res.data.pageNum
      });
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getOrderList: function () {
    let that = this;
    apiOrder.getOrderList({
      pageNum: that.data.pageNum,
      pageSize: 10
    }).then((res) => {
      that.setData({
        orderList: res.data
      });
    })
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
    apiOrder.payMent({
      orderId: 'b6d009c2acd142bf8653b529c662f5a6',
    }).then((res) => {
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
    })
  }
})