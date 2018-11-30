$(function () {
  var hotwords = ['抢一亿京豆', '辣妈享劲价', '工业品三免一', '超市御妈记', '京东618'];
  var i = 0;
  var redHotWords = document.getElementById('redhotwords');
  setInterval(function () {
    redHotWords.innerHTML = hotwords[i++];
    if (i === hotwords.length - 1) {
      i = 0;
    }
  }, 5000)
  $('.my-city').mouseenter(function () {
    $('.show-city').addClass('show-cityhover');
    $('.choose-city').show();
  });
  $('.my-city').mouseleave(function () {
    $('.show-city').removeClass('show-cityhover');
    $('.choose-city').hide();
  });

  var choose = document.getElementsByClassName('choose')[0];
  $('.city-item>li').click(function () {
    choose.innerHTML = $(this).text();
    $(this).children(0).addClass('red').parent().siblings().children(0).removeClass('red');
  });
  $('.myjd').mouseenter(function () {
    $(this).css({ 'backgroundColor': '#ffffff' });
    $('#myjd-list').show();
  });
  $('.myjd').mouseleave(function () {
    $(this).css({ 'backgroundColor': '#e3e4e5' });
    $('#myjd-list').hide();
  });
  $('.purchase').mouseenter(function () {
    $(this).css({ 'backgroundColor': '#ffffff' });
    $('.purchase-list').show();
  });
  $('.purchase').mouseleave(function () {
    $(this).css({ 'backgroundColor': '#e3e4e5' });
    $('.purchase-list').hide();
  });
  $('.client').mouseenter(function () {
    $(this).css({ 'backgroundColor': '#ffffff' });
    $('.client-list').show();
  });
  $('.client').mouseleave(function () {
    $(this).css({ 'backgroundColor': '#e3e4e5' });
    $('.client-list').hide();
  });
  $('.mapsite').mouseenter(function () {
    $(this).css({ 'backgroundColor': '#ffffff' });
    $('.map-list').show();
  });
  $('.mapsite').mouseleave(function () {
    $(this).css({ 'backgroundColor': '#e3e4e5' });
    $('.map-list').hide();
  });
  $('#photo').mouseenter(function () {
    $(this).addClass('searchPhotoHover');
  });
  $('#photo').mouseleave(function () {
    $(this).removeClass('searchPhotoHover');
  });
  var box = document.getElementsByClassName('cate_item1');

  var $idx = 0;
  //盒子显示隐藏功能
  $('.fs_inner_col1_menu>li').mouseenter(function () {
    $(this).addClass('menu_item_on').siblings().removeClass('menu_item_on');
    var $idx = $(this).index();
    for (var i = 0; i < 17; i++) {
      box[i].style.display = 'none';
    }
    box[$idx].style.display = 'block';
  });

  $('.fs_inner_col1_nav').mouseleave(function () {
    $('.fs_inner_col1_menu>li').removeClass('menu_item_on');
    $('.cate_item1').hide();
  });


  var count = 0;
  $('.next_img').click(function () {
    count++;
    if (count == $('.focus_list_main>li').length) {
      count = 0;
    } console.log(count);
    $('.focus_btn').eq(count).addClass('focus_btn_hover').siblings().removeClass('focus_btn_hover');
    $('.focus_list_main>li').eq(count).fadeIn().siblings().fadeOut();

  });
  $('.prev_img').click(function () {
    count--;
    if (count == -1) {
      count = $('.focus_list_main>li').length - 1;
    }
    $('.focus_btn').eq(count).addClass('focus_btn_hover').siblings().removeClass('focus_btn_hover');
    $('.focus_list_main>li').eq(count).fadeIn().siblings().fadeOut();
  });
  var btnidx = 0;
  $('.focus_btn').mouseenter(function () {
    btnidx = $(this).index();
    $(this).addClass('focus_btn_hover').siblings().removeClass('focus_btn_hover');
    $('.focus_list_main>li').eq(btnidx).fadeIn().siblings().fadeOut();

  });
  setInterval(function () {
    $('.next_img').click();
  }, 5000);
  //笨方法
  $('#promotion').mouseenter(function () {
    $('.col4_news_line').stop().animate({ left: 0 }, 300);
    document.getElementsByClassName('col4_news_list2')[0].style.display = 'none';
    document.getElementsByClassName('col4_news_list1')[0].style.display = 'block';

  });
  $('#news_tips').mouseenter(function () {
    $('.col4_news_line').stop().animate({ left: 56 }, 300);
    document.getElementsByClassName('col4_news_list2')[0].style.display = 'block';
    document.getElementsByClassName('col4_news_list1')[0].style.display = 'none';
  });

  //轮播图动画
  var silderInnerList = document.getElementsByClassName('silder_inner_list')[0];
  var offstleft = 0;
  $('.silder_prev_img').click(function () {
    if (offstleft == 0) {
      offstleft = -4824;
      silderInnerList.style.left = offstleft + 'px';
      $(this).click();
      return false;
    }
    offstleft += 804;
    $('.silder_inner_list').animate({ left: offstleft })
  });
  $('.silder_next_img').click(function () {
    if (offstleft == -4824) {
      offstleft = 0;
      silderInnerList.style.left = offstleft + 'px';
      $(this).click();
      return false;
    }
    offstleft -= 804;
    $('.silder_inner_list').animate({ left: offstleft })
  });
  var open = true;
  function prev() {
    if (open) {
      $('.sk_inner_right').animate({ left: -191 });
      open = false;
    } else {
      $('.sk_inner_right').animate({ left: 0 });
      open = true;
    }

  }
  setInterval(prev, 5000);

  //滚动效果
    window.onscroll = function (){
      if(window.scrollY > 700){
      $('.search_float').addClass('search_float_hover');
      $('.search_float').slideDown(500);
    }else if(window.screenY < 700) {
      $('.search_float').slideUp(500);  
    }
    if(window.scrollY > 900) {
      
      $('.ebjoy_float').addClass('ebjoy_float_fixed').show();
      $('.ebjoy_float').animate({bottom : 30});
    } 
    if(window.scrollY < 900){
      $('.ebjoy_float').hide().removeClass('ebjoy_float_fixed');

    }
    }
    


    //小红按钮
    $('.tab_body_item_btn1').mouseenter(function (){
      $('.tab_body_item_btn2').attr('src','img/redpoint.png');
      $(this).attr('src','img/redpoint_hover.png');
      $('.tab_body_item_list').animate({left:0});
    });
    $('.tab_body_item_btn2').mouseenter(function (){
      $('.tab_body_item_btn1').attr('src','img/redpoint.png');
      $(this).attr('src','img/redpoint_hover.png');
      $('.tab_body_item_list').animate({left:-410});

    });
    var topTabHeadItemIDX = 0;
    $('.top_tab_head_item').mouseenter(function (){
      topTabHeadItemIDX =  $(this).index()
      $('.top_tab_head_item').eq(topTabHeadItemIDX).children(0)
      .addClass('top_tab_lnk_hover');
      $('.top_tab_head_item').eq(topTabHeadItemIDX).siblings().children(0).removeClass('top_tab_lnk_hover');
      $('.tab_body_item').eq(topTabHeadItemIDX).show().siblings().hide();
    });

    var boxMiddleCount = 0;
    var boxMiddleRedpointIDX = 0;
    $('.box_middle_list_prev').click(function(){
      if(boxMiddleCount == 0) {
        return false;
      }
      boxMiddleCount+=375;
      boxMiddleRedpointIDX--;
      $('.repoint>img').eq(boxMiddleRedpointIDX).attr('src','img/redpoint_hover.png').siblings().attr('src','img/redpoint.png');
      $('.box_middle_list_wrapper').animate({left:boxMiddleCount});
    });
    $('.box_middle_list_next').click(function (){
      if(boxMiddleCount == -750){
        return false;
      }
      boxMiddleCount-=375;
      boxMiddleRedpointIDX++;
      $('.box_middle_list_wrapper').animate({left:boxMiddleCount});
      $('.repoint>img').eq(boxMiddleRedpointIDX).attr('src','img/redpoint_hover.png').siblings().attr('src','img/redpoint.png');


    });
    $('.repoint>img').mouseenter(function(){
      $('.box_middle_list_wrapper').animate({left:$(this).index() *-375});
      $(this).attr('src','img/redpoint_hover.png').siblings().attr('src','img/redpoint.png');
    });

    $('.last_repoint>img').mouseenter(function (){
      $(this).attr('src','img/redpoint_hover.png').siblings().attr('src','img/redpoint.png');
      if($(this).index() == 0) {
        $('.box_last_item').animate({'left' : 0});
      }
      if($(this).index() == 1) {
        $('.box_last_item').animate({'left' : -385});
      }
    });
    $('#leftPhoto1').mouseenter(function(){
      $(this).fadeOut();
      $('#leftPhoto2').fadeIn();
    });
    $('#rightPhoto1').mouseenter(function(){
      $(this).fadeOut();
      $('#rightPhoto2').fadeIn();
    });

    $('#leftPhoto2').mouseleave(function(){
      $(this).fadeOut();
      $('#leftPhoto1').fadeIn();
    });
    $('#rightPhoto2').mouseleave(function(){
      $(this).fadeOut();
      $('#rightPhoto1').fadeIn();
    });
   
      //迭代背景图

    $('.toolbar_banner_item').mouseenter(function(){
      $('.toolbar_banner_item_list').slideUp();
      $(this).children('ul').slideDown();

      
    });
    $('.toolbar_banner_item').mouseleave(function(){
      $('.toolbar_banner_item_list').slideUp(100);
    });
    var jdToolBarFixedFlag = true;
    $('.toolbar_inner_header').click(function (){
      if(jdToolBarFixedFlag){
        $('.jd_toolbar_fixed').animate({right : 0});
        jdToolBarFixedFlag = false;
      } else {
        $('.jd_toolbar_fixed').animate({right : -287});
        jdToolBarFixedFlag = true;
      }
    });
   $('.eixt_gray').click(function (){
    $('.jd_toolbar_fixed').animate({right : -287});
      jdToolBarFixedFlag = true;
   });
   $('.broadside_tab>div').mouseenter(function (){
    $(this).children(0).stop().animate({left:-60});
   });
   $('.broadside_tab>div').mouseleave(function (){
    $(this).children(0).stop().animate({left: 35});
   });
   $('.boroadside_tab_2>div').mouseenter(function (){
    $(this).children(0).stop().animate({left:-60});
   });
   $('.boroadside_tab_2>div').mouseleave(function (){
    $(this).children(0).stop().animate({left: 35});
   });

   var col2RedPointIDX = 0;
   var col2OffsetLeft = 0;
   $('.col2_box_next').click(function(){
    
    console.log(col2OffsetLeft);
    if(col2OffsetLeft == -740){
      return false;
    }
    col2OffsetLeft-=370;
    col2RedPointIDX++;
     $('.col2_wrapper_list').animate({left:col2OffsetLeft});
     $('.col2_box_redPoint>img').eq(col2RedPointIDX).attr('src','img/redpoint_hover.png').siblings().attr('src','img/redpoint.png');
   });
   $('.col2_box_prev').click(function (){
    
    if(col2OffsetLeft == 0){
      return false;
      console.log('等于0了')
    }
    col2OffsetLeft+=370;
    col2RedPointIDX--;
    $('.col2_wrapper_list').animate({left:col2OffsetLeft});
    $('.col2_box_redPoint>img').eq(col2RedPointIDX).attr('src','img/redpoint_hover.png').siblings().attr('src','img/redpoint.png');

   });
   $('.col2_box_redPoint>img').mouseenter(function (){
     $('.col2_wrapper_list').animate({left:$(this).index() * -370});
     $(this).attr('src','img/redpoint_hover.png').siblings().attr('src','img/redpoint.png');
   });
  
    














});


//text
