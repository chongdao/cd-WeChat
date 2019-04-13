// pages/variety/variety.js
let api = require('../../utils/api/pet.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus: false,
    val: '',
    list: [],
    // list: [{
    //     id: 1,
    //     title: '热门品种',
    //     list: [{
    //         name: '阿拉斯加',
    //         id: 123,
    //         src: '/images/default.png',
    //       },
    //       {
    //         id: 123,
    //         name: '阿拉斯加',
    //         src: '/images/default.png',
    //       },
    //       {
    //         id: 123,
    //         name: '阿拉斯加',
    //         src: '/images/default.png',
    //       },
    //       {
    //         id: 123,
    //         name: '阿拉斯加',
    //         src: '/images/default.png',
    //       },
    //     ],
    //   },
    //   {
    //     id: 2,
    //     title: 'A',
    //     list: [{
    //         id: 123,
    //         name: '阿拉斯加',
    //         src: '/images/default.png',
    //       },
    //       {
    //         id: 123,
    //         name: '阿拉斯加',
    //         src: '/images/default.png',
    //       },
    //       {
    //         id: 123,
    //         name: '阿拉斯加',
    //         src: '/images/default.png',
    //       },
    //       {
    //         id: 123,
    //         name: '阿拉斯加',
    //         src: '/images/default.png',
    //       },
    //     ],
    //   },
    //   {
    //     id: 3,
    //     title: 'B',
    //     list: [{
    //         id: 123,
    //         name: '阿拉斯加',
    //         src: '/images/default.png',
    //       },
    //       {
    //         id: 123,
    //         name: '阿拉斯加',
    //         src: '/images/default.png',
    //       },
    //       {
    //         id: 123,
    //         name: '阿拉斯加',
    //         src: '/images/default.png',
    //       },
    //       {
    //         id: 123,
    //         name: '阿拉斯加',
    //         src: '/images/default.png',
    //       },
    //     ],
    //   },
    //   {
    //     id: 4,
    //     title: 'C',
    //     list: [{
    //         id: 123,
    //         name: '阿拉斯加',
    //         src: '/images/default.png',
    //       },
    //       {
    //         id: 123,
    //         name: '阿拉斯加',
    //         src: '/images/default.png',
    //       },
    //       {
    //         id: 123,
    //         name: '阿拉斯加',
    //         src: '/images/default.png',
    //       },
    //       {
    //         id: 123,
    //         name: '阿拉斯加',
    //         src: '/images/default.png',
    //       },
    //     ],
    //   },
    // ],
    nav: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#"],
    toView: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    api.getTypes().then(r => {
      this.setData({
        list: r.data.petTypeList
      });
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
  setFocus: function() {
    this.setData({
      focus: !this.data.focus,
      val: ''
    })
  },
  search: function(e) {
    console.log(e.detail.value)
  },
  toView: function(e) {
    let i = parseInt(e.currentTarget.dataset.i) + 2;
    this.setData({
      toView: i
    })
  },
  checkedBack: function(e) {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; //当前页面
    var prevPage = pages[pages.length - 2]; //上一个页面
    prevPage.setData({
      "petInfo.petType": e.currentTarget.dataset.id,
      'petInfo.petTypeName': e.currentTarget.dataset.name
    });
    wx.navigateBack();
  }
})