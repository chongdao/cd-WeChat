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

})