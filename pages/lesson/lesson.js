// pages/lesson/lesson.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    lessonList: [1, 2, 3, 4, 5]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '课堂'
    })
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
    var that = this;
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中',
    })
    var page = that.data.page;
    // 页数+1
    page = page + 1;
    wx.request({
      url: 'https://xxx/?page=' + page,
      method: "GET",
      // 请求头部
      header: {
        'content-type': 'application/text'
      },
      success: function (res) {
        // 回调函数
        var lessonList = that.data.lessonList;

        for (var i = 0; i < res.data.data.length; i++) {
          lessonList.push(res.data.data[i]);
        }
        // 设置数据
        that.setData({
          page: page,
          lessonList: lessonList
        });
        // 隐藏加载框
        wx.hideLoading();
      }
    })

  },
  bindViewDrill: function (e) {
    if (e.currentTarget.dataset.checked) {
      wx.navigateTo({
        url: '../drill/drill'
      })
    }
    else {
      wx.navigateTo({
        url: '../lessonDetail/lessonDetail'
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})