function receiptUI() {
	var el;

	el = $('#receipt');

	if(el.length <= 0){
		return;
	}
  $('.tabMenu p').on('click',function(){
    $(this).siblings('p').removeClass('active')
    $(this).addClass('active')
    if($('.tabBtn01').hasClass('active')) {
      $('.tab02').removeClass('active');
      $('.tab01').addClass('active');
    } 
    if($('.tabBtn02').hasClass('active')) {
      $('.tab01').removeClass('active');
      $('.tab02').addClass('active');
    }
    
  })
}

$(function(){
	receiptUI();
});

$(document).ready(function(){
  $('.check').on('click change',function(){

    if($(this).is(":checked")) {
      $(this).siblings('.checkLabel').children('.check_fake').addClass('active')
    }else {
      $(this).siblings('.checkLabel').children('.check_fake').removeClass('active')
    } 
  });

  $('.inputBox').on('change keyup',function(){
    if($(this).children('input').val() != '') {
      $(this).children('.xIcon').css('display','block')
    }
  })
  
  $('.xIcon').on('click',function(){
    var input = $(this).siblings('input');
    input.val('');
  })

  // 주소찾기 탭 active 기능
  $('.popupLayer .tab p').on('click',function(){
    $('.popupLayer .tab p').removeClass('active')
    $(this).addClass('active')
  })

  // 주소찾기 li active 기능
  $('.resultBox ul li').on('click',function(){
    $('.resultBox ul li').removeClass('active')
    $(this).addClass('active')
    $('button.addressSearch').addClass('active')
  })
  
  // 회원정보 수정
  $('#mypageInfo p.editBtn').on('click',function(){
    $('#mypageInfo input').val('');
    $('#mypageInfo input').attr('readonly',false);
    
    $('.editBtn').css('display','none')
    $('.editEndBtn').css('display','flex')
  })
  $('#mypageInfo p.editEndBtn').on('click',function(){
    $('#mypageInfo input').attr('readonly',true);
    
    $('.editEndBtn').css('display','none')
    $('.editBtn').css('display','flex')
  })

  // 마이페이지 알람 없애기
  $('#mypage .closeAlert').on('click',function(){
    $('#mypage .alertBox').css('display','none')
  })
  
  // 마이페이지 택배사관리 셀렉트에따라 내용변환
  $('.courierInfo .info01').css('display','block')
  $('#selectCourier').on('change',function(){
    if($('#selectCourier').val() == 'CJ 대한통운') {
      $('.courierInfo .information').css('display','none')
      $('.courierInfo .info01').css('display','block')
    }else if($('#selectCourier').val() == '롯데택배') {
      $('.courierInfo .information').css('display','none')
      $('.courierInfo .info02').css('display','block')
    }else if($('#selectCourier').val() == '한진택배') {
      $('.courierInfo .information').css('display','none')
      $('.courierInfo .info03').css('display','block')
    }else if($('#selectCourier').val() == '로젠택배') {
      $('.courierInfo .information').css('display','none')
      $('.courierInfo .info04').css('display','block')
    }else if($('#selectCourier').val() == '우체국택배') {
      $('.courierInfo .information').css('display','none')
      $('.courierInfo .info05').css('display','block')
    }
  })
});
