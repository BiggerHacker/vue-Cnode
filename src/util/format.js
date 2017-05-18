export const format = (time = '') => {
  let date = new Date(time)
  let decDate = new Date().getTime() - date.getTime()
  if ((decDate / 1000) < 30) {
    return '刚才'
  } else if ((decDate / 1000) < 60) {
    return `${parseInt(decDate / 1000)}秒前`
  } else if ((decDate / 60000) < 60) {
    return `${parseInt(decDate / 60000)}分钟前`
  } else if ((decDate / 3600000) < 24) {
    return `${parseInt(decDate / 3600000)}小时前`
  } else if ((decDate / 86400000) < 31) {
    return `${parseInt(decDate / 86400000)}天前`
  } else if ((decDate / 2678400000) < 12) {
    return `${parseInt(decDate / 2678400000)}月前`
  } else {
    return `${parseInt(decDate / 31536000000)}年前`
  }
}
