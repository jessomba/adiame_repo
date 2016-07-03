$(document).ready(function () {
	if (screen.width > 991) {
		// Affix
		$('.header').affix({
		  offset: {
		    top: 0
		  }
		})

		$('.page-inner .sub-hero').affix({
		  offset: {
		    top: 61
		  }
		})
	}



// Offcanvas
	$('.btn-offcanvas').click(function(){
		$('.ds-wrap, .ds-mainnav ul.ds-nav').toggleClass('offcanvas');
	})

	$('.btn-hide-offcanvas').click(function(){
		$('.ds-wrap, .ds-mainnav ul.ds-nav').removeClass('offcanvas');
	})

	// Misc
	$('select.form-control').selectpicker();
	
	// Hover dropdown nav
	$('ul.ds-nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    }); 

    // tooltip
    $('a[data-toggle="tooltip"]').tooltip()

  // Collapse
  $('.panel-heading a').click(function(){
  	if($(this).parents('.panel-heading').hasClass('active')){
  		$(this).parents('.panel-heading').removeClass('active');
  	} else{
  		$('.panel-group .panel-heading').removeClass('active');
  		$(this).parents('.panel-heading').addClass('active');

  		
  	}
  })

  // Check radio
  $('.radio-group input[type=radio]').click(function(){
  	if ($(this).val()) {
	     $(this).parents('.panel').addClass('valid');
	  } else {
	  	$(this).parents('.panel').removeClass('valid');
	  }
  })

  

});


$(window).scroll(function() {

	// Scroll top button
	if($(this).scrollTop()>200){
	$('.ds-backtotop').fadeIn(200);}
	else{
	  $('.ds-backtotop').fadeOut(200);}});
	  $('.ds-backtotop').click(function(event){event.preventDefault();
	  $('html, body').animate({scrollTop:0},300);
	});