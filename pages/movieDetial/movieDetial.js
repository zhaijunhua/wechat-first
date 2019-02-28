// pages/movieDetial/movieDetial.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    // const _this = this;
    const movieurl = 'https://ticket-api-m.mtime.cn/' + options.type + '.api?locationId=290&movieId=' + options.movieId;
    const _this = this;
    wx.showLoading({});
    wx.request({
      url: movieurl,
      header: {
        'content-type': 'json' // 默认值，后面只保留json
      },
      success(res) {
        console.log(res.data);
        // 将数据赋值
        wx.hideLoading();
        // _this.setData({
        //   movieList: res.data.movies
        // });
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