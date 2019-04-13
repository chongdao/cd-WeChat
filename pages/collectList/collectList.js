// pages/collectList/collectList.js
let userApi = require('../../utils/api/user.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    articleList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    userApi.getCollectArticles().then(r => {
      this.setData({
        articleList: r.data.articles
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
    userApi.getCollectArticles(page + 1).then(r => {
      // 追加数组
      that.setData({
        page: page + 1,
        articleList: [...that.data.articleList, ...r.data.articles]
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
  bindviewDetail: function(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../articleDetail/articleDetail?id=' + id
    })
  },
})