(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";
        var $;
        /* all Pure helper functions */

        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function() {
                if (
                    document &&
                    document.querySelector(selector) &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function() {
                clearInterval(interval);
            }, delayTimeout);
        }

        const egBoxHtml = `
              <section class="layout-section eg-wrapper">
                  <div class="container">
                      <div class="row">
                          <div class="eg-box-container">
                              <!-- ==== Aino Aalto ==== -->
                              <div class="eg-card">
                                  <a href="https://www.iittala.com/en-at/tableware/all-tableware/all-tableware-items" class="eg-card-main-link">
                                    <img src="https://www.iittala.com/-/media/products/2021/04/07/11/25/resource_iittalaemea_1051124.jpg?q=100&iw=644&ih=644&crop=1">
                                    <h4>Aino Aalto</h4>
                                    <span class="eg-card-link">Discover</span>
                                  </a>
                              </div>
                              
                              <!-- ==== Alvar Aalto Collection ==== -->

                              <div class="eg-card">
                                  <a href="https://www.iittala.com/en-at/gifts/gift-wrapping-service/design-in-gift-wrap" class="eg-card-main-link">
                                    <img src="https://www.iittala.com/-/media/product-images/iittalaemea/alvar-aalto/1050152_iittalaemea_02_iittala-alvar-aalto-collection-vase-160mm-copper.jpg?q=100&iw=644&ih=644&crop=1">
                                    <h4>Alvar Aalto Collection</h4>
                                    <span class="eg-card-link">Discover</span>
                                  </a>
                              </div>
                              
                              <!-- ==== Birds By Toikka ==== -->
                              <div class="eg-card">
                                  <a href="https://www.iittala.com/en-at/tableware/drinkware/all-drinkware" class="eg-card-main-link">
                                    <img src="https://www.iittala.com/-/media/product-images/iittalaemea/taika/1063336_iittalaemea_05_iittala_taika-mug-04l-15-year-anniversary.jpg?q=100&iw=644&ih=644&crop=1">
                                    <h4>Birds By Toikka</h4>
                                    <span class="eg-card-link">Discover</span>
                                  </a>
                              </div>
                              
                              <!-- ==== Blues ==== -->
                              <div class="eg-card">
                                  <a href="https://www.iittala.com/en-at/home-decor/all-home-decor/all-home-decor-items" class="eg-card-main-link">
                                    <img src="https://www.iittala.com/-/media/iittala/home/promo-tiles/800x480_title_iittala_2022_giftwrapping_red_green.jpg?q=100&iw=800&ih=480&crop=1">
                                    <h4>Blues</h4>
                                    <span class="eg-card-link">Discover</span>
                                  </a>
                              </div>
                              
                          </div>
                      </div>
                  </div>
              </section>`;
              
        /* Variation Init */
        function init() {
            /* start your code here */
            // inserting boxes
            document.querySelector("#main > .layout-section:first-child").insertAdjacentHTML("afterend", egBoxHtml);

        }

        /* Initialize variation */
        waitForElement('#main > .layout-section:first-child', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();