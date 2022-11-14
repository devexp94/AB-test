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


    function init() {

      var egPrice = document.querySelector('.one-time-purchase-price').innerHTML;

      var egPriceTotal = egPrice.split(' ');

      document.querySelector('.product-single__meta .product-single__title').insertAdjacentHTML('afterend', '<p class="eg-price">'+ egPriceTotal[1]+'</p>');
      
      document.querySelector('.product-single__meta > a').insertAdjacentHTML('afterend', '<div class="eg-button-container"><span>BUY NOW</span></div>')

      document.querySelector('.paywhirl-plan-selector-group--subscription label').insertAdjacentHTML('beforeend', '<span class="eg-button-outer"><button class="eg-button eg-button-subscription" aria-label="Add to cart">Add to cart</button></span>')

      document.querySelector('.paywhirl-plan-selector-group--one label').insertAdjacentHTML('beforeend', '<span class="eg-button-outer"><button class="eg-button eg-button-one" aria-label="Add to cart">Add to cart</button></span>');
      
       document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="eg-overlay"></div>')
      document.querySelector('.eg-button-container').addEventListener('click', function(){
        document.querySelector('body').classList.add('eg-button-show');
      });

      document.querySelector('.eg-overlay').addEventListener('click', function(){
        document.querySelector('body').classList.remove('eg-button-show');
      });

      document.querySelector('.paywhirl-plan-selector-group--one').addEventListener('click', function(){
        
        document.querySelector('input[name="selling_plan"] + div label').click();	
        document.querySelector('form .product-form__item--submit button').click();  
        document.querySelector('body').classList.remove('eg-button-show');
       // console.log('click');
      });
      document.querySelector('.paywhirl-plan-selector-group--subscription').addEventListener('click', function(){
        document.querySelector('.paywhirl-plan-selector-group--one label').click();	
        document.querySelector('form .product-form__item--submit button').click(); document.querySelector('body').classList.remove('eg-button-show');        
     //   console.log('click');
      });

    }

    /* Initialise variation */
    waitForElement(".paywhirl-plan-selector-group--one", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();