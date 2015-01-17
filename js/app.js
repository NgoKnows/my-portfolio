"use strict"
$(function () {
    var introEle = $("#intro");
    console.log(introEle);
    var h = $(window).height() - introEle.offset;
        //var w = $(window).width - introEle.offset.
    console.log(h);
    introEle.height(h);
    //introEle.width = w;
});
