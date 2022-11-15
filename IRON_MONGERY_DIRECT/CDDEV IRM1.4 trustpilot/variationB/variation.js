(function () {
	"use strict";

	if (typeof unsafeWindow !== "undefined") window = unsafeWindow;

	var tag = "cv-irm-1-3",
		debug = document.cookie.indexOf("cfQA") > -1;

	window[tag] = {
		log: function (msg) {
			if (debug) console.log("[CONV]", tag, "-->", msg);
		},

		waitForElement: function (cssSelector, callback) {
			var elementCached,
				maxCalls = 500,
				interval = setInterval(function () {
					elementCached = document.querySelector(cssSelector);

					if (elementCached) {
						clearInterval(interval);

						try {
							callback(elementCached);
						} catch (err) {
							window[tag].log(err.message);
						}
					}

					if (--maxCalls < 0) {
						clearInterval(interval);
						window[tag].log(cssSelector + " not found");
					}
				}, 20);
		},

		init: function () {
			try {
				this.waitForElement("body", function (docBody) {
					docBody.classList.add(tag);
                    addScript();
				});

				if (debug && document.title.indexOf("CONV QA") < 0) {
					document.title = "[CONV QA] " + document.title;
				}

				initVariation();

				window[tag].log("test running");
			} catch (err) {
				window[tag].log(err.message);
			}
		},
        on: function(selector, event, callback, context) {
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
          },
           //wait for swiper 
         waitForSwiper : function(trigger) {
            var interval = setInterval(function () {
                if (typeof Swiper != "undefined") {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(interval);
            }, 15000)
        },

          sendEventGA : (eventObject) => {
            let stop,
                timeout,
                check = () => {
                    try {
                        if (stop) return;

                        if (typeof window.ga !== "undefined" && typeof eventObject !== "undefined" && typeof eventObject.action !== "undefined" && typeof eventObject.label !== "undefined",'GA') {
                            clearTimeout(timeout);
                            let gaName = typeof eventObject.gaName !== "undefined" ? eventObject.gaName : "", gaObj = {
                                hitType: gaName + "event",
                                eventCategory: "Google Optimize experiment",
                                eventAction: eventObject.action,
                                eventLabel: eventObject.label,
                            };
        
                            if (typeof eventObject.nonInteraction !== "undefined" && eventObject.nonInteraction) {
                                gaObj.nonInteraction = 1;
                            }
        
                            if (typeof eventObject.value !== "undefined" && eventObject.value) {
                                gaObj.eventValue = eventObject.value;
                            }
        
                            window.ga(gaName + "send", gaObj);
        
                            window[tag].log("tracking metric triggered:");
                            window[tag].log(gaObj);
                        } else {
                            window.requestAnimationFrame(check);
                        }
                    } catch (err) {
                        window[tag].log(err.message);
                    }
                };
    
            window.requestAnimationFrame(check);
    
            timeout = setTimeout(() => {
                stop = true;
                window[tag].log("Hotjar not found");
            }, 5000);
		}
	};

	window[tag].init();
    
	  var cvSlider = ''+ 
      '  <div class="cv-1-3-review-section">'+ 
      '  <div class="cv-1-3-review-section-inr">'+ 
      '      <div class="rhd-page-container">'+ 
      '      <div class="rhd-page-container__inner">'+ 
        '      <div class="rhd-page-container__main">'+ 
      '  <h2 class="cv-1-3-review-heading">Rated Excellent by our customers</h2>'+ 
      '  <div class="swiper egswiper">'+ 
      '          <div class="swiper-container">'+ 
      '              <div class="swiper-wrapper ">'+ 
      '                  <div class="swiper-slide">'+ 
      '                      <div class="testimonial">'+ 
      '                          <div class="testimonial__inner">'+ 
      '                              <div class="testimonial__content">'+ 
      '                                  <div class="testimonial-header"> <img src="https://cfactory-img.s3.amazonaws.com/IRM/1-3/user1.png">'+ 
      '                                      <div class="cv-1-3-heading-text">'+ 
      '                                          <p class="cv-1-3-heading">Christopher Greenwood</p>'+ 
      '                                          <p class="cv-1-3-subheading">March 23, 2022</p>'+ 
      '                                      </div>'+ 
      '                                  </div>'+ 
      '                                  <h3>Half the price of the local DIY store!</h3>'+ 
      '                                  <p>This is the first time I have used IronmongeryDirect. The price I was quoted, was half the price of the local DIY store! If I had queries, the response to my email was quick.</p>'+ 
      '                              </div>'+ 
      '                          </div>'+ 
      '                      </div>'+ 
      '                  </div>'+ 
      '                  <div class="swiper-slide">'+ 
      '                      <div class="testimonial">'+ 
      '                          <div class="testimonial__inner">'+ 
      '                              <div class="testimonial__content">'+ 
      '                                  <div class="testimonial-header"> <img src="https://cfactory-img.s3.amazonaws.com/IRM/1-3/user2.png">'+ 
      '                                      <div class="cv-1-3-heading-text">'+ 
      '                                          <p class="cv-1-3-heading">DARREN SOMERS</p>'+ 
      '                                          <p class="cv-1-3-subheading">March 23, 2022</p>'+ 
      '                                      </div>'+ 
      '                                  </div>'+ 
      '                                  <h3>Great product at a great price</h3>'+ 
      '                                  <p>Great product at a great price, and they came next day as well, can\’t ask for more.</p>'+ 
      '                              </div>'+ 
      '                          </div>'+ 
      '                      </div>'+ 
      '                  </div>'+ 
      '                  <div class="swiper-slide">'+ 
      '                      <div class="testimonial">'+ 
      '                          <div class="testimonial__inner">'+ 
      '                              <div class="testimonial__content">'+ 
      '                                  <div class="testimonial-header">'+ 
      '                                      <img src="https://cfactory-img.s3.amazonaws.com/IRM/1-3/user3.png">'+ 
      '                                      <div class="cv-1-3-heading-text">'+ 
      '                                          <p class="cv-1-3-heading">Craig Watson</p>'+ 
      '                                          <p class="cv-1-3-subheading">March 23, 2022</p>'+ 
      '                                      </div>'+ 
      '                                  </div>'+ 
      '                                  <h3>Delivery was very fast indeed</h3>'+ 
      '                                  <p>The website at IronmongeryDirect was very easy to browse and track down what I was looking for. All prices seem very reasonable and delivery was very fast indeed. Overall a very good experience and I know where to go for future projects!</p>'+ 
      '                              </div>'+ 
      '                          </div>'+ 
      '                      </div </div>'+ 
      '                  </div>'+ 
      '  '+ 
      '              </div>'+ 
      '              <div class="swiper-button-next"></div>'+ 
      '              <div class="swiper-button-prev"></div>'+ 
      '          </div>'+ 
      '          </div>'+ 
      '     <div class="cv-1-3-trust-container">'+
      '     <a target="_blank" href="https://uk.trustpilot.com/review/www.ironmongerydirect.co.uk">'+
      '       <p class="cv-1-3-trust-text">Rated 4.7 / 5 based on <span>73,250</span> reviews.</p>'+
      '       <img class="cv-1-3-trust-img" data-cfsrc="https://res.cloudinary.com/manutantraders/image/upload/q_auto,f_auto/v1616087277/shared/homepage/rebrand/trustpilot_2x.png" loading="lazy" alt="" width="126" height="31" src="https://res.cloudinary.com/manutantraders/image/upload/q_auto,f_auto/v1616087277/shared/homepage/rebrand/trustpilot_2x.png"'+
      '   </a>'+
      '     </div>'+
      '          </div>'+ 
      '          </div>'+ 
      '          </div>'+ 
      '      </div>';
	function initVariation() {
        window[tag].waitForElement('section.cv-1-1-features',function(ele){
            //the element removed automatically that's why inverval used
            document.querySelector('section.cv-1-1-features').insertAdjacentHTML('afterend', cvSlider);
            window[tag].waitForSwiper(function(){
                var egswiper = new Swiper ('.swiper-container', {
                    // Optional parameters
                    direction: 'horizontal',
                    spaceBetween: 30,
                    slidesPerView: 3,
                    roundLengths: true,
                    loop: false,
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    },
                    breakpoints: {
                        499: { /* when window >=0px - webflow mobile landscape/portriat */
                          slidesPerView: 1,
                          spaceBetween: 30,
                          slidesOffsetBefore: 1,
                        },
                        1023: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                          slidesOffsetBefore: 1,
                        }
                      }
                })
            });
        });
       
        
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
})();