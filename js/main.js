

// jQuery(document).ready(function(){
//   $('.box h3').click(function() {
//       $(this).next().toggle('slow').hide('.box');
//       // return false;
//   }).next().hide();
// });

var content = ".item";

jQuery(document).ready(function(){
	$('.box').hover(function() {
		$( this ).addClass('box-hover');
  		}, function() {
   		 $( this ).removeClass('box-hover');
  	})
  	// .click(function() {
  	// 	$(this).addClass('box-clicked').toggle('slow');
  	// })
});

 