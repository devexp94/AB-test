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

        function live(selector, event, callback, context) {
          /****Helper Functions****/
          // helper for enabling IE 8 event bindings
          function addEvent(el, type, handler) {
            if (el.attachEvent) el.attachEvent("on" + type, handler);
            else el.addEventListener(type, handler);
          }
          // matches polyfill
          this.Element &&
            (function (ElementPrototype) {
              ElementPrototype.matches =
                ElementPrototype.matches ||
                ElementPrototype.matchesSelector ||
                ElementPrototype.webkitMatchesSelector ||
                ElementPrototype.msMatchesSelector ||
                function (selector) {
                  var node = this,
                    nodes = (node.parentNode || node.document).querySelectorAll(
                      selector
                    ),
                    i = -1;
                  while (nodes[++i] && nodes[i] != node);
                  return !!nodes[i];
                };
            })(Element.prototype);
          // live binding helper using matchesSelector
          function live(selector, event, callback, context) {
            addEvent(context || document, event, function (e) {
              var found,
                el = e.target || e.srcElement;
              while (
                el &&
                el.matches &&
                el !== context &&
                !(found = el.matches(selector))
              )
                el = el.parentElement;
              if (found) callback.call(el, e);
            });
          }
          live(selector, event, callback, context);
        }
        
  function fnc_scrollto(to){
    to = parseInt(to);
var i = parseInt(window.pageYOffset);
    if (i < to) {
        var int = setInterval(function() {
            if (i > (to-20)) i += 1;
            else if (i > (to-40)) i += 3;
            else if (i > (to-80)) i += 8;
            else if (i > (to-160)) i += 18;
            else if (i > (to-200)) i += 24;
            else if (i > (to-300)) i += 40;
            else i += 60;
            window.scroll(0, i);
            if (i >= to) clearInterval(int);
        }, 10);
    }
    else {
        var int = setInterval(function() {
            if (i < (to+20)) i -= 1;
            else if (i < (to+40)) i -= 3;
            else if (i < (to+80)) i -= 8;
            else if (i < (to+160)) i -= 18;
            else if (i < (to+200)) i -= 24;
            else if (i < (to+300)) i -= 40;
            else i -= 60;
            window.scroll(0, i);
            if (i <= to) clearInterval(int);
        }, 10);
    }
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

    var TickIcon =''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">'+ 
'  <circle cx="4.5" cy="4.5" r="4.5" fill="#23AC6C"/>'+ 
'  <path d="M2.5 5.5L3.5 6.5L7 3" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>'+ 
'  </svg>';



	  var Slider =''+ 
        '  <div class="swiper egswiper">'+ 
    '      <div class="swiper-container">'+ 
    '          <div class="swiper-wrapper ">'+ 
    '              <div class="swiper-slide">'+ 
    '                  <div class="eg-review-card-outer">'+ 
    '                  <div class="eg-review-card">'+ 
    '                      <div class="eg-review-top">'+ 
    '                          <div class="eg-star">'+ 
    '                              <span class="p-icon icon-int-star black" style="margin-right: 0px;"></span>'+ 
    '                              <span class="p-icon icon-int-star black" style="margin-right: 0px;"></span>'+ 
    '                              <span class="p-icon icon-int-star black" style="margin-right: 0px;"></span>'+ 
    '                              <span class="p-icon icon-int-star black" style="margin-right: 0px;"></span>'+ 
    '                              <span class="p-icon icon-int-star black" style="margin-right: 0px;"></span>'+ 
    '                          </div>'+ 
    '                          <div class="review-info-divider"></div>'+ 
    '                          <p class="eg-verified-text">' + TickIcon + ' Verified purchaser</p>'+ 
    '                      </div>'+ 
    '                      <p class="eg-review-text">“It came very fast. You can get your exact size fit. It has a tight texture. Pretty good”</p>'+ 
    '                      <div class="eg-review-bottom">'+ 
    '                          <p class="eg-date">28 Nov 2021</p>'+ 
    '                          <p class="eg-review-link">Read more reviews</p>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '              </div>'+ 
    '              <div class="swiper-slide">'+ 
    '                  <div class="eg-review-card-outer">'+
    '                  <div class="eg-review-card">'+ 
    '                      <div class="eg-review-top">'+ 
    '                          <div class="eg-star">'+ 
    '                              <span class="p-icon icon-int-star black" style="margin-right: 0px;"></span>'+ 
    '                              <span class="p-icon icon-int-star black" style="margin-right: 0px;"></span>'+ 
    '                              <span class="p-icon icon-int-star black" style="margin-right: 0px;"></span>'+ 
    '                              <span class="p-icon icon-int-star black" style="margin-right: 0px;"></span>'+ 
    '                              <span class="p-icon icon-int-star black" style="margin-right: 0px;"></span>'+ 
    '                          </div>'+ 
    '                          <div class="review-info-divider"></div>'+ 
    '                          <p class="eg-verified-text">' + TickIcon + ' Verified purchaser</p>'+ 
    '                      </div>'+ 
    '                      <p class="eg-review-text">” whilst the second should read “Extremely nice leggings, I recommend you to buy your full winter size”</p>'+ 
    '                      <div class="eg-review-bottom">'+ 
    '                          <p class="eg-date">28 Nov 2021</p>'+ 
    '                          <p class="eg-review-link">Read more reviews</p>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '              </div>'+ 
    '              <div class="swiper-slide">'+ 
    '                  <div class="eg-review-card-outer">'+ 
    '                  <div class="eg-review-card">'+ 
    '                      <div class="eg-review-top">'+ 
    '                          <div class="eg-star">'+ 
    '                              <span class="p-icon icon-int-star black" style="margin-right: 0px;"></span>'+ 
    '                              <span class="p-icon icon-int-star black" style="margin-right: 0px;"></span>'+ 
    '                              <span class="p-icon icon-int-star black" style="margin-right: 0px;"></span>'+ 
    '                              <span class="p-icon icon-int-star black" style="margin-right: 0px;"></span>'+ 
    '                              <span class="p-icon icon-int-star black" style="margin-right: 0px;"></span>'+ 
    '                          </div>'+ 
    '                          <div class="review-info-divider"></div>'+ 
    '                          <p class="eg-verified-text">' + TickIcon + ' Verified purchaser</p>'+ 
    '                      </div>'+ 
    '                      <p class="eg-review-text">“It came very fast. You can get your exact size fit. It has a tight texture. Pretty good”</p>'+ 
    '                      <div class="eg-review-bottom">'+ 
    '                          <p class="eg-date">28 Nov 2021</p>'+ 
    '                          <p class="eg-review-link">Read more reviews</p>'+ 
    '                      </div>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '          <div class="swiper-button-next"><span class="icon-forward-button"></span></div>'+ 
    '          <div class="swiper-button-prev"><span class="icon-back-button"></span></div>'+ 
    '      </div>'+ 
    '  </div>';
    
	/* Variation Init */
	function init() {
		
    if(document.querySelector('.product-info-wrapper .product-info')){
      document.querySelector('.product-info-wrapper .product-info').insertAdjacentHTML('afterend', Slider);
    }else{
      document.querySelector('.product-detail .product_info').insertAdjacentHTML('afterend', Slider);
    }
		

    
        waitForSwiper(function(){
			var egswiper = new Swiper ('.swiper-container', {
				// Optional parameters
				direction: 'horizontal',
				spaceBetween: 0,
				slidesPerView: 1,
				roundLengths: true,
				loop: true,
				navigation: {
				  nextEl: '.swiper-button-next',
				  prevEl: '.swiper-button-prev',
				}
			})
		});


    live(".eg-review-link", "click", function () {
      fnc_scrollto(document.querySelector('.review-list').offsetTop);
    });

		window.dispatchEvent(new Event('resize'));
	}

	// var arrowImage = '<img src="https://bm-test-dev.s3.us-east-2.amazonaws.com/DickHannah/DickHannah037/arrow.svg">';

	// function init2(){

	// 	document.querySelector('.swiper-button-next').innerHTML = arrowImage;
	// 	document.querySelector('.swiper-button-prev').innerHTML = arrowImage;
	// }
	 addScript();

	/* Initialise variation */
	waitForElement(".product-info-wrapper .product-info, .product-detail .product_info", init, 50, 25000);
	// waitForElement(".swiper-button-prev", init2, 50, 25000);
  } catch (e) {
	if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
