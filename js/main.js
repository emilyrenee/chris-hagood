
jQuery(document).ready(function(){
	$('.box').click(function(){
		$(this).children().slideToggle('slow');
		$(this).toggleClass('box-expanded');
    	$("html, body").animate({ scrollTop: $(".box-expanded").offset().top }, 300);
    		return true;
		//add function that will expand element to full size of div and hide other boxes
		// $(this).removeClass('box').addClass('box-expanded');
	});
});


