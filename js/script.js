'use strict';

$.scrollify({
	section: ".scroll", 					//- класс секций, которые будут перелистываться
	interstitialSection: "",
	easing: "easeOutExpo",
	scrollSpeed: 1100,
	offset: 0,
	scrollbars: true,
	// standardScrollElements: ".cat",	//- секция, у которой будет обычный скролл
	setHeights: true,					//- подстраивание высот секций под высоту экрана
	overflowScroll: true,
	updateHash: true,
	touchScroll: true,
	before: function () { },
	after: function () { },
	afterResize: function () { },
	afterRender: function () { }
});