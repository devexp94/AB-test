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
    
var egHeroImageDesktop = ''+
'<img class="image" alt="" src="https://cfactory-img.s3.amazonaws.com/LOR/0.1/new/prueba-d.png" srcset="https://cfactory-img.s3.amazonaws.com/LOR/0.1/new/prueba-d.png 1x, https://cfactory-img.s3.amazonaws.com/LOR/0.1/new/prueba-d.png 2x ">';

var egHeroImageMobile = ''+
'<img class="image" alt="" src="https://cfactory-img.s3.amazonaws.com/LOR/0.1/new/prueba-m.png" srcset="https://cfactory-img.s3.amazonaws.com/LOR/0.1/new/prueba-m.png 1x, https://cfactory-img.s3.amazonaws.com/LOR/0.1/new/prueba-m.png 2x ">';

    /* Variation Init */
    function init() {

      /* start your code here */
      document.querySelector('.home-intro__content .text.heading').innerHTML = 'A fashion </br>journey begins';

      if(window.screen.width >= 600){
        document.querySelector('aside.home-intro__media').innerHTML = egHeroImageDesktop;
      }else{
        document.querySelector('aside.home-intro__media').innerHTML = egHeroImageMobile;
      }

      window.addEventListener('resize', function() {
        if(window.screen.width >= 600){
          document.querySelector('aside.home-intro__media').innerHTML = egHeroImageDesktop;
        }else{
          document.querySelector('aside.home-intro__media').innerHTML = egHeroImageMobile;
        }
      });
  
    }


    /* Initialise variation */
    waitForElement("aside.home-intro__media", init, 250, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();