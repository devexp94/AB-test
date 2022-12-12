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

    var egMobileMenu =''+ 
    '  <div class="eg-mobile-nav">'+ 
    '      <div class="eg-nav-inr">'+ 
    '          <ul class="eg-menu-option">'+ 
    '              <li class="eg-main-option eg-has-dropdown">'+ 
    '                  <a class="eg-title" href="/collections/sale">Sale <span'+ 
    '                          class="eg-arrow icon-chevron-right is-size-6"></span>'+ 
    '                  </a>'+ 
    '                  <ul class="eg-sub-menu eg-has-dropdown">'+ 
    '                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                          <a class="eg-title">Collections<span'+ 
    '                                  class="eg-arrow icon-chevron-right is-size-6"></span></a>'+ 
    '                          <ul class="eg-sub-menu-link">'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/sale-collections">Accessories</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/sale-bags">Bags</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/sale-books-stationery">Books and Stationary</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/sale-christmas">Christmas</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/sale-clothing">Clothing<span'+ 
    '                                          class="eg-arrow icon-chevron-right is-size-6"></span></a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/sale-home">Home</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/sale-jewellery">Jewellery</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/sale-pets">Pets</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/sale-service-pins">Service Pins</a>'+ 
    '                              </li>'+
    '                          </ul>'+ 
    '                      </li>'+ 
    '                  </ul>'+ 
    '              </li>'+ 
    '              <li class="eg-main-option eg-has-dropdown">'+ 
    '                  <a class="eg-title" href="/collections/poppy-pins-brooches">Poppy Pins & Brooches <span'+ 
    '                          class="eg-arrow icon-chevron-right is-size-6"></span>'+ 
    '                  </a>'+ 
    '                  <ul class="eg-sub-menu eg-has-dropdown">'+ 
    '                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                          <a class="eg-title">Poppy Pins and Badges <span'+ 
    '                                  class="eg-arrow icon-chevron-right is-size-6"></span></a>'+ 
    '                          <ul class="eg-sub-menu-link">'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/pins-badges">Commemorative Pins and Badges</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/service-regimental-pins">Service Pins and'+ 
    '                                      Patches</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/books">Books and Stationary</a>'+ 
    '                              </li>'+ 
    '                          </ul>'+ 
    '                      </li>'+ 
    '                      <li class="eg-sub-menu-option eg-no-dropdown">'+ 
    '                          <a class="eg-title" href="/collections/poppy-brooches">Poppy Brooches</a>'+ 
    '                      </li>'+ 
    '                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                          <a class="eg-title">Football Pins<span'+ 
    '                                  class="eg-arrow icon-chevron-right is-size-6"></span></a>'+ 
    '                          <ul class="eg-sub-menu-link">'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/premier-league-football-pins">Premier League</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/championship-football-pins">Championship</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/league-two-football-pins">League Two</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/national-league-football-pins">National League</a>'+ 
    '                              </li>'+ 
    '                          </ul>'+ 
    '                      </li>'+ 
    '                      <li class="eg-sub-menu-option eg-no-dropdown">'+ 
    '                          <a class="eg-title" href="/collections/rugby-pins">Rugby Pins</a>'+ 
    '                      </li>'+ 
    '                  </ul>'+ 
    '              </li>'+ 
    '              <li class="eg-main-option eg-has-dropdown">'+ 
    '                  <a class="eg-title" href="/collections/jewellery">Jewellery <span'+ 
    '                          class="eg-arrow icon-chevron-right is-size-6"></span>'+ 
    '                  </a>'+ 
    '                  <ul class="eg-sub-menu eg-has-dropdown">'+ 
    '                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                          <a class="eg-title">Jewellery Styles <span'+ 
    '                                  class="eg-arrow icon-chevron-right is-size-6"></span>'+ 
    '                          </a>'+ 
    '                          <ul class="eg-sub-menu-link">'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/bracelets-wristbands">Bracelets & Wristbands</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/cufflinks">Cufflinks</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/necklaces">Necklaces</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/earrings">Earrings</a>'+ 
    '                              </li>'+ 
    '                          </ul>'+ 
    '                      </li>'+ 
    '                      <li class="eg-sub-menu-option eg-no-dropdown eg-with-image">'+ 
    '                          <a class="eg-image-heading" href="/collections/jewellery-collections">Featured'+ 
    '                              Jewellery Collections</a>'+ 
    '                          <a class="eg-image-text eg-jewellery" href="/collections/british-pewter">'+ 
    '                              <img src="https://cld.accentuate.io/79778021430/1636626297130/202108_VETERAN-JEWELLERY_RBL8038.jpg?v=0&options=w_1500"><span>British Pewter</span>'+ 
    '                          </a>'+ 
    '                          <a class="eg-image-bottom-text" href="/collections/collections">View all'+ 
    '                              Collections</a>'+ 
    '                      </li>'+ 
    '                  </ul>'+ 
    '              </li>'+ 
    '              <li class="eg-main-option eg-has-dropdown">'+ 
    '                  <a class="eg-title">Clothes, Bags & Accessories <span'+ 
    '                          class="eg-arrow icon-chevron-right is-size-6"></span>'+ 
    '                  </a>'+ 
    '                  <ul class="eg-sub-menu eg-has-dropdown">'+ 
    '                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                          <a class="eg-title">Mens Clothing <span'+ 
    '                                  class="eg-arrow icon-chevron-right is-size-6"></span></a>'+ 
    '                          </a>'+ 
    '                          <ul class="eg-sub-menu-link">'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/mens-tops-t-shirts">Tops & T-Shirts</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/mens-coats-jackets">Coats & Jackets</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/mens-sportswear">Sportswear</a>'+ 
    '                              </li>'+ 
    '                          </ul>'+ 
    '                      </li>'+ 
    '                      <li class="eg-sub-menu-option eg-no-dropdown">'+ 
    '                          <a class="eg-title" href="/collections/womens-clothing">Womens Clothing</a>'+ 
    '                      </li>'+ 
    '                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                          <a class="eg-title">Bags, Purses & Wallets <span'+ 
    '                                  class="eg-arrow icon-chevron-right is-size-6"></span></a>'+ 
    '                          </a>'+ 
    '                          <ul class="eg-sub-menu-link">'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/messenger-bags">Messenger Bags</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/shopper-bags">Shopper Bags</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/coin-purses">Coin Purses</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/wallets">Wallets</a>'+ 
    '                              </li>'+ 
    '                          </ul>'+ 
    '                      </li>'+ 
    '                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                          <a class="eg-title">Poppy Accessories <span'+ 
    '                                  class="eg-arrow icon-chevron-right is-size-6"></span></a>'+ 
    '                          </a>'+ 
    '                          <ul class="eg-sub-menu-link">'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/poppy-scarves">Poppy Scarves</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/poppy-umbrellas">Poppy Umbrellas</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/lanyards">Lanyards</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/glasses-cases">Glasses Cases</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/poppy-patches">Poppy Patches</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/keyrings">Keyrings</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/hair-accessories">Hair Accessories</a>'+ 
    '                              </li>'+ 
    '                          </ul>'+ 
    '                      </li>'+ 
    '                      <li class="eg-sub-menu-option eg-no-dropdown">'+ 
    '                          <a class="eg-title" href="/collections/rbl-accessories">RBL Accessories</a>'+ 
    '                      </li>'+ 
    '                      <li class="eg-sub-menu-option eg-no-dropdown eg-with-image">'+ 
    '                          <a class="eg-image-heading" href="/collections/accessory-collections">Featured'+ 
    '                              Accessory Collections</a>'+ 
    '                          <a class="eg-image-text eg-Accessory" href="/collections/sausage-dog-collection">'+ 
    '                              <img src="https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F176724148278%2F1605802306427%2F611855-PoppyShopWebsiteAssets-Shot33-RAFPins-Desktop1980x810.jpg%3Fv%3D1623849686447&c_options=w_1500"><span>Sausage Dog</span>'+ 
    '                          </a>'+ 
    '                          <a class="eg-image-bottom-text" href="/collections/accessory-collections">View all'+ 
    '                              Collections</a>'+ 
    '                      </li>'+ 
    '                  </ul>'+ 
    '              </li>'+ 
    '  '+ 
    '              <li class="eg-main-option eg-has-dropdown">'+ 
    '                  <a class="eg-title" href="/collections/home">Home <span'+ 
    '                          class="eg-arrow icon-chevron-right is-size-6"></span>'+ 
    '                  </a>'+ 
    '                  <ul class="eg-sub-menu eg-has-dropdown">'+ 
    '                      <li class="eg-sub-menu-option eg-no-dropdown">'+ 
    '                          <a class="eg-title" href="/collections/home-accessories">Home Accessories</a>'+ 
    '                      </li>'+ 
    '                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                          <a class="eg-title" href="/collections/stationery">Stationary<span'+ 
    '                                  class="eg-arrow icon-chevron-right is-size-6"></span>'+ 
    '                          </a>'+ 
    '                          <ul class="eg-sub-menu-link">'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/notebooks">Notebooks</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/pens-pencils">Pens & Pencils</a>'+ 
    '                              </li>'+ 
    '                          </ul>'+ 
    '                      </li>'+ 
    '                      <li class="eg-sub-menu-option eg-no-dropdown">'+ 
    '                          <a class="eg-title" href="/collections/calendars">Calendars</a>'+ 
    '                      </li>'+ 
    '                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                          <a class="eg-title" href="/collections/entertainment">Entertainment<span'+ 
    '                                  class="eg-arrow icon-chevron-right is-size-6"></span>'+ 
    '                          </a>'+ 
    '                          <ul class="eg-sub-menu-link">'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/books">Books</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/games">Games</a>'+ 
    '                              </li>'+ 
    '                          </ul>'+ 
    '                      </li>'+ 
    '                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                          <a class="eg-title">Kitchen and Dining<span class="eg-arrow icon-chevron-right is-size-6"></span>'+ 
    '                          </a>'+ 
    '                          <ul class="eg-sub-menu-link">'+ 
        '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/coasters">Coasters</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/mugs">Mugs</a>'+ 
    '                              </li>'+ 
    '                          </ul>'+ 
    '                      </li>'+ 
    '                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                          <a class="eg-title">Food and Drink <span class="eg-arrow icon-chevron-right is-size-6"></span>'+ 
    '                          </a>'+ 
    '                          <ul class="eg-sub-menu-link">'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/food-1">Food</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/drink">Drink </a>'+ 
    '                              </li>'+ 
    '                          </ul>'+ 
    '                      </li>'+ 
    '                  </ul>'+ 
    '              </li>'+ 
    '  '+ 
    '              <li class="eg-main-option eg-has-dropdown">'+ 
    '                  <a class="eg-title" href="/collections/bags">Christmas & Gifts <span'+ 
    '                          class="eg-arrow icon-chevron-right is-size-6"></span>'+ 
    '                  </a>'+ 
    '                  <ul class="eg-sub-menu eg-has-dropdown">'+ 
    '                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                          <a class="eg-title">Gifts <span'+ 
    '                                  class="eg-arrow icon-chevron-right is-size-6"></span></a>'+ 
    '                          </a>'+ 
    '                          <ul class="eg-sub-menu-link">'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/gifts-for-him">For Him</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/gifts-for-her">For Her</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/christmas-gifting">Christmas Gifting</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/gifts-10-and-under">£10 and under</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/gifts-20-and-under">£20 and under</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/gifts-40-and-under">£40 and under</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/gifts-50-and-under">£50 and under</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/pages/your-big-day">Your Big Day</a>'+ 
    '                              </li>'+ 
    '                          </ul>'+ 
    '                      </li>'+ 
    '                      <li class="eg-sub-menu-option eg-no-dropdown">'+ 
    '                          <a class="eg-title" href="/collections/christmas">Christmas</a>'+ 
    '                      </li>'+ 
    '                  </ul>'+ 
    '              </li>'+ 
    '          </ul>'+ 
    '      </div>'+ 
    '  </div>';

    function init() {
      document.querySelector('.mobile-navbar nav[role="navigation"]').insertAdjacentHTML('afterend', egMobileMenu);

      var egMainSubMenu = document.querySelectorAll('.eg-main-option > .eg-title .eg-arrow');

      for(var i=0; i < egMainSubMenu.length; i++){
        egMainSubMenu[i].addEventListener('click', function(e){
            e.preventDefault()
            e.stopImmediatePropagation();
            var self = this;
            egMainSubMenu.forEach(function(item) {
                if(item != self) {
                    item.parentElement.classList.remove('eg-active');
                }
            })
            this.parentElement.classList.toggle("eg-active");
        });
      }

      var egMainSubMenuOption = document.querySelectorAll('.eg-sub-menu-option.eg-has-dropdown > .eg-title');

      for(var i=0; i < egMainSubMenuOption.length; i++){
        egMainSubMenuOption[i].addEventListener('click', function(e){
            e.preventDefault()
            e.stopImmediatePropagation();
            var self = this;
            egMainSubMenuOption.forEach(function(item) {
                if(item != self) {
                    item.classList.remove('eg-active');
                }
            })
            this.classList.toggle("eg-active");
        });
      }

    }

    waitForElement('.mobile-navbar nav[role="navigation"]', init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();