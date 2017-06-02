
$(document).ready(function () {

	function isTouchDevice() {
		if (!!('ontouchstart' in window) || (!!('onmsgesturechange' in window) && window.navigator.maxTouchPoints)) {
			return true;
		}
		return false;
	};

	if (isTouchDevice()) {
		$('body').addClass('is-touchDevice');
	}

	$('#js-banner-slider').pogoSlider({
		autoplayTimeout: 10000,
		displayProgess: false,
		generateButtons: false
	});

	var workItemOpts = {
		autoplay: isTouchDevice()? true : false,
		targetHeight: 400,
		targetWidth: 800,
		displayProgess: false,
		generateButtons: false,
		generateNav: false
	}

	var workItemSliders = [];

	workItemSliders.push($('#js-work-item1').pogoSlider(workItemOpts).data('plugin_pogoSlider'));
	workItemSliders.push($('#js-work-item2').pogoSlider(workItemOpts).data('plugin_pogoSlider'));
	workItemSliders.push($('#js-work-item3').pogoSlider(workItemOpts).data('plugin_pogoSlider'));
	workItemSliders.push($('#js-work-item4').pogoSlider(workItemOpts).data('plugin_pogoSlider'));
	workItemSliders.push($('#js-work-item-kcru').pogoSlider(workItemOpts).data('plugin_pogoSlider'));
	workItemSliders.push($('#js-work-item-appalachia').pogoSlider(workItemOpts).data('plugin_pogoSlider'));

	$('.work-item-slider').on('mousemove', function (e) {

		if (e.pageX < $(this).offset().left + ($(this).width() / 2)) {
			$(this).removeClass('cursorNextArrow').addClass('cursorPrevArrow');
		} else {
			$(this).removeClass('cursorPrevArrow').addClass('cursorNextArrow');
		}

	});

	$('.work-item-slider').on('click', function (e) {

		var sliderNum = $(this).data('slidernum');

		if (e.pageX < $(this).offset().left + ($(this).width() / 2)) {
			workItemSliders[sliderNum].prevSlide();
		} else {
			workItemSliders[sliderNum].nextSlide();
		}

	});

	$('body').scrollspy({target: '.sidebar-nav'})

	$('.nav a').on('click', function (e) {

		e.preventDefault();

		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1000);

	});

	var map = new google.maps.Map(document.getElementById('contact-map'),{
		center: { lat: 52.067867, lng: -9.515018},
		zoom: 15,
		disableDefaultUI: true,
		panControl: true,
		draggable: false,
		scrollwheel: false,
		panControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		},
		styles: [
			{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"on"}]},
			{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},
			{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},
			{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#e3e3e3"}]},
			{"featureType":"landscape.natural","elementType":"labels","stylers":[{"visibility":"on"}]},
			{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},
			{"featureType":"road","elementType":"all","stylers":[{"color":"#cccccc"}]},
			{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]},
			{"featureType":"transit","elementType":"labels.icon","stylers":[{"visibility":"on"}]},
			{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"}]},
			{"featureType":"transit.line","elementType":"labels.text","stylers":[{"visibility":"on"}]},
			{"featureType":"transit.station.airport","elementType":"geometry","stylers":[{"visibility":"on"}]},
			{"featureType":"transit.station.airport","elementType":"labels","stylers":[{"visibility":"on"}]},
			{"featureType":"water","elementType":"geometry","stylers":[{"color":"#FFFFFF"}]},
			{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"}]}
		]
	});

	$('.sidebar-logo a').on('click', function (e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 });
	});

	$('.basic').fancySelect();


	function equalizeServiceItemHeight() {

		var highest = 0;

		$('.services-item').css('min-height','');

		$('.services-item').each(function () {

			var $this = $(this);

			if ($this.height() > highest) {

				highest = $this.height();

			}

		});

		$('.services-item').css('min-height',highest + 'px');

	}

	equalizeServiceItemHeight();

	$('#contact-map').height($('.contact-formWrapper').outerHeight());

	$(window).on('resize', function () {
		
		$('#contact-map').height($('.contact-formWrapper').outerHeight());

		equalizeServiceItemHeight()
	
	});

});