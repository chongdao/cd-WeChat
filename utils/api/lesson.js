/**
 * 课程管理
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
   * 获取所有课程
   */
  getAllLesson(pageNum = 1, pageSize = 10) {
    return http.get(`/ipet/courseinfo/queryCourseList?courseType=&pageNum=${pageNum}&pageSize=${pageSize}`)
  },

  /**
   * 获取散课
   */
  getScatteredLesson(pageNum = 1, pageSize = 10) {
    return http.get(`/ipet/courseinfo/queryCourseList?courseType=1&pageNum=${pageNum}&pageSize=${pageSize}`)
  },

  /**
   * 获取系列课程
   */
  getSerialLesson(pageNum = 1, pageSize = 10) {
    return http.get(`/ipet/courseinfo/queryCourseList?courseType=2&pageNum=${pageNum}&pageSize=${pageSize}`)
  },
}