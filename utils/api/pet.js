/**
 * 宠物管理
 */

let http = require('../http.js');

module.exports = {
  /**
   * 上传档案
   */
  uploadInfo(pet) {
    return http.post('/ipet/petinfo/upLoadPetInfo', pet);
  },

  /**
   * 宠物品种
   */
  getTypes() {
    return http.get('/ipet/pettype/petTypeList');
  }
}