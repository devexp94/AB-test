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
    
    
var egHomePage = ''+ 
'  <div class="eg-home-free-delivery">'+ 
'      <div class="eg-img">'+ 
'          <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#truck)"><path d="M21.25 6.25H6.25V18.75H21.25V6.25Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.2271 11.0525H25.2876L28.333 14.0979V19.1736H21.2271V11.0525Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5681 24.2497C11.9697 24.2497 13.1059 23.1135 13.1059 21.7119C13.1059 20.3103 11.9697 19.1741 10.5681 19.1741C9.1665 19.1741 8.03027 20.3103 8.03027 21.7119C8.03027 23.1135 9.1665 24.2497 10.5681 24.2497Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.7649 24.2497C25.1665 24.2497 26.3027 23.1135 26.3027 21.7119C26.3027 20.3103 25.1665 19.1741 23.7649 19.1741C22.3633 19.1741 21.2271 20.3103 21.2271 21.7119C21.2271 23.1135 22.3633 24.2497 23.7649 24.2497Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.7116 19.4827H14.7393" stroke="white" stroke-width="0.79446" stroke-linecap="round"></path><path d="M5 7.5L3.75 7.5" stroke="white" stroke-width="2.5" stroke-linecap="round"></path><path d="M6.25 15L1.25 15" stroke="white" stroke-width="2.5" stroke-linecap="round"></path><path d="M5 11.25L2.5 11.25" stroke="white" stroke-width="2.5" stroke-linecap="round"></path></g><defs><clipPath id="truck"><rect width="30" height="30" fill="white"></rect></clipPath></defs></svg>'+ 
'      </div>'+ 
'      <div class="eg-content">'+ 
'          <h2 class="eg-heading">FREE next day delivery</h2>'+ 
'          <p class="eg-subheading">When you order by 12pm</p>'+ 
'      </div>'+ 
'  </div>';

var egCheckoutpage = ''+ 
'  <div class="eg-checkout-delivery">'+ 
'      <div class="eg-content-top">'+ 
'          <h2 class="heading"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>Next day delivery</h2>'+ 
'          <p class="subheading">When you order by 12pm</p>'+ 
'      </div>'+ 
'      <div class="eg-content-bottom">'+ 
'          <p> Delivery</p>'+ 
'          <p><span class="eg-price">£1.80</span> <b class="fe-free">FREE</b></p>'+ 
'      </div>'+ 
'  </div>';
    /* Variation Init */
    function init() {
      /* start your code here */
      if (window.location.pathname === '/') {
        document.querySelector('.hero_container .fb_page_hero').insertAdjacentHTML('afterend', egHomePage);
      }else{
        document.querySelector('#sulu-headless-container > div > .flex > div:nth-child(2) > div > .flex-align-center').insertAdjacentHTML('beforebegin', egCheckoutpage);
      }

    

    }
    /* Initialise variation */
    waitForElement(".hero_container .fb_page_hero, #sulu-headless-container > div > .flex > div:nth-child(2) > div > .flex-align-center", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
