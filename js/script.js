
$(function () {

  /*contactページ フォームのバリデーション */
  $(".alert").hide();

  $('input[type="submit"]').click(function () {

    var sendFlag = true;
    //名前
    if (!$("#name").val()) {
      $("#nameSection .alert").show();
      sendFlag = false;
    } else {
      $("#nameSection .alert").hide();
    }
    //メールアドレス
    if (!$("#email").val()) {
      $("#emailSection .alert").show();
      sendFlag = false;
    } else {
      $("#emailSection .alert").hide();
    }
    //電話番号
    if (!$("#tel").val()) {
      $("#telSection .alert").show();
      sendFlag = false;
    } else {
      $("#telSection .alert").hide();
    }
    //お問い合わせ内容
    if (!$("#content").val()) {
      $("#contentSection .alert").show();
      sendFlag = false;
    } else {
      $("#contentSection .alert").hide();
    }
    //空白なければ送信できる
    if (sendFlag == false) {
      return false;
    }

  });
  
  $(".openbtn").click(function () {
    $(this).toggleClass("active");
    $(".sp").slideToggle(300);
  });
});

$(window).on("load resize", function () {
  if ($(window).width() > 768) {
    $(".sp").hide();
  } else {
    $(".openbtn").removeClass("active");
  }
})


$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
  speed: 1000,//スライドの動きのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 1,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
  arrows: true,//左右の矢印あり
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: true,//下部ドットナビゲーションの表示
  pauseOnFocus: false,//フォーカスで一時停止を無効
  pauseOnHover: false,//マウスホバーで一時停止を無効
  pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function (event, slick, currentSlide, nextSlide) {
  $('.slider').slick('slickPlay');
});

// ふわっと文字

$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll_up');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 100;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);

  
});