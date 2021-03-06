//index.js
//获取应用实例
const app = getApp()
var http = require('../../utils/http.js');

let lessonApi = require('../../utils/api/lesson.js');
let userApi = require('../../utils/api/user.js');
let util = require('../../utils/util.js');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    archivesList: [1],

    // 宠物档案
    petInfo: null,

    // 用户参加的课程
    userLessons: [],

    // 系列课程
    seriesLessons: [],
    // 散课（训练）
    scatteredLessons: []
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
    let lessonId = e.currentTarget.dataset.id;
    if (e.currentTarget.dataset.checked) {
      wx.navigateTo({
        url: `../drill/drill?lessonId=${lessonId}`
      })
    } else {
      wx.navigateTo({
        url: `../lessonDetail/lessonDetail?lessonId=${lessonId}`
      })
    }
  },
  bindViewLeslist: function() {
    wx.navigateTo({
      url: '../lessonList/lessonList'
    })
  },
  onLoad: function() {

    // 获取用户信息
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    let that = this,
      token = wx.getStorageSync('token');
    // token 不存在，则重新请求token
    if (token) {
      loadData();
    } else {
      // 获取临时code
      wx.login({
        success: res => {
          // 获取登录后的token
          wx.request({
            url: 'http://kairuida.net.cn/dpet-core/login/code2Session',
            data: {
              code: res.code
            },
            success(res) {
              if (res.data) {
                wx.setStorageSync('token', res.data.data['x-auth-token']);
                loadData();
              }
            }
          })
        }
      })
    }

    /**
     * 获取首页所有数据
     */
    function loadData() {
      // 宠物档案
      userApi.getMyPet().then(r => {

        let pet = r.data.petInfo;
        let now = new Date();
        let birthday = new Date(pet.petBrithday);
        let intervalMonth = util.getIntervalMonth(birthday, now);

        let year = Math.floor(intervalMonth / 12);
        let month = intervalMonth % 12;
        pet.old = year > 0 ? year + '年' : '' + month == 0 ? '整' : month + '个月';

        that.setData({
          petInfo: pet
        })
      });

      // 获取用户已参加课程
      userApi.getUserLesson(1, 2).then(r => {
        that.setData({
          userLessons: r.data.courseInfoList
        })
      });

      // 获取系列课程
      lessonApi.getSeries(1, 2).then(r => {
        that.setData({
          seriesLessons: r.data.courseInfoList
        })
      });

      // 获取散课（训练）
      lessonApi.getScatteredLesson(1, 3).then(r => {
        that.setData({
          scatteredLessons: r.data.courseInfoList
        })
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getPhoneNumber: function(e) {
    if (e.detail.iv) {
      apiUser.bindWXPhoneNumber({
        encrypted_data: e.detail.encryptedData,
        encrypt_iv: e.detail.iv
      }).then((res) => {
        if (res.code) {
          wx.showToast({
            title: '绑定成功'
          });
        } else {
          // do something
          wx.showModal({
            title: '绑定失败',
            content: '[服务端返回的错误信息]',
            showCancel: false,
            success: res => {
              if (res.confirm) { // 用户确认后
                // do something
              }
            }
          })
        }
      })
    } else { // 用户拒绝授权
      // do something
    }
  }
})