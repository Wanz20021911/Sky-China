
//进度条
window.onload = function(){
    function scrollFunc(){
        let progress = document.querySelector('.top-progress');
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let scrollHeight = document.documentElement.scrollHeight;
        let clientHeight = document.documentElement.clientHeight;
        progress.style.width = (scrollTop / (scrollHeight - clientHeight)).toFixed(2) * 100 + '%'
    }
    window.onscroll = scrollFunc
    scrollFunc();
}
//nav
window.addEventListener("scroll", function() {
    var navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky",window.scrollY>50);
});

window.addEventListener('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll < 0) {
        // 向上滚动时无效果
        return;
    }
    var rows = $('.introduction, #mei,.box, #video').each(function() {
        var offset = $(this).offset().top;
        if (scroll >= offset - 450 && scroll < offset + 300) {
            // 在指定范围内时添加类名"active"
            $(this).addClass('active');
        } else {
        // 不在指定范围内时不会取消类名"active"
        }
    });
});

window.addEventListener('scroll', function() {
    var contentLeft = document.querySelector('.content_left');
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (viewportWidth > 960) {
        var scrollY = window.scrollY || window.pageYOffset;
        var windowHeight = window.innerHeight; // 窗口可见区域的高度
        var documentHeight = document.documentElement.scrollHeight; // 文档总高度

        // 计算距离底部的距离
        var distanceToBottom = documentHeight - (scrollY + windowHeight);

        if (scrollY >= 700) {
        contentLeft.classList.add('sticky');
        } else {
        contentLeft.classList.remove('sticky');
        }
    } else {
        contentLeft.classList.remove('sticky');
    }
});




      
$(".step").click( function() {
$(this).addClass("active").prevAll().addClass("active");
$(this).nextAll().removeClass("active");
});
$(".step01").click( function() {
$("#line-progress").css("width", "3%");
$(".discovery").addClass("active").siblings().removeClass("active");
});
$(".step02").click( function() {
$("#line-progress").css("width", "25%");
$(".strategy").addClass("active").siblings().removeClass("active");
});
$(".step03").click( function() {
$("#line-progress").css("width", "50%");
$(".creative").addClass("active").siblings().removeClass("active");
});
$(".step04").click( function() {
$("#line-progress").css("width", "75%");
$(".production").addClass("active").siblings().removeClass("active");
});
$(".step05").click( function() {
$("#line-progress").css("width", "100%");
$(".analysis").addClass("active").siblings().removeClass("active");
});


//wave animate
$(function () {
var marqueeScroll = function (id1, id2, id3, timer) {
    var $parent = $("#" + id1);
    var $goal = $("#" + id2);
    var $closegoal = $("#" + id3);
    $closegoal.html($goal.html());
    function Marquee() {
    if (parseInt($parent.scrollLeft()) - $closegoal.width() >= 0) {
        $parent.scrollLeft(parseInt($parent.scrollLeft()) - $goal.width());
    }
    else {
        $parent.scrollLeft($parent.scrollLeft() + 1);
    }
    }
    setInterval(Marquee, timer);
}
var marqueeScroll1 = new marqueeScroll("marquee-box", "wave-list-box1", "wave-list-box2", 20);
var marqueeScroll2 = new marqueeScroll("marquee-box3", "wave-list-box4", "wave-list-box5", 40);
});

//宠物
let chong_toggle = document.querySelector(".chong_toggle");
let chong_menu = document.querySelector(".chong_menu");
chong_toggle.onclick =function(){
    chong_menu.classList.toggle("active");
};

//append
const accordion = document.getElementsByClassName('append_container');
for (i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}