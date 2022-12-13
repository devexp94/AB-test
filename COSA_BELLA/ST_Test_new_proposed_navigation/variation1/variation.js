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

        let egFifth = `
    <div class="eg-content eg-nav-content">
      <div class="eg-title"><a href="/collections/cosabella-fall-catalog">Fall/Holiday 2022 Catalog</a></div>

      <!-- images and links -->
      <ul>
          <li>
            <a href="/collections/new-panties">
              <img src="https://cdn.shopify.com/s/files/1/0248/1455/1074/products/ASHAN0721_NEELA_LB_CA_L.jpg?v=1662659693" alt="">
            </a>
            <a href="/collections/new-panties">New items</a>
          </li>

          <li>
            <a href="/collections/womens-swimwear">
              <img src="https://cdn.shopify.com/s/files/1/0248/1455/1074/products/VTMAP3102M_KENTE_LB_CA_L_540x.jpg?v=1666365164" alt="">
            </a>
            <a href="/collections/womens-swimwear">Swimwear</a>
          </li>

          <li>
            <a href="/collections/mens-underwear">
              <img src="https://cdn.shopify.com/s/files/1/0248/1455/1074/products/NEVER0491_UDBLU_LB_CA_L.jpg?v=1665253210" alt="">
            </a>
            <a href="/collections/mens-underwear">Menswear</a>
          </li>

          <li>
            <a href="/collections/maternity">
              <img src="https://cdn.shopify.com/s/files/1/0248/1455/1074/products/AMORM9861_SR-SR_LB_CA_L_27178449-5b4a-43c5-be6b-c940bf0ad3ff_540x.jpg?v=1668541951" alt="">
            </a>
            <a href="/collections/maternity">Maternity</a>
          </li>
      </ul>
    </div>`;

        let egSixth = `<div class="eg-content eg-nav-content">
      <div class="eg-title"><a href="/collections/new">Shop All</a></div>

      <!-- images and links -->
      <ul>
          <li>
            <a href="/collections/new-bras">
              <img src="https://cdn.shopify.com/s/files/1/0248/1455/1074/products/NEVER1301_VARGR_LB_CA_L.jpg?v=1662683035" alt="">
            </a>
            <a href="/collections/new-bras">New Bras</a>
          </li>

          <li>
            <a href="/collections/new-panties">
              <img src="https://cdn.shopify.com/s/files/1/0248/1455/1074/products/PARAD0771_LADRD_LB_CA_L_540x.jpg?v=1662688790" alt="">
            </a>
            <a href="/collections/new-panties">New Panties</a>
          </li>

          <li>
            <a href="/collections/lingerie">
              <img src="https://cdn.shopify.com/s/files/1/0248/1455/1074/products/SAREM1162_PAISY_LB_CA_L_540x.jpg?v=1666364462" alt="">
            </a>
            <a href="/collections/lingerie">New Lingerie</a>
          </li>

          <li>
            <a href="/collections/new-sleep-lounge">
              <img src="https://cdn.shopify.com/s/files/1/0248/1455/1074/products/AMORP9622_CNGPA_LB_CA_L_540x.jpg?v=1666272335" alt="">
            </a>
            <a href="/collections/new-sleep-lounge">New Sleepwear</a>
          </li>

          <li>
            <a href="/collections/maternity">
              <img src="https://cdn.shopify.com/s/files/1/0248/1455/1074/products/AMORM9861_SR-SR_LB_CA_L_27178449-5b4a-43c5-be6b-c940bf0ad3ff_540x.jpg?v=1668541951" alt="">
            </a>
            <a href="/collections/maternity">Other</a>
          </li>
      </ul>
    </div>`;
        let egSeventh = `<div class="eg-content eg-nav-content">
      <div class="eg-title"><a href="/collections/sale">Shop All Sales</a></div>

      <!-- images and links -->
       <ul>
          <li>
            <a href="/collections/new-bras">
              <img src="https://cdn.shopify.com/s/files/1/0248/1455/1074/products/NEVER1301_VARGR_LB_CA_L.jpg?v=1662683035" alt="">
            </a>
            <a href="/collections/new-bras">Bras</a>
          </li>

          <li>
            <a href="/collections/new-panties">
              <img src="https://cdn.shopify.com/s/files/1/0248/1455/1074/products/PARAD0771_LADRD_LB_CA_L_540x.jpg?v=1662688790" alt="">
            </a>
            <a href="/collections/new-panties">Panties</a>
          </li>

          <li>
            <a href="/collections/lingerie">
              <img src="https://cdn.shopify.com/s/files/1/0248/1455/1074/products/SAREM1162_PAISY_LB_CA_L_540x.jpg?v=1666364462" alt="">
            </a>
            <a href="/collections/lingerie">Lingerie</a>
          </li>

          <li>
            <a href="/collections/new-sleep-lounge">
              <img src="https://cdn.shopify.com/s/files/1/0248/1455/1074/products/AMORP9622_CNGPA_LB_CA_L_540x.jpg?v=1666272335" alt="">
            </a>
            <a href="/collections/new-sleep-lounge">Sleepwear</a>
          </li>
      </ul>
    </div>`;

        let egEighth = `<div class="eg-content eg-nav-content">
      <div class="eg-title"><a href="/collections/best-sellers">Best Selling Gifts</a></div>

      <!-- images and links -->
      <ul>
          <li>
            <a href="/collections/gifts">
              <img src="https://cdn.shopify.com/s/files/1/0248/1455/1074/products/SBABY5343_RMVNP_LB_CA_L_595b25bc-ad7a-48fb-aa45-f6345f36b8be.jpg?v=1668543841" alt="">
            </a>
            <a href="/collections/gifts">Stocking Stuffers</a>
          </li>

          <li>
            <a href="/collections/something-red">
              <img src="https://cdn.shopify.com/s/files/1/0248/1455/1074/products/NEVER1327_RO-RO_LB_CA_L_540x.jpg?v=1643310811" alt="">
            </a>
            <a href="/collections/something-red">Festive Reds</a>
          </li>

          <li>
            <a href="/collections/new-romantics">
              <img src="https://cdn.shopify.com/s/files/1/0248/1455/1074/products/ALLUR1511_BLACK_LB_CA_L_540x.jpg?v=1620347634" alt="">
            </a>
            <a href="/collections/new-romantics">Luxury</a>
          </li>

          <li>
            <a href="/collections/gifts-under-75">
              <img src="https://cdn.shopify.com/s/files/1/0248/1455/1074/products/NEVER0261_BLACK_LB_CA_L_540x.jpg?v=1662666142" alt="">
            </a>
            <a href="/collections/gifts-under-75">Gifts Under &dollar;75</a>
          </li>
      </ul>
    </div>`;




        /* Variation Init */
        function init() {
            /* start your code here */
            setTimeout(() => {
                // inserting html in first nav
                document.querySelector(".header__navigation>.menu__items>.menu__item:nth-child(1)>div.menu__items--wrapper").insertAdjacentHTML("afterbegin", egFirst);

                // changing text of 4 nav item
                document.querySelector(".header__navigation>.menu__items>.menu__item:nth-child(4) > a").innerText = "Sleepwear";

                // changing text of 5 nav item
                document.querySelector(".header__navigation>.menu__items>.menu__item:nth-child(5) > a").innerText = "Others";
                // inserting html in fifth nav
                document.querySelector(".header__navigation>.menu__items>.menu__item:nth-child(5)>div.menu__items--wrapper").insertAdjacentHTML("afterbegin", egFifth);

                // changing text of 8th nav item
                document.querySelector(".header__navigation>.menu__items>.menu__item:nth-child(8) > a").innerText = "Gifts for Her";

                // inserting html in sixth nav
                document.querySelector(".header__navigation>.menu__items>.menu__item:nth-child(6)>div.menu__items--wrapper").insertAdjacentHTML("afterbegin", egSixth);

                // inserting html in seventh nav
                document.querySelector(".header__navigation>.menu__items>.menu__item:nth-child(7)>div.menu__items--wrapper").insertAdjacentHTML("afterbegin", egSeventh);

                // inserting html in eight nav
                document.querySelector(".header__navigation>.menu__items>.menu__item:nth-child(8)>div.menu__items--wrapper").insertAdjacentHTML("afterbegin", egEighth);
            }, 500);
        }

        /* Initialize variation */
        // only for desktop
        if (window.innerWidth > 995) {
            waitForElement('.header__navigation>.menu__items>.menu__item', init, 50, 15000);
        }
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();