/**
 * 和用户相关
 */

let http = require('../http.js');

module.exports = {
  /**
   * 用户参加的课程
   */
  getUserLesson(pageNum = 1, pageSize = 10) {
    return http.get(`/ipet/courseinfo/subscribeCourse?pageNum=${pageNum}&pageSize=${pageSize}`)
  },

  /**
   * 我收藏的文章
   */
  getCollectArticles(pageNum = 1, pageSize = 10) {
    return http.get(`/ipet/articleinfo/mySubscribeArticle?pageNum=${pageNum}&pageSize=${pageSize}`)
  },

  /**
   * 我的订单
   */
  getMyOrders(pageNum = 1, pageSize = 10) {
    return http.get(`/ipet/orderinfo/myOrderInfo?pageNum=${pageNum}&pageSize=${pageSize}`);
  },

  /**
   * 我的宠物档案
   */
  getMyPet() {
    return http.get(`/ipet/petinfo/myPetInfo`);
  }
}