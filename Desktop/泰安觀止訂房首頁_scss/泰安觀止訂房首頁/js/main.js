var _top = 0;
$(function() {
  $(window).scroll(function() {
    var _scrollTop = $(document).scrollTop();
    if (_scrollTop > 600) {
      if (_scrollTop < _top) {
        $('#goTop').show();
      } else {
        $('#goTop').hide();
      }
    } else {
      $('#goTop').hide();
    }
    _top = _scrollTop;
  });
  $('#goTop').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  })
  $('.tool .form-check-label').click(function() {
    $(this).closest('.tool').find('.checked').removeClass('checked');
    $(this).addClass('checked');
  });
});

function toggleSubMenu(that) {
  var _windowW = $(window).width();
  if (_windowW > 1000) {
    return false;
  }
  $(that).closest('.sub-menu').toggleClass('active');
}

function chiceSubMenu(that) {
  var _windowW = $(window).width();
  if (_windowW > 1000) {
    return false;
  }
  $(that).closest('.sub-menu').removeClass('active');
}

function openVRModal(url) {
  $('#VRModal iframe').attr('src', url);
  $('#VRModal').modal('show');
}

function switchTab(that,option) {
  $(that).closest('li').addClass('active').siblings().removeClass('active');
  $(that).closest('.tabs').find('.tab').removeClass('active');
  $(that).closest('.tabs').find('.tab.tab' + option).addClass('active');
}
