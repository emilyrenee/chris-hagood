


// var content = ".item";

// jQuery(document).ready(function(){
// 	$('.box').click(function() {
// 		console.log('here');
//   		$(this).slideToggle('slow');
//   		$(this).addClass("box-clicked").removeClass("box");
//   		//hide all other boxes
//   		$('.box').hide();
//   		$(this).children(content).show();
//   		$(this).toggle('slow');
//   	});
// });

var child = ".item";

jQuery(document).ready(function(){
	$('.box').click(function(){
		$(this).children().slideToggle('slow');
		});
	});