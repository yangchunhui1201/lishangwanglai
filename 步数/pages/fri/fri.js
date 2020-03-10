// pages/fri/fri.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    buzhi:0,
    num:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log(getApp().globalData)
    this.setData({
      buzhi: getApp().globalData.step
    })
  },

})