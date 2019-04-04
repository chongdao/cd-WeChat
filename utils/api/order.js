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
      courseIds: courseIds
    });
  },
  /**
   * 支付
   * @param {String} courseIds 课程id，逗号相隔
   */
  payMent(data) {
    return http.post('/ipet/orderinfo/payment', data);
  },
  /**
   * 获取订单
   * @param {String} courseIds 课程id，逗号相隔
   */
  getOrderList(data) {
    return http.post('/dpet-core/ipet/orderinfo/myOrderInfo', data);
  }
}