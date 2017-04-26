// app.json 全部属性 由于.json格式不是不可以注释的，所以只能以js方式储存起来；还有json格式文件键值对，名字一定要用双引号括住，最后一个键值对后面不能有多余逗号
app.json = {
    "pages":[//设置页面路径
        "pages/index/index",//数组的第一项代表小程序的初始页面。小程序中新增/减少页面，都需要对 pages 数组进行修改。
        "pages/home/home",
        "pages/logs/logs",
        "pages/test/test",
        "pages/me/me"
    ],
    "window": {//设置默认页面的窗口表现
        "navigationBarBackgroundColor": "#000000",//导航栏背景颜色
        "navigationBarTextStyle": "white",//导航栏标题颜色
        "navigationBarTitleText": "",//导航栏标题文字内容
        "backgroundColor":"#fff",//窗口的背景色
        "backgroundTextStyle":"dark",//下拉背景字体、loading 图的样式
        "enablePullDownRefresh":"false"//是否开启下拉刷新
    },
    "tabBar":{//设置底部 tab 的表现
        "color":"#757575",//    tab 上的文字默认颜色
        "selectedColor":"#d81e06",  //tab 上的文字选中时的颜色
        "backgroundColor":"#fcfcfc",//tab 的背景色
        "borderStyle":"black",//tabbar上边框的颜色， 仅支持 black/white
        "position":"bottom",//可选值 bottom、top
        "list":[//tab 的列表，详见 list 属性说明，最少2个、最多5个 tab
            {
                "pagePath":"pages/home/home",//页面路径，必须在 pages 中先定义
                "text":"主页",//tab 上按钮文字
                "iconPath":"img/home.png",//图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px
                "selectedIconPath":"img/home_active.png"//选中时的图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px
            },{
                "text":"我的",
                "pagePath":"pages/me/me",
                "iconPath":"img/me.png",
                "selectedIconPath":"img/me_active.png"
            }
        ]
    },
    "networkTimeout":{//设置网络超时时间
        "request":60000,
        "connectSocket":60000,
        "uploadFile":60000,
        "downloadFile":60000
    },
    "debug":true//设置是否开启 debug 模式
}
