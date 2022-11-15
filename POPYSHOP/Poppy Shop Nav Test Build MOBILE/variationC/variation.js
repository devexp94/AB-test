(function () {
  try {
    var debug = 0;
    var variation_name = "";

    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (
          document &&
          document.querySelector(selector) &&
          document.querySelectorAll(selector).length > 0 && window.egMobileMenu1
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

   
    var egMobileMenu = window.egMobileMenu1 +
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
    '                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                          <a class="eg-title" href="/collections/entertainment">Entertainment<span'+ 
    '                                  class="eg-arrow icon-chevron-right is-size-6"></span>'+ 
    '                          </a>'+ 
    '                          <ul class="eg-sub-menu-link">'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/books">Books</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/colouring-books">Colouring Books</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/games">Games</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/jigsaws">Jigsaws</a>'+ 
    '                              </li>'+ 
    '                          </ul>'+ 
    '                      </li>'+ 
    '                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                          <a class="eg-title">Kitchen and Dining<span class="eg-arrow icon-chevron-right is-size-6"></span>'+ 
    '                          </a>'+ 
    '                          <ul class="eg-sub-menu-link">'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/baking">Baking</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/Coasters">Coasters</a>'+ 
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
    '                                  <a class="eg-title" href="/collections/food">Food</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/drink">Drink </a>'+ 
    '                              </li>'+ 
    '                          </ul>'+ 
    '                      </li>'+ 
    '                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                          <a class="eg-title">Car Accessories <span class="eg-arrow icon-chevron-right is-size-6"></span>'+ 
    '                          </a>'+ 
    '                          <ul class="eg-sub-menu-link">'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/car-stickers">Car Stickers</a>'+ 
    '                              </li>'+ 
    '                          </ul>'+ 
    '                      </li>'+ 
    '                      <li class="eg-sub-menu-option eg-no-dropdown">'+ 
    '                          <a class="eg-title" href="/collections/pet-accessories">Pet Accessories</a>'+ 
    '                      </li>'+ 
    '  '+ 
    '  '+ 
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
    '                                  <a class="eg-title" href="/collections/your-big-day">Your Big Day</a>'+ 
    '                              </li>'+ 
    '                          </ul>'+ 
    '                      </li>'+ 
    '                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                          <a class="eg-title">Christmas <span'+ 
    '                                  class="eg-arrow icon-chevron-right is-size-6"></span></a>'+ 
    '                          </a>'+ 
    '                          <ul class="eg-sub-menu-link">'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/christmas-cards">Christmas Cards</a>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-link-option">'+ 
    '                                  <a class="eg-title" href="/collections/christmas-decorations-1">Christmas Decorations</a>'+ 
    '                              </li>'+ 
    '                          </ul>'+ 
    '                      </li>'+ 
    '                  </ul>'+ 
    '              </li>'+ 
    '          </ul>'+ 
    '      </div>'+ 
    '  </div>';
var htmlString = `<div class="eg_collections">

    <h2>Collections</h2>

    <div class="eg_main">
        <div class="eg_innr" eg-href="https://www.poppyshop.org.uk/collections/commemorative-events">
            <div class="eg_img">
                <img src="https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F176724148278%2F1605802306427%2F611855-PoppyShopWebsiteAssets-Shot33-RAFPins-Desktop1980x810.jpg%3Fv%3D1623849686447&c_options=w_1500" alt="Commemorative_Events">
            </div>
            <h3>Commemorative Events</h3>
        </div>
    
        <div class="eg_innr" eg-href="https://www.poppyshop.org.uk/pages/veterans-market">
            <div class="eg_img">
                <img src="https://cld.accentuate.io/79778021430/1636626297130/202108_VETERAN-JEWELLERY_RBL8038.jpg?v=0&options=w_1500" alt="veteran">
            </div>
            <h3>Veteran's Market</h3>
        </div>
    
        <div class="eg_innr" eg-href="https://www.poppyshop.org.uk/collections/membership">
            <div class="eg_img">
                <img src="https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F169159032886%2F1590760983831%2F611855-PoppyShopWebsiteAssets-Shot23-Membership-Desktop1980x810.jpg%3Fv%3D1623850704516&c_options=w_1500" alt="Membership">
            </div>
            <h3>Membership</h3>
        </div>
    
        <div class="eg_innr" eg-href="https://www.poppyshop.org.uk/collections/armed-forces">
            <div class="eg_img">
                <img src="https://cld.accentuate.io/169158049846/1590758159718/RBL005_Spring_Shot-18_-Commemorative-Shot-1_0384.jpg?v=1654766277411&options=w_1500" alt="Armed_Forces">
            </div>
            <h3>Armed Forces</h3>
        </div>
    
        <div class="eg_innr" eg-href="https://www.poppyshop.org.uk/collections/legion-100-years">
            <div class="eg_img">
                <img src="https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F260894654518%2F1619789009590%2FTRBL-Banners-Silk-Replica-Poppy-1980x810.jpg%3Fv%3D1623855953233&c_options=w_1500" alt="RBL_Collection">
            </div>
            <h3>RBL Collection</h3>
        </div>
    
        <div class="eg_innr" eg-href="https://www.poppyshop.org.uk/collections/military-metals">
            <div class="eg_img">
                <img src="https://cld.accentuate.io/173949452342/1601498132204/REM22_Shot10_L_Military-Metals-1.jpg?v=1665399898795&options=w_1500" alt="Commemorative_Events">
            </div>
            <h3>Military Metals</h3>
        </div>
    </div>
</div>`;
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
      document.querySelector("#shopify-section-1583400657542").insertAdjacentHTML('afterend',htmlString)
      document.querySelectorAll('.eg_collections .eg_innr').forEach(function(el){
    el.addEventListener('click',function(){
      window.location.href = this.getAttribute('eg-href');
    });
      });

    }

    waitForElement('.mobile-navbar nav[role="navigation"]', init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
