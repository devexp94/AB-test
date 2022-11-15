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


    var egIndustriesSection =''+ 
    '  <div class="eg-industries-section">'+ 
    '  <div class="container">'+ 
    '      <div class="eg-industries-section-inr">'+ 
    '          <div class="eg-industries-content">'+ 
    '              <h3 class="eg-heading heading heading--h3 color--white">Industries We Serve</h3>'+ 
    '              <p class="eg-para">No matter the fleet size or type, get everything you need to keep safe, productive, and efficient vehicles on the road. With Lytx, you can better verify workers\' help your drivers avoid injury, and reconstruct all types of collision claims,'+ 
    '                  including rear-end and sideswipe incidents.</p>'+ 
    '              <div class="eg-filter">'+ 
    '                  <label for="filter--industry" class="color--white">Learn how multiple views can support your industry.</label>'+ 
    '                  <select class="transparent bg--text" id="eg-filter-vehicle" name="eg-filter-vehicle">'+ 
    '                      <option value="Construction" selected="">Construction</option>'+ 
    '                      <option value="Solid Waste">Solid Waste</option>'+ 
    '                      <option value="Transit">Transit</option>'+ 
    '                      <option value="Trucking">Trucking</option>'+ 
    '                  </select>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '          <div class="eg-industries-image">'+ 
    '              <div class="media__figure media__figure--top text--align-left">'+ 
    '                  <div class="layout eg-filter-options">'+ 
    '                      <figure class="card--cs filtered--show" data-cs-vehicle="Construction">'+ 
    '                          <img data-srcset="https://www.lytx.com/getmedia/13428055-1846-4710-9c4c-9c354ce2a85a/vehicle-construction@2x.png, https://www.lytx.com/getmedia/13428055-1846-4710-9c4c-9c354ce2a85a/vehicle-construction@2x.png 2x" data-src="https://www.lytx.com/getmedia/13428055-1846-4710-9c4c-9c354ce2a85a/vehicle-construction@2x.png" alt="Construction" class=" lazyloaded" srcset="https://www.lytx.com/getmedia/13428055-1846-4710-9c4c-9c354ce2a85a/vehicle-construction@2x.png, https://www.lytx.com/getmedia/13428055-1846-4710-9c4c-9c354ce2a85a/vehicle-construction@2x.png 2x" src="https://www.lytx.com/getmedia/13428055-1846-4710-9c4c-9c354ce2a85a/vehicle-construction@2x.png">'+ 
    '                      </figure>'+ 
    '                      <figure class="card--cs filtered--hide" data-cs-vehicle="Solid Waste">'+
    '                          <img data-srcset="https://www.lytx.com/getmedia/c5ba789a-3d43-416b-b739-a742368aafbc/vehicle-solid-waste@2x.png, https://www.lytx.com/getmedia/c5ba789a-3d43-416b-b739-a742368aafbc/vehicle-solid-waste@2x.png 2x" data-src="https://www.lytx.com/getmedia/c5ba789a-3d43-416b-b739-a742368aafbc/vehicle-solid-waste@2x.png" alt="Solid Waste" class=" lazyloaded" srcset="https://www.lytx.com/getmedia/c5ba789a-3d43-416b-b739-a742368aafbc/vehicle-solid-waste@2x.png, https://www.lytx.com/getmedia/c5ba789a-3d43-416b-b739-a742368aafbc/vehicle-solid-waste@2x.png 2x" src="https://www.lytx.com/getmedia/c5ba789a-3d43-416b-b739-a742368aafbc/vehicle-solid-waste@2x.png">'+
    '                      </figure>'+
    '                      <figure class="card--cs filtered--hide" data-cs-vehicle="Transit">'+
    '                          <img data-srcset="https://www.lytx.com/getmedia/8f62e46c-f609-496e-8620-52e7056ac7bf/vehicle-transit@2x.png, https://www.lytx.com/getmedia/8f62e46c-f609-496e-8620-52e7056ac7bf/vehicle-transit@2x.png 2x" data-src="https://www.lytx.com/getmedia/8f62e46c-f609-496e-8620-52e7056ac7bf/vehicle-transit@2x.png" alt="Transit" class=" lazyloaded" srcset="https://www.lytx.com/getmedia/8f62e46c-f609-496e-8620-52e7056ac7bf/vehicle-transit@2x.png, https://www.lytx.com/getmedia/8f62e46c-f609-496e-8620-52e7056ac7bf/vehicle-transit@2x.png 2x" src="https://www.lytx.com/getmedia/8f62e46c-f609-496e-8620-52e7056ac7bf/vehicle-transit@2x.png">'+
    '                      </figure>'+
    '                      <figure class="card--cs filtered--hide" data-cs-vehicle="Trucking">'+
    '                          <img data-srcset="https://www.lytx.com/getmedia/43fe9e58-90ee-4c95-9896-a890d311a03e/vehicle-trucking@2x.png, https://www.lytx.com/getmedia/43fe9e58-90ee-4c95-9896-a890d311a03e/vehicle-trucking@2x.png 2x" data-src="https://www.lytx.com/getmedia/43fe9e58-90ee-4c95-9896-a890d311a03e/vehicle-trucking@2x.png" alt="Trucking" class=" lazyloaded" srcset="https://www.lytx.com/getmedia/43fe9e58-90ee-4c95-9896-a890d311a03e/vehicle-trucking@2x.png, https://www.lytx.com/getmedia/43fe9e58-90ee-4c95-9896-a890d311a03e/vehicle-trucking@2x.png 2x" src="https://www.lytx.com/getmedia/43fe9e58-90ee-4c95-9896-a890d311a03e/vehicle-trucking@2x.png">'+
    '                      </figure>'+
    '                  </div>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '      </div>'+ 
    '  </div>';

    function init() {

      document.querySelector('.full-width-video-wrapper.rhythm--small').insertAdjacentHTML('beforebegin', egIndustriesSection)
        
    }

    /* Initialise variation */
    waitForElement(".full-width-video-wrapper.rhythm--small", init, 50, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
