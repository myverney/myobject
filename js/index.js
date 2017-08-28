$(function () {
    /*轮播图*/
    banner();
    /*初始化页签*/
    initTab();
    /*初始化工具提示*/
    $('[data-toggle="tooltip"]').tooltip();
});
var banner = function () {
    /*
    * 1.动态渲染
    * 1.1 数据  图片地址（两种pc m）数组  模拟
    * 1.2 根据数据和当前设备宽度  转换成html格式的代码
    * 1.3 渲染到页面
    * 2.测试功能
    * 2.1 根据浏览器尺寸的变化对应不同设备的宽度重新渲染
    * 3.移动端手势切换
    * */

    /*模拟数据*/
    var data = [
        {
            pcUrl:'images/slide_01_2000x410.jpg',
            mUrl:'images/slide_01_640x340.jpg'
        },
        {
            pcUrl:'images/slide_02_2000x410.jpg',
            mUrl:'images/slide_02_640x340.jpg'
        },
        {
            pcUrl:'images/slide_03_2000x410.jpg',
            mUrl:'images/slide_03_640x340.jpg'
        },
        {
            pcUrl:'images/slide_04_2000x410.jpg',
            mUrl:'images/slide_04_640x340.jpg'
        }
    ]
    /*动态渲染*/
    var render = function () {
        /*判断当前设备*/
        var isMobile = $(window).width() < 768 ? true : false;

        /*那些代码是动态的？？？ 点盒子和图片盒子*/
        var $pointBox = $('.carousel-indicators');
        var $imageBox = $('.carousel-inner');
        /*html代码生成*/
        var pointHtml = '';
        var imageHtml = '';
        /*根据数据和设备*/
        $.each(data,function (i,item) {
            pointHtml += '<li data-target="#carousel-example-generic" data-slide-to="'+i+'" class="'+(i==0?'active':'')+'"></li>';

            imageHtml += '<div class="item '+(i==0?'active':'')+'">';
            if(isMobile){
                /*拼接移动端的html*/
                imageHtml += '<a href="#" class="m_imgBox"><img src="'+item.mUrl+'" alt=""></a>';
            }else{
                /*拼接pc端的html*/
                imageHtml += '<a class="pc_imgBox" href="#" style="background-image: url('+item.pcUrl+')"></a>';
            }
            imageHtml += '</div>';
        });

        $pointBox.html(pointHtml);
        $imageBox.html(imageHtml);
    };

    /*测试功能*/
    $(window).on('resize',function () {
        render();
    }).trigger('resize');
    /*trigger 主动触发什么事件  resize就会执行render */

    /*手势切换*/
    var startX = 0;
    var distance = 0;
    var isMove = false;
    $('.wjs_banner').on('touchstart',function (e) {
        /*事件对象是jquery封装过后的  如要使用原生的事件对象 originalEvent */
        startX = e.originalEvent.touches[0].clientX;
    }).on('touchmove',function (e) {
        var moveX = e.originalEvent.touches[0].clientX;
        distance = moveX - startX;
        isMove = true;
    }).on('touchend',function (e) {
        /*滑动结束的时候来判断手势*/
        /*滑动距离 50 并且一定滑动过*/
        if(isMove && Math.abs(distance) > 50){
            /*有手势了*/
            if(distance > 0){
                /*右滑  上一张*/
                $('.carousel').carousel('prev');
            }else{
                /*左滑  下一张*/
                $('.carousel').carousel('next');
            }
        }

        /*重置*/
        startX = 0;
        distance = 0;
        isMove = false;
    });
}

var initTab = function () {
    /*
    * 1.在移动端宽度不够的时候能左右滑动并且不换行
    * */

    /*获取父容器*/
    var $parent = $('.nav-tabs-parent');
    /*滑动容器*/
    var $child = $parent.children();
    /*宽度足够*/
    /*获取所有的页签的宽度之和*/
    var width = 0;
    $child.find('li').each(function () {
        /*
        * width()
        * innerWidth()
        * outerWidth()
        * outerWidth(true)
        * */
        width += $(this).outerWidth(true);
    });
    /*设置给滑动容器*/
    $child.width(width);
    /*区域滚动插件 iscroll*/
    new IScroll('.nav-tabs-parent',{
        scrollX:true,
        scrollY:false
    });
    /*是解决模拟器问题 55 56 */
    document.addEventListener('touchmove',function (e) {
        e.preventDefault();
    });

}
