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

		document.querySelector('.nfn__container .nfn__title').innerHTML = 'Get your translation within one day';

		document.querySelector('.uspbar__container .uspbar__option:nth-child(3) .uspbar__option-name').innerHTML = 'Certified Translations';

		document.querySelector('.nfn__container').insertAdjacentElement('afterend', document.querySelector('.uspbar__container'));
	}

	/* Initialise variation */
	waitForElement(".uspbar__container .uspbar__option:nth-child(3) .uspbar__option-name", init, 100, 25000);
  } catch (e) {
	if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
