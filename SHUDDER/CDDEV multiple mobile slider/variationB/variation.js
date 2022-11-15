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


var egSliders =''+ 
'  <div class="eg-trending-section">'+ 
'  <div class="eg-trending-section-inr container">'+ 
'      <h3 class="heading h3">Trending Now</h3>'+ 
'      <div class="swiper eg-trending-swiper">'+ 
'          <div class="swiper-container">'+ 
'              <div class="swiper-wrapper ">'+ 
'                  <div class="swiper-slide">'+ 
'                      <div class="eg-wrapper">'+ 
'                          <a class="eg-link">'+ 
'                              <img src="https://image-service.unbounce.com/https%3A%2F%2Fapp.unbouncepreview.com%2Fpublish%2Fassets%2F406d05c4-f635-11ec-a803-02423b6fa092%2F1bd4cft-thesadness-thumbnail-1920x1080_10hk09w000000000000000.jpg?w=632&h=356" alt="">'+ 
'                          </a>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="swiper-slide">'+ 
'                      <div class="eg-wrapper">'+ 
'                          <a class="eg-link">'+ 
'                              <img src="https://image-service.unbounce.com/https%3A%2F%2Fapp.unbouncepreview.com%2Fpublish%2Fassets%2F40154c9e-f635-11ec-a803-02423b6fa092%2F1c1nnhx-thetwin-thumbnail-1920x1080_10hk09w000000000000000.jpg?w=632&h=356" alt="">'+ 
'                          </a>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="swiper-slide">'+ 
'                      <div class="eg-wrapper">'+ 
'                          <a class="eg-link">'+ 
'                              <img src="https://image-service.unbounce.com/https%3A%2F%2Fapp.unbouncepreview.com%2Fpublish%2Fassets%2F3fb31e48-f635-11ec-a803-02423b6fa092%2Fqoaf06-offseason-thumbnail-1920x1080_10hk09w000000000000000.jpg?w=632&h=356" alt="">'+ 
'                          </a>'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="swiper-button-next"></div>'+ 
'              <div class="swiper-button-prev"></div>'+ 
'          </div>'+ 
'      </div>'+ 
'      </div>'+ 
'  </div>'+
'  <div class="eg-original-section">'+ 
'  <div class="eg-original-section-inr container">'+ 
'      <h3 class="heading h3">Original Series</h3>'+ 
'      <div class="swiper eg-trending-swiper">'+ 
'          <div class="swiper-container">'+ 
'              <div class="swiper-wrapper ">'+ 
'                  <div class="swiper-slide">'+ 
'                      <div class="eg-wrapper">'+ 
'                          <a class="eg-link">'+ 
'                              <img src="https://image-service.unbounce.com/https%3A%2F%2Fapp.unbouncepreview.com%2Fpublish%2Fassets%2F41e5ed4e-f635-11ec-a803-02423b6fa092%2Fvfvdzt-thebouletbrothers-dragula-s4-thumbnail-1920x1080_10hk09w000000000000000.jpg?w=632&h=356" alt="">'+ 
'                          </a>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="swiper-slide">'+ 
'                      <div class="eg-wrapper">'+ 
'                          <a class="eg-link">'+ 
'                              <img src="https://image-service.unbounce.com/https%3A%2F%2Fapp.unbouncepreview.com%2Fpublish%2Fassets%2F4188e1bc-f635-11ec-a803-02423b6fa092%2F1b0z5c2-creepshow-s3-thumbnail-1920x1080_10hi09u0hg09u000000000.jpg?w=630&h=354&cropW=628&cropH=354&cropX=0&cropY=0" alt="">'+ 
'                          </a>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="swiper-slide">'+ 
'                      <div class="eg-wrapper">'+ 
'                          <a class="eg-link">'+ 
'                              <img src="https://image-service.unbounce.com/https%3A%2F%2Fapp.unbouncepreview.com%2Fpublish%2Fassets%2F4188e1bc-f635-11ec-a803-02423b6fa092%2F1b0z5c2-creepshow-s3-thumbnail-1920x1080_10hi09u0hg09u000000000.jpg?w=630&h=354&cropW=628&cropH=354&cropX=0&cropY=0" alt="">'+ 
'                          </a>'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="swiper-button-next"></div>'+ 
'              <div class="swiper-button-prev"></div>'+ 
'          </div>'+ 
'      </div>'+ 
'      </div>'+ 
'  </div>'+
'  <div class="eg-exclusive-section">'+ 
'  <div class="eg-exclusive-section-inr container">'+ 
'      <h3 class="heading h3">Exclusive Movies</h3>'+ 
'      <div class="swiper eg-trending-swiper">'+ 
'          <div class="swiper-container">'+ 
'              <div class="swiper-wrapper ">'+ 
'                  <div class="swiper-slide">'+ 
'                      <div class="eg-wrapper">'+ 
'                          <a class="eg-link">'+ 
'                              <img src="https://image-service.unbounce.com/https%3A%2F%2Fapp.unbouncepreview.com%2Fpublish%2Fassets%2F42bd5bda-f635-11ec-a803-02423b6fa092%2F1ni5lme-thefoundfootagephenomenon-thumbnail-1920x1080_10hk09w000000000000000.jpg?w=632&h=356" alt="">'+ 
'                          </a>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="swiper-slide">'+ 
'                      <div class="eg-wrapper">'+ 
'                          <a class="eg-link">'+ 
'                              <img src="https://image-service.unbounce.com/https%3A%2F%2Fapp.unbouncepreview.com%2Fpublish%2Fassets%2F426e1002-f635-11ec-a803-02423b6fa092%2Fi5u5pi-thespineofnight-thumbnail-1920x1080_10hk09w000000000000000.jpg?w=632&h=356" alt="">'+ 
'                          </a>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="swiper-slide">'+ 
'                      <div class="eg-wrapper">'+ 
'                          <a class="eg-link">'+ 
'                              <img src="https://user-assets-unbounce-com.s3.amazonaws.com/960a2488-8670-4785-a86d-46d534899ace/420f4c66-f635-11ec-a803-02423b6fa092/hellbender-bannerart.original.jpg" alt="">'+ 
'                          </a>'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="swiper-button-next"></div>'+ 
'              <div class="swiper-button-prev"></div>'+ 
'          </div>'+ 
'      </div>'+ 
'      </div>'+ 
'  </div>'+
'  <div class="eg-classics-section">'+ 
'  <div class="eg-classics-section-inr container">'+ 
'      <h3 class="heading h3">CLASSICS</h3>'+ 
'      <div class="swiper eg-trending-swiper">'+ 
'          <div class="swiper-container">'+ 
'              <div class="swiper-wrapper ">'+ 
'                  <div class="swiper-slide">'+ 
'                      <div class="eg-wrapper">'+ 
'                          <a class="eg-link">'+ 
'                              <img src="https://image-service.unbounce.com/https%3A%2F%2Fapp.unbouncepreview.com%2Fpublish%2Fassets%2F40ec073e-f635-11ec-a803-02423b6fa092%2Fsz333x-poltergeist_1000000000000000000028.png?png8=true" alt="">'+ 
'                          </a>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="swiper-slide">'+ 
'                      <div class="eg-wrapper">'+ 
'                          <a class="eg-link">'+ 
'                              <img src="https://image-service.unbounce.com/https%3A%2F%2Fapp.unbouncepreview.com%2Fpublish%2Fassets%2F41134146-f635-11ec-a803-02423b6fa092%2Fcmrhea-the-babadook_10hk09w000000000000000.jpg?w=632&h=356" alt="">'+ 
'                          </a>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="swiper-slide">'+ 
'                      <div class="eg-wrapper">'+ 
'                          <a class="eg-link">'+ 
'                              <img src="https://image-service.unbounce.com/https%3A%2F%2Fapp.unbouncepreview.com%2Fpublish%2Fassets%2F41392f14-f635-11ec-a803-02423b6fa092%2F9sx5xn-1729-halloween-thumbnail_10hk09w000000000000000.jpg?w=632&h=356" alt="">'+ 
'                          </a>'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="swiper-button-next"></div>'+ 
'              <div class="swiper-button-prev"></div>'+ 
'          </div>'+ 
'      </div>'+ 
'      </div>'+ 
'  </div>'+
'  <div class="eg-meet-section">'+ 
'  <div class="eg-meet-section-inr container">'+ 
'      <h3 class="heading h3">MEET SEE</h3>'+ 
'      <div class="swiper eg-trending-swiper">'+ 
'          <div class="swiper-container">'+ 
'              <div class="swiper-wrapper ">'+ 
'                  <div class="swiper-slide">'+ 
'                      <div class="eg-wrapper">'+ 
'                          <a class="eg-link">'+ 
'                              <img src="https://image-service.unbounce.com/https%3A%2F%2Fapp.unbouncepreview.com%2Fpublish%2Fassets%2F4458cfc4-f635-11ec-a803-02423b6fa092%2F10y923s-the-boy-behind-the-door-thumbnail-1920x1080_10hk09w000000000000000.jpg?w=632&h=356" alt="">'+ 
'                          </a>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="swiper-slide">'+ 
'                      <div class="eg-wrapper">'+ 
'                          <a class="eg-link">'+ 
'                              <img src="https://image-service.unbounce.com/https%3A%2F%2Fapp.unbouncepreview.com%2Fpublish%2Fassets%2F44ac6e4a-f635-11ec-a803-02423b6fa092%2Fkaddcs-theyliveinthegrey-thumbnail-1920x1080_10hk09w000000000000000.jpg?w=632&h=356" alt="">'+ 
'                          </a>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="swiper-slide">'+ 
'                      <div class="eg-wrapper">'+ 
'                          <a class="eg-link">'+ 
'                              <img src="https://image-service.unbounce.com/https%3A%2F%2Fapp.unbouncepreview.com%2Fpublish%2Fassets%2F4522b5b4-f635-11ec-a803-02423b6fa092%2Fu1oi2p-vhs94-thumbnail-1920x1080_10hk09w000000000000000.jpg?w=632&h=356" alt="">'+ 
'                          </a>'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'              <div class="swiper-button-next"></div>'+ 
'              <div class="swiper-button-prev"></div>'+ 
'          </div>'+ 
'      </div>'+ 
'      </div>'+ 
'  </div>';


      function init() {
          if (debug) {
              console.log('Inside init Function');
          }

        document.querySelector("#page-container .page__content").insertAdjacentHTML("beforeend", egSliders);


      waitForSwiper(function(){
        var egswiper = new Swiper ('.eg-trending-section .swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            spaceBetween: 20,
            slidesPerView: 1,
            roundLengths: true,
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        })
        var egswiper = new Swiper ('.eg-original-section .swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            spaceBetween: 20,
            slidesPerView: 1,
            roundLengths: true,
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        })

        var egswiper = new Swiper ('.eg-exclusive-section .swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            spaceBetween: 20,
            slidesPerView: 1,
            roundLengths: true,
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        })
        
        var egswiper = new Swiper ('.eg-classics-section .swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            spaceBetween: 20,
            slidesPerView: 1,
            roundLengths: true,
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        })

        var egswiper = new Swiper ('.eg-meet-section .swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            spaceBetween: 20,
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

      addScript();
   

      waitForElement("#page-container .page__content", init, 50, 25000);
  } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
  }
})();