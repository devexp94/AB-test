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

    
    function init() {

        if ($(window).width() < 767){
            waitForSlick(function() {
                var $ = window.jQuery;
                if($('.plan-container-card')){
                    $('.plan-container-card').slick({
                      // infinite: false,
                        dots: true,
                        slidesToShow: 1.08,
                        centerMode: false,
                      });
                }
                if($('.addOnsCard')){
                    $('.addOnsCard').slick({
                        dots: true,
                        slidesToShow: 1.08,
                        centerMode: false,
                    });  
                }
                if($('.select-plan__categories-selection__container__categories')){
                    $('.select-plan__categories-selection__container__categories').slick({
                        dots: true,
                        slidesToShow: 1.08,
                        centerMode: false,
                        });  
                }

              });
        }
        addScript();

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

    // function waitForjQuery(trigger) {
    //   var interval = setInterval(function () {
    //       if (window.jQuery != undefined) {
    //           clearInterval(interval);
    //           trigger();
    //       }
    //   }, 50);
    //   setTimeout(function () {
    //       clearInterval(interval);
    //   }, 15000)
    // }

    function addScript() {
      var cssScript=''+ 
      "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css'/>";
      document.querySelector('head').insertAdjacentHTML('beforeend', cssScript);
          
      var swiperScript = document.createElement('script');
      swiperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
      document.getElementsByTagName('head')[0].appendChild(swiperScript);
      }

      var egNext = '<span>Next deal </span> <i class="fa fa-angle-right" aria-hidden="true"></i>';
      var egPrev = '<i class="fa fa-angle-left" aria-hidden="true"></i> <span>Previous deal</span>';

      function init2(){
        $('.plan-container-card .slick-next').html(egNext)
        $('.plan-container-card .slick-prev').html(egPrev)
        $('.addOnsCard .slick-next').html(egNext)
        $('.addOnsCard .slick-prev').html(egPrev)
        $('.select-plan__categories-selection__container__categories .slick-next').html('<span>Next plan </span> <i class="fa fa-angle-right" aria-hidden="true"></i>')
        $('.select-plan__categories-selection__container__categories .slick-prev').html('<i class="fa fa-angle-left" aria-hidden="true"></i> <span>Previous plan</span>')
      }

    waitForElement('.select-plan__categories-selection__container__categories', init, 50, 10000);
    waitForElement('.select-plan__categories-selection__container__categories .slick-next', init2, 50, 10000);

})();