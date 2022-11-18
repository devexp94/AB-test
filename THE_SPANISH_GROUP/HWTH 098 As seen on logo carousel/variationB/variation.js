(function () {
  try {
	/* main variables */
	var debug = 0;
	var variation_name = "";

	/* all Pure helper functions */

	function waitForElement(selector, trigger, delayInterval, delayTimeout) {
	  var interval = setInterval(function () {
		if (
		  document &&
		  document.querySelector(selector) &&
		  document.querySelectorAll(selector).length > 0
		) {
		  clearInterval(interval);
		  trigger();
		}
	  }, delayInterval);
	  setTimeout(function () {
		clearInterval(interval);
	  }, delayTimeout);
	}
        //wait for swiper 
        function waitForSwiper(trigger) {
            var interval = setInterval(function () {
                if (typeof Swiper != "undefined") {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(interval);
            }, 15000)
        }


	function addScript() {
		var cssScript=''+ 
		'<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>'+
		"<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.min.css'/>";
		document.querySelector('head').insertAdjacentHTML('beforeend', cssScript);
				
		var swiperScript = document.createElement('script');
		swiperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/js/swiper.min.js';
		document.getElementsByTagName('head')[0].appendChild(swiperScript);
	  }




	  var Slider =''+ 
	  '<h2 class="eg-slider-heading">As seen on</h2>'+
	  '  <div class="swiper egswiper">'+ 
	  '          <div class="swiper-container container">'+ 
	  '              <div class="swiper-wrapper ">'+ 
	  '                  <div class="swiper-slide">'+ 
	  '         		 <div class="eg-wrapper">'+ 
	  '             		 <img src="https://thespanishgroup.org/wp-content/uploads/2022/05/Associated_Press.png" alt="Associated-Press">'+ 
	  '			          </div>'+ 
	  '                  </div>'+ 
	  '                  <div class="swiper-slide">'+ 
	  '			          <div class="eg-wrapper">'+ 
	  '             		 <img src="https://thespanishgroup.org/wp-content/uploads/2022/05/CNET_Red_Logo.jpg" alt="CNET">'+ 
	  '			          </div>'+ 
	  '                  </div>'+ 
	  '                  <div class="swiper-slide">'+ 
	  '			          <div class="eg-wrapper">'+ 
	  '             		 <img src="https://thespanishgroup.org/wp-content/uploads/2022/06/mercurynews.svg" alt="mercurynews">'+ 
	  '			          </div>'+ 
	  '                  </div>'+ 
	  '                  <div class="swiper-slide">'+ 
	  '          			<div class="eg-wrapper">'+ 
	  '             		 <img src="https://thespanishgroup.org/wp-content/uploads/2022/05/thelondoneconomic.jpg" alt="thelondoneconomic">'+ 
	  '			          </div>'+ 
	  '                  </div>'+ 
	  '                  <div class="swiper-slide">'+ 
	  '          			<div class="eg-wrapper">'+ 
	  '             		 <img src="https://thespanishgroup.org/wp-content/uploads/2022/05/B2C_adminBar_color.png" alt="B2C">'+ 
	  '          			</div>'+ 
	  '                  </div>'+ 
	  '                  <div class="swiper-slide">'+ 
	  '          			<div class="eg-wrapper">'+ 
	  '             		 <img src="https://thespanishgroup.org/wp-content/uploads/2022/05/hrcom-logo.png" alt="hrcom-logo">'+ 
	  '          			</div>'+ 
	  '                  </div>'+ 
	  '                  <div class="swiper-slide">'+ 
	  '          			<div class="eg-wrapper">'+ 
	  '             		 <img src="https://thespanishgroup.org/wp-content/uploads/2022/05/time_logo.png" alt="time-logo">'+ 
	  '          			</div>'+ 
	  '                  </div>'+ 
	  '                  <div class="swiper-slide">'+ 
	  '          			<div class="eg-wrapper">'+ 
	  '             		 <img src="https://thespanishgroup.org/wp-content/uploads/2022/05/yourmoney.png" alt="yourmoney">'+ 
	  '          			</div>'+ 
	  '                  </div>'+ 
	  '                  <div class="swiper-slide">'+ 
	  '          			<div class="eg-wrapper">'+ 
	  '             		 <img src="https://thespanishgroup.org/wp-content/uploads/2022/06/dallasnews.svg" alt="dallasnews">'+ 
	  '          			</div>'+ 
	  '                  </div>'+ 
	  '                  <div class="swiper-slide">'+ 
	  '          			<div class="eg-wrapper">'+ 
	  '             		 <img src="https://thespanishgroup.org/wp-content/uploads/2022/06/Forbes-logo.svg" alt="Forbes-logo">'+ 
	  '          			</div>'+ 
	  '                  </div>'+ 
	  '                  <div class="swiper-slide">'+ 
	  '          			<div class="eg-wrapper">'+ 
	  '             		 <img src="https://thespanishgroup.org/wp-content/uploads/2022/06/houstonchronicle.svg" alt="houstonchronicle">'+ 
	  '          			</div>'+ 
	  '                  </div>'+ 
	  '                  <div class="swiper-slide">'+ 
	  '          			<div class="eg-wrapper">'+ 
	  '             		 <img src="https://thespanishgroup.org/wp-content/uploads/2022/06/Inc5000.svg" alt="Inc5000">'+ 
	  '          			</div>'+ 
	  '                  </div>'+ 
	  '              </div>'+ 
	  '              <div class="swiper-button-next"></div>'+ 
	  '              <div class="swiper-button-prev"></div>'+ 
	  '          </div>'+ 
	  '  </div>';
    

	function init() {
		
		document.querySelector('.template_banner').insertAdjacentHTML('afterend', Slider);
        waitForSwiper(function(){
			var bmswiper = new Swiper ('.swiper-container', {
				// Optional parameters
				direction: 'horizontal',
				spaceBetween: 20,
				slidesPerView: 6,
				roundLengths: true,
				grabCursor: false,
				mousewheelControl: false,
				keyboardControl: false,
				loop: true,
				autoplay: 2500,
				navigation: {
				  nextEl: '.swiper-button-next',
				  prevEl: '.swiper-button-prev',
				},
				breakpoints: {
					499: { /* when window >=0px - webflow mobile landscape/portriat */
					  slidesPerView: 2,
					  spaceBetween: 10,
					  slidesOffsetBefore: 0,
					},
					699: { /* when window >=0px - webflow mobile landscape/portriat */
					  slidesPerView: 4,
					  spaceBetween: 10,
					  slidesOffsetBefore: 0,
					}
				  }
			})
		});

		window.dispatchEvent(new Event('resize'));
	}

	
	 addScript();

	/* Initialise variation */
	waitForElement(".template_banner", init, 50, 25000);
	} catch (e) {
	if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
