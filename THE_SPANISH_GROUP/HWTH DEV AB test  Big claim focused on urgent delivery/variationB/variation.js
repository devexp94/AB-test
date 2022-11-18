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

	var egList = ''+
	'<li>Certified translations</li>'+
	'<li><b class="sky_blue">Same Day</b> Delivery Available</li>'+
	'<li>Certified Translations in Over <b class="sky_blue">90+ Languages</b></li>';
	
	function init() {

		document.querySelector('.banner_text .english.banner_ul').innerHTML = egList;

	}

	/* Initialise variation */
	waitForElement(".banner_text .english.banner_ul li", init, 100, 25000);
  } catch (e) {
	if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
