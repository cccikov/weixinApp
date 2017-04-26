//home.js
//获取应用实例
var app = getApp()
Page({
    data: {
        motto: 'Hello World',
        userInfo: {}
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    changeMotto: function() {
        //this就代表是 Page页面 对象；而不是那个触发事件的元素
        console.log(this.data);
        this.setData({
            motto:"你好 世界",
        });
        wx.navigateTo({
            url: '../logs/logs'
        });
    },
    onLoad: function() {
        console.log('onLoad')
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    }
})
