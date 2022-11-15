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

		if(window.location.pathname === '/casino_b_slots_hrft/' || window.location.pathname === '/casino_b_slots_hrft'){

			document.querySelector('body').classList.add('eg-casino-b-slots');

		}else if(window.location.pathname === '/casino_a_slots_hrft/' || window.location.pathname === '/casino_a_slots_hrft'){
			document.querySelector('body').classList.add('eg-casino-a-slots');
		}else if(window.location.pathname === '/casino_c_slots_hrft/' || window.location.pathname === '/casino_c_slots_hrft'){
			document.querySelector('body').classList.add('eg-casino-c-slots');
		}else if(window.location.pathname === '/casino_c_slotsnew_hrft/' || window.location.pathname === '/casino_c_slotsnew_hrft'){
			document.querySelector('body').classList.add('eg-casino-c-slotsnew');
		}else if(window.location.pathname === '/casino_c_live_hrft/' || window.location.pathname === '/casino_c_live_hrft'){
			document.querySelector('body').classList.add('eg-casino-c-live');
		}
	}

	/* Initialise variation */
	waitForElement("body", init, 50, 15000);
  } catch (e) {
	if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
