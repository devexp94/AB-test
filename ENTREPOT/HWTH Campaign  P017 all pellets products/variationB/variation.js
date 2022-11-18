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

	var egOrder =''+ 
	'  <div class="eg-order">'+ 
	'      <div class="eg-icon">'+ 
	'          <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 50 50" width="100px" height="100px">    <path d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2z M25,11c1.657,0,3,1.343,3,3s-1.343,3-3,3 s-3-1.343-3-3S23.343,11,25,11z M29,38h-2h-4h-2v-2h2V23h-2v-2h2h4v2v13h2V38z"/></svg>'+ 
	'      </div>'+ 
	'      <p class="eg-order-text"><strong>210 sacs</strong> maximum par commande Commande réservée <strong>7 jours</strong> maximum</p>'+ 
	'  </div>';

	function init() {
 
		document.querySelector('.o-product-details-inner-right .m-brico-expert').insertAdjacentHTML('beforebegin', egOrder)

	}

	/* Initialise variation */
	waitForElement(".o-product-details-inner-right .m-brico-expert", init, 100, 25000);
  } catch (e) {
	if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
