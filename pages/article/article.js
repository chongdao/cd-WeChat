// pages/article/article.js
var http = require('../../utils/http.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList: [
      {
        "id": "11",
        "articleName": "狗狗学做饭",
        "articlePicUrl": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=180632857,1070739067&fm=173&app=49&f=JPEG?w=640&h=428&s=57F639C4A0232D157519D9190300C0D1",
        "articleContent": "狗狗学做饭",
        "readCount": "2111",
        "collCount": "112",
        "articletitle": "做饭",
        "articleOrder": "112",
        "createTime": "2018-09-15",
        "createrIcon": "/images/default.png",
        "createrName": "宠到科技",
        "createrId": "112123123",
        "isCollect": false
      },
      {
        "id": "11",
        "articleName": "狗狗学做饭",
        "articlePicUrl": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=180632857,1070739067&fm=173&app=49&f=JPEG?w=640&h=428&s=57F639C4A0232D157519D9190300C0D1",
        "articleContent": "狗狗学做饭",
        "readCount": "2111",
        "collCount": "112",
        "articletitle": "做饭",
        "articleOrder": "112",
        "createTime": "2018-09-15",
        "createrId": "112123123",
        "createrIcon": "/images/default.png",
        "createrName": "宠到科技",
        "isCollect": false
      },
      {
        "id": "11",
        "articleName": "狗狗学做饭",
        "articlePicUrl": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=180632857,1070739067&fm=173&app=49&f=JPEG?w=640&h=428&s=57F639C4A0232D157519D9190300C0D1",
        "articleContent": "狗狗学做饭",
        "readCount": "2111",
        "collCount": "112",
        "articletitle": "做饭",
        "articleOrder": "112",
        "createTime": "2018-09-15",
        "createrIcon": "/images/default.png",
        "createrName": "宠到科技",
        "createrId": "112123123",
        "isCollect": true
      }
    ],
    page: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '文章'
    });
    var _this = this;
    // http.get('/pet/article/articleList', {
    //   page: _this.data.page
    // }).then(function (res) {
    //   _this.setData({
    //     articleList
    //   })
    // })
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
    var _this = this;
    var pagenum = _this.data.page + 1;
    http.get('/pet/article/articleList', {
      page: pagenum
    }).then(function (res) {
      if (res.respCode === "0000"){
        var datalist = _this.data.articleList.concat(res.articleListInfo);
        _this.setData({
          articleList: datalist,
          page: pagenum
        })
      }
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  bindviewDetail: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../articleDetail/articleDetail?id=' + id
    })
  },
  bindcollCount: function (e) {
    var index = e.currentTarget.dataset.index;
    // data中获取列表
    var message = this.data.articleList;
    for (let i in message) { //遍历列表数据
      if (i == index) { //根据下标找到目标
        var collectStatus = false
        if (message[i].isCollect == false) { //如果是没点赞+1
          collectStatus = true
          message[i].isCollect = true;
        } else {
          collectStatus = false
          message[i].isCollect = false
        }
        wx.showToast({
          title: collectStatus ? '收藏成功' : '取消收藏',
        })
      }
    }
    this.setData({
      articleList: message
    })
  }
})