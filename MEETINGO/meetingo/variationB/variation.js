try {
    (function () {
      // WAIT FOR ELEMENT
      var EGHelper = {
        onLoadElement: function (selector, trigger, delayInterval, delayTimeout) {
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
        },
        doWhenOwnCarouselLoaded: function (todoWhenLoaded) {
          var waitForOwl = setInterval(function () {
            if (
              window.jQuery &&
              window.jQuery.fn &&
              window.jQuery.fn.owlCarousel
            ) {
              clearInterval(waitForOwl);
              todoWhenLoaded();
            }
          }, 500);
          setTimeout(function () {
            clearInterval(waitForOwl);
          }, 10000);
        },
        doWhenJqueryLoaded: function (todoWhenLoaded) {
          var waitForjQuery = setInterval(function () {
            if (
              typeof window.jQuery != "undefined" ||
              typeof window.$ != "undefined"
            ) {
              clearInterval(waitForjQuery);
              todoWhenLoaded();
            }
          }, 50);
          setTimeout(function () {
            clearInterval(waitForjQuery);
          }, 10000);
        },
      };
  
  
      //INITIAL METHOD
      function init() {

        document.querySelector('.mrb-promise mrb-promise > .row').classList.add('owl-carousel');
        document.querySelector('.mrb-promise mrb-promise > .row').classList.add('owl-theme');
    
        EGHelper.doWhenJqueryLoaded(function () {
          addOwlCarouselScript();
          EGHelper.doWhenOwnCarouselLoaded(function () {
            var $ = window.jQuery || window.$;
            $('.mrb-promise mrb-promise > .row').owlCarousel({
              loop: true,
              margin: 0,
              nav: false,
              items: 1,
              autoPlay: false,
              dots: true,
            })
          });
        });
  
      }
  
      function addOwlCarouselScript() {
        var jsScript = document.createElement("script");
        jsScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
        document.getElementsByTagName("head")[0].appendChild(jsScript);
  
        var cssLink = document.createElement("link");
        cssLink.href = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css";
        cssLink.setAttribute('rel', 'stylesheet')
        document.getElementsByTagName("head")[0].appendChild(cssLink);
  
      }
  
      function addjQueryScript() {
        var egScript = document.createElement("script");
        egScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        document.getElementsByTagName("head")[0].appendChild(egScript);
      }
  

      addjQueryScript();

  
      EGHelper.onLoadElement("section.mrb-promise mrb-promise > .row", init, 500, 20000);
    })();
  } catch (e) {
    // console.log(e);
  }
  