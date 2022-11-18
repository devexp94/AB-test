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

    var egMenu =''+ 
    '  <div class="eg-menu-section">'+ 
    '      <div class="menu-section-inr">'+ 
    '          <ul class="eg-menu-item">'+ 
    '              <li>Shop All</li>'+ 
    '              <li>Suncare</li>'+ 
    '              <li>Scents</li>'+ 
    '              <li>Apparel</li>'+ 
    '          </ul>'+ 
    '       <p class="eg-subheading">Welcome to the Vacation® Incorporated Suncare Store. Please be careful with delicate items as you look around. We thank you for your business.</p>'+
    '      </div>'+ 
    ' <div class="eg-mobile-menu">'+
    '  <div class="eg-dropdown">'+ 
    '      <div class="cross"></div>'+
    '      <span class="eg-default-option">Shop All</span>'+ 
    '      <div class="eg-dropdown-options" style="display: block;">'+ 
    '          <span class="eg-dropdown-item" data-language="suncare">Suncare</span>'+ 
    '          <span class="eg-dropdown-item" data-language="scents">Scents</span>'+ 
    '          <span class="eg-dropdown-item" data-language="apparel">Apparel</span>'+ 
    '      </div>'+ 
    '  </div>'+
    '  </div>'+
    ' </div>';
    
    function init() {

      document.querySelector('.site__wrapper > div:nth-child(1)').insertAdjacentHTML('afterend', egMenu);

      // $('body').on('click', '.eg-mobile-menu .eg-dropdown-item', function() {
      //   var language = $(this).attr('data-language');
      //   var bmDefault = $(this).html();
      //   var link = $('.eg-mobile-menu .eg-button-link');
      //   $(link).attr('href', 'https://www.lingoda.com/en/'+language+'/register');
      //   $(this).parent().parent().removeClass('eg-active');  
      //   console.log(bmDefault);
      //   $(this).parent().parent().find('.eg-default-option').html(bmDefault);
      // });

    }

    waitForElement(".site__wrapper > div:nth-child(1)", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
