
(function () {
  /* main variables */
  var debug = 0;
  var variation_name = "";
  /* all Pure helper functions */
  function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
          if (
document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0 && window.newToBrit1 && window.newToBrit2 && window.newToBrit3 && window.britboxOriginal1 && window.britboxOriginal2 && window.britboxOriginal3
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
var britboxOriginal = window.britboxOriginal1 + window.britboxOriginal2 + window.britboxOriginal3;

var newToBritbox = window.newToBrit1 + newToBrit2 + newToBrit3;

var popularMystery = window.popularMystery1 + window.popularMystery2 + window.popularMystery3;
      var collectionhtml = `
          <div class="top-banner auto eg-agatha">
              <div class="content">
                  <div class="image-wrapper loaded">
                      <div class="Half-degraded"></div>
                      <div class="image-background b-lazy b-loaded" style="background-image: url(&quot;https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=65&amp;Width=1800&amp;Height=600&amp;ImageUrl=305522.jpg&amp;imageType=hero3x1&quot;);"><div class="Half-degraded"></div></div>
                  </div>
                  <div class="row">
                      <div class="columns mobile">
                          <div class="wrapper">
                              <nav></nav>
                              <h1>Agatha Christie Collection</h1>
                              <p class="description">Watch the largest overall collection of Agatha Christie adaptations, spanning films,TV series, and aaudio plays of the iconic mystery novelist</p>
                          </div>
                          <div data-id="41571" class="actions"><a fragment="40a953c03e" href="https://account.britbox.com/signup?callback=https://www.britbox.com/us/account/signupcallback?returnURL=/us/&country=us&geo=us&deviceName=macosx&deviceType=desktop_web&modelNo=chrome_version.102.0.5005&serialNo=23153264-bdb0-428f-80d4-7b8a84bbb627&exp=1655487450&action=skipIdle&key=cb2a0dced731ad56c894dd73d44c397862f1dfd839488540c96471bb44ec1fda855c827122c69cf7e3ffc389501f7ce1de2a5e8590762bca10138014a2541999" data-itemid="41571" https:="" account.britbox.com="" class="play-now"><span class="play-animation"></span> <span>Start Your Free Trial</span></a><p>Free 7-day trial, then just $7.99/month or $79.99/year</p></div>
                      </div>
                  </div>
              </div>
          </div>
      `;

      document.querySelector('.main-content > .episodes.new-episodes:nth-child(5)').insertAdjacentHTML('afterbegin', collectionhtml);

      document.querySelector('.main-content > .episodes.new-episodes:nth-child(5)').insertAdjacentHTML('beforebegin', newToBritbox);



      var limitedhtml = `
          <div class="top-banner auto eg-limited">
              <div class="content">
                  <div class="image-wrapper loaded">
                      <div class="Half-degraded"></div>
                      <div class="image-background b-lazy b-loaded" style="background-image: url(&quot;https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=65&amp;Width=1800&amp;Height=600&amp;ImageUrl=306625.png&amp;imageType=hero3x1&quot;);"><div class="Half-degraded"></div></div>
                  </div>
                  <div class="row">
                      <div class="columns mobile">
                          <div class="wrapper">
                              <nav></nav>
                              <h1>Limited Series</h1>
                              <p class="description">Brilliant stories and gripping tales of crime and detection. Start your thrilling watching with a limited serise.</p>
                          </div>
                          <div data-id="41571" class="actions"><a fragment="40a953c03e" href="https://www.britbox.com/us/account/login?returnURL=/us/" data-itemid="41571" https:="" account.britbox.com="" class="play-now"><span class="play-animation"></span> <span>Start Your Free Trial</span></a>
                          <p>Free 7-day trial, then just $7.99/month or $79.99/year</p></div>
                      </div>
                  </div>
              </div>
          </div>
      `;

      document.querySelector('.main-content > .episodes.new-episodes:nth-child(7)').insertAdjacentHTML('afterbegin', limitedhtml);
      document.querySelector('.main-content > .episodes.new-episodes:nth-child(7)').insertAdjacentHTML('beforebegin', britboxOriginal);

      document.querySelector('.main-content .new-to-britbox').insertAdjacentHTML('beforebegin', popularMystery);


      var heroHTML = `
          <div class="top-banner auto eg-hero-banner">
              <div class="content">
                  <div class="image-wrapper loaded">
                      <div class="Half-degraded"></div>
                      <div class="image-background b-lazy b-loaded" style="background-image: url(&quot;https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&amp;Quality=65&amp;Width=1401&amp;Height=467&amp;ImageUrl=325065.jpg&amp;imageType=hero3x1&quot;);"></div>
                  </div>
                  <div class="row">
                      <div class="columns mobile">
                          <div class="wrapper">
                              <nav></nav>
                              <h1>Why Didn't They Ask Evans?</h1>
                              <p class="description">
                              Agatha Christie's wittiest mystery ever. Lucy Boynton and Will Poulter star in Hugh Laurie’s new adaptation, where two amateur sleuths set out to find the meaning behind a dead man’s mysterious final words.
                          </p>
                          </div>
                          <div data-id="41571" class="actions"><a fragment="40a953c03e" href="https://www.britbox.com/us/account/login?returnURL=/us/" data-itemid="41571" https:="" account.britbox.com="" class="play-now"><span class="play-animation"></span> <span>Start Watching Now</span></a></div>
                      </div>
                  </div>
              </div>
          </div>
      `;

      document.querySelector('div#SwiperGenre [data-name-component="HeroCarousel"]').insertAdjacentHTML('beforebegin', heroHTML);

      waitForElement(
          '[data-name-component="ProgrammeCarousel"] .swiper-container-initialized.swiper-container:not(.eg-my-swiper)',
          function () {
              document.querySelectorAll('[data-name-component="ProgrammeCarousel"] .swiper-container:not(.eg-my-swiper)').forEach(function (item) {
                  let slider = item.swiper;
                  slider.destroy();
              })

              waitForjQuery(function () {
                  addScript();
                  waitForSlick(function () {
                      var $ = window.jQuery;
                      $('[data-name-component="ProgrammeCarousel"] .swiper-container:not(.eg-my-swiper) .swiper-wrapper').slick({
                          dots: false,
                          infinite: true,
                          speed: 300,
                          slidesToShow: 4,
                          slidesToScroll: 4,
                          centerMode: false,
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
                    $('[data-name-component="ProgrammeCarousel"] .swiper-container:not(.eg-my-swiper) .swiper-wrapper').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                          setTimeout(function() {
                              window.scroll(0, window.pageYOffset + 1);
                          }, 200)
                      });
                  });

              });

          },
          50,
          10000
      );

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
      var cssScript = '' +
          "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css'/>";
      document.querySelector('head').insertAdjacentHTML('beforeend', cssScript);
      var swiperScript = document.createElement('script');
      swiperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
      document.getElementsByTagName('head')[0].appendChild(swiperScript);
  }

  waitForElement(
      '.main-content [data-name-component="HeroCarousel"] .swiper-container',
      init,
      50,
      10000
  );

})();