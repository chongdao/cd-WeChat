/**
 * 课程管理
 */

let http = require('../http.js');

module.exports = {

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
  getSeries(pageNum = 1, pageSize = 10) {
    return http.get(`/ipet/courseinfo/queryCourseList?courseType=2&pageNum=${pageNum}&pageSize=${pageSize}`)
  },

  /**
   * 课程基本信息
   * @param {String} id 课程id
   */
  getLessonInfo(id) {
    return http.get(`/ipet/courseinfo/queryCourseById?id=${id}`);
  }
}