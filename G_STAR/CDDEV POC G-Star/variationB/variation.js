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

      document.querySelector('.productTile:nth-child(2) .productTile-images .product-signings-wrapper').insertAdjacentHTML('afterend', '<p class="eg-trend"><img src="https://cfactory-img.s3.amazonaws.com/GSTAR/trending-icon.svg"> <strong>TRENDING</strong> 54 purchased today</p>');

      document.querySelector('.productTile:nth-child(4) .productTile-images .product-signings-wrapper').insertAdjacentHTML('afterend', '<p class="eg-trend"><img src="https://cfactory-img.s3.amazonaws.com/GSTAR/trending-icon.svg"> <strong>TRENDING</strong> 48 purchased today</p>');

      
      var tooltip = document.querySelectorAll('.productTile-images');

      for(var i=0; i < tooltip.length; i++){
        tooltip[i].insertAdjacentHTML('beforeend', '<div class="eg-tooltip"> <p class="eg-tooltip-text"><img src="https://cfactory-img.s3.amazonaws.com/GSTAR/heart-icon.svg"> 11 others also put this in their wishlist today</p></div>');
      }
      
      var wishBt = document.querySelectorAll('.productTile-images .product-wishlist');
        for(var i=0; i < wishBt.length; i++){
            wishBt[i].addEventListener('mouseover',function(){
                        this.parentElement.classList.add('eg-hover');
                    });
            wishBt[i].addEventListener('mouseout',function(){
                        this.parentElement.classList.remove('eg-hover');
                    });
        }

    }


    waitForElement(".productLister-productTileContainer .productTile:nth-child(4) .productTile-images", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
