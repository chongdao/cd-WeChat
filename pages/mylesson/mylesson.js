// pages/mylesson/mylesson.js

let apiUser = require('../../utils/api/user.js')
let util = require('../../utils/util.js')

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
    apiUser.getUserLesson().then(r => {
      let list = r.data.courseInfoList;
      list.forEach(i => {
        let d = new Date(i.createTime);
        i.createTime = util.formatDate(d);
      })
      this.setData({
        lessonList: list
      });
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
    apiUser.getUserLesson(page + 1).then(r => {
      // 新数据
      let newList = r.data.courseInfoList;
      newList.forEach(i => {
        let d = new Date(i.createTime);
        i.createTime = util.formatDate(d);
      })

      // 追加数组
      that.setData({
        page: page + 1,
        lessonList: [...that.data.lessonList, ...newList]
      });
      // 隐藏加载框
      wx.hideLoading();
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  bindViewDrill: function(e) {
    let lessonId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../drill/drill?lessonId=${lessonId}`
    })
  },
  addLesson: function() {
    wx.navigateTo({
      url: '../lesson/lesson'
    })
  }
})