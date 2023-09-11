import request from '@/utils/request'


export default {
  getHospSetList(current, limit, searchObj) {
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,
      method: 'post',
      data: searchObj //使用json
    })
  },
  //删除医院设置
  deleteHospSet(id) {
    return request ({
      url: `/admin/hosp/hospitalSet/${id}`,
      method: 'delete'
    })
  },
  batchRemoveHospSet(idList) {
    return request({
      url: `/admin/hosp/hospitalSet/batchRemove`,
      method: 'delete',
      data: idList
    })
  }


}
