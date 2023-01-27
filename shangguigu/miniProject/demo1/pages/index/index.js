// pages/index/index.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '初始化数据',
    userInfo: {},
    arr:[
      {id:"001",name:"小猫咪"},
      {id:"002",name:"小狗子"},
      {id:"003",name:"小牛牛"},
      {id:"004",name:"小羊羊"},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (params) {
    let res = await request('https://api.oddfar.com/yl/q.php')
    console.log(res);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log('onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('onUnload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log('onPullDownRefresh');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('onReachBottom');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    console.log('onShareAppMessage');
  }
})