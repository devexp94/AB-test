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

	function init() {

		document.querySelector('.top-right-links li a[href^="tel"] i').insertAdjacentHTML('afterend', '<span class="call-text"><i class="fa fa-phone testphone"></i> Call Now • Open 24/7</span>');
	}

	/* Initialise variation */
	waitForElement('.top-right-links li a[href^="tel"] i', init, 100, 20000);
  } catch (e) {
	if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
