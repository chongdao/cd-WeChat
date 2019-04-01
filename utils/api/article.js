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

  /**
   * 文章详情
   * @param {String} id 文章id
   */
  getArticleInfo(id) {
    return http.get(`/ipet/articleinfo/articleInfo?articleId=${id}`);
  },

  /**
   * 收藏文章
   * @param {String} id 文章id
   */
  collect(id) {
    return http.get(`/ipet/articleinfo/subscribeArticle?articleId=${id}&operateType=1`);
  },

  /**
   * 取消收藏文章
   * @param {String} id 文章id
   */
  unCollect(id) {
    return http.get(`/ipet/articleinfo/subscribeArticle?articleId=${id}&operateType=2`);
  }
}