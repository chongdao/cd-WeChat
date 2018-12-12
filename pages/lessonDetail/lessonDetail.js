// pages/lessonDetail/lessonDetail.js
let http = require('../../utils/http.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [1, 2, 3],
    checkedStep: 0,
    backimg: 'http://pic.qiantucdn.com/58pic/22/72/01/57c6578859e1e_1024.jpg',

    courseInfo: {
      "id": "11",
      "courseName": "狗狗学做饭",
      "courseTitle": "做饭",
      "courseLengthTime": "15",
      "courseType": "2",
      "courseDesc": "狗狗学做饭",
      "courseLabel": "做饭",
      "courseCost": "20",
      "courseImage": "FASLAJSDIUQWHDKJASHDKJASDASD",
      "saleState": "1",
      "courseOrder": "1000",
      "trainerInfo": "范辉",
      "level": "3",
      "learningStep": "不知道",
      "learningTimes": "11",
      "JoinerCount": "1100",
      "creatTime": "2018-06-15",
      "creater": "范辉"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取课程信息
    // http.get('/ipet/course/queryCourseInfo.json', {
    //   "courseId": "1000000000001"
    // }).then(r => {
    //   this.setData({
    //     courseInfo: r.courseInfo
    //   })
    // })
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
  slideToggle: function(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      checkedStep: index
    })
  }
})