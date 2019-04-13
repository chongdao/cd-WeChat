// pages/articleDetail/articleDetail.js

let articleApi = require('../../utils/api/article.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collected: '',
    article: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // var postId = options.id;
    // this.data.currentPostId = postId;
    // var postsCollected = wx.getStorageSync('posts_collected');
    // var post_collected = postsCollected[postId];
    // if (post_collected) {
    //   this.setData({
    //     collected: post_collected
    //   })
    // }

    let articleId = options.id;
    articleApi.getDetail(articleId).then(r => {
      this.setData({
        article: r.data
      })
    })
  },
  onCollectionTap: function() {
    var postsCollected = wx.getStorageSync('posts_collected');
    var postCollected = postsCollected[this.data.currentPostId];
    //收藏变成未收藏，未收藏变成收藏
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
    //更新文章是否的缓存值
    wx.setStorageSync('posts_collected', postsCollected);
    //更新数据绑定变量，从而实现切换图片
    this.setData({
      collected: postCollected
    });
    console.log(postCollected)
    wx.showToast({
      title: !postCollected ? "收藏成功" : "收藏取消",
      duration: 1000,
      icon: "sucess",
      make: true
    });
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    var that = this;
    // 设置菜单中的转发按钮触发转发事件时的转发内容
    var shareObj = {
      title: "转发的标题", // 默认是小程序的名称(可以写slogan等)
      path: '/pages/share/share', // 默认是当前页面，必须是以‘/’开头的完整路径
      imgUrl: '',
      success: function(res) {
        // 转发成功之后的回调
        if (res.errMsg == 'shareAppMessage:ok') {}
      },
      fail: function() {
        // 转发失败之后的回调
        if (res.errMsg == 'shareAppMessage:fail cancel') {
          // 用户取消转发
        } else if (res.errMsg == 'shareAppMessage:fail') {
          // 转发失败，其中 detail message 为详细失败信息
        }
      },
      complete: function() {
        // 转发结束之后的回调（转发成不成功都会执行）
      }
    };
    // 来自页面内的按钮的转发
    if (options.from == 'button') {
      var eData = options.target.dataset;
      // 此处可以修改 shareObj 中的内容
      shareObj.path = '/pages/articleDetail/articleDetail?id=' + that.data.currentPostId;
    }
    // 返回shareObj
    return shareObj;
  }
})