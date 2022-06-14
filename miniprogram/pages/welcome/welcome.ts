// pages/welcome.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {
    text:"这里是一段文本",
    users:[
      {
        name:"oliver",
        age:20,
        sex:"男"
      },
      {
        name:"刻晴",
        age:20,
        sex:"女"
      },
      {
        name:"甘雨",
        age:20,
        sex:"女"
      }
    ]
  },
  handleClick(user:any){
    console.log(user)
    // this.data.text="2"
    // this.setData({
    //   text:"这是一段修改后的文本"
    // })
  },
  fakeCallback(){},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})