/**
 * 文章管理
 */

let http = require('../http.js');

module.exports = {
  /**
   * 文章列表
   */
  getArticleList(pageNum = 1, pageSize = 10) {
    return http.get(`/ipet/article/articleList?pageNum=${pageNum}&pageSize=${pageSize}`)
  },

}