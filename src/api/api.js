import axios from 'axios'

const URL = 'https://cnodejs.org/api/v1'

export function getResourse (url, method = 'GET') {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: URL + url
    })
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export default {
  /**
   * 获取资源列表 { 首页资源，资源详细内容，用户个人信息 ... }
   * @param  {[type]} param [加载对应资源API]
   * @return {[type]}
   */
  getResourseList (param) {
    return getResourse(param)
  },
  /**
   * Post状态提交 login create
   * @param  {[type]} param
   * @return {[type]}
   */
  PostSub (param) {
    return getResourse(param, 'POST')
  }
}
