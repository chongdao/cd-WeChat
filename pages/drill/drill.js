// pages/drill/drill.js

let lessonApi = require('../../utils/api/lesson.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isbegin: false,
    category: 'list',
    dataList: [1, 2, 3],
    checkedStep: 0,
    detailStep: [1, 2],
    backimg: 'http://pic.qiantucdn.com/58pic/22/72/01/57c6578859e1e_1024.jpg',

    courseInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    lessonApi.getLessonInfo(options.lessonId).then(r => {
      this.setData({
        courseInfo: r.data.courseInfo
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  changeCategory: function(e) {
    console.log(122)
    this.setData({
      category: e.currentTarget.dataset.type
    })
  },
  bindbeginStudy: function() {
    // console.log(122)
    this.setData({
      isbegin: true,
    })
  },
  slideToggle: function(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      checkedStep: index
    })
  },
})