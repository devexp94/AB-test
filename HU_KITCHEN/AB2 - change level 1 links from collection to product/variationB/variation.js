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

    //chocolate-Chip URL not found
var bestsellerUrl = ['/products/hu-salty?variant=31660154683465', '/products/hu-gems?variant=31660162678857','/products/hu-grain-free-cookies?variant=39273842376777','/products/hunks-variety-packs?variant=31715369975881','/products/grain-free-crackers-variety-packs?variant=31680129695817','/products/grain-free-crackers-variety-packs?variant=31680129695817']

    function init() {

      var desktop = document.querySelector('.header__menu .header-sub-menu-column__link .header-sub-menu-column__link-parent > a');

      var mobile = document.querySelector('.header__menu-blocks--mobile .header-sub-menu-column__link-parent > a');

      // var bar = document.querySelectorAll('.header-sub-menu-column__link-parent > a[href="/collections/chocolate-bars"]');

      // for(i=0; i < bar.length; i++){
      //   bar[i].setAttribute('href', '/products/hu-salty?variant=31660154683465');
      // }


      // //BestSeller Missing

      // // var cookies = document.querySelectorAll('.header-sub-menu-column__link-parent > a[href="/collections/cookies"]');

      // // for(i=0; i < cookies.length; i++){
      // //   cookies[i].setAttribute('href', '/products/hu-grain-free-cookies?variant=39273842376777');
      // // } 

      // // var hunks = document.querySelectorAll('.header-sub-menu-column__link-parent > a[href="/collections/hunks"]');

      // // for(i=0; i < hunks.length; i++){
      // //   hunks[i].setAttribute('href', '/products/hunks-variety-packs?variant=31715369975881');
      // // } 

      // var crackers = document.querySelectorAll('.header-sub-menu-column__link-parent > a[href="/collections/crackers"]');

      // for(i=0; i < crackers.length; i++){
      //   crackers[i].setAttribute('href', '/products/grain-free-crackers-variety-packs?variant=31680129695817');
      // } 

      // var bundles = document.querySelectorAll('.header-sub-menu-column__link-parent > a[href="/collections/bundles"]');

      // for(i=0; i < bundles.length; i++){
      //   bundles[i].setAttribute('href', '/products/grain-free-crackers-variety-packs?variant=31680129695817');
      // }

    }

    /* Initialise variation */
    waitForElement('.header-sub-menu-column__link-parent > a[href="/collections/bundles"]', init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
