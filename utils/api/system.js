/**
 * 系统相关
 */

let http = require('../http.js');

module.exports = {

  /**
   * 意见反馈
   */
  feedback(phone, content) {
    return http.post(`/ipet//proposal/feedback`, {
      "phoneNo": phone,
      "proposal": content
    })
  }
}