(function () {
    try {
      /* main variables */
      var debug = 0;
      var variation_name = "";
      var $
      /* all Pure helper functions */
      function waitForElement(selector, trigger) {
        var interval = setInterval(function () {
          if (
            document &&
            document.querySelector(selector) &&
            document.querySelectorAll(selector).length > 0
          ) {
            clearInterval(interval);
            trigger();
          }
        }, 50);
        setTimeout(function () {
          clearInterval(interval);
        }, 15000);
      }
  
      function waitForjQuery(trigger) {
        var interval = setInterval(function () {
            if (window.jQuery != "undefined") {
                clearInterval(interval);
                trigger(window.jQuery);
            }
        }, 50);
        setTimeout(function () {
            clearInterval(interval);
        }, 15000);
    }
  
    var arrow = '<i class="fa fa-angle-down" style="display: block;"></i><i class="fa fa-angle-up" style="display: none;"></i>';

      function init() {
        $ = window.jQuery

        if(window.innerWidth < 768){
          $('.product-desc-spec-info-box .prod-desc-txt').slideUp();
          $('.product-desc-spec-info-box .prod-spec-txt').slideUp();
  
          var descText = $('.product-desc-spec-info-box .prod-desc-title').html();
  
          $('.product-desc-spec-info-box .prod-desc-title').html(descText + arrow);
  
          var specText = $('.product-desc-spec-info-box .prod-spec-title').html();
  
          $('.product-desc-spec-info-box .prod-spec-title').html(specText + arrow);
  
  
          $('.product-desc-spec-info-box .prod-desc-title').click(function(){
              $('.product-desc-spec-info-box .prod-desc-txt').slideToggle();
              $('.product-desc-spec-info-box .prod-desc-title').toggleClass('active');
          });
          
          $('.product-desc-spec-info-box .prod-spec-title').click(function(){
              $('.product-desc-spec-info-box .prod-spec-txt').slideToggle();
              $('.product-desc-spec-info-box .prod-spec-title').toggleClass('active');
          });
        }
  
      }

      /* Initialise variation */
      waitForjQuery(function () {
        $ = window.jQuery
        waitForElement(".product-desc-spec-info-box .prod-spec-txt", init, 100, 25000);
      })
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();