
// jQuery(document).ready(function() {
// 	$('.health').click(function() {
// 		$('.health-details').show();
// 		$('.dropdown-toggle').click(function() {
// 			$('.health-details').hide();
// 		});
// 	});
// });

// jQuery(document).ready(function() {
// 	$('.health').click(function() {
// 		$('.health-details').show();
// 		$('.dropdown-toggle').click(function() {
// 			$('.health-details').hide();
// 		});
// 	});
// });

// jQuery(document).ready(function() {
// 	$('.life').click(function() {
// 		$('.life-details').show();
// 		$('.dropdown-toggle').click(function() {
// 			$('.life-details').hide();
// 		});
// 	});
// });

// jQuery(document).ready(function() {
// 	$('.vision').click(function() {
// 		$('.vision-details').show();
// 		$('.dropdown-toggle').click(function() {
// 			$('.vision-details').hide();
// 		});
// 	});
// });

// jQuery(document).ready(function() {
// 	$('.dental').click(function() {
// 		$('.dental-details').show();
// 		$('.dropdown-toggle').click(function() {
// 			$('.dental-details').hide();
// 		});
// 	});
// });

// jQuery(document).ready(function() {
// 	$('.cancer').click(function() {
// 		$('.cancer-details').show();
// 		$('.dropdown-toggle').click(function() {
// 			$('.cancer-details').hide();
// 		});
// 	});
// });

// jQuery(document).ready(function() {
// 	$('.disability').click(function() {
// 		$('.disability-details').show();
// 		$('.dropdown-toggle').click(function() {
// 			$('.disability-details').hide();
// 		});
// 	});
// });

// jQuery(document).ready(function() {
// 	$('.accidental').click(function() {
// 		$('.accidental-details').show();
// 		$('.dropdown-toggle').click(function() {
// 			$('.accidental-details').hide();
// 		});
// 	});
// });

// jQuery(document).ready(function() {
// 	$('.hospital').click(function() {
// 		$('.hospital-details').show();
// 		$('.dropdown-toggle').click(function() {
// 			$('.hospital-details').hide();
// 		});
// 	});
// });

// jQuery(document).ready(function() {
// 	$('.final-expenses').click(function() {
// 		$('.final-expenses-details').show();
// 		$('.dropdown-toggle').click(function() {
// 			$('.final-expenses-details').hide();
// 		});
// 	});
// });

var productDetails = 'https://raw.githubusercontent.com/emilyrenee/chris-hagood/f9f016e81708045424ed7ac560cdf07f49f7c79f/data/products.json';

$.ajax(productDetails).done(function(data) {
	var product = JSON.parse(data).product
	console.log(product[0].type);
	$('.product').click(function(){
		$(".modal-body").append(product[0].type);
	})
});

// $.ajax(productDetails).done(function(data) {
// 	console.log(data.product).forEach(function(products, index){
// 		var modal = (".modal-body");
// 		modal.append(product.details);

// 	});
// });














