(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;
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

    const egScrollBanner = `
    <div class="egBanner">
    <div class="egScrollMenu">
    <a href="https://www.wickedclothes.com/collections/new">NEW</a>
    <a href="https://www.wickedclothes.com/collections/sale">SALE</a>
    <a href="https://www.wickedclothes.com/collections/t-shirts">SHIRTS</a>
    <a href="https://www.wickedclothes.com/collections/sweaters">SWEATSHIRTS</a>
    <a href="https://www.wickedclothes.com/collections/rugs">RUGS</a>
    <a href="https://www.wickedclothes.com/collections/hats">HATS</a>
    <a href="https://www.wickedclothes.com/collections/underwear">UNDERWEAR</a>  
  </div>
</div>
    `
   
    /* Variation Init */
    function init() {
      /* start your code here */
      if(window.innerWidth < 768){
        document.querySelector(".nav-show-mobile.hero > main").insertAdjacentHTML("beforebegin" , egScrollBanner);
      }
    }

    /* Initialize variation */
    waitForElement('.nav-show-mobile.hero > main ,  html body.nav-show-mobile', init, 300, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


