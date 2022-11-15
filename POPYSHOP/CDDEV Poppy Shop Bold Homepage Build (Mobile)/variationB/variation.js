(function () {
  try {
    var debug = 0;
    var variation_name = "";

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

    var egHero =''+ 
'  <div class="eg-hero-banner">'+ 
'      <div class="eg-hero-banner-inr">'+ 
'          <div class="eg-banner__image">'+ 
'              <picture>'+ 
'                  <source media="(max-width: 768px)" srcset="//cdn.shopify.com/s/files/1/0256/3591/3782/files/REM22_Shot7_M_POPPY_APPEAL_1_768x.jpg?v=1665498816 1x, //cdn.shopify.com/s/files/1/0256/3591/3782/files/REM22_Shot7_M_POPPY_APPEAL_1_768x@2x.jpg?v=1665498816 2x">'+ 
'                  <source media="(max-width: 1024px)" srcset="//cdn.shopify.com/s/files/1/0256/3591/3782/files/REM22_Shot7_T_POPPY_APPEAL_1_1280x.jpg?v=1665498800 1x, //cdn.shopify.com/s/files/1/0256/3591/3782/files/REM22_Shot7_T_POPPY_APPEAL_1_1280x@2x.jpg?v=1665498800 2x"><img src="//cdn.shopify.com/s/files/1/0256/3591/3782/files/REM22_Shot7_L_POPPY_APPEAL_1_1980x.jpg?v=1665498777" alt="Poppy Shop UK" class="lazy loaded" loading="eager" srcset="//cdn.shopify.com/s/files/1/0256/3591/3782/files/REM22_Shot7_L_POPPY_APPEAL_1_1980x.jpg?v=1665498777 1x, //cdn.shopify.com/s/files/1/0256/3591/3782/files/REM22_Shot7_L_POPPY_APPEAL_1_1980x@2x.jpg?v=1665498777 2x"'+ 
'                      data-ll-status="loaded">'+ 
'              </picture>'+ 
'          </div>'+ 
'          <div class="eg-banner-text">'+ 
'              <h2 class="banner__box-title has-margin-bottom-medium is-lh1 is-size-1-desktop is-size-1-tablet is-size-2-mobile has-text-weight-medium">'+ 
'                  <p>Buy a Poppy</p>'+ 
'              </h2>'+ 
'              <a href="/collections/buy-a-poppy" class="banner__box-button button has-margin-top-medium is-size-5 has-text-weight-bold has-padding-left-medium has-padding-right-medium" tabindex="-1">'+ 
'                  <span>Shop Now</span>'+ 
'              </a>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>';

var egAfterHero =''+ 
'  <div class="eg-after-hero">'+ 
'      <div class="eg-after-hero-inr section">'+ 
'          <a href="https://www.poppyshop.org.uk/collections/football-pins" class="eg-football-pin">'+ 
'              <img src="https://cld.accentuate.io/169147170870/1597939834236/Football-Pins-Desktop.jpg?v=1658395781241&options=w_1500" alt="Football Pins">'+ 
'              <h2 class="eg-heading">Football Pins</h2>'+ 
'          </a>'+ 
'          <a href="https://www.poppyshop.org.uk/collections/poppy-pins-brooches" class="eg-brooches-pin">'+ 
'              <img src="https://expogrowth.in/wp-content/uploads/2022/10/Pins-Shot@2x.png" alt="Poppy Pins & Brooches">'+ 
'              <h2 class="eg-heading">Poppy Pins & Brooches</h2>'+ 
'          </a>'+ 
'      </div>'+ 
'  </div>'+ 
'  <div class="eg-donate-section">'+ 
'      <div class="section">'+ 
'          <p class="eg-donate-heading"><b>Last year, you helped us</b> respond to <span class="eg-red">37,341</span> requested for support, provide a home for over <span class="eg-red">700</span> people, award grants to <span class="eg-red">6,524</span> individuals. </p>'+ 
'          <p class="eg-donate-para">100% of all profits, from every sale, go to the Royal British Legion to help provide life-long support to our Armed Forces Community. <a href="#" class="eg-learn-more">Learn more</a></p>'+ 
'  '+ 
'          <div class="eg-donate-button"><a href="#" class="btn button">Donate Now</a></div>'+ 
'      </div>'+ 
'  </div>'+ 
'  <div class="eg-favourites">'+ 
'      <div class="section">'+ 
'          <p class="eg-favourites-heading is-block has-text-primary-blue has-text-weight-medium is-size-3 has-margin-bottom-medium">Explore Our Favourites</p>'+ 
'  '+ 
'          <div class="eg-favourites-image-container">'+ 
'              <div class="collection-tiles__item has-text-centered">'+ 
'                  <div class="has-margin-bottom-large">'+ 
'                      <a href="/collections/pins-badges" title="Poppy Pins & Badges">'+ 
'  '+ 
'                          <img class="lazy loaded" alt="Poppy Pins & Badges" width="580" height="580" src="//cdn.shopify.com/s/files/1/0256/3591/3782/files/Pins_580x.jpg?v=1665148802" data-ll-status="loaded">'+ 
'                      </a>'+ 
'                  </div>'+ 
'                  <a href="/collections/pins-badges" title="Poppy Pins & Badges">'+ 
'                      <span class="is-block has-text-primary-blue has-text-weight-medium is-size-3 has-margin-bottom-medium">Poppy Pins & Badges</span>'+ 
'                  </a>'+ 
'              </div>'+ 
'              <div class="collection-tiles__item has-text-centered">'+ 
'                  <div class="has-margin-bottom-large">'+ 
'                      <a href="/collections/military-metals" title="Military Metals">'+ 
'                          <img class="lazy loaded" alt="Military Metals" width="580" height="580" src="//cdn.shopify.com/s/files/1/0256/3591/3782/files/Military_Metals_2_580x580_713f5787-abee-486c-9e85-e1a44edaedd5_580x.jpg?v=1645713988" data-ll-status="loaded">'+ 
'  '+ 
'                      </a>'+ 
'                  </div>'+ 
'                  <a href="/collections/military-metals" title="Military Metals">'+ 
'                      <span class="is-block has-text-primary-blue has-text-weight-medium is-size-3 has-margin-bottom-medium">Military'+ 
'                          Metals</span>'+ 
'                  </a>'+ 
'              </div>'+ 
'              <div class="collection-tiles__item has-text-centered">'+ 
'                  <div class="has-margin-bottom-large">'+ 
'                      <a href="/collections/sports-pins" title="Sports Pins">'+ 
'  '+ 
'                          <img class="lazy loaded" alt="Sports Pins" width="580" height="580" src="//cdn.shopify.com/s/files/1/0256/3591/3782/files/Combined_Pins_Tablet_580x.jpg?v=1658489258" data-ll-status="loaded">'+ 
'  '+ 
'  '+ 
'                      </a>'+ 
'                  </div>'+ 
'                  <a href="/collections/sports-pins" title="Sports Pins">'+ 
'                      <span class="is-block has-text-primary-blue has-text-weight-medium is-size-3 has-margin-bottom-medium">Sports'+ 
'                          Pins</span>'+ 
'                  </a>'+ 
'              </div>'+ 
'              <div class="collection-tiles__item has-text-centered">'+ 
'                  <div class="has-margin-bottom-large">'+ 
'                      <a href="/collections/bags" title="Bags">'+ 
'                          <img class="lazy loaded" alt="Bags" width="580" height="580" src="https://expogrowth.in/wp-content/uploads/2022/10/bag@2x.png" data-ll-status="loaded">'+ 
'                      </a>'+ 
'                  </div>'+ 
'                  <a href="/collections/bags" title="Bags">'+ 
'                      <span class="is-block has-text-primary-blue has-text-weight-medium is-size-3 has-margin-bottom-medium">Bags</span>'+ 
'                  </a>'+ 
'              </div>'+ 
'          </div>'+ 
'          <div class="eg-favourites-button-container">'+ 
'              <a href="/collections/poppy-pins-brooches" title="Poppy Pins & Brooches">'+ 
'                  <span class="is-block has-text-primary-blue has-text-weight-medium is-size-3 has-margin-bottom-medium">Poppy Pins & Brooches</span>'+ 
'              </a>'+ 
'              <a href="/collections/jewellery" title="Jewellery">'+ 
'                  <span class="is-block has-text-primary-blue has-text-weight-medium is-size-3 has-margin-bottom-medium">Jewellery</span>'+ 
'              </a>'+ 
'              <a href="/collections/bags" title="Bags">'+ 
'                  <span class="is-block has-text-primary-blue has-text-weight-medium is-size-3 has-margin-bottom-medium">Bags</span>'+ 
'              </a>'+ 
'              <a href="/collections/accessories" title="Accessories">'+ 
'                  <span class="is-block has-text-primary-blue has-text-weight-medium is-size-3 has-margin-bottom-medium">Accessories</span>'+ 
'              </a>'+ 
'              <a href="/collections/home" title="Home">'+ 
'                  <span class="is-block has-text-primary-blue has-text-weight-medium is-size-3 has-margin-bottom-medium">Home</span>'+ 
'              </a>'+ 
'              <a href="/collections/gifts" title="Gifts">'+ 
'                  <span class="is-block has-text-primary-blue has-text-weight-medium is-size-3 has-margin-bottom-medium">Gifts</span>'+ 
'              </a>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>'+ 
'  </div>';


var egGifting =''+ 
'  <div class="eg-gift">'+ 
'      <div class="section">'+ 
'          <p class="eg-gift-heading is-block has-text-primary-blue has-text-weight-medium is-size-3 has-margin-bottom-medium">'+ 
'              Gifting</p>'+ 
'          <div class="eg-gift-image-container">'+ 
'              <div class="collection-tiles__item has-text-centered">'+ 
'                  <div class="has-margin-bottom-large">'+ 
'                      <a href="/collections/gifts-for-him" title="gifts-for-him"> <img class="lazy loaded" alt="Gifts for him" width="580" height="580" src="https://cdn.shopify.com/s/files/1/0256/3591/3782/files/GiftsForHim-mobilehomepage.jpg?v=1666352001" data-ll-status="loaded"> </a>'+ 
'                  </div>'+ 
'                  <a href="/collections/gifts-for-him" title="Gifts for him"> <span class="is-block has-text-primary-blue has-text-weight-medium is-size-3 has-margin-bottom-medium">Gifts for him</span> </a>'+ 
'              </div>'+ 
'              <div class="collection-tiles__item has-text-centered">'+ 
'                  <div class="has-margin-bottom-large">'+ 
'                      <a href="/collections/gifts-for-her" title="Gifts for her">'+ 
'                          <img class="lazy loaded" alt="Gifts for her" width="580" height="580" src="https://cdn.shopify.com/s/files/1/0256/3591/3782/files/GiftsForHer-mobilehomepage.jpg?v=1666352001" data-ll-status="loaded">                        </a>'+ 
'                  </div>'+ 
'                  <a href="/collections/gifts-for-her" title="Gifts for her"> <span class="is-block has-text-primary-blue has-text-weight-medium is-size-3 has-margin-bottom-medium">Gifts for her</span> </a>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>';

    function init() {

      document.querySelector('main .hero-banner').insertAdjacentHTML('afterend', egHero);
      
      document.querySelector('main .shopify-section:nth-child(4)').insertAdjacentHTML('afterend', egAfterHero);

      document.querySelector('.eg-favourites + div').insertAdjacentHTML('afterend', egGifting);

      document.querySelector('.footer-newsletter .footer-newsletter__content').innerHTML = '<p class="footer-newsletter-heading">Enjoy 15% off</p><p class="footer-newsletter-para">Sing up to receive exclusive discounts & latest news and information about the Poppy Shop</p>';

    }

    waitForElement(".footer-newsletter .footer-newsletter__content", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
