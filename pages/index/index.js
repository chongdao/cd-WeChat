//index.js
//获取应用实例
const app = getApp()
var http = require('../../utils/http.js');

let api_lesson = require('../../utils/api/lesson.js')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    archivesList: [1],

    // 用户参加的课程
    userLessons: [],

    // 系列课程
    seriesLessons: []
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
    api_lesson.getUserLesson().then(r => {
      this.setData({
        userLessons: r.data.courseInfoList
      })
    })

    // 获取系列课程
    api_lesson.getSerialLesson().then(r => {
      this.setData({
        seriesLessons: r.data.courseInfoList
      })
    })
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})