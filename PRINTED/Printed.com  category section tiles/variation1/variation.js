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


    let egStr = `
    <div class="eg_container">
    <div class="eg_wrapper">
        <h3 class="egTitle">Find your perfect print</h3>
        <p class="egPara">Your Print, Your way. Working together to bring brilliant ideas to life.</p>
        <div class="eg_cards">

            <a class="eg_card" href="https://www.printed.com/category/cards-and-invitations">
                <div class="egImg">
                <img src="https://www.cdn.printed.com/uploads/assets/2020/08/21/cards-invitations-header-desktop-2000x4002x.jpg?1598003420" alt="" srcset="">
                    <div class="egHeading">Cards & Invitations</div>
                </div>
            </a>

             <a class="eg_card"  href="https://www.printed.com/category/brochures-and-documents">
                <div class="egImg">
                    <img src="https://www.cdn.printed.com/uploads/assets/2020/10/07/documents-brochures-desktop-2x.jpg?1602068706" alt="" srcset="">
                    <div class="egHeading">Brochures & Documents</div>
                </div>
            </a>

             <a class="eg_card" href="https://www.printed.com/category/pos-and-large-format">
                <div class="egImg">
                    <img src="https://www.cdn.printed.com/uploads/assets/2020/10/07/pos-large-format-desktop2x.jpg?1602069137" alt="" srcset="">
                    <div class="egHeading">POS & Large Format</div>
                </div>
            </a>

             <a class="eg_card" href="https://www.printed.com/category/stickers-and-labels">
                <div class="egImg">
                    <img src="https://www.cdn.printed.com/uploads/assets/2020/10/14/stickers-desktop2x.jpg?1602686774" alt="" srcset="">
                    <div class="egHeading">Stickers & Lables</div>
                </div>
            </a>

            <a class="eg_card" href="https://www.printed.com/category/business-stationery">
            <div class="egImg">
                <img src="https://www.cdn.printed.com/uploads/assets/2021/01/14/business-stationary-2x.jpg?1610624098" alt="" srcset="">
                <div class="egHeading">Business Stationary</div>
            </div>
        </a>

             <a class="eg_card" href="https://www.printed.com/category/seasonal">
                <div class="egImg">
                    <img src="https://www.cdn.printed.com/uploads/assets/2020/10/07/seasonal-productsdesktop-2.jpg?1602081289" alt="" srcset="">
                    <div class="egHeading">Seasonal</div>
                </div>
            </a>

             <a class="eg_card" href = "https://www.printed.com/collections/wedding-stationery">
                <div class="egImg">
                    <img src="https://www.cdn.printed.com/uploads/assets/2022/09/15/wedding-stationery-desktop-header-2000x4002x.jpg?1663243670" alt="" srcset="">
                    <div class="egHeading">Wedding</div>
                </div>
            </a>

             <a class="eg_card" href= "https://www.printed.com/category/menus">
                <div class="egImg">
                    <img src="https://www.cdn.printed.com/uploads/assets/2021/11/04/req-16726-flat-folded-menu-catagory-page-header-4000x8002x.jpg?1636040764" alt="" srcset="">
                    <div class="egHeading">Menus</div>
                </div>
            </a>
        </div>
    </div>
</div>`
    
    /* Variation Init */
    function init() {
      /* start your code here */
      document.querySelector("#js-content-wrapper > main > cms-page-widgets-component").insertAdjacentHTML("beforebegin" , egStr);

    }

    /* Initialize variation */
    waitForElement('#js-content-wrapper > main > cms-page-widgets-component', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


