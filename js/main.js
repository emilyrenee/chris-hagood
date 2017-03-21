jQuery(document).ready(function() {
	$('.health').click(function() {
		$('.health-details').show();
		$('.dropdown-toggle').click(function() {
			$('.health-details').hide();
		});
	});
});

// jQuery(document).ready(function() {
// 	$('.life').click( function(){
// 		$('.life-details').show();
// 	});

// });

// $.getJSON('./products.json', function(data) {
// 	console.log(data);
// });


// function Product(type, details, rates) {
// 			this.type = type;
// 			this.details = details;
// 			this.rates = rates;
// 		};


// var Health = new Product(
// 	"Health",
// 	"Text Here",
// 	"Rates Here"
// 	);

// var Vision = new Product();
