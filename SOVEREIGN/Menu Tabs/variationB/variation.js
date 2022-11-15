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

var rightContent = ''+
'              <div class="right-content">'+ 
'                  <div class="image">'+ 
'                      <img src="https://agents.sovereign.com/-/media/bynder/sovereign-destinations/greece/corfu/050046-paleokastritsa-corfu-greece-pixabay-1776215-hybris.jpg?rev=cdfa99b3815d44cfa841ec542a4c1f89&w=220&h=140" alt="image">'+ 
'                  </div>'+ 
'                  <div class="text-content">'+ 
'                      <h3 class="heading">Explore Greece on your next luxury escape</h3>'+ 
'                      <p class="sub-heading">Go beyond the sugar cube houses and blue minaret domes to unravel a rich and inspiring history.</p>'+ 
'                  </div>'+ 
'              </div>'; 

    var newMenu =''+ 
    '  <li id="destinations" class="nav tabcontent aligned" data-element="nav">'+ 
    '      <span class="nav-link">Destinations</span>'+ 
    '      <div class="submenu">'+ 
    '      <div class="submenu-inr">'+ 
    '          <div class="sub-nav-tab">'+ 
    '              <span id="europe" class="sub-option active">Europe</span>'+ 
    '              <span id="caribbean-mexico" class="sub-option">Caribbean & Mexico</span>'+ 
    '              <span id="indian-ocean" class="sub-option">Indian Ocean</span>'+ 
    '              <span id="uae" class="sub-option">United Arab Emirates</span>'+ 
    '              <span id="bali" class="sub-option">Bali</span>'+ 
    '              <span id="thailand" class="sub-option">Thailand</span>'+ 
    '              <a href="https://www.sovereign.com/luxury-holiday-finder/" class="finder" class="sub-option">Luxury Holiday Finder   ></a>'+ 
    '          </div>'+ 
    '          <!-- Tab-1 -->'+ 
    '          <div class="sub-nav-content active" id="europe">'+ 
    '              <div class="left-content">'+ 
    '              <div class="left-content-inr">'+
    '                  <ul class="tab-1">'+ 
    '                      <li><a href="/holidays/croatia/">Croatia</a></li>'+ 
    '                      <li><a href="/holidays/cyprus/">Cyprus</a></li>'+ 
    '                      <li><a href="/holidays/greece/">Greece</a></li>'+ 
    '                      <li><a href="/holidays/italy/">Italy</a></li>'+ 
    '                  </ul>'+ 
    '                  <ul class="tab-1">'+
    '                      <li><a href="/holidays/portugal/">Portugal</a></li>'+ 
    '                      <li><a href="/holidays/spain/">Spain</a></li>'+ 
    '                      <li><a href="/holidays/turkey/">Turkey</a></li>'+ 
    '                      <li><a href="/holidays/montenegro/">Montenegro</a></li>'+ 
    '                  </ul>'+ 
    '                  <ul class="tab-1">'+
    '                      <li><a href="/holidays/malta/">Malta</a></li>'+ 
    '                  </ul>'+ 
    '              </div></div>'+  rightContent+ 
    '          </div>'+ 
    '          <!-- Tab-2 -->'+ 
    '          <div class="sub-nav-content" id="caribbean-mexico">'+ 
    '              <div class="left-content">'+ 
    '              <div class="left-content-inr">'+ 
    '                  <ul class="tab-1">'+ 
    '                      <li><a href="/holidays/mexico/">Mexico</a></li>'+ 
    '                      <li><a href="/holidays/barbados/">Barbados</a></li>'+ 
    '                      <li><a href="/holidays/antigua/">Antigua</a></li>'+ 
    '                      <li><a href="/holidays/st-lucia/">St Lucia</a></li>'+ 
    '                  </ul>'+ 
    '                  <ul class="tab-1">'+
    '                      <li><a href="/holidays/grenada/">Grenada</a></li>'+ 
    '                      <li><a href="/holidays/dominican-republic/">Dominican Republic</a></li>'+ 
    '                      <li><a href="/holidays/jamaica/">Jamaica</a></li>'+ 
    '                  </ul>'+ 
    '              </div></div>'+ rightContent+ 
    '          </div>'+ 
    '          <!-- Tab-3 -->'+ 
    '          <div class="sub-nav-content" id="indian-ocean">'+ 
    '              <div class="left-content">'+ 
    '              <div class="left-content-inr">'+ 
    '                  <ul class="tab-1">'+ 
    '                      <li><a href="/holidays/maldives/">Maldives</a></li>'+ 
    '                      <li><a href="/holidays/mauritius/">Mauritius</a></li>'+ 
    '                      <li><a href="/holidays/seychelles/">Seychelles</a></li>'+ 
    '                  </ul>'+ 
    '              </div></div>'+  rightContent+ 
    '          </div>'+ 
    '          <!-- Tab-4 -->'+ 
    '          <div class="sub-nav-content" id="uae">'+ 
    '              <div class="left-content">'+ 
    '              <div class="left-content-inr">'+ 
    '                  <ul class="tab-1">'+ 
    '                      <li><a href="/holidays/uae/">All UAE</a></li>'+ 
    '                      <li><a href="/holidays/uae/dubai/">Dubai</a></li>'+ 
    '                      <li><a href="/holidays/uae/abu-dhabi/">Abu Dhabi</a></li>'+ 
    '                      <li><a href="/holidays/uae/ras-al-khaimah/">Ras Al Khaimah</a></li>'+ 
    '                  </ul>'+ 
    '              </div></div>'+  rightContent+ 
    '          </div>'+ 
    '          <!-- Tab-5 -->'+ 
    '          <div class="sub-nav-content" id="bali">'+ 
    '              <div class="left-content">'+ 
    '              <div class="left-content-inr">'+ 
    '                  <ul class="tab-1">'+ 
    '                      <li><a href="/holidays/indonesia/bali/">Bali</a></li>'+ 
    '                  </ul>'+ 
    '              </div></div>'+  rightContent+ 
    '          </div>'+ 
    '          <!-- Tab-1 -->'+ 
    '          <div class="sub-nav-content" id="thailand">'+ 
    '              <div class="left-content">'+ 
    '              <div class="left-content-inr">'+ 
    '                  <ul class="tab-1">'+ 
    '                      <li><a href="/holidays/thailand/bangkok/">Bangkok</a></li>'+ 
    '                      <li><a href="/holidays/thailand/chiang-mai/">Chiang Mai</a></li>'+ 
    '                      <li><a href="/holidays/thailand/khao-lak/">Khao Lak</a></li>'+ 
    '                      <li><a href="/holidays/thailand/khao-sok/">Khao Sok</a></li>'+ 
    '                  </ul>'+ 
    '                  <ul class="tab-1">'+
    '                      <li><a href="/holidays/thailand/koh-samui/">Koh Samui</a></li>'+ 
    '                      <li><a href="/holidays/thailand/krabi/">Krabi</a></li>'+ 
    '                      <li><a href="/holidays/thailand/phuket/">Phuket</a></li>'+ 
    '                  </ul>'+ 
    '              </div></div>'+  rightContent+ 
    '          </div>'+ 
    '      </div>'+ 
    '      </div>'+ 
    '  </li>'+ 
    '  <li id="holiday-type" class="nav tabcontent aligned" data-element="nav">'+ 
    '      <span class="nav-link">Holiday Types</span>'+ 
    '      <div class="submenu">'+ 
    '      <div class="submenu-inr">'+ 
    '          <div class="sub-nav-content">'+ 
    '              <div class="left-content">'+
    '              <div class="left-content-inr">'+  
    '                  <ul class="tab-1">'+ 
    '                      <li><a href="/holiday-types/">All Holiday Types</a></li>'+ 
    '                      <li><a href="/holiday-types/winter-sun-holidays/">Winter Sun Holidays</a></li>'+ 
    '                      <li><a href="/holiday-types/all-inclusive-holidays/">All Inclusive</a></li>'+ 
    '                      <li><a href="/holiday-types/adult-only-holidays/">Adult Only</a></li>'+ 
    '                  </ul>'+ 
    '                  <ul class="tab-1">'+
    '                      <li><a href="/holiday-types/family-holidays/">Family Friendly</a></li>'+ 
    '                      <li><a href="/holiday-types/villa-holidays/">Villa Holidays</a></li>'+ 
    '                      <li><a href="/hotel-collections/hotels-with-private-pools/">Hotels with Private Pools</a></li>'+ 
    '                      <li><a href="/hotel-collections/hotels-with-villas/">Hotels with Villas</a></li>'+ 
    '                  </ul>'+ 
    '                  <ul class="tab-1">'+
    '                      <li><a href="/holiday-types/honeymoons/">Luxury Honeymoons</a></li>'+ 
    '                      <li><a href="/holiday-types/multi-centre-holidays/">Multi-Centre Holidays</a></li>'+ 
    '                      <li><a href="/holiday-types/island-hopping-holidays/">Island-Hopping Holidays</a></li>'+ 
    '                      <li><a href="/hotel-collections/boutique-hotels/">Boutique Hotels</a></li>'+ 
    '                  </ul>'+ 
    '              </div></div>'+  rightContent+ 
    '          </div>'+ 
    '      </div>'+ 
    '      </div>'+ 
    '  </li>'+ 
    '  <li id="offer" class="nav tabcontent aligned" data-element="nav">'+ 
    '      <span class="nav-link">Offers</span>'+ 
    '      <div class="submenu">'+ 
    '      <div class="submenu-inr">'+ 
    '          <div class="sub-nav-content">'+ 
    '              <div class="left-content">'+ 
    '              <div class="left-content-inr">'+ 
    '                  <ul class="tab-1">'+ 
    '                      <li><a href="/holiday-offers/">All offers</a></li>'+ 
    '                      <li><a href="/holiday-offers/late-escapes/">Late Escape Offers</a></li>'+ 
    '                      <li><a href="/holiday-offers/2022-offers/">Summer 2022 Offers</a></li>'+ 
    '                      <li><a href="/holiday-offers/winter-2021-2022-offers/">Winter 2021/22 Offers</a></li>'+ 
    '                  </ul>'+ 
    '                  <ul class="tab-1">'+
    '                      <li><a href="/holiday-offers/couples/">Couples Holiday Offers</a></li>'+ 
    '                      <li><a href="/holiday-offers/family/">Family Offers</a></li>'+ 
    '                      <li><a href="/holiday-offers/greece-and-cyprus/">Greece & Cyprus Offers</a></li>'+ 
    '                      <li><a href="/holiday-offers/spain-and-portugal/">Spain & Portugal Offers</a></li>'+ 
    '                  </ul>'+ 
    '                  <ul class="tab-1">'+
    '                      <li><a href="/holiday-offers/italy-and-croatia/">Italy & Croatia Offers</a></li>'+ 
    '                      <li><a href="/holiday-offers/long-haul/">Long Haul Offers</a></li>'+ 
    '                  </ul>'+ 
    '              </div></div>'+  rightContent+ 
    '          </div>'+ 
    '      </div>'+ 
    '      </div>'+ 
    '  </li>'+ 
    '  <li id="start-planning" class="nav tabcontent aligned" data-element="nav">'+ 
    '      <span class="nav-link">Start Planning</span>'+ 
    '      <div class="submenu">'+ 
    '      <div class="submenu-inr">'+ 
    '          <div class="sub-nav-content">'+ 
    '              <div class="left-content">'+ 
    '              <div class="left-content-inr">'+ 
    '                  <ul class="tab-1">'+ 
    '                      <li><a href="#portalId=6781017&formId=d83ea43d-885d-4025-bdce-377be60dba67">Request a quote</a></li>'+ 
    '                      <li><a href="#portalId=6781017&formId=441dc194-2964-478d-87e9-8bd35cdec373">Request a brochure</a></li>'+ 
    '                      <li><a href="#portalId=6781017&formId=0773606d-9ee6-4fd8-a7da-1ae6c2e82b65">Subscribe to our newsletter</a></li>'+ 
    '                      <li><a href="/about/contact/">Contact us</a></li>'+ 
    '                  </ul>'+ 
    '                  <ul class="tab-1">'+
    '                      <li><a href="/luxury-holiday-finder/">Holiday Finder Tool</a></li>'+ 
    '                      <li><a href="/about/travel-with-confidence/">Covid-19: Refund Guarantee</a></li>'+ 
    '                      <li><a href="/about/booking-with-sovereign/">Booking with Sovereign</a></li>'+ 
    '                      <li><a href="#">Will Brexit affect my holiday?</a></li>'+ 
    '                  </ul>'+ 
    '                  <ul class="tab-1">'+
    '                      <li><a href="/about/your-trusted-advisers/">Your Trusted Advisers</a></li>'+ 
    '                      <li><a href="/about/">About us</a></li>'+ 
    '                  </ul>'+ 
    '              </div></div>'+  rightContent+ 
    '          </div>'+ 
    '      </div>'+ 
    '      </div>'+ 
    '  </li>';

    function init() {
      document.querySelector('ul.nav.navbar-nav').innerHTML = newMenu
      
      
      document.querySelector('header .navbar-header .navbar-phone div.text-right').insertAdjacentElement('beforebegin',document.querySelector('header .navbar-collapse'));
      var ele = document.querySelector('div.navbar-phone .navbar-phone-text');
      var copy = ele.innerHTML.replace('We are open','');
      ele.innerHTML = copy;

      document.querySelectorAll('.submenu .sub-nav-tab > span').forEach(function(item) {
        item.addEventListener('click', function() {
          document.querySelector('.submenu .sub-nav-tab > span.active').classList.remove('active');    
          this.classList.add('active');
          var id = this.getAttribute('id');
          document.querySelector('.sub-nav-content.active').classList.remove('active');
          document.querySelector('.sub-nav-content#'+id).classList.add('active')
        })
      })

      window.addEventListener('resize', function(event) {
        if(window.innerWidth > 1023){
          document.querySelector('header .navbar-header .navbar-phone div.text-right').insertAdjacentElement('beforebegin',document.querySelector('header .navbar-collapse'));
        }else{
          document.querySelector('header .navbar-header--new').insertAdjacentElement('afterend',document.querySelector('header .navbar-collapse')); 
        }
    }, true);

    if(window.innerWidth > 1023){
      document.querySelector('header .navbar-header .navbar-phone div.text-right').insertAdjacentElement('beforebegin',document.querySelector('header .navbar-collapse'));
    }else{
      document.querySelector('header .navbar-header--new').insertAdjacentElement('afterend',document.querySelector('header .navbar-collapse')); 
    }
     
    }

    function live(selector, event, callback, context) {
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent('on' + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this.Element && function (ElementPrototype) {
        ElementPrototype.matches = ElementPrototype.matches ||
          ElementPrototype.matchesSelector ||
          ElementPrototype.webkitMatchesSelector ||
          ElementPrototype.msMatchesSelector ||
          function (selector) {
            var node = this,
              nodes = (node.parentNode || node.document).querySelectorAll(selector),
              i = -1;
            while (nodes[++i] && nodes[i] != node);
            return !!nodes[i];
          };
      }(Element.prototype);
      // live binding helper using matchesSelector
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function (e) {
          var found, el = e.target || e.srcElement;
          while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    }

    waitForElement("ul.nav.navbar-nav", function() {
      if(window.screen.width > 1023) {
        init();
      } else {
        // console.log('esfasdf')
        live('.has-dropdown .navbar-nav__link', 'click', function(e) {
          e.preventDefault();
          // console.log('click')
          
          this.parentElement.classList.toggle('drop-open');

        })
        live('.has-dropdown .site-navigation__sub-link', 'click', function(e) {
          if(this.getAttribute('href') == null || this.getAttribute('href') == '#') {	
            e.preventDefault();	
            var self = this;	
            var links = this.closest('ul.site-navigation__sub-container').querySelectorAll(':scope > li.site-navigation__sub-item[data-sub-menu] > a[href="#"]');	
            links.forEach(function(item) {	
              if(item != self) {	
                item.parentElement.classList.remove('drop-open');	
              }	
            })	
            self.parentElement.classList.toggle('drop-open');	
          }
        });
      }
    }, 50, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();