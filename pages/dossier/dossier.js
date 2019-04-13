// pages/dossier/dossier.js
var util = require('../../utils/util.js');
let api = require('../../utils/api/pet.js');
let userApi = require('../../utils/api/user.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    petInfo: {
      "petName": '',

      // 种类id
      "petType": '',

      // 种类名称
      'petTypeName': '',

      "petSex": 1,
      "petBrithday": util.formatDate(new Date()),
      "homeDay": util.formatDate(new Date()),
      "petWeight": 0,
      "petHeight": 0,
      "petLength": 0,
      "anthelminticCondition": 0,
      "sterilizationCondition": 0,
      "vaccineCondition": 0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取我的宠物档案
    userApi.getMyPet().then(r => {
      this.setData({
        petInfo: r.data.petInfo
      })
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

  },
  selectVariety: function() {
    wx.navigateTo({
      url: '../variety/variety'
    })
  },
  uploadimg: function() {
    var that = this;
    wx.showActionSheet({
      itemList: ["从相册中选择", "拍照"],
      itemColor: "#f7982a",
      success: function(res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage("album");
          } else if (res.tapIndex == 1) {
            that.chooseWxImage("camera");
          }
        }
      }
    })
  },
  chooseWxImage: function(type) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: [type],
      success: function(res) {
        var addimg = res.tempFilePaths;
        that.upload(addimg[0]);
      }
    })
  },
  upload: function(img) {
    wx.showToast({
      title: '正在上传...',
      icon: 'loading',
      mask: true,
      duration: 10000
    })
    wx.uploadFile({
      url: 'http://kairuida.net.cn/dpet-core/ipet/petimage/upLoadPetImage',
      filePath: img,
      name: 'uploadfile_ant',
      header: {
        "Content-Type": "multipart/form-data"
      },
      success: function(res) {
        wx.showToast({
          title: '上传成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function(res) {
        wx.hideToast();
        wx.showModal({
          title: '错误提示',
          content: '上传图片失败',
          showCancel: false,
          success: function(res) {}
        })
      }
    });
  },
  bindDateChange: function(e) {
    this.setData({
      'petInfo.petBrithday': e.detail.value
    })
  },
  bindChangeHomeday(e) {
    this.setData({
      'petInfo.homeDay': e.detail.value
    })
  },
  bindCheckChange: function(e) {
    let ty = e.currentTarget.dataset.type;
    let inx = e.currentTarget.dataset.index;
    if (ty == 'vc') {
      this.setData({
        'petInfo.vaccineCondition': inx
      })
    }
    if (ty == 'an') {
      this.setData({
        'petInfo.anthelminticCondition': inx
      })
    }
    if (ty == 'st') {
      this.setData({
        'petInfo.sterilizationCondition': inx
      })
    }
  },
  bindChangeName(e) {
    this.setData({
      'petInfo.petName': e.detail.value
    })
  },
  bindChangeSex(e) {
    this.setData({
      'petInfo.petSex': e.currentTarget.dataset.sex
    })
  },
  bindChangeWeight(e) {
    this.setData({
      'petInfo.petWeight': e.detail.value
    })
  },
  bindChangeHeight(e) {
    this.setData({
      'petInfo.petHeight': e.detail.value
    })
  },
  bindChangeLength(e) {
    this.setData({
      'petInfo.petLength': e.detail.value
    })
  },

  /**
   * 提交
   */
  submit() {
    api.uploadInfo(this.data.petInfo).then(r => {
      wx.showToast({
        title: r.message,
        icon: r.message === '操作成功' ? 'success' : 'error',
        duration: 2000
      })

      wx.navigateTo({
        url: '../index/index'
      })
    })
  }
})