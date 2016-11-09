// class jquery moblie swipe
$('html').on('swiperight', function() {
	$(this).addClass('open-offcanvas');
});

// class jquery moblie swipe
$('html').on('swipeleft', function() {
	$(this).removeClass('open-offcanvas');
});

//Escondendo o offcanvas ao clickar no html
$('html').on('click', function(e) {
	if(this ===  e.target)
		$(this).removeClass('open-offcanvas');
});