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

  var Popup = ''+
  '<div class="eg-3d-popup">'+
  '<div class="eg-3d-popup-overlay"></div>'+
  '    <div class="eg-3d-popup-content">'+
  '       <span class="eg-3d-cross">&times;</span>'+
  '    <div class="eg-3d-popup-content-inr">'+
  '       <iframe ame="" title="Pergola BOB LE MENUISIER" frameborder="0" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking="" execution-while-out-of-viewport="" execution-while-not-rendered="" web-share="" src="https://sketchfab.com/models/709cb042d7074ffdb5e8340c25330b9a/embed?autostart=1&amp;ui_animations=0&amp;ui_infos=0&amp;ui_stop=0&amp;ui_inspector=0&amp;ui_watermark_link=0&amp;ui_watermark=0&amp;ui_help=0&amp;ui_settings=0&amp;ui_vr=0&amp;ui_annotations=0%3E" data-gtm-yt-inspected-14="true"> </iframe>'+
  '    </div>'+
  '    </div>'+
  '</div>';

    function init() {
      
    
      document.querySelector('body').classList.add('eg-3d-popup-show');

      document.querySelector('footer').insertAdjacentHTML('afterend', Popup);
    

      document.querySelector('.eg-3d-popup .eg-3d-cross').addEventListener('click', function(){
        document.querySelector('body').classList.remove('eg-3d-popup-show');
      });

      document.querySelector('.eg-3d-popup .eg-3d-popup-overlay').addEventListener('click', function(){
        document.querySelector('body').classList.remove('eg-3d-popup-show');
      });

    }


    waitForElement("footer", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
