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

      document.querySelector('.product-single .product-medium-up--one-half').insertAdjacentElement('beforebegin', document.querySelector('.product-single__title'));

      var flkty = new Flickity('.main-image.carousel');
        flkty.destroy();

        flkty = new Flickity('.main-image.carousel', {
          cellAlign: 'center',
          wrapAround: true,
          freeScroll: true,
          prevNextButtons: true,
          pageDots: false,
          autoPlay: 5000,
          arrowShape: { 
            x0: 10,
            x1: 60, y1: 50,
            x2: 70, y2: 40,
            x3: 30
          }
        });

        document.querySelector('.product-single .main-image.carousel .flickity-prev-next-button.previous svg path').setAttribute('d','M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z');

        document.querySelector('.product-single .main-image.carousel .flickity-prev-next-button.next svg path').setAttribute('d','M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z');
    }

    /* Initialise variation */
    waitForElement(".product-single__title", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
