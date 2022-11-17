(function () {
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

    var newToBritbox = '' +
    '  <div class="eg-doctor-options-mobile new-to-britbox">'+ 
'              <div class="bm-slider">'+ 
'                  <div class="carousel-item">'+ 
'                      <div class="eg-item eg-item-one">'+ 
'                          <div class="eg-item-inr">'+ 
'                              <div class="eg-image-section"> <img src="https://us.britbox.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=60&Width=480&Height=270&ImageUrl=287623.png&imageType=wallpaper" alt="First Doctor" class="b-lazy b-loaded">                                </div>'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="carousel-item">'+ 
'                      <div class="eg-item eg-item-two">'+ 
'                          <div class="eg-item-inr">'+ 
'                              <div class="eg-image-section"> <img src="https://us.britbox.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=60&Width=480&Height=270&ImageUrl=287639.png&imageType=wallpaper" alt="The Second Doctor" class="b-lazy b-loaded">                                </div>'+  
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="carousel-item">'+ 
'                      <div class="eg-item eg-item-three">'+ 
'                          <div class="eg-item-inr">'+ 
'                              <div class="eg-image-section"> <img src="https://us.britbox.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=60&Width=480&Height=270&ImageUrl=287635.png&imageType=wallpaper" alt="The Third Doctor" class="b-lazy b-loaded">                                </div>'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="carousel-item">'+ 
'                      <div class="eg-item eg-item-four">'+ 
'                          <div class="eg-item-inr">'+ 
'                              <div class="eg-image-section"> <img src="https://us.britbox.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=60&Width=480&Height=270&ImageUrl=287629.png&imageType=wallpaper" alt="The Fourth Doctor" class="b-lazy b-loaded">                                </div>'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="carousel-item">'+ 
'                      <div class="eg-item eg-item-five">'+ 
'                          <div class="eg-item-inr">'+ 
'                              <div class="eg-image-section"> <img src="https://us.britbox.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=60&Width=480&Height=270&ImageUrl=287637.png&imageType=wallpaper" alt="The Fifth Doctor" class="b-lazy b-loaded">                                </div>'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="carousel-item">'+ 
'                      <div class="eg-item eg-item-six">'+ 
'                          <div class="eg-item-inr">'+ 
'                              <div class="eg-image-section"> <img src="https://us.britbox.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=60&Width=480&Height=270&ImageUrl=287631.png&imageType=wallpaper" alt="The Sixth Doctor" class="b-lazy b-loaded">                                </div>'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="carousel-item">'+ 
'                      <div class="eg-item eg-item-seven">'+ 
'                          <div class="eg-item-inr">'+ 
'                              <div class="eg-image-section"> <img src="https://us.britbox.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=60&Width=480&Height=270&ImageUrl=287641.png&imageType=wallpaper" alt="The Seventh Doctor" class="b-lazy b-loaded">                                </div>'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="carousel-item">'+ 
'                      <div class="eg-item eg-item-eight">'+ 
'                          <div class="eg-item-inr">'+ 
'                              <div class="eg-image-section"> <img src="https://us.britbox.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=60&Width=480&Height=270&ImageUrl=163706_wallpaper.jpg&imageType=wallpaper" alt="Extra" class="b-lazy b-loaded">                                </div>'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'  </div>';


var britboxOriginal = '' +
    '  <div class="eg-doctor-options-mobile britbox-original">'+ 
'              <div class="bm-slider">'+ 
'                  <div class="carousel-item">'+ 
'                      <div class="eg-item eg-item-one">'+ 
'                          <div class="eg-item-inr">'+ 
'                              <div class="eg-image-section"> <img src="https://us.britbox.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=60&Width=480&Height=270&ImageUrl=287623.png&imageType=wallpaper" alt="First Doctor" class="b-lazy b-loaded">                                </div>'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="carousel-item">'+ 
'                      <div class="eg-item eg-item-two">'+ 
'                          <div class="eg-item-inr">'+ 
'                              <div class="eg-image-section"> <img src="https://us.britbox.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=60&Width=480&Height=270&ImageUrl=287639.png&imageType=wallpaper" alt="The Second Doctor" class="b-lazy b-loaded">                                </div>'+  
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="carousel-item">'+ 
'                      <div class="eg-item eg-item-three">'+ 
'                          <div class="eg-item-inr">'+ 
'                              <div class="eg-image-section"> <img src="https://us.britbox.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=60&Width=480&Height=270&ImageUrl=287635.png&imageType=wallpaper" alt="The Third Doctor" class="b-lazy b-loaded">                                </div>'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="carousel-item">'+ 
'                      <div class="eg-item eg-item-four">'+ 
'                          <div class="eg-item-inr">'+ 
'                              <div class="eg-image-section"> <img src="https://us.britbox.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=60&Width=480&Height=270&ImageUrl=287629.png&imageType=wallpaper" alt="The Fourth Doctor" class="b-lazy b-loaded">                                </div>'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="carousel-item">'+ 
'                      <div class="eg-item eg-item-five">'+ 
'                          <div class="eg-item-inr">'+ 
'                              <div class="eg-image-section"> <img src="https://us.britbox.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=60&Width=480&Height=270&ImageUrl=287637.png&imageType=wallpaper" alt="The Fifth Doctor" class="b-lazy b-loaded">                                </div>'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="carousel-item">'+ 
'                      <div class="eg-item eg-item-six">'+ 
'                          <div class="eg-item-inr">'+ 
'                              <div class="eg-image-section"> <img src="https://us.britbox.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=60&Width=480&Height=270&ImageUrl=287631.png&imageType=wallpaper" alt="The Sixth Doctor" class="b-lazy b-loaded">                                </div>'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="carousel-item">'+ 
'                      <div class="eg-item eg-item-seven">'+ 
'                          <div class="eg-item-inr">'+ 
'                              <div class="eg-image-section"> <img src="https://us.britbox.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=60&Width=480&Height=270&ImageUrl=287641.png&imageType=wallpaper" alt="The Seventh Doctor" class="b-lazy b-loaded">                                </div>'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="carousel-item">'+ 
'                      <div class="eg-item eg-item-eight">'+ 
'                          <div class="eg-item-inr">'+ 
'                              <div class="eg-image-section"> <img src="https://us.britbox.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=60&Width=480&Height=270&ImageUrl=163706_wallpaper.jpg&imageType=wallpaper" alt="Extra" class="b-lazy b-loaded">                                </div>'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'  </div>';
    
    function init() {

      var collectionhtml = `
        <div class="top-banner auto">
          <div class="content">
              <div class="image-wrapper loaded">
                  <div class="Half-degraded"></div>
                  <div class="image-background b-lazy b-loaded"
                      style="background-image: url(https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=65&Width=1401&Height=467&ImageUrl=321578.jpg&imageType=hero3x1);">
                  </div>
              </div>
              <div class="row">
                  <div class="columns mobile">
                      <div class="wrapper">
                          <h1>Why Didn't They Ask Evans?</h1>
                          <div data-tracking="">Why Didn't They Ask Evans?</div>
                          <h1 class="Title-only-mobile">Why Didn't They Ask Evans?</h1>
                          <p>Agatha Christie's wittiest mystery ever. Lucy Boynton and Will Poulter star in Hugh Laurie’s new adaptation, where two amateur sleuths set out to find the meaning behind a dead man’s mysterious final words.</p>
                      </div>
                      <div data-id="42198" class="actions">
                          <a href="/us/show/Why_Didnt_They_Ask_Evans_68247?autoplay=true" class="play-now">
                              <span class="play-animation"><img src="/content/img/action-svg/play_now.svg">
                                  <img src="/content/img/action-svg/continue_watching.svg" style="display: none;"> <img
                                      src="/content/img/action-svg/trailer.svg" style="display: none;"></span> <span>Play now
                              </span></a>
                              <a fragment="f13cdaafb6" href="/us/show/Why_Didnt_They_Ask_Evans_68247" class="discover"><i
                                  class="icon-discover-more"></i> <span>Discover more</span></a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      `;

      document.querySelector('.main-content > .episodes.new-episodes:nth-child(5)').insertAdjacentHTML('afterbegin', collectionhtml);
      document.querySelector('.main-content > .episodes.new-episodes:nth-child(5)').insertAdjacentHTML('beforebegin', newToBritbox);

      var limitedhtml = `
        <div class="top-banner auto">
          <div class="content">
              <div class="image-wrapper loaded">
                  <div class="Half-degraded"></div>
                  <div class="image-background b-lazy b-loaded"
                      style="background-image: url(https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=65&Width=1401&Height=467&ImageUrl=321578.jpg&imageType=hero3x1);">
                  </div>
              </div>
              <div class="row">
                  <div class="columns mobile">
                      <div class="wrapper">
                          <h1>Why Didn't They Ask Evans?</h1>
                          <div data-tracking="">Why Didn't They Ask Evans?</div>
                          <h1 class="Title-only-mobile">Why Didn't They Ask Evans?</h1>
                          <p>Agatha Christie's wittiest mystery ever. Lucy Boynton and Will Poulter star in Hugh Laurie’s new adaptation, where two amateur sleuths set out to find the meaning behind a dead man’s mysterious final words.</p>
                      </div>
                      <div data-id="42198" class="actions">
                          <a href="/us/show/Why_Didnt_They_Ask_Evans_68247?autoplay=true" class="play-now">
                              <span class="play-animation"><img src="/content/img/action-svg/play_now.svg">
                                  <img src="/content/img/action-svg/continue_watching.svg" style="display: none;"> <img
                                      src="/content/img/action-svg/trailer.svg" style="display: none;"></span> <span>Play now
                              </span></a>
                              <a fragment="f13cdaafb6" href="/us/show/Why_Didnt_They_Ask_Evans_68247" class="discover"><i
                                  class="icon-discover-more"></i> <span>Discover more</span></a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      `;

      document.querySelector('.main-content > .episodes.new-episodes:nth-child(7)').insertAdjacentHTML('afterbegin', limitedhtml);
      document.querySelector('.main-content > .episodes.new-episodes:nth-child(7)').insertAdjacentHTML('beforebegin', britboxOriginal);

      var heroHTML = `
        <div class="top-banner auto">
          <div class="content">
              <div class="image-wrapper loaded">
                  <div class="Half-degraded"></div>
                  <div class="image-background b-lazy b-loaded"
                      style="background-image: url(https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=65&Width=1401&Height=467&ImageUrl=321578.jpg&imageType=hero3x1);">
                  </div>
              </div>
              <div class="row">
                  <div class="columns mobile">
                      <div class="wrapper">
                          <h1>Why Didn't They Ask Evans?</h1>
                          <div data-tracking="">Why Didn't They Ask Evans?</div>
                          <h1 class="Title-only-mobile">Why Didn't They Ask Evans?</h1>
                          <p>Agatha Christie's wittiest mystery ever. Lucy Boynton and Will Poulter star in Hugh Laurie’s new adaptation, where two amateur sleuths set out to find the meaning behind a dead man’s mysterious final words.</p>
                      </div>
                      <div data-id="42198" class="actions">
                          <a href="/us/show/Why_Didnt_They_Ask_Evans_68247?autoplay=true" class="play-now">
                              <span class="play-animation"><img src="/content/img/action-svg/play_now.svg">
                                  <img src="/content/img/action-svg/continue_watching.svg" style="display: none;"> <img
                                      src="/content/img/action-svg/trailer.svg" style="display: none;"></span> <span>Play now
                              </span></a>
                              <a fragment="f13cdaafb6" href="/us/show/Why_Didnt_They_Ask_Evans_68247" class="discover"><i
                                  class="icon-discover-more"></i> <span>Discover more</span></a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      `;
      
      document.querySelector('div#SwiperGenre [data-name-component="HeroCarousel"]').insertAdjacentHTML('beforebegin', heroHTML);


      waitForjQuery(function() {
        addScript();

        waitForSlick(function() {
          var $ = window.jQuery;
          $('.new-to-britbox .bm-slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            centerMode: true,
            responsive: [
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true
                },
              },
            ],
          });    
          $('.britbox-original .bm-slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            centerMode: true,
            responsive: [
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true
                },
              },
            ],
          });  
          
        });

      });
      

    }

    function waitForSlick(trigger) {
      var interval = setInterval(function () {
          if (window.jQuery.fn.slick != undefined) {
              clearInterval(interval);
              trigger();
          }
      }, 50);
      setTimeout(function () {
          clearInterval(interval);
      }, 15000)
    }

    function waitForjQuery(trigger) {
      var interval = setInterval(function () {
          if (window.jQuery != undefined) {
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
      "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css'/>";
      document.querySelector('head').insertAdjacentHTML('beforeend', cssScript);
          
      var swiperScript = document.createElement('script');
      swiperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
      document.getElementsByTagName('head')[0].appendChild(swiperScript);
      }

    waitForElement(
        '.main-content > .episodes.new-episodes:nth-child(6)',
        init,
        50,
        10000
    );

})();