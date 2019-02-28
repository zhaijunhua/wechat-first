// pages/upcoming/upcoming.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    partName: '',
    upmovies: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let _this = this;
    _this.setData({
      partName: options.name
    });
    const hoturl = 'https://api-m.mtime.cn/' + options.type + '.api?locationId=290';
    wx.showLoading({
      title: '加载中'
    })
    wx.request({
      url: hoturl, // 仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'json' // 默认值，后面只保留json
      },
      success(response) {
        // 将数据赋值
        console.log(response.data);
        wx.hideLoading();
        _this.setData({
          upmovies: response.data.moviecomings
        });
      },
      fail: function () {
        wx.hideLoading({
          title: '加载失败'
        });
      },
      complete: function () {

      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})