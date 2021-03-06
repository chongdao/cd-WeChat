// pages/article/article.js

let articleApi = require('../../utils/api/article.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList: [],
    page: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '文章'
    });

    articleApi.getList()
      .then(r => {
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
    articleApi.getList(page + 1).then(r => {
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
  bindcollCount: function(e) {

    let articleId = e.currentTarget.dataset.aid;
    let article = this.data.articleList.find(i => i.id === articleId);

    if (article.isCollect) {
      articleApi.unCollect(articleId).then(r => {
        wx.showToast({
          title: '取消收藏'
        });
        article.isCollect = false;
        article.collCount--;
      })
    } else {
      articleApi.collect(articleId).then(r => {
        wx.showToast({
          title: '收藏成功'
        });
        article.isCollect = true;
        article.collCount++;
      })
    }
  }
})