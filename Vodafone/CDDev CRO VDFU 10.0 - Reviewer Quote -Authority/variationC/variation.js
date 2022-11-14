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

    var egRatingSection =''+ 
    '  <div class="eg-rating-section">'+ 
    '  <div class="eg-rating-inr">'+ 
    '      <div class="eg-image-section"><div class="eg-startup-img"><img src="https://cfactory-img.s3.amazonaws.com/VDFU/10.0/startups.svg" alt="Startups"></div><img src="https://cfactory-img.s3.amazonaws.com/VDFU/10.0/reviewImg.svg" alt="rating"></div>'+ 
    '      <div class="eg-text-section">'+ 
    '      <div class="eg-text-section-inr">'+ 
    '          <h3 class="eg-heading">Rated #1 for small businesses</h3>'+ 
    '          <p class="eg-subheading">Vodafone topped the list of six with a 4.5 out of five rating thanks to its fair and transparent pricing (no line rental or upfront pricing), excellent customer support, and great coverage.</p>'+ 
    '          <p class="eg-author"><img src="https://cfactory-img.s3.amazonaws.com/VDFU/10.0/stars.svg" atl="star Rating"> -Henry Williams from <a href="http://startups.co.uk/" rel="noopener" target="_blank"> Startups.co.uk.</a></p>'+ 
    '      </div>'+ 
    '      </div>'+ 
    '      </div>'+ 
    '  </div>';

    function init() {
      document.querySelector('.vfuk-Controller__shadow').insertAdjacentHTML('afterend', egRatingSection);

    }


    waitForElement('body[data-inq-observer="1"]', init, 250, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();