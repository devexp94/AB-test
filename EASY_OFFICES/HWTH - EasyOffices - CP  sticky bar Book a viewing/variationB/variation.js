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
	  function onLoadJqueryLibrary(trigger, delayInterval, delayTimeout) {
		var interval = setInterval(function () {
		  if (window.jQuery && window.jQuery.fn) {
			clearInterval(interval);
			trigger();
		  }
		}, delayInterval);
		setTimeout(function () {
		  clearInterval(interval);
		}, delayTimeout);
	  }

	  var isInViewport = function(egthis) {
		var elementTop = $(egthis).offset().top;
		var elementBottom = elementTop + $(egthis).outerHeight();
	  
		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();
	  
		return elementBottom > viewportTop && elementTop < viewportBottom;
	  };
	  
	  function init() {
		var $ = window.jQuery


		var egHeading = $('.page-head .page-head-title').html();
		
		
		var egText = $('.translated-ltr .office-info .office-info-item-subtitle > font > font, :not(.translated-ltr) .office-info .office-info-item-subtitle').html();
		egText = egText.split(' ').slice(-1)[0]
		
		var egPrice = $('.translated-ltr .office-info .office-info-item-subtitle > font > font, :not(.translated-ltr) .office-info .office-info-item-subtitle').html();
		egPrice = egPrice.split(' ').slice(-2)[0]
		
		var egButtonText = $('.translated-ltr .office-info .office-info-item-cta > a[data-gtm-cta="Book a viewing"] > font > font, :not(.translated-ltr) .office-info .office-info-item-cta > a[data-gtm-cta="Book a viewing"]').html();

		var countryName = $('.page-head .page-head-title').html().split('<br>').slice(-1)[0];

		var egStrip = ''+
		'<div class="eg-top-strip">'+
		' <div class="eg-top-strip-inr">'+
		'	<p class="eg-strip-heading"><span class="eg-space">Office space in '+countryName +'</span>'+ egHeading +'</p>'+
		'	<div class="eg-right">'+
		'		<div>'+
		'		<p class="eg-form">from</p>'+
		'			<span class="eg-text">'+egText+'</span>'+
		'			<span class="eg-price">'+egPrice+'</span>'+
		'		</div>'+
		'		<a class="eg-strip-button">'+ egButtonText +'</a>'
		'	</div>'+
		'  </div>'+
		'</div>';

		$('main .breadcrumbs').after(egStrip);

		$('body').on('click', '.eg-strip-button', function(){
			$('.translated-ltr .office-info .office-info-item-cta > a[data-gtm-cta="Book a viewing"]').click();
		})

		$(window).on('resize scroll', function() {
			if (window.scrollY < 1000) {
			  document.body.classList.remove('eg-sticky-button');  
			} else {
			    document.body.classList.add('eg-sticky-button');
			}
		});
	  }
	  /* Initialise variation */
	  onLoadJqueryLibrary(function () {
		waitForElement('.translated-ltr .office-info .office-info-item-cta > a[data-gtm-cta="Book a viewing"] > font > font, :not(.translated-ltr) .office-info .office-info-item-cta > a[data-gtm-cta="Book a viewing"]', init, 100, 25000);
	  }, 50, 10000)
	} catch (e) {
	  if (debug) console.log(e, "error in Test" + variation_name);
	}
  })();