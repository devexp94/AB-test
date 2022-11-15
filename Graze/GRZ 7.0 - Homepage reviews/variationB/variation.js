(function() {
  var debug = 0;
  var variation_name = "";
  if (window.location.href.indexOf('qa-debug=true') > -1) {
      debug = 1;
  }
  try {
      function waitForElement(selector, trigger, delayInterval, delayTimeout) {
          var interval = setInterval(function() {
              if (
                  document &&
                  document.querySelector(selector) &&
                  document.querySelectorAll(selector).length > 0
              ) {
                  clearInterval(interval);
                  trigger();
              }
          }, delayInterval);
          setTimeout(function() {
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


	function addScript() {
		var cssScript=''+ 
		'<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>'+
		"<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.min.css'/>";
		document.querySelector('head').insertAdjacentHTML('beforeend', cssScript);
				
		var swiperScript = document.createElement('script');
		swiperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/js/swiper.min.js';
		document.getElementsByTagName('head')[0].appendChild(swiperScript);
	  }



var icon=''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 329.942 329.942" style="enable-background:new 0 0 329.942 329.942;" xml:space="preserve">'+ 
'  <path id="XMLID_16_" d="M329.208,126.666c-1.765-5.431-6.459-9.389-12.109-10.209l-95.822-13.922l-42.854-86.837  c-2.527-5.12-7.742-8.362-13.451-8.362c-5.71,0-10.925,3.242-13.451,8.362l-42.851,86.836l-95.825,13.922  c-5.65,0.821-10.345,4.779-12.109,10.209c-1.764,5.431-0.293,11.392,3.796,15.377l69.339,67.582L57.496,305.07  c-0.965,5.628,1.348,11.315,5.967,14.671c2.613,1.899,5.708,2.865,8.818,2.865c2.387,0,4.784-0.569,6.979-1.723l85.711-45.059  l85.71,45.059c2.208,1.161,4.626,1.714,7.021,1.723c8.275-0.012,14.979-6.723,14.979-15c0-1.152-0.13-2.275-0.376-3.352  l-16.233-94.629l69.339-67.583C329.501,138.057,330.972,132.096,329.208,126.666z"/>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  </svg>';


var egSlider =''+ 
'  <div class="eg-review-section">'+ 
'<h2 class="section-title text-center">join thousands of grazers who love their graze box</h2>'+
'  <div class="swiper egswiper">'+ 
'      <div class="swiper-container container-constrained-lg">'+ 
'          <div class="swiper-wrapper ">'+ 
'              <div class="swiper-slide">'+ 
'                  <div class="eg-wrapper">'+ 
'                      <div class="eg-star-container">'+icon+icon+icon+icon+icon+'</div>'+ 
'                      <p class="eg-heading">“Nice to have a choice”</p>'+ 
'                      <p class="eg-para">It\'s so nice to have a choice of savoury snacks. More please! Looking forward to what your kitchen invents next!</p>'+ 
'                      <p class="eg-author-name">- Sue</p>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="swiper-slide">'+ 
'                  <div class="eg-wrapper">'+ 
'                      <div class="eg-star-container">'+icon+icon+icon+icon+icon+'</div>'+ 
'                      <p class="eg-heading">“Signed up to graze again”</p>'+ 
'                      <p class="eg-para">I just signed up to graze again. I had these healthy snack boxes aaaaaaages ago. They are really yummy</p>'+ 
'                      <p class="eg-author-name">- Stephy </p>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="swiper-slide">'+ 
'                  <div class="eg-wrapper">'+ 
'                      <div class="eg-star-container">'+icon+icon+icon+icon+icon+'</div>'+ 
'                      <p class="eg-heading">“Healthy and delicious!”</p>'+ 
'                      <p class="eg-para">I really look forward to receiving my boxes, and the element of surprise to see what they hold! Healthy, delicious and mostly low calorie snacks!</p>'+ 
'                      <p class="eg-author-name">- Ruth</p>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="swiper-slide">'+ 
'                  <div class="eg-wrapper">'+ 
'                      <div class="eg-star-container">'+icon+icon+icon+icon+icon+'</div>'+ 
'                      <p class="eg-heading">“Easy to order”</p>'+ 
'                      <p class="eg-para">Easy to order and cost effective. Tasty Too!</p>'+ 
'                      <p class="eg-author-name">- Donald</p>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="swiper-slide">'+ 
'                  <div class="eg-wrapper">'+ 
'                      <div class="eg-star-container">'+icon+icon+icon+icon+icon+'</div>'+ 
'                      <p class="eg-heading">“Range of snacks”</p>'+ 
'                      <p class="eg-para">I\'m super impressed with the range of snacks and quality too</p>'+ 
'                      <p class="eg-author-name">- Kayley</p>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="swiper-slide">'+ 
'                  <div class="eg-wrapper">'+ 
'                      <div class="eg-star-container">'+icon+icon+icon+icon+icon+'</div>'+ 
'                      <p class="eg-heading">“They have never failed to deliver my box”</p>'+ 
'                      <p class="eg-para">I have been with Graze for approximately 10 years ? They have never failed to deliver my box, to respond to any enquiries I have made and above all have honoured loyalty which is why I have stayed all this time.</p>'+ 
'                      <p class="eg-author-name">- Angela</p>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="swiper-slide">'+ 
'                  <div class="eg-wrapper">'+ 
'                      <div class="eg-star-container">'+icon+icon+icon+icon+icon+'</div>'+ 
'                      <p class="eg-heading">“Been with them for 12 years ”</p>'+ 
'                      <p class="eg-para">It\'s fun getting the little boxes. Been with them for 12 years and take the boxes to work for a perfect little snack!</p>'+ 
'                      <p class="eg-author-name">- Jane</p>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="swiper-slide">'+ 
'                  <div class="eg-wrapper">'+ 
'                      <div class="eg-star-container">'+icon+icon+icon+icon+icon+'</div>'+ 
'                      <p class="eg-heading">“Love the deals”</p>'+ 
'                      <p class="eg-para">Love the deals and the efficient website and delivery</p>'+ 
'                      <p class="eg-author-name">- Lorraine</p>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="swiper-slide">'+ 
'                  <div class="eg-wrapper">'+ 
'                      <div class="eg-star-container">'+icon+icon+icon+icon+icon+'</div>'+ 
'                      <p class="eg-heading">“A brilliant product”</p>'+ 
'                      <p class="eg-para">A brilliant company with a brilliant product and excellent service</p>'+ 
'                      <p class="eg-author-name">- Suzie & Sam</p>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'           <div class="swiper-pagination"></div>'+
'      </div>'+ 
'      </div>'+ 
'  </div>';


      function init() {
          if (debug) {
              console.log('Inside init Function');
          }


      document.querySelector("section#lohpHeroHeader").insertAdjacentHTML("beforeend",egSlider)

      document.querySelector('.eg-review-section > .egswiper').insertAdjacentElement('afterend', document.querySelector('.lohp-2022-header  + .lohp-2022-header__subtitle'));

      waitForSwiper(function(){
        var egswiper = new Swiper ('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            spaceBetween: 20,
            slidesPerView: 3,
            roundLengths: true,
            loop: true,
            dots: true,
            autoHeight: true,
            calculateHeight:true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                575: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  autoHeight: true
                },
                1199: {
                  slidesPerView: 2,
                  spaceBetween: 30
                }
            }
        })
    });

    window.dispatchEvent(new Event('resize'));

      }

  
      addScript();
  
      waitForElement("section#lohpHeroHeader", init, 100, 25000);
  } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
  }
})();