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

      (function addJqueryScript() {
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.src = "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
       
        head.appendChild(script);
      })();


      function waitForjQuery(trigger, delayInterval, delayTimeout) {
          var interval = setInterval(function () {
              if (
                  window.jQuery != undefined
              ) {
                  clearInterval(interval);
                  trigger();
              }
          }, delayInterval);
          setTimeout(function () {
              clearInterval(interval);
          }, delayTimeout);
      }

      function waitForSlick(trigger, delayInterval, delayTimeout) {
          var interval = setInterval(function () {
              if (
                  window.$ && window.$.fn && window.$.fn.slick
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



    var egSlider =''+ 
      '  <div class="eg-mobile-slider">'+ 
      '      <div _ngcontent-fsk-c123="" class="row">'+ 
      '          <div _ngcontent-fsk-c123="" class="col-md-3">'+ 
      '              <div _ngcontent-fsk-c123="" class="mrb-img-box">'+ 
      '                  <div _ngcontent-fsk-c123="" class="img-wrap"><img _ngcontent-fsk-c123="" src="assets/images/products/Icon1.svg" alt="Built for business"></div><span _ngcontent-fsk-c123="" class="mrb-title">Built for business</span>'+ 
      '                  <div _ngcontent-fsk-c123="" class="description">Whether you need a conference room or training room, our meeting spaces are located in professional business centres.</div>'+ 
      '              </div>'+ 
      '          </div>'+ 
      '          <div _ngcontent-fsk-c123="" class="col-md-3">'+ 
      '              <div _ngcontent-fsk-c123="" class="mrb-img-box">'+ 
      '                  <div _ngcontent-fsk-c123="" class="img-wrap"><img _ngcontent-fsk-c123="" src="assets/icons-svg/meet-safery-logo.svg" alt="subPage.meetSafely"></div><span _ngcontent-fsk-c123="" class="mrb-title">Meet safely</span>'+ 
      '                  <div _ngcontent-fsk-c123="" class="description">We’ve implemented hygiene and physical distancing measures to create meeting spaces you can feel confident about using. </div>'+ 
      '              </div>'+ 
      '          </div>'+ 
      '          <div _ngcontent-fsk-c123="" class="col-md-3">'+ 
      '              <div _ngcontent-fsk-c123="" class="mrb-img-box">'+ 
      '                  <div _ngcontent-fsk-c123="" class="img-wrap"><img _ngcontent-fsk-c123="" src="assets/images/products/Icon2.svg" alt="Everything you need"></div><span _ngcontent-fsk-c123="" class="mrb-title">Everything you need</span>'+ 
      '                  <div _ngcontent-fsk-c123="" class="description">From equipment to catering, your meeting room can be supplied with whatever you need for a successful meeting.</div>'+ 
      '              </div>'+ 
      '          </div>'+ 
      '          <div _ngcontent-fsk-c123="" class="col-md-3">'+ 
      '              <div _ngcontent-fsk-c123="" class="mrb-img-box">'+ 
      '                  <div _ngcontent-fsk-c123="" class="img-wrap"><img _ngcontent-fsk-c123="" src="assets/images/products/Icon3.svg" alt="Book with confidence"></div><span _ngcontent-fsk-c123="" class="mrb-title">Book with confidence</span>'+ 
      '                  <div _ngcontent-fsk-c123="" class="description">With over 50,000 satisfied customers every month, our meeting room booking system makes it easy to secure the right space.</div>'+ 
      '              </div>'+ 
      '          </div>'+ 
      '      </div>'+ 
      '  </div>';


      function init() {

        document.querySelector('section.mrb-promise mrb-promise .row').insertAdjacentHTML('afterend', egSlider);

        initSlick();
        
      }

      function initSlick() {
          waitForSlick(function () {
              var $ = window.jQuery;
              $('.eg-mobile-slider .row').slick({
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: true,
                  dots: false,
                  responsive: [
                      {
                          breakpoint: 680,
                          settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1
                          }
                      }
                  ]
              });
              window.dispatchEvent(new Event('resize'));
              $('.eg-cart-content-inr').slick('slickGoTo', 0);
          }, 50, 10000);
      }

      // function init2() {
      //     document.querySelector('.eg-cart-content-inr > button.slick-prev').innerHTML = arrow;
      //     document.querySelector('.eg-cart-content-inr > button.slick-next').innerHTML = arrow;

      // }
      waitForElement("section.mrb-promise", init, 50, 15000);      
      //waitForElement(".eg-cart-content-inr > button.slick-next", init2, 50, 15000);
      // waitForjQuery(addSlickScript, 50, 10000);
  

  } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
  }
})();