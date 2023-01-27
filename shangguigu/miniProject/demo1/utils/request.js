import config from './config'

export default (url, data = {}, method = "GET") => {
  return new Promise((resolve,reject) => {
    wx.request({
      url: config.host + url,
      data,
      method,
      header:{
        cookie:wx.getStorageSync('cookies') ? wx.getStorageSync('cookies').find(item=>item.indexOf('xxx') !== -1) : ''
      },
      success: (res) => {
        console.log('请求成功');
        wx.setStorage({
          key:"cookies",
          data:res.data
        })
        resolve(res.data)
      },
      fail: (err) => {
        console.log('失败');
        reject(err)
      }
    })
  })
}