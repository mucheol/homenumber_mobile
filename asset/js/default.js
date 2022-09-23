// function checkBoxUI() {
// 	var el;

// 	el = $('.tabsGroup');

// 	if(el.length <= 0){
// 		return;
// 	}
// }

$(function(){
	// checkBoxUI();
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
