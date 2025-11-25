
// Utility to check if cookie exists
// function getCookie(name) {
// 	var cookies = document.cookie.split(';');
// 	for (var i = 0; i < cookies.length; i++) {
// 		var c = cookies[i].trim();
// 		if (c.indexOf(name + "=") === 0) {
// 		return c.substring((name + "=").length, c.length);
// 		}
// 	}
// 	return null;
// }

// Run this on page load
// window.addEventListener('DOMContentLoaded', function () {
// 	// Only show the disclaimer modal if cookie is NOT set
// 	if (!getCookie("disc_popup")) {
// 		var disclaimerModalEl = document.getElementById('disclaimersaya');
// 		var disclaimerModal = new bootstrap.Modal(disclaimerModalEl, {
// 			backdrop: false
// 		});
// 		disclaimerModal.show();

// 		// Handle "I Agree" button click
// 		document.getElementById('iagreebtn').addEventListener('click', function () {
// 			// Hide disclaimer modal
// 			var disclaimerInstance = bootstrap.Modal.getInstance(disclaimerModalEl);
// 			if (disclaimerInstance) {
// 				disclaimerInstance.hide();
// 			}

// 			// Set cookie for 2 hours
// 			var d = new Date();
// 			d.setTime(d.getTime() + (2 * 60 * 60 * 1000));
// 			var expires = "expires=" + d.toUTCString();
// 			document.cookie = "disc_popup=exists; " + expires + "; path=/";
// 		});
// 	}
// });

// Project Slider
var swiper = new Swiper(".project-slider", {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                280: {
                    slidesPerView: 1,
                },
                620: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        });
var swiper1 = new Swiper(".retail-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});

var special = new Swiper(".special-slider", {
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    speed: 2000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        280: {
            spaceBetween: 10,
        },
        768: {
            spaceBetween: 20,
        },
        1200: {
            spaceBetween: 30,
        },
    }
});

var gallery = new Swiper(".gallery-slider", {
    // effect: "creative",
    // creativeEffect: {
    //     prev: {
    //     shadow: true,
    //     translate: ["-20%", 0, -1],
    //     },
    //     next: {
    //     translate: ["100%", 0, 0],
    //     },
    // },
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    speed: 2000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    // breakpoints: {
    //     280: {
    //         slidesPerView: 1,
    //     },
    //     768: {
    //         slidesPerView: 2,
    //     },
    //     1200: {
    //         slidesPerView: 3,
    //     },
    // }
});
var fp = new Swiper(".fpContainer", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});
  

$(document).ready(function () {
  "use strict";

  $(".scrollDown").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(".scrollto").offset().top,
      },
      "slow"
    );
  });

  $(".tablinks").click(function () {
    $(".tablinks.active").removeClass("active");
    $(this).addClass("active");
    $(".tabcontent").hide();
    $("#tabcontent-" + $(this).data("target")).fadeIn(300);
  });

  // if($(window).width() < 426){
  // 	//var video = $("#banner-video");
  // 	//var source = $("#vid-source");
  // 	var newmp4 = 'videos/mb-video.mp4';
  // 	$("#banner-video source").attr('src', newmp4);
  // 	$('#banner-video').get(0).load();
  // 	$('#banner-video').get(0).play();
  // }
});

$(window).scroll(function () {
  "use strict";
  var wScroll = $(window).scrollTop();

  
	// if(wScroll > $('.hm-overview-container').offset().top - ($(window).height() / 1.5)) {
	// 	$(".building-sketch[data-position='bottom right']").css({
	// 		'transform': 'translate(0px, '+wScroll/35+'%)'
	// 	});
	// 	$(".building-sketch[data-position='top left']").css({
	// 		'transform': 'translate(0px, -'+wScroll/35+'%)'
	// 	});
	// }

  // if (wScroll > $('.animate-section2').offset().top - ($(window).height() / 1.5)) {
  // 	$('.animate-section2 .animate').each(function (i) {
  // 		setTimeout(function () {
  // 			$('.animate-section2 .animate').eq(i).addClass('doneTranslate');
  // 		}, 150 * (i + 1));
  // 	});
  // }
  // if (wScroll > $('.animate-section3').offset().top - ($(window).height() / 1.5)) {
  // 	$('.animate-section3 .animate').each(function (i) {
  // 		setTimeout(function () {
  // 			$('.animate-section3 .animate').eq(i).addClass('doneTranslate');
  // 		}, 150 * (i + 1));
  // 	});
  // }
  // if (wScroll > $('.animate-section4').offset().top - ($(window).height() / 1.5)) {
  // 	$('.animate-section4 .animate').each(function (i) {
  // 		setTimeout(function () {
  // 			$('.animate-section4 .animate').eq(i).addClass('doneTranslate');
  // 		}, 150 * (i + 1));
  // 	});
  // }
  // if (wScroll > $('.animate-section5').offset().top - ($(window).height() / 1.5)) {
  // 	$('.animate-section5 .animate').each(function (i) {
  // 		setTimeout(function () {
  // 			$('.animate-section5 .animate').eq(i).addClass('doneTranslate');
  // 		}, 150 * (i + 1));
  // 	});
  // }
  // if (wScroll > $('.animate-section6').offset().top - ($(window).height() / 1.5)) {
  // 	$('.animate-section6 .animate').each(function (i) {
  // 		setTimeout(function () {
  // 			$('.animate-section6 .animate').eq(i).addClass('doneTranslate');
  // 		}, 150 * (i + 1));
  // 	});
  // }
  // if (wScroll > $('.animate-section7').offset().top - ($(window).height() / 1.5)) {
  // 	$('.animate-section7 .animate').each(function (i) {
  // 		setTimeout(function () {
  // 			$('.animate-section7 .animate').eq(i).addClass('doneTranslate');
  // 		}, 150 * (i + 1));
  // 	});
  // }
});
