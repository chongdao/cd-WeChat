/**
 * 订单相关
 */

let http = require('../http.js');

module.exports = {
  /**
   * 下单
   * @param {String} courseIds 课程id，逗号相隔
   */
  payOrder(courseIds) {
    return http.post('/ipet/orderinfo/prePayOrder', {
      courseIds
    });
  }
}