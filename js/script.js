var portfolioItems;
var order;
var items;
var title;
var reverse;
var portfolioImgs;
var imgsUrlMob = [
	"img/mba-mobile@1x.jpg",
	"img/mishka-mobile@1x.jpg",
	"img/gllacy-mobile@1x.jpg",
	"img/sedona-mobile@1x.jpg"
];
var imgsUrlTabl = [
	"img/mba-tablet@1x.jpg",
	"img/mishka-tablet@1x.jpg",
	"img/gllacy-tablet@1x.jpg",
	"img/sedona-tablet@1x.jpg"
];
var imgsUrlDesk = [
	"img/mba-desktop@1x.jpg",
	"img/mishka-desktop@1x.jpg",
	"img/gllacy-desktop@1x.jpg",
	"img/sedona-desktop@1x.jpg"
];

$(document).ready(function() {
	portfolioContainer = $(".portfolio");
	portfolioImgs = $(".portfolio__slider-image-item").children();

	function adaptiveImgs(item, mob, tabl, desk) {
		var screenWidth = window.innerWidth;

		if(screenWidth < 768) {
			for(var i = 0; i < item.length; i++) {
				$(item[i]).attr("src", mob[i]);
			};
		} else if(screenWidth >= 768 && screenWidth < 1200) {
			for(var i = 0; i < item.length; i++) {
				$(item[i]).attr("src", tabl[i]);
			};
		} else {
			for(var i = 0; i < item.length; i++) {
				$(item[i]).attr("src", desk[i]);
			};
		};
	};

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
	adaptiveImgs(portfolioImgs, imgsUrlMob, imgsUrlTabl, imgsUrlDesk);

	function posFix() {
		var contHeight = parseInt($("#calculator").css("height").slice(0, $("#calculator").css("height").indexOf("px")));
		var navHeight = parseInt($(".nav-price-wrap").css("height").slice(0, $(".nav-price-wrap").css("height").indexOf("px")));
		var start = $("#calculator").offset().top;
		var end = $("#advantages").offset().top - navHeight;
		var width = $("#calculator").css("width");
		var price = $(".nav-price-wrap").children(".total-price");

		if($(window).scrollTop() + 104 >= start) {
			$(".nav-price-wrap").css("position", "fixed").css("bottom", "0").css("left", "0").css("right", "0").css("z-index", "1000").css("width", width);
			price.css("display", "flex").css("align-items", "center").css("padding", "0 20px").css("background-color", "#ededef").css("height", "64px").css("border-radius" , "50px");
			if($(".nav-price-wrap").offset().top >= $("#advantages").offset().top - navHeight) {
				$(".nav-price-wrap").css("position", "");
				price.css("display", "").css("align-items", "").css("padding", "").css("background-color", "").css("height", "").css("border-radius" , "");
			};
		} else if($(window).scrollTop() < start) {
			$(".nav-price-wrap").css("position", "");
			price.css("display", "").css("align-items", "").css("padding", "").css("background-color", "").css("height", "").css("border-radius" , "");
		};
	};
});
