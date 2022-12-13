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

    let egFirst = `
    <div class="eg-content eg-first-nav-content">
      <ul>
        <li>
          <a href="/pages/shop-by-size">Shop By Size</a>
        </li>
        <li>
          <a href="/collections/bras">Shop All Bras</a>
        </li>
      </ul>
    </div>
    `;

    let egFifth = ``;

    let egSixth = ``;

    let egSeventh = ``;

    let egEighth = ``;



    
    /* Variation Init */
    function init() {
      /* start your code here */
      // inserting html in first nav
      document.querySelector(".header__navigation>.menu__items>.menu__item:nth-child(1)>div.menu__items--wrapper").insertAdjacentHTML("afterbegin",egFirst);
      
    }

    /* Initialize variation */
    waitForElement('.header__navigation>.menu__items>.menu__item:nth-child(1)>div.menu__items--wrapper', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


