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



var icon=`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="64" height="64"
viewBox="0 0 64 64"
style=" fill:#undefined;"><path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M45.121,28.121l-13,13 C31.535,41.707,30.768,42,30,42s-1.535-0.293-2.121-0.879l-8-8c-1.172-1.171-1.172-3.071,0-4.242c1.172-1.172,3.07-1.172,4.242,0 L30,34.758l10.879-10.879c1.172-1.172,3.07-1.172,4.242,0C46.293,25.05,46.293,26.95,45.121,28.121z"></path></svg>`;

var starIcon = ''+
'                          <svg role="img" aria-labelledby="starRating" viewBox="0 0 251 46" xmlns="http://www.w3.org/2000/svg" style="position: absolute; height: 100%; width: 100%; left: 0; top: 0;">'+ 
'            <title id="starRating" lang="en">4.6 out of five star rating on Trustpilot</title>'+ 
'            <g class="tp-star">'+ 
'                <path class="tp-star__canvas" fill="#dcdce6" d="M0 46.330002h46.375586V0H0z" ></path>'+ 
'                <path class="tp-star__shape" d="M39.533936 19.711433L13.230239 38.80065l3.838216-11.797827L7.02115 19.711433h12.418975l3.837417-11.798624 3.837418 11.798624h12.418975zM23.2785 31.510075l7.183595-1.509576 2.862114 8.800152L23.2785 31.510075z" fill="#FFF"></path>'+ 
'            </g>'+ 
'            <g class="tp-star">'+ 
'                <path class="tp-star__canvas" fill="#dcdce6" d="M51.24816 46.330002h46.375587V0H51.248161z"></path>'+ 
'                <path class="tp-star__canvas--half" fill="#dcdce6" d="M51.24816 46.330002h23.187793V0H51.248161z"></path>'+ 
'                <path class="tp-star__shape" d="M74.990978 31.32991L81.150908 30 84 39l-9.660206-7.202786L64.30279 39l3.895636-11.840666L58 19.841466h12.605577L74.499595 8l3.895637 11.841466H91L74.990978 31.329909z" fill="#FFF"></path>'+ 
'            </g>'+ 
'            <g class="tp-star">'+ 
'                <path class="tp-star__canvas" fill="#dcdce6" d="M102.532209 46.330002h46.375586V0h-46.375586z"></path>'+ 
'                <path class="tp-star__canvas--half" fill="#dcdce6" d="M102.532209 46.330002h23.187793V0h-23.187793z"></path>'+ 
'                <path class="tp-star__shape" d="M142.066994 19.711433L115.763298 38.80065l3.838215-11.797827-10.047304-7.291391h12.418975l3.837418-11.798624 3.837417 11.798624h12.418975zM125.81156 31.510075l7.183595-1.509576 2.862113 8.800152-10.045708-7.290576z" fill="#FFF"></path>'+ 
'            </g>'+ 
'            <g class="tp-star">'+ 
'                <path class="tp-star__canvas" fill="#dcdce6" d="M153.815458 46.330002h46.375586V0h-46.375586z"></path>'+ 
'                <path class="tp-star__canvas--half" fill="#dcdce6" d="M153.815458 46.330002h23.187793V0h-23.187793z"></path>'+ 
'                <path class="tp-star__shape" d="M193.348355 19.711433L167.045457 38.80065l3.837417-11.797827-10.047303-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418974zM177.09292 31.510075l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z" fill="#FFF"></path>'+ 
'            </g>'+ 
'            <g class="tp-star">'+ 
'                <path class="tp-star__canvas" fill="#dcdce6" d="M205.064416 46.330002h46.375587V0h-46.375587z"></path>'+ 
'                <path class="tp-star__canvas--half" fill="#dcdce6" d="M205.064416 46.330002h23.187793V0h-23.187793z"></path>'+ 
'                <path class="tp-star__shape" d="M244.597022 19.711433l-26.3029 19.089218 3.837419-11.797827-10.047304-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418975zm-16.255436 11.798642l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z" fill="#FFF"></path>'+ 
'            </g>'+ 
'          </svg>'; 

var newVideo=''+ 

  '  <div class="swiper egswiper trust-and-review-section">'+ 
  '          <div class="swiper-container">'+ 
  '              <div class="swiper-wrapper ">'+ 
  '                  <div class="swiper-slide">'+ 
  '         		 <div class="eg-wrapper">'+ 
  '  <div class="star-outer-container">'+ 
  '      <div class="star-conatiner">'+ 
  '          <div class="tp-stars tp-stars--4 tp-stars--4--half">'+ 
  '              <div style="position: relative; height: 0; width: 100%; padding: 0; padding-bottom: 18.326693227091635%;">'+ starIcon + 
  '              </div>'+ 
  '          </div>'+ 
  '      </div>'+ 
  '  </div>'+ 
  '  <div class="review-container">'+ 
  '      <p class="review-body">“Was probably one of the fastest if not the fastest ways to obtain a Universal Life Insurance Policy”'+ 
  '      </p>'+ 
  '  </div>'+ 
  '  <div class="bottom-container">'+ 
  '      <div class="verified-container">'+ 
  '          <p class="verified-author">Nomar Maysonet</p>'+ 
  '          <p class="verified-text">' + icon + 'Verified</p>'+ 
  '      </div>'+ 
  '      <a class="trust-link" href="#"><img src="https://editor-assets.abtasty.com/49212/62a716a9d15301655117481.png"></a>'+ 
  '  </div>'+
  '			          </div>'+ 
  '                  </div>'+ 
  '                  <div class="swiper-slide">'+ 
  '          			<div class="eg-wrapper">'+ 
  '  <div class="star-outer-container">'+ 
  '      <div class="star-conatiner">'+ 
  '          <div class="tp-stars tp-stars--4 tp-stars--4--half">'+ 
  '              <div style="position: relative; height: 0; width: 100%; padding: 0; padding-bottom: 18.326693227091635%;">'+ starIcon + 
  '              </div>'+ 
  '          </div>'+ 
  '      </div>'+ 
  '  </div>'+ 
  '  <div class="review-container">'+ 
  '      <p class="review-body">“I am technically not a customer yet, but my experience with this company has been amazing.”'+ 
  '      </p>'+ 
  '  </div>'+ 
  '  <div class="bottom-container">'+ 
  '      <div class="verified-container">'+ 
  '          <p class="verified-author">Ayile A.</p>'+ 
  '          <p class="verified-text">' + icon + 'Verified</p>'+ 
  '      </div>'+ 
  '      <a class="trust-link" href="https://www.trustpilot.com/reviews/626188f57b2618e9fea22343"><img src="https://editor-assets.abtasty.com/49212/62a716a9d15301655117481.png"></a>'+ 
  '  </div>'+
  '          			</div>'+ 
  '                  </div>'+ 
  '                  <div class="swiper-slide">'+ 
  '          			<div class="eg-wrapper">'+ 
  '  <div class="star-outer-container">'+ 
  '      <div class="star-conatiner">'+ 
  '          <div class="tp-stars tp-stars--4 tp-stars--4--half">'+ 
  '              <div style="position: relative; height: 0; width: 100%; padding: 0; padding-bottom: 18.326693227091635%;">'+ starIcon +
  '              </div>'+ 
  '          </div>'+ 
  '      </div>'+ 
  '  </div>'+ 
  '  <div class="review-container">'+ 
  '      <p class="review-body">“Process was easy and affordable. Highly recommend Everlylife”'+ 
  '      </p>'+ 
  '  </div>'+ 
  '  <div class="bottom-container">'+ 
  '      <div class="verified-container">'+ 
  '          <p class="verified-author">Timothy N.</p>'+ 
  '          <p class="verified-text">' + icon + 'Verified</p>'+ 
  '      </div>'+ 
  '      <a class="trust-link" href="#"><img src="https://editor-assets.abtasty.com/49212/62a716a9d15301655117481.png"></a>'+ 
  '  </div>'+
  '          			</div>'+ 
  '                  </div>'+ 
  '              </div>'+ 
  '              <div class="swiper-button-next"></div>'+ 
  '              <div class="swiper-button-prev"></div>'+ 
  '          </div>'+ 
  '  </div>';


      function init() {
          if (debug) {
              console.log('Inside init Function');
          }

        document.querySelector('button[data-fullstory="share_estimate_button"]').insertAdjacentHTML('afterend', '<h3 class="eg-trust-heading">The reviews are in.</h3><p class="eg-trust-subheading">Here\'s what people are saying about Everly Life.</p>')
      document.querySelector("main > #EstimateContainer + section > section").insertAdjacentHTML("beforeend",newVideo)


      waitForSwiper(function(){
        var egswiper = new Swiper ('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            spaceBetween: 40,
            slidesPerView: 1,
            roundLengths: true,
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        })
    });

    window.dispatchEvent(new Event('resize'));

      }

      var arrowImage = ''+
'  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve">'+ 
'  <g>'+ 
'  	<path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179   l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261   C187.881,124.315,187.881,116.495,183.189,111.816z"/>'+ 
'  	<g>'+ 
'  	</g>'+ 
'  	<g>'+ 
'  	</g>'+ 
'  	<g>'+ 
'  	</g>'+ 
'  	<g>'+ 
'  	</g>'+ 
'  	<g>'+ 
'  	</g>'+ 
'  	<g>'+ 
'  	</g>'+ 
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
'  <g>'+ 
'  </g>'+ 
'  </svg>';

      
      function init2(){
  
          document.querySelector('.egswiper .swiper-button-next').innerHTML = arrowImage;
          document.querySelector('.egswiper .swiper-button-prev').innerHTML = arrowImage;
      }
  
      addScript();
   

      waitForElement("main > #EstimateContainer + section", init, 50, 25000);
      waitForElement(".egswiper .swiper-button-prev", init2, 50, 25000);
  } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
  }
})();