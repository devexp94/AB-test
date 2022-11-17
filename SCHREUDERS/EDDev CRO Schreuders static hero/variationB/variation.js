(function () {
  try {
    var debug = 0;
    var variation_name = "";

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


    var hero =''+ 
    '  <div class="eg-hero-outer padding-lr-90">'+
    '  <div class="the-slide flex-wrapper eg-hero">'+ 
    '      <div class="col-60 image-col-bg animate__animated animate__fadeIn animate__delay-1s" style="background-image: url(https://schreuders.com.au/wp-content/uploads/2020/05/header-1-rs-1.jpg); background-repeat: no-repeat; background-position: center; background-size: cover;"></div>'+ 
    '      <div class="col-40 flex-wrapper-center flex-column text-left padding-40 animate__animated animate__fadeInRight animate__delay-1s">'+  
    '          <h2 class="large-heading">Building winning relationships</h2>'+ 
    '          <div class="animate__animated animate__fadeInRight animate__delay-2s">'+ 
    '              <h1>Compensation Lawyers</h1>'+ 
    '              <h5>No Win, No Fee. 95% Success Rate</h5>'+ 
    '              <a href="/contact/" class="black-but" style="display: inline-block">Enquire now</a>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '    </div>'+ 
    '  </div>';

    function init() {
      document.querySelector('main .full .box-wrapper').insertAdjacentHTML('afterend', hero);

    }


    waitForElement("main .full .box-wrapper", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
