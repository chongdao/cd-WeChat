// pages/feedback/feedback.js

let sysApi = require('../../utils/api/system.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    fdoption: '',
    fdtel: '',
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
  inputeidt: function(e) {
    let name = e.currentTarget.dataset.name;
    if (name == "fdoption") {
      this.setData({
        fdoption: e.detail.value
      })
    }
    if (name == "fdtel") {
      this.setData({
        fdtel: e.detail.value
      })
    }
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
      url: '',
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

  submit: function() {
    sysApi.feedback(this.data.fdtel, this.data.fdoption).then(r => {
      wx.showToast({
        title: r.message,
        icon: r.message === '操作成功' ? 'success' : 'error',
        duration: 2000
      })
    })
  }
})