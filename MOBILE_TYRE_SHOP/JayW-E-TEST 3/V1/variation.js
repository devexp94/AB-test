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
    
    
    var egHeroContent =''+ 
    '  <div class="eg-hero">'+ 
    '      <div class="content-wrapper">'+ 
    '  <div class="eg-hero-inr">'+
    '          <h1 class="eg-hero-heading">The perfect tyres,<span>fitted anywhere</span></h1>'+ 
    '          <ul class="eg-list">'+ 
    '              <li>All the best tyre brands</li>'+ 
    '              <li>4 for 3 offer and free mobile fitting</li>'+ 
    '              <li>Next day delivery and fitting</li>'+ 
    '          </ul>'+ 
    '          <div class="eg-button-container">'+ 
    '           <a class="eg-btn">Get Started</a>'+
    '          </div>'+ 
    '      </div>'+ 
    '  <div class="eg-hero-form">'+
    '      <span></span>'+
    '      </div>'+ 
    '      </div>'+ 
    '  <div class="eg-hero-img">'+
    '       <img src="https://mobiletyreshop.com.au/wp-content/uploads/2021/08/image-3-1.png">'
    '      </div>'+ 
    '  </div>';
    /* Variation Init */
    function init() {
      /* start your code here */
      document.querySelector('.tyreWidget').classList.add('-active');
      document.querySelector('.tyreWidget-sections_sec').classList.add('-active');

      document.querySelector('.static-hero > a').insertAdjacentHTML('afterend', egHeroContent);
      document.body.classList.add('running3553v4');

      
      document.querySelector('.eg-hero-form span').insertAdjacentElement('afterend', document.querySelector('.tyreWidget'));
      
      document.querySelector('.eg-hero .eg-button-container a').addEventListener('click',function(e){
        e.preventDefault();
        document.body.classList.add('eg-form-highlight');
      });

      document.querySelector('body').addEventListener('click', function(e){
        if(e.target !=document.querySelector('.eg-hero .eg-button-container a')){
          document.querySelector('body').classList.remove('eg-form-highlight');
        }
      });
      
    }
    //model show on load
    // function initModel() {
    //   document.querySelector(".tyreWidget .tyreWidget-bar-buttons_btn.-tyre").click();
    // }

    /* Initialise variation */
    waitForElement(".static-hero > a", init, 50, 15000);
    //wait for widget CTA 
     waitForElement("body.is-widget-open .tyreWidget .tyreWidget-bar-buttons_btn.-tyre", initModel, 20, 10000);
    //to reduce flashing 
    document.querySelector('body').insertAdjacentHTML('beforeend', '<img src="https://mobiletyreshop.com.au/wp-content/uploads/2021/08/image-3-1.png" style="display:none;">');
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
