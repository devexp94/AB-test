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

    var egIconSvg =''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">'+ 
'  <path d="M19 22H5C3.9 22 3 21.1 3 20V6C3 4.9 3.9 4 5 4H19C20.1 4 21 4.9 21 6V20C21 21.1 20.1 22 19 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+ 
'  <path d="M16 2V4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+ 
'  <path d="M8 2V4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+ 
'  <path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+ 
'  <path d="M17 18.5C15.6 17.5 13.9 17 12 17C10.1 17 8.4 17.6 7 18.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+ 
'  </svg>';

    var egStickyBanner =''+ 
    '  <div class="eg-StickyBanner" data-component="eg-StickyBanner">'+ 
    '   <div class="eg-banner-overlay"></div>'+
    '      <p class="banner-heading">'+ egIconSvg +' Contact Us</p>'+ 
    '      <div class="eg-StickyBanner_inner container">'+ 
    '          <a href="https://www.quarkexpeditions.com/subscribe-to-our-newsletter"  target="_blank" class="eg-StickyBanner_btn icon-signin">'+ 
    '              <div class="eg-StickyBanner_icon">'+
    '                 <p class="eg-heading">Newsletter Signup</p>'+
    '                 <p class="eg-subheading">Sign up to be the first to hear about our voyages, webinars, and exclusive offers</p>'+
    '              </div>'+ 
    '          </a>'+ 
    '          <a href="" class="eg-StickyBanner_btn eg-call icon-quote">'+ 
    '              <div class="eg-StickyBanner_icon">'+
    '                 <p class="eg-heading">Call Us</p>'+
    '                 <p class="eg-subheading">Talk to a Polar Travel Advisor 24 hours a day, Monday to Friday, and Saturday until 4PM EST</p>'+
    '              </div>'+ 
    '          </a>'+ 
    '          <a href="https://www.quarkexpeditions.com/request-quote" target="_blank" class="eg-StickyBanner_btn icon-request-brochure">'+ 
    '              <div class="eg-StickyBanner_icon">'+
    '                 <p class="eg-heading">Request a Quote</p>'+
    '                 <p class="eg-subheading">Fill out a form and one of and one of our Polar Travel Advisors Will be in touch</p>'+
    '              </div>'+ 
    '          </a>'+ 
    '      </div>'+ 
    '  </div>';

    function init() {

      document.querySelector('body').insertAdjacentHTML('beforeend', egStickyBanner);

      document.querySelector('.eg-StickyBanner .banner-heading').addEventListener('click', function(){
        document.querySelector('.eg-StickyBanner').classList.toggle('active');
      })

      document.querySelector('.eg-StickyBanner .eg-banner-overlay').addEventListener('click', function(){
        document.querySelector('.eg-StickyBanner').classList.remove('active');
      })

      var callNumber = document.querySelector('.call-us.nav-item .nav-link a[href^="tel:"]').getAttribute('href');
      // var callText = document.querySelector('.call-us.nav-item .nav-link a[href^="tel:"]').textContent;

      document.querySelector('.eg-call').setAttribute('href', callNumber);
      // document.querySelector('.eg-call span').innerHTML = callText;
    }

    waitForElement("body", init, 100, 35000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
