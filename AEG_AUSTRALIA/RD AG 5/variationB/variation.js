(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
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
    function onLoadJqueryLibrary(trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function() {
        if (window.jQuery && window.jQuery.fn) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function() {
        clearInterval(interval);
      }, delayTimeout);
    }
    
    var egCookingMainMenu = ''+
    '<a href="https://www.aegaustralia.com.au/buying-guides/oven/" class="submenu-navigation__item js-first-col-item has-submenu" data-second-col="second-col__0_122" gtm-auto-cal-pos="" gtm-initialized-click-link="true">'+
    '<span>Oven Buying Guide</span></a>'; //Fake Data and GTM section link you need to change
                               

var OvenBuyingGuide = '<a href="https://www.aegaustralia.com.au/buying-guides/oven/" class="submenu-navigation__item  " gtm-auto-cal-pos="" gtm-initialized-click-link="true">Oven Buying Guide</a>'; 

var CooktopBuyingGuide = '<a href="https://www.aegaustralia.com.au/buying-guides/cooktop/" class="submenu-navigation__item  " gtm-auto-cal-pos="" gtm-initialized-click-link="true">Cooktop Buying Guide</a>';

var RangehoodBuyingGuide = '<a href="https://www.aegaustralia.com.au/buying-guides/rangehood/" class="submenu-navigation__item  " gtm-auto-cal-pos="" gtm-initialized-click-link="true">Rangehood Buying Guide</a>'; 

    var egCookingSubMenu = ''+
    '  <div class="container" id="second-col__0_122">'+ //Fake ID you need to change
    '      <div class="hide-for-large submenu-navigation__mobile-title hide-for-large js-second-column-title">Oven Buying Guide</div>'+ 
    '      <div class="row">'+ 
    '          <div class="col-md-4">'+ OvenBuyingGuide + CooktopBuyingGuide + RangehoodBuyingGuide
    '          </div>'+ 
    '          <div class="col-md-4">'+ 
    '              <a href="/taste-challenge-the-expected/" class="submenu-navigation__item submenu-navigation__rich-item  " gtm-auto-cal-pos="" gtm-initialized-click-link="true">'+ 
    '                  <div class="submenu-navigation__rich-item-img">'+ 
    '                      <img width="200" height="200" class="preview" data-replace="true" data-src="/contentassets/151fef5c79264b399f4be8d4fdbe24a4/taste-des.jpg" src="/contentassets/151fef5c79264b399f4be8d4fdbe24a4/taste-des.jpg" alt="taste" io-loaded="true">'+ 
    '                  </div>'+ 
    '                  <span class="submenu-navigation__rich-item__title">Taste - Challenge The Expected</span>'+ 
    '              </a>'+ 
    '          </div>'+ 
    '          <div class="col-md-4">'+ 
    '              <a href="/inspire-with-aeg/technology-innovation/sous-vide-cooking/" class="submenu-navigation__item submenu-navigation__rich-item  " gtm-auto-cal-pos="" gtm-initialized-click-link="true">'+ 
    '                  <div class="submenu-navigation__rich-item-img">'+ 
    '                      <img width="200" height="200" class="preview" data-replace="true" data-src="/contentassets/01572af71b6c48faaf354b93eaf2ade2/sous-vide-1.png" src="/contentassets/01572af71b6c48faaf354b93eaf2ade2/sous-vide-1.png" alt="Sous-vide-1.png" io-loaded="true">'+ 
    '                  </div>'+ 
    '                  <span class="submenu-navigation__rich-item__title">Sous Vide Cooking</span>'+ 
    '              </a>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';

    var egDishwasheroption = ''+
    '<a href="https://www.aegaustralia.com.au/buying-guides/dishwasher/" class="submenu-navigation__item js-first-col-item has-submenu" data-second-col="second-col__0_122" gtm-auto-cal-pos="" gtm-initialized-click-link="true">'+
    '<span>Dishwasher Buying Guide</span></a>'; //Fake Data and GTM section link you need to change
       
    var LaundryBuyingGuides = ''+
    '<a href="https://www.aegaustralia.com.au/laundry/" class="submenu-navigation__item js-first-col-item has-submenu" data-second-col="second-col__2_5" gtm-auto-cal-pos=" " gtm-initialized-click-link="true">'+
    ' <span>Laundry Buying Guides</span></a>';


    var WashingMachineBuyingGuide = '<a href="https://www.aegaustralia.com.au/buying-guides/washing-machine/" class="submenu-navigation__item  " gtm-auto-cal-pos="75" gtm-initialized-click-link="true">Washing Machine Buying Guide</a>'; 

    var WasherDryerBuyingGuide = '<a href="https://www.aegaustralia.com.au/buying-guides/washer-dryer/" class="submenu-navigation__item  " gtm-auto-cal-pos="75" gtm-initialized-click-link="true">Washer Dryer Buying Guide</a>'; 

    var DryerBuyingGuide = '<a href="https://www.aegaustralia.com.au/buying-guides/dryer/" class="submenu-navigation__item  " gtm-auto-cal-pos="75" gtm-initialized-click-link="true">Dryer Buying Guide</a>'; 
    

    var LaundrySubMenu =''+ 
'  <div class="container" id="second-col__2_5">'+ 
'      <div class="hide-for-large submenu-navigation__mobile-title hide-for-large js-second-column-title">Laundry Buying Guides</div>'+ 
'      <div class="row">'+ 
'          <div class="col-md-4">'+ WashingMachineBuyingGuide +  WasherDryerBuyingGuide + DryerBuyingGuide
'          </div>'+ 
'          <div class="col-md-4">'+ 
'              <a href="/care-challenge-the-expected/" class="submenu-navigation__item submenu-navigation__rich-item  " gtm-auto-cal-pos="76" gtm-initialized-click-link="true">'+ 
'                  <div class="submenu-navigation__rich-item-img">'+ 
'                      <img width="200" height="200" class="preview" data-replace="true" data-src="/contentassets/0dd1f60fbc694da2b8cd097a5c1262d5/care-des.jpg" src="/contentassets/0dd1f60fbc694da2b8cd097a5c1262d5/care-des.jpg" alt="care" io-loaded="true">'+ 
'                  </div>'+ 
'                  <span class="submenu-navigation__rich-item__title">Care - Challenge The Expected</span>'+ 
'              </a>'+ 
'          </div>'+ 
'          <div class="col-md-4">'+ 
'              <a href="/inspire-with-aeg/technology-innovation/aeg-home-app/" class="submenu-navigation__item submenu-navigation__rich-item  " gtm-auto-cal-pos="77" gtm-initialized-click-link="true">'+ 
'                  <div class="submenu-navigation__rich-item-img">'+ 
'                      <img width="200" height="200" class="preview" data-replace="true" data-src="/contentassets/c02c097eb39641279d06163315814648/laund-des.jpg" src="/contentassets/c02c097eb39641279d06163315814648/laund-des.jpg" alt="laund-des.jpg" io-loaded="true">'+ 
'                  </div>'+ 
'                  <span class="submenu-navigation__rich-item__title">AEG Home App</span>'+ 
'              </a>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>';



    function init() {
      var $ = window.jQuery;
    
      
      //Adding New option in Cooking menu sub menu

      $('.main-navigation__main-item:first-child .submenu-navigation__container:first-child #second-col__0_1 > .row > div:first-child > a:last-child').after(OvenBuyingGuide);

      $('.main-navigation__main-item:first-child .submenu-navigation__container:first-child #second-col__0_2 > .row > div:first-child > a:last-child').after(CooktopBuyingGuide);

      $('.main-navigation__main-item:first-child .submenu-navigation__container:first-child #second-col__0_3 > .row > div:first-child > a:last-child').after(RangehoodBuyingGuide);

      //Adding New option in Cooking menu
      $('.main-navigation .main-navigation__main-item:first-child .submenu-navigation__container:first-child .submenu-navigation__first-column >a:last-of-type').after(egCookingMainMenu);

      $('.main-navigation .main-navigation__main-item:first-child .submenu-navigation__container:first-child .submenu-navigation__second-column #second-col__0_7').after(egCookingSubMenu);

      // Dishwasher Guide
      $('.main-navigation .main-navigation__main-item:nth-child(2) .submenu-navigation__container:first-child .submenu-navigation__second-column #second-col__1_1 > .row > .col-md-4:first-child > a:last-child').after(egDishwasheroption);

      //Laundry
      $('.main-navigation .main-navigation__main-item:nth-child(3) .submenu-navigation__first-column a[data-second-col="second-col__2_4"]').after(LaundryBuyingGuides);

      $('.main-navigation__main-item:nth-child(3) .submenu-navigation__container:first-child .submenu-navigation__second-column #second-col__2_4').after(LaundrySubMenu);

      $('.main-navigation__main-item:nth-child(3) .submenu-navigation__container:first-child .submenu-navigation__second-column #second-col__2_1> .row > div:first-child > a:last-child').after(WashingMachineBuyingGuide);

      $('.main-navigation__main-item:nth-child(3) .submenu-navigation__container:first-child .submenu-navigation__second-column #second-col__2_2> .row > div:first-child > a:last-child').after(DryerBuyingGuide);

      $('.main-navigation__main-item:nth-child(3) .submenu-navigation__container:first-child .submenu-navigation__second-column #second-col__2_3> .row > div:first-child > a:last-child').after(WasherDryerBuyingGuide);
  }
    /* Initialise variation */
    onLoadJqueryLibrary(function() {
        waitForElement('.submenu-navigation__second-column #second-col__1_1 > .row > .col-md-4:first-child > a', init, 50, 25000);
    }, 50, 10000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();