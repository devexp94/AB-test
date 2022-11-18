(function () {
	try {
	  /* main variables */
	  var debug = 0;
	  var variation_name = "";
	  var $;    
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
	  function onLoadJqueryLibrary(trigger, delayInterval, delayTimeout) {
		var interval = setInterval(function() {
		  if (window.jQuery && window.jQuery.fn) {
			clearInterval(interval);
			trigger();
		  }
		}, delayInterval);
		setTimeout(function() {
		  clearInterval(interval);
		}, delayTimeout);
	  }
	  
	  function waitForSlick(trigger, delayInterval, delayTimeout) {
		var interval = setInterval(function () {
			if (
			  window.jQuery && window.jQuery.fn && window.jQuery.fn.slick
			) {
				clearInterval(interval);
				trigger();
			}
		}, delayInterval);
		setTimeout(function () {
			clearInterval(interval);
		}, delayTimeout);
	}
  
	function addSlickScript() {
	  var linkEl = document.createElement('link');
	  linkEl.rel = 'stylesheet';
	  linkEl.type = 'text/css';
	  linkEl.href = 'https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css';
	  document.head.insertAdjacentElement('beforeend', linkEl);
	  var scriptEl = document.createElement('script');
	  scriptEl.type = "text/javascript";
	  scriptEl.src = 'https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js';
	  document.head.insertAdjacentElement('beforeend', scriptEl);
  }
  
  
		var Slider =''+ 
		'<div class="eg-product">'+
		'  <div class="egswiper">'+ 
		'      <div class="swiper-container container">'+ 
		'          <div class="eg-wrapper-outer">'+ 
		'              <div class="eg-wrapper">'+ 
		'                  <a href="/products/scent">'+ 
		'                      <div class="img-container">'+ 
		'                          <picture><img sizes="100vw" decoding="async" class="image--core x object-cover is-loaded" src="https://cdn.sanity.io/images/kie4hq77/development/ea0f4e7947b0941a6a83f62e28714f6b5f4f4740-2000x2000.png?auto=format&q=80&w=2000&h=2000"'+ 
		'                                  srcset="https://cdn.sanity.io/images/kie4hq77/development/ea0f4e7947b0941a6a83f62e28714f6b5f4f4740-2000x2000.png?auto=format&q=80&w=400&h=400 400w,https://cdn.sanity.io/images/kie4hq77/development/ea0f4e7947b0941a6a83f62e28714f6b5f4f4740-2000x2000.png?auto=format&q=80&w=800&h=800 800w,https://cdn.sanity.io/images/kie4hq77/development/ea0f4e7947b0941a6a83f62e28714f6b5f4f4740-2000x2000.png?auto=format&q=80&w=1000&h=1000 1000w">'+ 
		'                          </picture>'+ 
		'                      </div>'+ 
		'                      <div class="eg-product-text">'+ 
		'						   <button class="eg-add-to-bag"><span class="bold italic optima caps">Add to bag</span></button>'+
		'                          <h2 class="fs16 bold pr z1 optima">"VACATION" by Vacation®</h2>'+ 
		'                          <h3 class="fs14 pr z1 optima">Eau de Toilette</h3>'+ 
		'                          <span class="db fs14 optima">$60</span>'+ 
		'                      <span class="badge dib pr bg--badge caps optima br--20 z1 bold fs10">Vacation® Signature'+ 
		'                              Scent</span>'+ 
		'                      </div>'+ 
		'                  </a>'+ 
		'              </div>'+ 
		'          </div>'+ 
		'          <div class="eg-wrapper-outer">'+ 
		'              <div class="eg-wrapper">'+ 
		'                  <a href="/products/classic-whip-spf-30" class="">'+ 
		'                      <div class="img-container">'+ 
		'                          <picture><img sizes="100vw" decoding="async" class="image--core x object-cover is-loaded" src="https://cdn.sanity.io/images/kie4hq77/development/0b9a936d3aac5698e09569027d584bb7450032b0-1000x1000.png?auto=format&q=80&w=1000&h=1000"'+ 
		'                                  srcset="https://cdn.sanity.io/images/kie4hq77/development/0b9a936d3aac5698e09569027d584bb7450032b0-1000x1000.png?auto=format&q=80&w=400&h=400 400w,https://cdn.sanity.io/images/kie4hq77/development/0b9a936d3aac5698e09569027d584bb7450032b0-1000x1000.png?auto=format&q=80&w=800&h=800 800w,https://cdn.sanity.io/images/kie4hq77/development/0b9a936d3aac5698e09569027d584bb7450032b0-1000x1000.png?auto=format&q=80&w=1000&h=1000 1000w">'+ 
		'                          </picture>'+ 
		'                      </div>'+ 
		'                      <div class="eg-product-text">'+ 
		'						   <button class="eg-add-to-bag"><span class="bold italic optima caps">Add to bag</span></button>'+		'                          <h2 class="fs16 bold pr z1 optima">Classic Whip SPF 30</h2>'+ 
		'                          <h3 class="fs14 pr z1 optima">SPF 30 Sunscreen Mousse </h3>'+ 
		'                          <span class="db fs14 optima">$22</span>'+ 
		'                      <span class="badge dib pr bg--badge caps optima br--20 z1 bold fs10">Vacation® Signature'+ 
		'                              Scent</span>'+ 
		'                      </div>'+ 
		'                  </a>'+ 
		'              </div>'+ 
		'          </div>'+ 
		'          <div class="eg-wrapper-outer">'+ 
		'              <div class="eg-wrapper">'+ 
		'                  <a href="/products/pool-boy-candle">'+ 
		'                      <div class="img-container">'+ 
		'                          <picture><img sizes="100vw" decoding="async" class="image--core x object-cover is-loaded" src="https://cdn.sanity.io/images/kie4hq77/development/28dcd5e3660c18aedde367d14a690280f191afe7-1000x1000.png?auto=format&q=80&w=1000&h=1000"'+ 
		'                                  srcset="https://cdn.sanity.io/images/kie4hq77/development/28dcd5e3660c18aedde367d14a690280f191afe7-1000x1000.png?auto=format&q=80&w=400&h=400 400w,https://cdn.sanity.io/images/kie4hq77/development/28dcd5e3660c18aedde367d14a690280f191afe7-1000x1000.png?auto=format&q=80&w=800&h=800 800w,https://cdn.sanity.io/images/kie4hq77/development/28dcd5e3660c18aedde367d14a690280f191afe7-1000x1000.png?auto=format&q=80&w=1000&h=1000 1000w">'+ 
		'                          </picture>'+ 
		'                      </div>'+ 
		'                      <div class="eg-product-text">'+ 
		'						   <button class="eg-add-to-bag"><span class="bold italic optima caps">Add to bag</span></button>'+
		'                          <h2 class="fs16 bold pr z1 optima">Well-Tipped Pool Boy</h2>'+ 
		'                          <h3 class="fs14 pr z1 optima">Luxury Scented Candle</h3><span'+ 
		'                              class="db fs14 optima">$34</span><span class="badge dib pr bg--badge caps optima br--20 z1 bold fs10">WELL-TIPPED POOL BOY'+ 
		'                              SCENT</span>'+ 
		'                      </div>'+ 
		'                  </a>'+ 
		'              </div>'+ 
		'          </div>'+ 
		'          <div class="eg-wrapper-outer">'+ 
		'              <div class="eg-wrapper">'+ 
		'                  <a href="/products/prince-tshirt">'+ 
		'                      <div class="img-container">'+ 
		'                          <picture><img sizes="100vw" decoding="async" class="image--core x object-cover is-loaded" src="https://cdn.sanity.io/images/kie4hq77/development/30762cb54d4a06facae19e941e441da1bedb2259-1000x1000.png?auto=format&q=80&w=1000&h=1000"'+ 
		'                                  srcset="https://cdn.sanity.io/images/kie4hq77/development/30762cb54d4a06facae19e941e441da1bedb2259-1000x1000.png?auto=format&q=80&w=400&h=400 400w,https://cdn.sanity.io/images/kie4hq77/development/30762cb54d4a06facae19e941e441da1bedb2259-1000x1000.png?auto=format&q=80&w=800&h=800 800w,https://cdn.sanity.io/images/kie4hq77/development/30762cb54d4a06facae19e941e441da1bedb2259-1000x1000.png?auto=format&q=80&w=1000&h=1000 1000w">'+ 
		'                          </picture>'+ 
		'                      </div>'+ 
		'                      <div class="eg-product-text">'+ 
		'						   <button class="eg-add-to-bag"><span class="bold italic optima caps">Add to bag</span></button>'+
		'                          <h2 class="fs16 bold pr z1 optima">Prince® x Vacation® T-Shirt</h2>'+ 
		'                          <h3 class="fs14 pr z1 optima">Commemorative T-Shirt</h3>'+ 
		'                          <span class="db fs14 optima">$39</span>'+ 
		'                      </div>'+ 
		'                  </a>'+ 
		'              </div>'+ 
		'          </div>'+ 
		'          <div class="eg-wrapper-outer">'+ 
		'              <div class="eg-wrapper">'+ 
		'                  <a href="/products/sun-screen">'+ 
		'                      <div class="img-container">'+ 
		'                          <picture><img sizes="100vw" decoding="async" class="image--core x object-cover is-loaded" src="https://cdn.sanity.io/images/kie4hq77/development/6af66dbbb64ceb96af8fa49c09abb1686aa5badd-2000x2000.png?auto=format&q=80&w=2000&h=2000"'+ 
		'                                  srcset="https://cdn.sanity.io/images/kie4hq77/development/6af66dbbb64ceb96af8fa49c09abb1686aa5badd-2000x2000.png?auto=format&q=80&w=400&h=400 400w,https://cdn.sanity.io/images/kie4hq77/development/6af66dbbb64ceb96af8fa49c09abb1686aa5badd-2000x2000.png?auto=format&q=80&w=800&h=800 800w,https://cdn.sanity.io/images/kie4hq77/development/6af66dbbb64ceb96af8fa49c09abb1686aa5badd-2000x2000.png?auto=format&q=80&w=1000&h=1000 1000w"></picture>'+ 
		'                      </div>'+ 
		'                      <div class="eg-product-text">'+ 
		'						   <button class="eg-add-to-bag"><span class="bold italic optima caps">Add to bag</span></button>'+
		'                          <h2 class="fs16 bold pr z1 optima">Classic Lotion SPF 30</h2>'+ 
		'                          <h3 class="fs14 pr z1 optima">SPF 30 Sunscreen Lotion</h3>'+ 
		'                          <span class="db fs14 optima">$18</span>'+ 
		'                      <span class="badge dib pr bg--badge caps optima br--20 z1 bold fs10">Vacation® Signature Scent</span>'+ 
		'                      </div>'+ 
		'                  </a>'+ 
		'              </div>'+ 
		'          </div>'+ 
		'          <div class="eg-wrapper-outer">'+ 
		'              <div class="eg-wrapper">'+ 
		'                  <a href="/products/summer-leisure-pack">'+ 
		'                      <div class="img-container">'+ 
		'                          <picture><img sizes="100vw" decoding="async" class="image--core x object-cover is-loaded" src="https://cdn.sanity.io/images/kie4hq77/development/407f906a79a3c6c7bcdf9e541caf377b8c377c77-710x800.png?auto=format&q=80&w=710&h=800"'+ 
		'                                  srcset="https://cdn.sanity.io/images/kie4hq77/development/407f906a79a3c6c7bcdf9e541caf377b8c377c77-710x800.png?auto=format&q=80&w=400&h=451 400w,https://cdn.sanity.io/images/kie4hq77/development/407f906a79a3c6c7bcdf9e541caf377b8c377c77-710x800.png?auto=format&q=80&w=800&h=901 800w,https://cdn.sanity.io/images/kie4hq77/development/407f906a79a3c6c7bcdf9e541caf377b8c377c77-710x800.png?auto=format&q=80&w=1000&h=1127 1000w"></picture>'+ 
		'                      </div>'+ 
		'                      <div class="eg-product-text">'+ 
		'						   <button class="eg-add-to-bag"><span class="bold italic optima caps">Add to bag</span></button>'+
		'                      <h2 class="fs16 bold pr z1 optima">Vacation® Summer Leisure Pack</h2><h3 class="fs14 pr z1 optima">Sunscreen, Spritz, & Two Air Fresheners</h3><span class="db fs14 optima">$30</span><span class="badge dib pr bg--badge caps optima br--20 z1 bold fs10">Various Scents</span></div>'+ 
		'                  </a>'+ 
		'              </div>'+ 
		'          </div>'+ 
		'      </div>'+ 
		'          </div>'+ 
		'  </div>';
		function addJquery(){
			var scriptEl = document.createElement('script');
			scriptEl.type = "text/javascript";
			scriptEl.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
			document.head.insertAdjacentElement('beforeend', scriptEl);
			}
			addJquery();
	
	  function init() {
		$ = window.jQuery;
		   $('html body main > .mxa.rich-text.mb6').before(Slider);

		//   document.querySelector('').insertAdjacentHTML('beforebegin', Slider);
  
		  waitForSlick(function () {
			 
			 window.jQuery('.swiper-container').slick({
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  dots: true,
			  responsive: [
				{
				  breakpoint: 699,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				  },
				},
				{
				  breakpoint: 499,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				  },
				},
			  ],
			});
		}, 50, 10000);
  
		  window.dispatchEvent(new Event('resize'));
	  }

	  var egArrow =''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 300.003 300.003" style="enable-background:new 0 0 300.003 300.003;" xml:space="preserve">  <g>  	<g>  		<path d="M150,0C67.159,0,0.001,67.159,0.001,150c0,82.838,67.157,150.003,149.997,150.003S300.002,232.838,300.002,150    C300.002,67.159,232.842,0,150,0z M217.685,189.794c-5.47,5.467-14.338,5.47-19.81,0l-48.26-48.27l-48.522,48.516    c-5.467,5.467-14.338,5.47-19.81,0c-2.731-2.739-4.098-6.321-4.098-9.905s1.367-7.166,4.103-9.897l56.292-56.297    c0.539-0.838,1.157-1.637,1.888-2.368c2.796-2.796,6.476-4.142,10.146-4.077c3.662-0.062,7.348,1.281,10.141,4.08    c0.734,0.729,1.349,1.528,1.886,2.365l56.043,56.043C223.152,175.454,223.156,184.322,217.685,189.794z"></path>  	</g>  </g>  </svg>';

	  function init2() {
		$ = window.jQuery;
		
		$('.egswiper .slick-arrow').html(egArrow);
	}
	   
	  onLoadJqueryLibrary(function() {
		$ = window.jQuery;
		addSlickScript();
		waitForElement('html body main > .mxa.rich-text.mb6', init, 50, 25000);
		waitForElement('.egswiper .slick-arrow.slick-next', init2, 50, 25000);
	}, 50, 10000);
	  } catch (e) {
	  if (debug) console.log(e, "error in Test" + variation_name);
	}
  })();