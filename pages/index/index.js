//index.js
//获取应用实例
const app = getApp()
var http = require('../../utils/http.js');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    archivesList: [1],

    // 用户课程
    userLessons: [{
        "id": "11",
        "courseName": "狗狗学做饭-1",
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
      },
      {
        "id": "12",
        "courseName": "狗狗学做饭-2",
        "courseTitle": "做饭",
        "courseLengthTime": "10",
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
      },
      {
        "id": "13",
        "courseName": "狗狗学做饭-3",
        "courseTitle": "做饭",
        "courseLengthTime": "20",
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
    ],

    // 系列课程
    seriesLessons: [{
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
      },
      {
        "id": "12",
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
      },
      {
        "id": "13",
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
    ]
  },
  //事件处理函数
  bindViewLesson: function() {
    wx.navigateTo({
      url: '../lesson/lesson'
    })
  },
  bindViewDossier: function() {
    wx.navigateTo({
      url: '../dossier/dossier'
    })
  },
  bindViewDrill: function(e) {
    if (e.currentTarget.dataset.checked) {
      wx.navigateTo({
        url: '../drill/drill'
      })
    } else {
      wx.navigateTo({
        url: '../lessonDetail/lessonDetail'
      })
    }
  },
  bindViewLeslist: function() {
    wx.navigateTo({
      url: '../lessonList/lessonList'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    // 获取用户已参加课程
    // http.get('/ipet/course/subscribeCourse.json').then(r => {
    //   this.setData({
    //     userLessons: r.courseListInfo
    //   })
    // })

    // 获取系列课程
    // http.get('/ipet/course/queryCourse.json', {
    //   courseType: '1'
    // }).then(r => {
    //   this.setData({
    //     seriesLessons: r.courseListInfo
    //   })
    // })
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})