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
          tile1:"https://www.iittala.com/fi-fi/sisustus/taidelasi-ja-koristeet/birds-by-toikka",
          tile2:"https://www.iittala.com/fi-fi/kattaus/kaikki-kattauksen-tuotteet/kattamisen-tuotteet",
          tile3:"https://www.iittala.com/fi-fi/kattaus/juomalasit-ja-mukit/kaikki-juomalasit-ja-mukit",
          tile4:"https://www.iittala.com/fi-fi/sisustus/kaikki-sisustustuotteet/kaikki-sisustustuotteet"
        }

        const egTileImg ={
          img1:"https://www.iittala.com/-/media/ad76144b5c0b4937ac4ea9ef2c08e01f.ashx",
          img2:"https://www.iittala.com/-/media/7447ca3495a04c3283cf5969a3df309a.ashx",
          img3:"https://www.iittala.com/-/media/e77b7d60e5984428853caab3f16cd9da.ashx",
          img4:"https://www.iittala.com/-/media/45f2ff00e031499ebef204f15b05d1e8.ashx"
        }

        const egBoxHtml = `
              <section class="layout-section eg-wrapper">
                  <div class="container">
                      <div class="row">
                          <div class="eg-box-container">
                              <!-- ==== Aino Aalto ==== -->
                              <div class="eg-card">
                                  <a href="${egTile.tile1}" class="eg-card-main-link">
                                    <img src="${egTileImg.img1}" alt="Birds by Toikka">
                                    <h4>Birds by Toikka</h4>
                                    <span class="eg-card-link">Discover</span>
                                  </a>
                              </div>
                              
                              <!-- ==== Alvar Aalto Collection ==== -->

                              <div class="eg-card">
                                  <a href="${egTile.tile2}" class="eg-card-main-link">
                                    <img src="${egTileImg.img2}" alt="Kattaus">
                                    <h4>Kattaus</h4>
                                    <span class="eg-card-link">Discover</span>
                                  </a>
                              </div>
                              
                              <!-- ==== Birds By Toikka ==== -->
                              <div class="eg-card">
                                  <a href="${egTile.tile3}" class="eg-card-main-link">
                                    <img src="${egTileImg.img3}" alt="Juomalasit ja mukit">
                                    <h4>Juomalasit ja mukit</h4>
                                    <span class="eg-card-link">Discover</span>
                                  </a>
                              </div>
                              
                              <!-- ==== Blues ==== -->
                              <div class="eg-card">
                                  <a href="${egTile.tile4}" class="eg-card-main-link">
                                    <img  src="${egTileImg.img4}" alt="Sisustus">
                                    <h4>Sisustus</h4>
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