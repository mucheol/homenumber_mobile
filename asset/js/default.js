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

  
  
});
