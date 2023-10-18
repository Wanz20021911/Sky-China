 
  (function($) {
    $.fn.timeline = function() {
      var selectors = {
        id: $(this),
        item: $(this).find(".timeline-item"),
        activeClass: "timeline-item--active",
        img: ".timeline__img",
      };

      var itemLength = selectors.item.length;
      $(window).scroll(function() {
        var max, min;
        var pos = $(this).scrollTop();
        selectors.item.each(function(i) {
          min = $(this).offset().top;
          max = $(this).height() + $(this).offset().top;
          var that = $(this);
          if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
            selectors.item.last().addClass(selectors.activeClass);
          } else if (pos <= max + 150 && pos >= min-400) {
            $(this).addClass(selectors.activeClass);//将当前项添加为活动项。
          }
        });
      });
    };
  })(jQuery);

  $("#timeline-1").timeline();

  var img1 = document.getElementById("img1");
  var img2 = document.getElementById("img2");
  var img3 = document.getElementById("img3");
  var img4 = document.getElementById("img4");
  var img5 = document.getElementById("img5");
  var img6 = document.getElementById("img6");
  var img7 = document.getElementById("img7");
  var img8 = document.getElementById("img8");
  var img9 = document.getElementById("img9");
  var img10 = document.getElementById("img10");
  var img11 = document.getElementById("img11");
  var img12 = document.getElementById("img12");
  var img13 = document.getElementById("img13");
  var img14 = document.getElementById("img14");
  var img15 = document.getElementById("img15");
  var img16 = document.getElementById("img16");
  var img17 = document.getElementById("img17");
  var img18 = document.getElementById("img18");
  var img19 = document.getElementById("img19");
  var img20 = document.getElementById("img20");
  var img21 = document.getElementById("img21");
  var img22 = document.getElementById("img22");
  var img23 = document.getElementById("img23");

  var modal1 = document.getElementById("modal1");
  var modal2 = document.getElementById("modal2");
  var modal3 = document.getElementById("modal3");
  var modal4 = document.getElementById("modal4");
  var modal5 = document.getElementById("modal5");
  var modal6 = document.getElementById("modal6");
  var modal7 = document.getElementById("modal7");
  var modal8 = document.getElementById("modal8");
  var modal9 = document.getElementById("modal9");
  var modal10 = document.getElementById("modal10");
  var modal11 = document.getElementById("modal11");
  var modal12 = document.getElementById("modal12");
  var modal13 = document.getElementById("modal13");
  var modal14 = document.getElementById("modal14");
  var modal15 = document.getElementById("modal15");
  var modal16 = document.getElementById("modal16");
  var modal17 = document.getElementById("modal17");
  var modal18 = document.getElementById("modal18");
  var modal19 = document.getElementById("modal19");
  var modal20 = document.getElementById("modal20");
  var modal21 = document.getElementById("modal21");
  var modal22 = document.getElementById("modal22");
  var modal23 = document.getElementById("modal23");



  img1.addEventListener('click',function(){
    modal1.style.display = 'block';
  });
  img2.addEventListener('click',function(){
    modal2.style.display = 'block';
  });
  img3.addEventListener('click',function(){
    modal3.style.display = 'block';
  });
  img4.addEventListener('click',function(){
    modal4.style.display = 'block';
  });
  img5.addEventListener('click',function(){
    modal5.style.display = 'block';
  })
  img6.addEventListener('click',function(){
    modal6.style.display = 'block';
  })
  img7.addEventListener('click',function(){
    modal7.style.display = 'block';
  });
  img8.addEventListener('click',function(){
    modal8.style.display = 'block';
  });
  img9.addEventListener('click',function(){
    modal9.style.display = 'block';
  });
  img10.addEventListener('click',function(){
    modal10.style.display = 'block';
  });
  img11.addEventListener('click',function(){
    modal11.style.display = 'block';
  })
  img12.addEventListener('click',function(){
    modal12.style.display = 'block';
  })
  img13.addEventListener('click',function(){
    modal13.style.display = 'block';
  });
  img14.addEventListener('click',function(){
    modal14.style.display = 'block';
  });
  img15.addEventListener('click',function(){
    modal15.style.display = 'block';
  });
  img16.addEventListener('click',function(){
    modal16.style.display = 'block';
  });
  img17.addEventListener('click',function(){
    modal17.style.display = 'block';
  })
  img18.addEventListener('click',function(){
    modal18.style.display = 'block';
  })
  img19.addEventListener('click',function(){
    modal19.style.display = 'block';
  });
  img20.addEventListener('click',function(){
    modal20.style.display = 'block';
  });
  img21.addEventListener('click',function(){
    moda21.style.display = 'block';
  });
  img22.addEventListener('click',function(){
    modal22.style.display = 'block';
  });
  img23.addEventListener('click',function(){
    modal23.style.display = 'block';
  });

  var mileston_img1 = document.getElementById("mileston_img1");
  var mileston_img2 = document.getElementById("mileston_img2");
  var mileston_img3 = document.getElementById("mileston_img3");
  var mileston_img4 = document.getElementById("mileston_img4");
  var mileston_img5 = document.getElementById("mileston_img5");
  var mileston_img6 = document.getElementById("mileston_img6");
  var mileston_img7 = document.getElementById("mileston_img7");
  var mileston_img8 = document.getElementById("mileston_img8");
  var mileston_img9 = document.getElementById("mileston_img9");
  var mileston_img10 = document.getElementById("mileston_img10");

  var mileston1 = document.getElementById("mileston1");
  var mileston2 = document.getElementById("mileston2");
  var mileston3 = document.getElementById("mileston3");
  var mileston4 = document.getElementById("mileston4");
  var mileston5 = document.getElementById("mileston5");
  var mileston6 = document.getElementById("mileston6");
  var mileston7 = document.getElementById("mileston7");
  var mileston8 = document.getElementById("mileston8");
  var mileston9 = document.getElementById("mileston9");
  var mileston10 = document.getElementById("mileston10");
  

  mileston_img1.addEventListener('click',function(){
    mileston1.style.display = 'block';
  });
  mileston_img2.addEventListener('click',function(){
    mileston2.style.display = 'block';
  });
  mileston_img3.addEventListener('click',function(){
    mileston3.style.display = 'block';
  });
  mileston_img4.addEventListener('click',function(){
    mileston4.style.display = 'block';
  });
  mileston_img5.addEventListener('click',function(){
    mileston5.style.display = 'block';
  })
  mileston_img6.addEventListener('click',function(){
    mileston6.style.display = 'block';
  })
  mileston_img7.addEventListener('click', function()
  {
      mileston7.style.display = 'block';
  });
  mileston_img8.addEventListener('click', function()
  {
      mileston8.style.display = 'block';
  });
  mileston_img9.addEventListener('click', function()
  {
      mileston9.style.display = 'block';
  });
  mileston_img10.addEventListener('click', function()
  {
      mileston10.style.display = 'block';
  });

  var allmodals = document.getElementsByClassName('modal');
  function closeModal() {  
    for (var i = 0; i < allmodals.length; i++){
      var modal = document.getElementsByClassName('modal')[i]; 
      modal.style.display = 'none';
    }
  }
