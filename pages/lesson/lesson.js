// pages/lesson/lesson.js
let lessonApi = require('../../utils/api/lesson.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    lessonList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '课堂'
    });
    lessonApi.getSeries().then(r => {
      this.setData({
        lessonList: r.data.courseInfoList
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    let that = this;
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中',
    });

    let page = that.data.page;
    lessonApi.getSeries(page + 1).then(r => {
      // 追加数组
      that.setData({
        page: page + 1,
        lessonList: [...that.data.lessonList, ...r.data.courseInfoList]
      });
      // 隐藏加载框
      wx.hideLoading();
    })
  },
  bindViewDrill: function(e) {
    if (e.currentTarget.dataset.checked) {
      wx.navigateTo({
        url: '../drill/drill'
      })
    } else {
      let lessonId = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: `../lessonDetail/lessonDetail?lessonId=${lessonId}`
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})