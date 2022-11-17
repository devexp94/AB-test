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

    var egSteps =''+ 
'  <div class="eg-steps -yellow">'+ 
'  <div class="content-wrapper">'+ 
'      <div class="eg-steps-inr">'+ 
'          <h2 class="eg-steps-heding">Get it all in 3 easy steps</h2>'+ 
'          <div class="easy-steps-wrapper">'+
'          <div class="eg-steps-image">'+ 
'              <img src="https://mobiletyreshop.com.au/wp-content/themes/mobiletyres-phase4/images/3-steps-1.svg?v=4.3.56" class="easy-steps_image active" alt="Steps1 image">'+ 
'              <img src="https://mobiletyreshop.com.au/wp-content/themes/mobiletyres-phase4/images/3-steps-2.svg?v=4.3.56" class="easy-steps_image--other" alt="Steps2 image">'+ 
'              <img src="https://mobiletyreshop.com.au/wp-content/themes/mobiletyres-phase4/images/3-steps-3.svg?v=4.3.56" class="easy-steps_image--other" alt="Steps3 image">'+ 
'          </div>'+ 
'<div class="easy-steps-content">'+
'					<h3 class="easy-steps-content_text">Select your tyres</h3>'+
'					<h3 class="easy-steps-content_text">Book a time</h3>'+
'					<h3 class="easy-steps-content_text">We come to you</h3>'+
'				</div>'+
'          </div>'+ 
'          <p class="eg-steps-para"><strong>Best brands</strong> at the best prices, fitted at a time and place that\'s best for you</p>'+ 
'      </div>'+ 
'      </div>'+ 
'  </div>';

    function init() {
      
      
      document.querySelector('.tyreWidget.floating .tyreWidget-bar_trigger').click();

      document.querySelector('html body .carousel .carousel-item .content-wrapper > a').innerHTML = '<img src="https://expogrowth.in/wp-content/uploads/2022/07/Hero-banner-white.png">';
      
      document.querySelector('#carouselCaptionsMain .content-wrapper > a').insertAdjacentElement('afterend', document.querySelector('.tyreWidget'));

      if(!(document.querySelector('.tyreWidget-sections_sec.-active'))){
        document.querySelector('.tyreWidget.floating .tyreWidget-bar_trigger').click();
      }
      document.querySelector('.module.brand-icons').insertAdjacentHTML('beforebegin', egSteps);

      var count = 1;
      setInterval(function(){
        document.querySelector('.eg-steps-image img.active').classList.remove('active');         
        document.querySelector('.eg-steps-image img:nth-child('+count+')').classList.add('active');
        if(count == 3){
        count = 0;
        }
        count++;
      },3000);
      
    }

    /* Initialise variation */
    waitForElement(".module.brand-icons", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
