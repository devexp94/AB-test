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
  
	  function live(selector, event, callback, context) {
		  // helper for enabling IE 8 event bindings
		  function addEvent(el, type, handler) {
			if (el.attachEvent) el.attachEvent("on" + type, handler);
			else el.addEventListener(type, handler);
		  }
		  // matches polyfill
		  this &&
			this.Element &&
			(function(ElementPrototype) {
			  ElementPrototype.matches =
				ElementPrototype.matches ||
				ElementPrototype.matchesSelector ||
				ElementPrototype.webkitMatchesSelector ||
				ElementPrototype.msMatchesSelector ||
				function(selector) {
				  var node = this,
					nodes = (node.parentNode || node.document).querySelectorAll(selector),
					i = -1;
				  while (nodes[++i] && nodes[i] != node);
				  return !!nodes[i];
				};
			})(Element.prototype);
		  // live binding helper using matchesSelector
		  function live(selector, event, callback, context) {
			addEvent(context || document, event, function(e) {
			  var found,
				el = e.target || e.srcElement;
			  while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
			  if (found) callback.call(el, e);
			});
		  }
		  live(selector, event, callback, context);
		}
  
	  var egGrayStar =''+ 
	  '  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 12.705 512 486.59" x="0px" y="0px" xml:space="preserve" width="22px" height="22px" fill="#DCDCDC">'+ 
	  '    <polygon'+ 
	  '      points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 ">'+ 
	  '    </polygon>'+ 
	  ' </svg>';
  
	  var egYellowStar =''+ 
  '  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 12.705 512 486.59" x="0px" y="0px" xml:space="preserve" width="22px" height="22px" fill="#EB7100">'+ 
  '     <polygon'+ 
  '       points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 ">'+ 
  '     </polygon>'+ 
  '  </svg>';
  
	  var reviewPopup =''+ 
  '  <div class="eg-review-popup">'+ 
  '  <div class="eg-review-popup-overlay"></div>'+ 
  '      <div class="eg-review-popup-inr">'+ 
  '          <div class="eg-review-container">'+ 
  '              <div class="eg-review-close">×</div>'+ 
  '              <div class="eg-review-content">'+ 
  '                  <h2 class="eg-review-heading"><span class="theme-color">629</span> Verified Customer Reviews</h2>'+ 
  '                  <p class="eg-review-subheading">Shopper Approved collects trusted reviews from customers who have made a verified purchase.</p>'+ 
  '                  <div class="eg-review-rating-section">'+ 
  '                      <div class="eg-rating-left">'+ 
  '                          <div class="eg-rating-section">'+ 
  '                              <h2 class="eg-rating-heading">4.9</h2>'+ 
  '                              <div class="eg-stars">'+ 
  '                                  <div class="eg-gray-stars">'+ 
										  egGrayStar + egGrayStar + egGrayStar + egGrayStar + egGrayStar +
  '                                  </div>'+ 
  '  '+ 
  '                                  <div class="eg-yellow-stars" style="width: 98%;">'+ 
									  egYellowStar + egYellowStar + egYellowStar + egYellowStar + egYellowStar + 
  '                                  </div>'+ 
  '                              </div>'+ 
  '                              <p class="eg-rating-subheading">Overall Star<br>Rating</p>'+ 
  '                          </div>'+ 
  '                      </div>'+ 
  '                      <div class="eg-rating-right">'+ 
  '                          <div class="eg-rating-section">'+ 
  '                              <div class="eg-revStatSec">'+ 
  '                                  <div class="rating-col">'+ 
  '                                      <div class="eg-star-heading">5'+ 
  '                                          <img src="https://www.shopperapproved.com/account/images/2020/sa-star-sm-dark.svg" alt="Shopper Approved - Review Star" class="darkstarPos">'+ 
  '                                      </div>'+ 
  '                                  </div>'+ 
  '                                  <div class="progress-col">'+ 
  '                                      <div class=" w3-light-gray w3-round-xlarge mt-1">'+ 
  '                                          <div class="w3-orange w3-round-xlarge" style="height:8px;width: 96.184419713831%;"></div>'+ 
  '                                      </div>'+ 
  '                                  </div>'+ 
  '                                  <div class="count-col">'+ 
  '                                      <div class="eg-star-heading">605</div>'+ 
  '                                  </div>'+ 
  '                                  <div class="percent-col">'+ 
  '                                      <div class="eg-precent">(96.2%)</div>'+ 
  '                                  </div>'+ 
  '                              </div>'+ 
  '                              <div class="eg-revStatSec">'+ 
  '                                  <div class="rating-col">'+ 
  '                                      <div class="eg-star-heading">4'+ 
  '                                          <img src="https://www.shopperapproved.com/account/images/2020/sa-star-sm-dark.svg" alt="Shopper Approved - Review Star" class="darkstarPos">'+ 
  '                                      </div>'+ 
  '                                  </div>'+ 
  '                                  <div class="progress-col">'+ 
  '                                      <div class=" w3-light-gray w3-round-xlarge mt-1">'+ 
  '                                          <div class="w3-orange w3-round-xlarge" style="height:8px;width: 2.543720190779%;"></div>'+ 
  '                                      </div>'+ 
  '                                  </div>'+ 
  '                                  <div class="count-col">'+ 
  '                                      <div class="eg-star-heading">16</div>'+ 
  '                                  </div>'+ 
  '                                  <div class="percent-col">'+ 
  '                                      <div class="eg-precent">(2.5%)</div>'+ 
  '                                  </div>'+ 
  '                              </div>'+ 
  '                              <div class="eg-revStatSec">'+ 
  '                                  <div class="rating-col">'+ 
  '                                      <div class="eg-star-heading">3'+ 
  '                                          <img src="https://www.shopperapproved.com/account/images/2020/sa-star-sm-dark.svg" alt="Shopper Approved - Review Star" class="darkstarPos">'+ 
  '                                      </div>'+ 
  '                                  </div>'+ 
  '                                  <div class="progress-col">'+ 
  '                                      <div class=" w3-light-gray w3-round-xlarge mt-1">'+ 
  '                                          <div class="w3-orange w3-round-xlarge" style="height:8px;width: 0.63593004769475%;"></div>'+ 
  '                                      </div>'+ 
  '                                  </div>'+ 
  '                                  <div class="count-col">'+ 
  '                                      <div class="eg-star-heading">4</div>'+ 
  '                                  </div>'+ 
  '                                  <div class="percent-col">'+ 
  '                                      <div class="eg-precent">(0.6%)</div>'+ 
  '                                  </div>'+ 
  '                              </div>'+ 
  '                              <div class="eg-revStatSec">'+ 
  '                                  <div class="rating-col">'+ 
  '                                      <div class="eg-star-heading">2'+ 
  '                                          <img src="https://www.shopperapproved.com/account/images/2020/sa-star-sm-dark.svg" alt="Shopper Approved - Review Star" class="darkstarPos">'+ 
  '                                      </div>'+ 
  '                                  </div>'+ 
  '                                  <div class="progress-col">'+ 
  '                                      <div class=" w3-light-gray w3-round-xlarge mt-1">'+ 
  '                                          <div class="w3-orange w3-round-xlarge" style="height:8px;width: 0.31796502384738%;"></div>'+ 
  '                                      </div>'+ 
  '                                  </div>'+ 
  '                                  <div class="count-col">'+ 
  '                                      <div class="eg-star-heading">2</div>'+ 
  '                                  </div>'+ 
  '                                  <div class="percent-col">'+ 
  '                                      <div class="eg-precent">(0.3%)</div>'+ 
  '                                  </div>'+ 
  '                              </div>'+ 
  '                              <div class="eg-revStatSec">'+ 
  '                                  <div class="rating-col">'+ 
  '                                      <div class="eg-star-heading">1'+ 
  '                                          <img src="https://www.shopperapproved.com/account/images/2020/sa-star-sm-dark.svg" alt="Shopper Approved - Review Star" class="darkstarPos">'+ 
  '                                      </div>'+ 
  '                                  </div>'+ 
  '                                  <div class="progress-col">'+ 
  '                                      <div class=" w3-light-gray w3-round-xlarge mt-1">'+ 
  '                                          <div class="w3-orange w3-round-xlarge" style="height:8px;width: 0.31796502384738%;"></div>'+ 
  '                                      </div>'+ 
  '                                  </div>'+ 
  '                                  <div class="count-col">'+ 
  '                                      <div class="eg-star-heading">2</div>'+ 
  '                                  </div>'+ 
  '                                  <div class="percent-col">'+ 
  '                                      <div class="eg-precent">(0.3%)</div>'+ 
  '                                  </div>'+ 
  '                              </div>'+ 
  '                          </div>'+ 
  '							<div class="eg-review-link"><a href="https://www.shopperapproved.com/reviews/www.thespanishgroup.org/" target="_blank">Check all reviews</a></div>'+
  '                      </div>'+ 
  '                  </div>'+ 
  '              </div>'+ 
  '          </div>'+ 
  '      </div>'+ 
  '  </div>';
  
	  function init() {
  
		  document.querySelector('body').insertAdjacentHTML('beforeend', reviewPopup);
		 
		  document.querySelector('.shopperlink').removeAttribute('href');
		
		  document.querySelector("a.shopperlink").addEventListener("mousedown", function(e) {
			  e.preventDefault();
			  e.stopPropagation();
			  e.stopImmediatePropagation();
			  document.querySelector('body').classList.add('review-popup-show');
			  //console.log('hello');
		  });
  
  
		  live(".eg-review-popup .eg-review-popup-overlay, .eg-review-popup .eg-review-close", "click", function() {
			  document.querySelector('body').classList.remove('review-popup-show');
		  });
	  }
  
	  /* Initialise variation */
	  waitForElement(".shopperlink", init, 100, 25000);
	} catch (e) {
	  if (debug) console.log(e, "error in Test" + variation_name);
	}
  })();