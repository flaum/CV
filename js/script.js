var portfolioItems;
var order;
var items;
var title;
var reverse;

$(document).ready(function() {
	portfolioContainer = $(".portfolio");

	function reverse(container) {
		console.log("start");
		items = $(container).children("section");
		blockTitle = $(container).children("h1");
		for(var i = 0; i < items.length; i++) {
			order = -i + "";
			console.log(i);
			$(items[i]).css("order", order);
		};
		blockTitle.css("order", parseInt(order) - 1);
		console.log("end")
	};

	reverse(portfolioContainer);
});
