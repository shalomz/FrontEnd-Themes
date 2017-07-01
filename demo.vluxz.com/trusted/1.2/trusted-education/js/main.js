;(function( $ ) {
	"use strict";

	$( document ).on( 'ready', function() {


    /**
		 * =======================================
		 * Function: Resize Background
		 * =======================================
		 */
		var resizeBackground = function() {

			$( '.slider-main__background > img , .section-content__background > img' ).each(function( i, el ) {

				  var $el   = $( el ),
					$section  = $el.parent(),
					min_w     = 300,
					el_w      = el.tagName == 'VIDEO' ? el.videoWidth : el.naturalWidth,
					el_h      = el.tagName == 'VIDEO' ? el.videoHeight : el.naturalHeight,
					section_w = $section.outerWidth(),
					section_h = $section.outerHeight(),
					scale_w   = section_w / el_w,
					scale_h   = section_h / el_h,
					scale     = scale_w > scale_h ? scale_w : scale_h,
					new_el_w, new_el_h, offet_top, offet_left;

					if ( scale * el_w < min_w ) {
						scale = min_w / el_w;
					};

					new_el_w = scale * el_w;
					new_el_h = scale * el_h;
					offet_left = ( new_el_w - section_w ) / 2 * -1;
					offet_top  = ( new_el_h - section_h ) / 2 * -1;

					$el.css( 'width', new_el_w );
					$el.css( 'height', new_el_h );
					$el.css( 'marginTop', offet_top );
					$el.css( 'marginLeft', offet_left );
			});

		};

    resizeBackground();

    /* =======================================
		 * Function: Init Resize Background
		 * =======================================
		 */

		$(window).on( 'resize', function() {
			resizeBackground();
		});

		/* =======================================
		 * Function: Init Resize Background
		 * =======================================
		 */

		var responsiveVideo = function(){
			if($().fitVids){
				$('.responsive-video').fitVids();
			}
		}

		responsiveVideo();

		/**
		 * =======================================
		 * Function: Init ToolTips
		 * =======================================
		 */
		var initTooltips = function() {
			$('[data-toggle="tooltip"]').tooltip();
		}

		initTooltips();

		/* =======================================
		 * Function: Smooth Scroll To
		 * =======================================
		 */
		var scrollTo = function(){
		  $("a.back-top").click(function(e) {
		        e.preventDefault();
		        $('html, body').animate({
		            scrollTop: 0,
		            easing: 'linear',
		        }, 1000);
		  });
		}

		scrollTo();


		/* =======================================
		 * Function: Main Slider
		 * =======================================
		 */
		var mainSlider = function(){
			if ($().slick) {
					var sliderMain = $(".slider-main");
					sliderMain.fadeIn();
					$('.slider-main').slick({
						infinite:true,
						autoplay: false,
						autoplaySpeed: 8000,
						fade: true,
		  			cssEase: 'linear',
						arrows: true,
						prevArrow: '<a href="#" class="slick-prev"><i class="fa fa-chevron-left"></i></a>',
						nextArrow: '<a href="#" class="slick-next"><i class="fa fa-chevron-right"></i></a>',
						dots: false,
						slidesToScroll:1,
						slidesToShow: 1,
						adaptiveHeight: true
					});
				 }
			 }

			mainSlider();

			/* =======================================
			 * Function: Course Slider
			 * =======================================
			 */
			var projectSlider = function(){
				if ($().slick) {
					var sliderCourse = $(".slider-project");
					sliderCourse.fadeIn();
					$('.slider-project').slick({
						infinite:true,
						autoplay: false,
						fade: false,
		  			cssEase: 'linear',
						arrows: true,
						prevArrow: '<a href="#" class="project-slide-prev"><i class="fa fa-chevron-left"></i></a>',
						nextArrow: '<a href="#" class="project-slide-next"><i class="fa fa-chevron-right"></i></a>',
						appendArrows: $('.slider-project__arrows'),
						dots: false,
						slidesToScroll:4,
						slidesToShow: 4,
						adaptiveHeight: true,
						responsive: [
												    {
												      breakpoint: 1024,
												      settings: {
												        slidesToShow: 3,
												        slidesToScroll: 3,
												      }
												    },
												    {
												      breakpoint: 768,
												      settings: {
												        slidesToShow: 2,
												        slidesToScroll: 2
												      }
												    },
												    {
												      breakpoint: 480,
												      settings: {
												        slidesToShow: 1,
												        slidesToScroll: 1
												      }
												    }
												    // You can unslick at a given breakpoint now by adding:
												    // settings: "unslick"
												    // instead of a settings object
												  ]
						});
				 }
				}

				projectSlider();

				/* =======================================
				 * Function: Testimonials Slider
				 * =======================================
				 */
				var testimonialsSlider = function(){

					if ($().slick) {
						var sliderTestimonial = $(".slider-testimonials");
						sliderTestimonial.fadeIn();
						$('.slider-testimonials').slick({
							infinite:true,
							autoplay: false,
							autoplaySpeed: 8000,
							fade: false,
			  			cssEase: 'linear',
							arrows: false,
							dots: true,
							slidesToScroll:2,
							slidesToShow: 2,
							adaptiveHeight: true,
							responsive:		[
													    {
													      breakpoint: 769,
													      settings: {
													        slidesToShow: 1,
													        slidesToScroll: 1
													      }
													    },
													    // You can unslick at a given breakpoint now by adding:
													    // settings: "unslick"
													    // instead of a settings object
													  ]
						});
					}
				}

				testimonialsSlider();

				/* =======================================
				 * Function: Course Masonry
				 * =======================================
				 */

				 var projectMasonry = function(){

					 if ($().imagesLoaded) { // check if function exists or what

						 var self = $("#project-masonry");

						 self.imagesLoaded(function () {

							 	 if ($().masonry) {
								 self.masonry({
										 gutterWidth: 15,
										 isAnimated: true,
										 itemSelector: ".project-item"
								 });
							 }
						 });

				 	 }

					 $(".project-filters__button .btn").click(function(e) {
							 e.preventDefault();

							 var filter = $(this).attr("data-filter");

							 if ($().masonryFilter) {

							 self.masonryFilter({
									 filter: function () {
											 if (!filter) return true;
											 return $(this).attr("data-filter") == filter;
									 }
							 });
						 }
					 });

				 }

				 projectMasonry();

				 /* =======================================
 				 * Function: Image Lightbox
 				 * =======================================
 				 */


				 var imageLightbox = function(){

					 if ($().magnificPopup) { // check if function exists or what


					 $('.image-gallery').magnificPopup({
						 delegate: 'a',
						 type: 'image',
						 tLoading: 'Loading image #%curr%...',
						 mainClass: 'mfp-img-mobile',
						 gallery: {
							 enabled: true,
							 navigateByImgClick: true,
							 preload: [0,1] // Will preload 0 - before current, and 1 after the current image
						 },
						 image: {
							 tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
							 titleSrc: function(item) {
								 return item.el.attr('title');
							 }
						 },
						 zoom: {
								enabled: true,
								duration: 300, // don't foget to change the duration also in CSS
								opener: function(element) {
									return element.find('img');
							 }
						 },


					});

					$('.image-gallery a.link-video').magnificPopup({
						type: 'iframe',
		        mainClass: 'mfp-fade',
		        removalDelay: 160,
		        preloader: false,

		        fixedContentPos: false
					});

					}
				}

				imageLightbox();

				/* =======================================
				* Function: Contact Map
				* =======================================
				*/

				var contactMap = function(){

				if(typeof GMaps == 'function'){
					var map = new GMaps({
					el: "#contact-map",
					lat: 41.895465,
					lng: 12.482324,
					zoom: 5,
					zoomControl : true,
					zoomControlOpt: {
						style : "SMALL",
						position: "TOP_LEFT"
					},
					panControl : true,
					streetViewControl : false,
					mapTypeControl: false,
					overviewMapControl: false
				});

				var styles = 	[
										    {
										        "featureType": "all",
										        "elementType": "labels.text.fill",
										        "stylers": [
										            {
										                "saturation": 36
										            },
										            {
										                "color": "#000000"
										            },
										            {
										                "lightness": 40
										            }
										        ]
										    },
										    {
										        "featureType": "all",
										        "elementType": "labels.text.stroke",
										        "stylers": [
										            {
										                "visibility": "on"
										            },
										            {
										                "color": "#000000"
										            },
										            {
										                "lightness": 16
										            }
										        ]
										    },
										    {
										        "featureType": "all",
										        "elementType": "labels.icon",
										        "stylers": [
										            {
										                "visibility": "off"
										            }
										        ]
										    },
										    {
										        "featureType": "administrative",
										        "elementType": "geometry.fill",
										        "stylers": [
										            {
										                "color": "#000000"
										            },
										            {
										                "lightness": 20
										            }
										        ]
										    },
										    {
										        "featureType": "administrative",
										        "elementType": "geometry.stroke",
										        "stylers": [
										            {
										                "color": "#000000"
										            },
										            {
										                "lightness": 17
										            },
										            {
										                "weight": 1.2
										            }
										        ]
										    },
										    {
										        "featureType": "landscape",
										        "elementType": "geometry",
										        "stylers": [
										            {
										                "color": "#000000"
										            },
										            {
										                "lightness": 20
										            }
										        ]
										    },
										    {
										        "featureType": "poi",
										        "elementType": "geometry",
										        "stylers": [
										            {
										                "color": "#000000"
										            },
										            {
										                "lightness": 21
										            }
										        ]
										    },
										    {
										        "featureType": "road.highway",
										        "elementType": "geometry.fill",
										        "stylers": [
										            {
										                "color": "#000000"
										            },
										            {
										                "lightness": 17
										            }
										        ]
										    },
										    {
										        "featureType": "road.highway",
										        "elementType": "geometry.stroke",
										        "stylers": [
										            {
										                "color": "#000000"
										            },
										            {
										                "lightness": 29
										            },
										            {
										                "weight": 0.2
										            }
										        ]
										    },
										    {
										        "featureType": "road.arterial",
										        "elementType": "geometry",
										        "stylers": [
										            {
										                "color": "#000000"
										            },
										            {
										                "lightness": 18
										            }
										        ]
										    },
										    {
										        "featureType": "road.local",
										        "elementType": "geometry",
										        "stylers": [
										            {
										                "color": "#000000"
										            },
										            {
										                "lightness": 16
										            }
										        ]
										    },
										    {
										        "featureType": "transit",
										        "elementType": "geometry",
										        "stylers": [
										            {
										                "color": "#000000"
										            },
										            {
										                "lightness": 19
										            }
										        ]
										    },
										    {
										        "featureType": "water",
										        "elementType": "geometry",
										        "stylers": [
										            {
										                "color": "#000000"
										            },
										            {
										                "lightness": 17
										            }
										        ]
										    }
										];
				map.addStyle({
						styledMapName:"Styled Map",
						styles: styles,
						mapTypeId: "map_style"
				});

				map.addMarker({
						lat: 41.895465,
						lng: 12.482324,
				});


				map.setStyle("map_style");
			}

			}

			contactMap();






});

})( jQuery );
