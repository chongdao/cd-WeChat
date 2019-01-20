// pages/dossier/dossier.js
var util = require('../../utils/util.js');
let api = require('../../utils/api/pet.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    sex: 'gg',
    vaccinum: 0,
    anthelmintic: 0,
    sterilization: 0,

    // 宠物品种
    variety: {
      id: '',
      name: ''
    },
    brithday: util.formatDate(new Date()),
    homeday: util.formatDate(new Date()),
    "petWeight": '',
    "petHeight": '',
    "petLength": '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
      url: '/ipet/petInfo/upLoadPetImage.json',
      filePath: img,
      name: 'uploadfile_ant',
      formData: {
        'imgIndex': i
      },
      header: {
        "Content-Type": "multipart/form-data"
      },
      success: function(res) {},
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
      brithday: e.detail.value
    })
  },
  bindChangeHomeday(e) {
    this.setData({
      homeday: e.detail.value
    })
  },
  bindCheckChange: function(e) {
    let ty = e.currentTarget.dataset.type;
    let inx = e.currentTarget.dataset.index;
    if (ty == 'vc') {
      this.setData({
        vaccinum: inx
      })
    }
    if (ty == 'an') {
      this.setData({
        anthelmintic: inx
      })
    }
    if (ty == 'st') {
      this.setData({
        sterilization: inx
      })
    }
  },
  bindChangeName(e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindChangeSex(e) {
    this.setData({
      sex: e.currentTarget.dataset.sex
    })
  },
  bindChangeWeight(e) {
    this.setData({
      petWeight: e.detail.value
    })
  },
  bindChangeHeight(e) {
    this.setData({
      petHeight: e.detail.value
    })
  },
  bindChangeLength(e) {
    this.setData({
      petLength: e.detail.value
    })
  },

  /**
   * 提交
   */
  submit() {
    let pet = {
      "petName": this.data.name,
      "petType": this.data.variety.id,
      "petSex": this.data.sex == 'gg' ? 1 : 2,
      "petBrithday": this.data.brithday,
      "homeDay": this.data.homeday,
      "petWeight": this.data.petWeight,
      "petHeight": this.data.petHeight,
      "petLength": this.data.petLength,
      "anthelminticCondition": this.data.anthelmintic,
      "sterilizationCondition": this.data.sterilization,
      "vaccineCondition": this.data.vaccinum
    };
    api.uploadInfo(pet).then(r => {
      wx.showToast({
        title: r.message,
        icon: r.message === '操作成功' ? 'success' : 'error',
        duration: 2000
      })
    })
  }
})