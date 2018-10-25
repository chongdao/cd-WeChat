// pages/variety/variety.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus: false,
    val: '',
    list: [
      { 
        id: 1, 
        title: '热门品种', 
        list: [
          { 
            name: '阿拉斯加', 
            src: '', 
          },
          {
            name: '阿拉斯加',
            src: '',
          },
          {
            name: '阿拉斯加',
            src: '',
          },
          {
            name: '阿拉斯加',
            src: '',
          },
        ],
      },
      {
        id: 2,
        title: 'A',
        list: [
          {
            name: '阿拉斯加',
            src: '',
          },
          {
            name: '阿拉斯加',
            src: '',
          },
          {
            name: '阿拉斯加',
            src: '',
          },
          {
            name: '阿拉斯加',
            src: '',
          },
        ],
      },
      {
        id: 3,
        title: 'B',
        list: [
          {
            name: '阿拉斯加',
            src: '',
          },
          {
            name: '阿拉斯加',
            src: '',
          },
          {
            name: '阿拉斯加',
            src: '',
          },
          {
            name: '阿拉斯加',
            src: '',
          },
        ],
      },
      {
        id: 4,
        title: 'C',
        list: [
          {
            name: '阿拉斯加',
            src: '',
          },
          {
            name: '阿拉斯加',
            src: '',
          },
          {
            name: '阿拉斯加',
            src: '',
          },
          {
            name: '阿拉斯加',
            src: '',
          },
        ],
      },
    ],
    nav: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#"],
    toView: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  setFocus: function () {
    this.setData({
      focus: !this.data.focus,
      val: ''
    })
  },
  search: function (e) {
    console.log(e.detail.value)
  },
  toView: function (e) {
    let i = parseInt(e.currentTarget.dataset.i) + 2;
    this.setData({
      toView: i
    })
  },
  checkedBack: function (e) {
    wx.navigateTo({
      url: '' + e.currentTarget.dataset.id,
    })
  }
})