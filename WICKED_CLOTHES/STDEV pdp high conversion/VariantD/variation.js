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

    function init() {

      document.querySelector('input#add-to-bag').value = 'Add to Cart';

      document.querySelector('.pdp--sizing-help').insertAdjacentHTML('beforebegin', '<p class="eg-add-button"><span class="eg-icon"><i id="wishlist_icon" class="smartwishlist--before"></i></span> Add to Wishlist</p>');

      if(document.querySelector('#bookmarkit[status="bookmarked"]')){
        document.querySelector('.eg-add-button').classList.add('eg-wishlist-show');   
      }else{
        document.querySelector('.eg-add-button').classList.remove('eg-wishlist-show');   
      }


      document.querySelector('.eg-add-button').addEventListener('click', function(){
        document.querySelector('#smartwishlist__container #smartwishlist > div').click();
        document.querySelector('.eg-add-button').classList.toggle('eg-wishlist-show');   
      });
    }


    waitForElement("#bookmarkit", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
