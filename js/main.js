//$(".health p").hide();

//$(".health h3").click(function() {
 //$(".health p").toggle();
//});


jQuery(document).ready(function(){
  $('.coverage-group h3').click(function() {
      $(this).next().toggle('slow');
      // return false;
  }).next().hide();
});

//enter rotated chevron once clicked
// jQuery(document).ready(function(){
//   $('.coverage-group h3').click(function() {
//       $(this).next().toggle('slow');
//       return false;
//   }).next().hide().show(".chevron .right");
// });

//<span class="chevron right"></span>


// jQuery(document).ready(function(){
// 	var content = ("<p>This is extra content that will be displayed</p>")
// 	if ($(window).width() >= 768){	
// 		$(".about").append(content);
// 	}
// });


