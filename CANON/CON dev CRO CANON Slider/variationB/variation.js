(function () {
	"use strict";

	if (typeof unsafeWindow !== "undefined") window = unsafeWindow;

	var tag = "cv-156",
		debug = document.cookie.indexOf("cfQA") > -1;

  var configs = {
    '/cameras/eos-r5/':{
      galleryImgsSel: '.lightbox .product-gallery img, .lfts .lfts__media-wrapper img',
      heroSel: '.lfts .lfts__wrapper .lfts__media-wrapper',
      galleryCTASel: '.lfts__content .lfts__gallery-btn',
      closeCTA: 'div#lightbox.can-gallery .lightbox__close-button',
      videoThumbnail: 'header.hero-full .hero-full__picture-wrapper .canon-amplience img',
      videoCTA: 'header.hero-full .hero-full__lightbox-video'
    },
    '/cameras/eos-r6/': {
      galleryImgsSel: '.lightbox .product-gallery img, .lfts .lfts__media-wrapper img',
      heroSel: '.lfts .lfts__wrapper .lfts__media-wrapper',
      galleryCTASel: '.lfts__content .lfts__gallery-btn',
      closeCTA: 'div#lightbox.can-gallery .lightbox__close-button'
    },
    '/cameras/eos-250d/': {
      galleryImgsSel: '.pl-gallery .pl-gallery__items img, .row.no-gutter.pl-bg--gray-lightest .pl-amplience img',
      heroSel: 'body .pl-bg--gray-lightest.row.no-gutter > div[class*=\'col-\']:first-child',
      galleryCTASel: '.pl-bg--gray-lightest #pl-gallery-trigger',
      closeCTA: '.pl-gallery .pl-gallery__close',
      videoThumbnail: '.pl-hero .pl-hero__inner img.pl-amplience__image',
      videoCTA: '.pl-hero .pl-hero__inner .js-video-launcher',
      showPopup: true
    },
    '/video-cameras/xf605/': {
      galleryImgsSel: '.lightbox .product-gallery img.canon-amplience__image, .block-hero-header__media--image-wrapper .canon-amplience img',
      heroSel: '.block-hero-header__container-wrapper .block-hero-header__media--image-wrapper',
      galleryCTASel: '.block-hero-header__media .block-hero-header__gallery-btn',
      closeCTA: 'div#lightbox.can-gallery .lightbox__close-button',
      videoThumbnail: 'header.hero-full .hero-full__picture-wrapper .canon-amplience img',
      videoCTA: 'header.hero-full .hero-full__lightbox-video'
    },
    '/cameras/eos-90d/': {
      galleryCTASel: '.pl-bg--gray-lightest #pl-gallery-trigger',
      heroSel: '#remove-tint .row.no-gutter > [class*=\'col-\']:first-child',
      galleryImgsSel: '.pl-gallery .pl-gallery__items img, .row.no-gutter.pl-bg--gray-lightest .pl-amplience img',
      closeCTA: '.pl-gallery .pl-gallery__close',
      videoThumbnail: '#video_1 .pl-amplience img',
      videoCTA: '.pl-hero .pl-hero__inner .js-video-launcher',
      showPopup: true,
    },
    '/cameras/eos-r3/': {
      heroSel: '.lfts .lfts__media-wrapper',
      galleryCTASel: '.lfts .lfts__content .lfts__gallery-btn',
      galleryImgsSel: '.lightbox .product-gallery img.canon-amplience__image, .lfts .lfts__media-wrapper img',
      closeCTA: 'div#lightbox.can-gallery .lightbox__close-button',
      videoCTA: '.hero-full .hero-full__content .button--video-blue',
      videoThumbnail: 'header.hero-full .hero-full__picture-wrapper .canon-amplience img'
    }, 
    '/cameras/eos-m50-mark-ii/': {
      galleryCTASel: '.lfts .lfts__content .lfts__gallery-btn',
      galleryImgsSel: '.lightbox .product-gallery img.canon-amplience__image, .lfts .lfts__media-wrapper img',
      heroSel: '.lfts .lfts__wrapper .lfts__media-wrapper',
      closeCTA: 'div#lightbox.can-gallery .lightbox__close-button',
      videoThumbnail: 'header.hero-full .hero-full__picture-wrapper .canon-amplience img',
      videoCTA: 'header.hero-full .hero-full__lightbox-video'
    },
    '/cameras/eos-r/': {
      galleryCTASel: '.pl-spacer #pl-gallery-trigger',
      galleryImgsSel: '.pl-gallery .pl-gallery__items img, .pl-hero.pl-hero--full .pl-hero__inner.pl-spacer  .pl-amplience img',
      heroSel: '',
      closeCTA: '.pl-gallery .pl-gallery__close',
      videoThumbnail: '#video_1 .pl-amplience img',
      videoCTA: '.pl-hero .pl-hero__inner .js-video-launcher',
      showPopup: true,
    }, 
    '/cameras/eos-m50/': {
      galleryCTASel: '.pl-spacer #pl-gallery-trigger',
      heroSel: '#remove-tint .row.no-gutter > [class*=\'col-\']:first-child',
      galleryImgsSel: '.pl-gallery .pl-gallery__items img, .row.no-gutter.pl-bg--gray-lightest .pl-amplience img',
      closeCTA: '.pl-gallery .pl-gallery__close',
      videoThumbnail: '#video_1 .pl-amplience img',
      videoCTA: '.pl-hero .pl-hero__inner .js-video-launcher',
      showPopup: true,
    }, 
    '/cameras/canon-powershot-zoom/': {
      galleryCTASel: '.block-hero-header__media-footer .block-hero-header__gallery-btn',
      heroSel: '.block-hero-header__container-wrapper .block-hero-header__media--image-wrapper',
      galleryImgsSel: '.lightbox .product-gallery img.canon-amplience__image, .block-hero-header__media--image-wrapper .canon-amplience img',
      closeCTA: 'div#lightbox .lightbox__close-button',
      videoThumbnail: 'header.hero-full .hero-full__picture-wrapper .canon-amplience img',
      videoCTA: 'header.hero-full .hero-full__lightbox-video'
    },
    '/cameras/eos-850d/': {
      galleryCTASel: '.pl-spacer #pl-gallery-trigger',
      galleryImgsSel: '.pl-gallery .pl-gallery__items img, .row.no-gutter.pl-bg.pl-bg--white.pl-relative .pl-amplience img',
      heroSel: 'body .pl-bg--white > .col-lg-8',
      closeCTA: '.pl-gallery .pl-gallery__close',
      videoThumbnail: '#video_1 .pl-amplience img',
      videoCTA: '.pl-hero .pl-hero__inner .js-video-launcher',
      showPopup: true,
    },
    '/cameras/powershot-px/': {
      galleryCTASel: '.lfts__content .lfts__gallery-btn',
      galleryImgsSel: '.lightbox .product-gallery img.canon-amplience__image, .lfts .lfts__media-wrapper img',
      heroSel: '.lfts .lfts__wrapper .lfts__media-wrapper',
      closeCTA: 'div#lightbox.can-gallery .lightbox__close-button',
      videoThumbnail: 'header.hero-full .hero-full__picture-wrapper .canon-amplience img',
      videoCTA: 'header.hero-full .hero-full__lightbox-video'
    },
    '/cameras/eos-m6-mark-ii/': {
      galleryImgsSel: '.pl-carousel .pl-carousel__item img.pl-amplience__image, .row.no-gutter.pl-bg.pl-bg--white.pl-relative .pl-amplience img',
      heroSel: '#remove-tint .row.no-gutter > [class*=\'col-\']:first-child',
      videoThumbnail: '#video_1 .pl-amplience img',
      videoCTA: '.pl-hero .pl-hero__inner .js-video-launcher',
      showPopup: true,
    },
    '/cameras/eos-1d-x-mark-iii/': {
      galleryCTASel: '.pl-spacer #pl-gallery-trigger',
      galleryImgsSel: '.pl-gallery .pl-gallery__items img, .pl-hero.pl-hero--full .pl-hero__inner.pl-spacer  .pl-amplience img',
      closeCTA: 'div#lightbox.can-gallery .lightbox__close-button',
      videoThumbnail: '#video_1 .pl-amplience img',
      videoCTA: '.pl-hero .pl-hero__inner .js-video-launcher',
      showPopup: true,
    },
  };

	window[tag] = {
		log: function (msg) {
			if (debug) console.log("[CONV]", tag, "-->", msg);
		},

		waitForElement: function (cssSelector, callback) {
			var elementCached,
				maxCalls = 500,
				interval = setInterval(function () {
					elementCached = document.querySelector(cssSelector);

					if (elementCached) {
						clearInterval(interval);

						try {
							callback(elementCached);
						} catch (err) {
							window[tag].log(err.message);
						}
					}

					if (--maxCalls < 0) {
						clearInterval(interval);
						window[tag].log(cssSelector + " not found");
					}
				}, 20);
		},

		init: function () {
			try {
				this.waitForElement(".lfts .lfts__media-wrapper .canon-amplience__image, .pl-spacer #pl-gallery-trigger, .block-hero-header__media-footer .block-hero-header__gallery-btn, .pl-tabs__wrap a[href='#gallery']", function (docBody) {
					docBody.classList.add(tag);
          setTimeout(function() {
            initVariation();
          }, 1000)
				});

				if (debug && document.title.indexOf("CONV QA") < 0) {
					document.title = "[CONV QA] " + document.title;
				}


				window[tag].log("test running");
			} catch (err) {
				window[tag].log(err.message);
			}
		},

		sendEvtOpt: function (evName, isScrollMetric) {
			if (isScrollMetric) evName = "conv_scrolls_" + evName + "_percent_of_page";

			window["optimizely"].push({
				type: "event",
				eventName: evName,
			});

			window[tag].log("metric triggered: " + evName);
		},
	};

	window[tag].init();

  function waitForjQuery(trigger, delayInterval, delayTimeout) {
    var interval = setInterval(function () {
      if (
        window.jQuery != undefined
      ) {
        clearInterval(interval);
        trigger();
      }
    }, delayInterval);
    setTimeout(function () {
      clearInterval(interval);
    }, delayTimeout);
  }

  function waitForSlick(trigger, delayInterval, delayTimeout) {
    var interval = setInterval(function () {
      if (
        window.$ && window.$.fn && window.$.fn.slick
      ) {
        clearInterval(interval);
        trigger();
      }
    }, delayInterval);
    setTimeout(function () {
      clearInterval(interval);
    }, delayTimeout);
  }

  function addSlickScript() {
    var linkEl = document.createElement('link');
    linkEl.rel = 'stylesheet';
    linkEl.type = 'text/css';
    linkEl.href = 'https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css';
    document.head.insertAdjacentElement('beforeend', linkEl);
    var scriptEl = document.createElement('script');
    scriptEl.type = "text/javascript";
    scriptEl.src = 'https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js';
    document.head.insertAdjacentElement('beforeend', scriptEl);
  }

  function initVideo() {
    var videoSrc = document.querySelector(configs[window.location.pathname].videoThumbnail).getAttribute('src') || document.querySelector(configs[window.location.pathname].videoThumbnail).getAttribute('data-src'); 
    document.querySelectorAll('#can-player').forEach(function(item, index) {
      item.insertAdjacentHTML('beforeend', '<img src="'+videoSrc+'" /><div class="button--play-wrapper"> <svg width="24" height="32" xmlns="http://www.w3.org/2000/svg"> <path d="M22.954 13.88L3.39.861A1.775 1.775 0 0 0 .464 2.45l.133 26.708c-.053.73.308 1.429.934 1.808.23.12.484.181.742.18a2.269 2.269 0 0 0 1.266-.433L22.972 17.45a2.054 2.054 0 0 0-.019-3.57h.001zm-.963 2.128L2.557 29.271c-.06.042-.126.078-.194.106a1.017 1.017 0 0 1-.024-.229L2.206 2.44a.136.136 0 1 1 .216-.128l19.566 13.02c.194.133.27.26.27.339 0 .077-.067.203-.268.338z" fill="currentColor" fill-rule="nonzero"></path></svg> </div>');
    })
  }
  function createSliderHTML() {
    var slideHTML = '';
    var galleryImages = document.querySelectorAll(configs[window.location.pathname].galleryImgsSel);
    for(var i = 0; i < galleryImages.length; i++) {
      slideHTML += '<div class="hero-slide"><img src="'+(galleryImages[i].getAttribute('data-src') || galleryImages[i].getAttribute('src'))+'" /></div>';
      if(i == 1 && configs[window.location.pathname].videoCTA) {
        slideHTML += '<div class="hero-slide"><div id="can-player" class="can-player"></div></div>';
      }
      if(window.location.pathname == '/cameras/eos-90d/' && i == 5) {
        break;
     }
    }
    return ''+ 
    '  <div class="cv-156-hero-slider">'+ 
    '  '+ slideHTML +
    '  </div>'+ 
    '  <div class="cv-156-hero-slider-nav">'+ 
    '  '+ slideHTML +
    '  </div>';
  }



	function initVariation() {
    if(window.location.pathname == '/cameras/canon-powershot-zoom/'){
            document.body.classList.add('white-bg-hero-mobile');
        }
    if(window.location.pathname == '/cameras/canon-powershot-zoom/' || window.location.pathname == '/cameras/eos-1d-x-mark-iii/' || window.location.pathname == '/cameras/eos-r/' || window.location.pathname == '/cameras/eos-m50/' || window.location.pathname == '/cameras/eos-m6-mark-ii/' || window.location.pathname == '/cameras/eos-250d/' || window.location.pathname == '/cameras/eos-90d/' || window.location.pathname == '/cameras/eos-m50-mark-ii/' || window.location.pathname == '/cameras/eos-2000d/' || window.location.pathname == '/cameras/eos-850d/' || window.location.pathname == '/cameras/powershot-px/') {
      document.body.classList.add('white-bg-hero');
    } 
    if(window.location.pathname == 'cameras/canon-powershot-zoom/' || window.location.pathname == '/cameras/eos-r5/' || window.location.pathname == '/cameras/eos-r6/' || window.location.pathname == '/video-cameras/xf605/' || window.location.pathname == '/cameras/eos-r3/' || window.location.pathname == '/cameras/eos-m50-mark-ii/') {
      document.body.classList.add('can-centered-video');
    }
    if(window.location.pathname == '/cameras/eos-r/' || window.location.pathname == '/cameras/eos-1d-x-mark-iii/') {
      document.body.classList.add('cv-156-can-hero-redesign');
    }
		// TO DO: test code here
    configs[window.location.pathname] && configs[window.location.pathname].galleryCTASel && document.querySelector(configs[window.location.pathname].galleryCTASel).click();
    window[tag].waitForElement(configs[window.location.pathname].galleryImgsSel, function() {
      var imgsEl = document.querySelectorAll(configs[window.location.pathname].galleryImgsSel)[2];
      imgsEl.closest('.lightbox, .pl-gallery') && imgsEl.closest('.lightbox, .pl-gallery').classList.add('can-gallery');
      if(window.location.pathname == '/cameras/eos-r/' || window.location.pathname == '/cameras/eos-1d-x-mark-iii/') {
        document.querySelector('.pl-hero--full .pl-hero__inner .pl-hero__middle .row').insertAdjacentHTML('afterbegin', '<div class="col-md-6 pl-color pl-color--white can-carousel-sec">'+createSliderHTML()+'</div>');
      } else if(window.location.pathname == '/cameras/eos-850d/') {
        document.querySelector(".row.no-gutter [class*='col-'] .pl-amplience").parentElement.innerHTML = createSliderHTML();
      } else {
        document.querySelector(configs[window.location.pathname].heroSel).innerHTML = createSliderHTML();
      }
      setTimeout(function() {
        document.querySelector(configs[window.location.pathname].closeCTA).click();
        imgsEl.closest('.lightbox, .pl-gallery') && imgsEl.closest('.lightbox, .pl-gallery').classList.remove('can-gallery');
      }, 2000);
      if(window.location.pathname == '/cameras/eos-90d/') {
     document.body.classList.add('eos-90d');
     }
    });
    
    window[tag].waitForElement('.hero-full .hero-full__content .button--video-blue, .pl-hero .pl-hero__inner .js-video-launcher, .hero-full .hero-full__content .hero-full__lightbox-video', function() {
      initVideo();
      document.querySelector('.cv-156-hero-slider .can-player .button--play-wrapper').addEventListener('click', function() {
         window[tag].sendEvtOpt(tag + "_video_play");
        document.querySelector(configs[window.location.pathname].videoCTA).click();
        document.querySelector(configs[window.location.pathname].videoCTA).closest('.pl-hero.pl-hero--half').classList.add('can-popup-video')
        document.body.classList.add('show-video-modal');
        configs[window.location.pathname].showPopup && function(){
          window[tag].waitForElement('.pl-hero.pl-hero--half.pl-hero--half--takeover.pl-anchor-tabs--section .js-cover-toggle', function() {
            document.querySelector('.pl-hero.pl-hero--half.pl-hero--half--takeover.pl-anchor-tabs--section .js-cover-toggle').addEventListener('click', function() {
              document.body.classList.remove('show-video-modal');
            })
          });
        }();
      })
    });
    var slideShow = 0;
    if(window.location.pathname == '/cameras/eos-r3/' || window.location.pathname == '/video-cameras/xf605/' || window.location.pathname == '/cameras/canon-powershot-zoom/' || window.location.pathname == '/cameras/eos-r5/' || window.location.pathname == '/cameras/eos-r6/' || window.location.pathname == '/cameras/eos-m50-mark-ii/' || window.location.pathname == '/cameras/powershot-px/') {
      slideShow = 6;
    } else if(window.location.pathname == '/cameras/eos-250d/') {
      slideShow = 5;
    } else {
      slideShow = 4;
    }

    waitForjQuery(function() {
      addSlickScript();
      waitForSlick(function() {
        var $ = window.jQuery;
        $('.cv-156-hero-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          asNavFor: '.cv-156-hero-slider-nav',
        });
        $('.cv-156-hero-slider-nav').slick({
          slidesToShow: slideShow,
          slidesToScroll: 1,
          infinite: true, 
          asNavFor: '.cv-156-hero-slider',
          vertical: true,
          focusOnSelect: true,
          verticalSwiping: true,
          autoplay: false,
          centerMode: false,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                vertical: false,
                horizontal: true,
                focusOnSelect: true,
                verticalSwiping: false,
              },
            },
          ]
        });
      }, 50, 10000);
      //on resize move it to first slide
      window.addEventListener('resize', function(event) {
 if(window.jQuery('.cv-156-hero-slider-nav')) 
 window.jQuery('.cv-156-hero-slider-nav').slick('slickGoTo', 0);

    }, true);
    }, 50, 10000);
	}
})();