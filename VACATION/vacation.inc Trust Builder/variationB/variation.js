(function () {
	try {
	  /* main variables */
	  var debug = 0;
	  var variation_name = "";
	  var $;    
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
	  function onLoadJqueryLibrary(trigger, delayInterval, delayTimeout) {
		var interval = setInterval(function() {
		  if (window.jQuery && window.jQuery.fn) {
			clearInterval(interval);
			trigger();
		  }
		}, delayInterval);
		setTimeout(function() {
		  clearInterval(interval);
		}, delayTimeout);
	  }
	  
	  function waitForSlick(trigger, delayInterval, delayTimeout) {
		var interval = setInterval(function () {
			if (
			  window.jQuery && window.jQuery.fn && window.jQuery.fn.slick
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
  
  
		var Slider =''+ 
		'<div class="eg-product">'+
		'  <div class="egswiper">'+ 
		'      <div class="swiper-container container">'+ 
		'          <div class="eg-wrapper-outer">'+ 
		'              <div class="eg-wrapper">'+ 
		'                  <p>Leisure-Enhancing Sunscreens</p>'+ 
		'              </div>'+ 
		'          </div>'+ 
		'          <div class="eg-wrapper-outer">'+ 
		'              <div class="eg-wrapper">'+ 
		'                  <p>Award-Winning Scents</p>'+ 
		'              </div>'+ 
		'          </div>'+ 
		'          <div class="eg-wrapper-outer">'+ 
		'              <div class="eg-wrapper">'+ 
		'                  <p>Vegan & Cruelty Free</p>'+ 
		'              </div>'+ 
		'          </div>'+ 
		'          <div class="eg-wrapper-outer">'+ 
		'              <div class="eg-wrapper">'+ 
		'                  <p>Dermatologist Approved</p>'+ 
		'              </div>'+ 
		'          </div>'+ 
		'          <div class="eg-wrapper-outer">'+ 
		'              <div class="eg-wrapper">'+ 
		'                  <p>CleanClassic™ Ingredients</p>'+ 
		'              </div>'+ 
		'          </div>'+ 
		'      </div>'+ 
		'          </div>'+ 
		'  </div>';
		function addJquery(){
			var scriptEl = document.createElement('script');
			scriptEl.type = "text/javascript";
			scriptEl.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
			document.head.insertAdjacentElement('beforeend', scriptEl);
			}
			addJquery();
	
	  function init() {
		$ = window.jQuery;
		   $('.site__wrapper .filters-container').before(Slider);

 
		  waitForSlick(function () {
			 
			 window.jQuery('.swiper-container').slick({
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  autoplay: true,
			  autoplaySpeed: 0,
			  speed: 4000,
			  pauseOnHover: true,
			  cssEase: 'linear',
			  responsive: [
				{
					breakpoint: 1199,
					settings: {
					  slidesToShow: 2,
					  slidesToScroll: 1,
					  speed: 5500,
					},
				  },
				{
				  breakpoint: 699,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					speed: 5500,
				  },
				},
				{
				  breakpoint: 550,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 5500,
				  },
				},
			  ],
			});
		}, 50, 10000);
  
		  window.dispatchEvent(new Event('resize'));
	  }

	 
	   
	  onLoadJqueryLibrary(function() {
		$ = window.jQuery;
		addSlickScript();
		waitForElement('.site__wrapper .filters-container', init, 50, 25000);

	}, 50, 10000);
	  } catch (e) {
	  if (debug) console.log(e, "error in Test" + variation_name);
	}
  })();