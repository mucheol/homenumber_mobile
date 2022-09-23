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
  $('#save_id').change(function(){

    if($('#save_id').is(":checked")) {
      $('.check_fake').addClass('active')
    }else {
      $('.check_fake').removeClass('active')
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
