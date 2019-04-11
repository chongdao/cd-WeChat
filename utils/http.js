const Promise = require('../libs/es6-promise.min');

const host = 'http://kairuida.net.cn/dpet-core';

const app = getApp();

//let host = 'http://39.96.46.173/dpet-core';

function requstGet(url, data) {
  return requst(url, 'GET', data)
}

function requstPost(url, data) {
  return requst(url, 'POST', data)
}

//封装Request请求方法
function requst(url, method, data = {}) {
  wx.showNavigationBarLoading();
  data.method = method;

  return new Promise((resove, reject) => {
    wx.request({
      url: host + url,
      data: data,
      header: {
        'x-auth-token': app.globalData.token
      },
      method: data.method.toUpperCase(), // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res) {
        wx.hideNavigationBarLoading()
        resove(res.data)
      },
      fail: function(msg) {
        console.log('reqest error', msg)
        wx.hideNavigationBarLoading()
        reject('fail')
      }
    })
  })
}

module.exports = {
  Promise,
  get: requstGet,
  post: requstPost,
  requst
}