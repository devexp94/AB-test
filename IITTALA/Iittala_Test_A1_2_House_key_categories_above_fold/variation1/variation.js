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

        const egTile = {
          tile1:"https://www.iittala.com/fi-fi/lahjat/lahjojen-paketointipalvelu/paketoitavat-lahjat",
          tile2:"https://www.iittala.com/fi-fi/kattaus/kaikki-kattauksen-tuotteet/kattamisen-tuotteet",
          tile3:"https://www.iittala.com/fi-fi/kattaus/juomalasit-ja-mukit/kaikki-juomalasit-ja-mukit",
          tile4:"https://www.iittala.com/fi-fi/sisustus/kaikki-sisustustuotteet/kaikki-sisustustuotteet"
        }

        const egTileImg ={
          img1:"https://www.iittala.com/-/media/iittala/home/promo-tiles/800x480_title_iittala_2022_giftwrapping_red_green.jpg?q=100&iw=800&ih=480&crop=1",
          img2:"https://www.iittala.com/-/media/product-images/iittalaemea/aino-aalto/1008545_iittalaemea_03_iittala-aino-aalto-tumbler-22-cl-clear.jpg?q=100&iw=644&ih=644&crop=1",
          img3:"https://www.iittala.com/-/media/iittala/categories/title-component-new/1600x960_iittala_category_drinkware.jpg?q=100&iw=800&ih=480&crop=1",
          img4:"https://www.iittala.com/-/media/product-images/iittalaemea/watering-bottle/1051840_iittalaemea_03_iittala-watering-bottle-2set.jpg?q=100&iw=644&ih=644&crop=1"
        }

        const egBoxHtml = `
              <section class="layout-section eg-wrapper">
                  <div class="container">
                      <div class="row">
                          <div class="eg-box-container">
                              <!-- ==== Aino Aalto ==== -->
                              <div class="eg-card">
                                  <a href="${egTile.tile1}" class="eg-card-main-link">
                                    <img src="${egTileImg.img1}" alt="Aino Aalto">
                                    <h4>Aino Aalto</h4>
                                    <span class="eg-card-link">Discover</span>
                                  </a>
                              </div>
                              
                              <!-- ==== Alvar Aalto Collection ==== -->

                              <div class="eg-card">
                                  <a href="${egTile.tile2}" class="eg-card-main-link">
                                    <img src="${egTileImg.img2}" alt="Alvar Aalto Collection">
                                    <h4>Alvar Aalto Collection</h4>
                                    <span class="eg-card-link">Discover</span>
                                  </a>
                              </div>
                              
                              <!-- ==== Birds By Toikka ==== -->
                              <div class="eg-card">
                                  <a href="${egTile.tile3}" class="eg-card-main-link">
                                    <img src="${egTileImg.img3}" alt="Birds By Toikka">
                                    <h4>Birds By Toikka</h4>
                                    <span class="eg-card-link">Discover</span>
                                  </a>
                              </div>
                              
                              <!-- ==== Blues ==== -->
                              <div class="eg-card">
                                  <a href="${egTile.tile4}" class="eg-card-main-link">
                                    <img src="${egTileImg.img4}" alt="Blues">
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