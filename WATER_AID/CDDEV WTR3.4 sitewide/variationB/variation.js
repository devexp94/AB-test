(function () {
    'use strict';

	if (typeof unsafeWindow !== 'undefined') window = unsafeWindow;

	var tag = 'wtr-3-4', // TO DO: test name
		debug = document.cookie.indexOf('cfQA') > -1;

	window[tag] = {
		log: function (msg) {
			if (debug) console.log('[CONV]', tag, '-->', msg);
		},

		waitForElement: function (cssSelector, callback) {
			var stop,
				elementCached,
				timeout,
				check = function () {
					try {
						elementCached = document.querySelector(cssSelector);

						if (stop) return;

						if (elementCached) {
							callback(elementCached);
							clearTimeout(timeout);

							window[tag].log(cssSelector + ' found');
						} else {
							window.requestAnimationFrame(check);
						}
					} catch (err) {
						window[tag].log(err.message);
					}
				};

			window.requestAnimationFrame(check);

			timeout = setTimeout(function () {
				stop = true;
				window[tag].log(cssSelector + ' not found');
			}, 5000);
		},

		init: function () {
			try {
				this.waitForElement('body', function (docBody) {
					docBody.classList.add(tag);
                    initVariation();
				});

				if (debug && document.title.indexOf('CONV QA') < 0) {
					document.title = '[CONV QA] ' + document.title;
				}

			

				window[tag].log('test running');
			} catch (err) {
				window[tag].log(err.message);
			}
		},
	};

	setTimeout(() => {
		window[tag].init();
	}, 2000);
	var cvStrip =''+ 
	'  <div class="cv-wtr-bottom-strip">'+ 
	'      <div class="cv-wtr-bottom-strip-inr control-width">'+ 
	'          <p class="cv-wtr-strip-heading">We’ve reached 28 million people with clean water thanks to your donations</p>'+ 
	'          <div class="cv-wtr-button-container">'+ 
	'              <div class="cv-wtr-button-wraper">'+ 
	'              <div class="cv-wtr-button-wraper-inr">'+ 
	'                  <a href="/uk/donate" class="cv-wtr-button make-donation">Make a donation</a>'+ 
	'                  <a href="/uk/pay-in-your-fundraising" class="cv-wtr-button pay-donation">Pay in your fundraising</a>'+ 
	'                  <a href="/uk/donate/zakat" class="cv-wtr-button give-donation">Give Sadaqah / Zakat</a>'+ 
	'              </div>'+ 
	'              </div>'+ 
	'              <a class="cv-wtr-button donation">Donate</a>'+ 
	'          </div>'+ 
	'      </div>'+ 
	'  </div>';
	function initVariation() {
	      document.querySelector('body').insertAdjacentHTML('beforeend', cvStrip);
		
		document.querySelector('.cv-wtr-button.donation').addEventListener('click', function(){
			document.querySelector('.cv-wtr-button-container').classList.toggle('active');
		})


		var scrollPosition = window.scrollY;
		if (scrollPosition >= 78) {
			document.querySelector("body").classList.add('cv-wtr-sticky-show');
		} else {
			document.querySelector("body").classList.remove('cv-wtr-sticky-show');
		}
		
		window.addEventListener('scroll', function() {
		
			scrollPosition = window.scrollY;
		
			if (scrollPosition >= 78) {
				document.querySelector("body").classList.add('cv-wtr-sticky-show');
			} else {
				document.querySelector("body").classList.remove('cv-wtr-sticky-show');
			}
		
		});
		
	}
})();
