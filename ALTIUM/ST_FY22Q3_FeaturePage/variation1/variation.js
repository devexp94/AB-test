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

    /* Variation functions */


    var eg_logos =''+ 
'  <div class="eg-container">'+ 
'      <h2>Trusted By Companies Worldwide For Over 35 Years</h2>'+ 
'      <div class="eg_logos__group">'+ 
'  '+ 
'  '+ 
'          <div class="eg_logos__item">'+ 
'              <img src="https://www.altium.com/sites/default/files/media_icon/2022-01/ArduinoLogo_%C2%AE.svg" alt="Arduino logo" />'+ 
'          </div>'+ 
'  '+ 
'          <div class="eg_logos__item">'+ 
'              <img src="//cdn-static.altium.com/sites/default/files/media_icon/2021-07/bae_color.svg" alt="BAE" />'+ 
'          </div>'+ 
'  '+ 
'          <div class="eg_logos__item">'+ 
'              <img src="//cdn-static.altium.com/sites/default/files/media_icon/2021-07/leicamicrosystems_color.svg" alt="Leica" />'+ 
'          </div>'+ 
'  '+ 
'          <div class="eg_logos__item">'+ 
'              <img src="//cdn-static.altium.com/sites/default/files/media_icon/2021-07/microsoft_color.svg" alt="Microsoft" />'+ 
'          </div>'+ 
'  '+ 
'          <div class="eg_logos__item">'+ 
'              <img src="//cdn-static.altium.com/sites/default/files/media_icon/2021-07/lyft_color.svg" alt="Lyft" />'+ 
'          </div>'+ 
'  '+ 
'          <div class="eg_logos__item">'+ 
'              <img src="//cdn-static.altium.com/sites/default/files/media_icon/2021-07/amazon_color.svg" alt="Amazon" />'+ 
'          </div>'+ 
'  '+ 
'          <div class="eg_logos__item">'+ 
'              <img src="//cdn-static.altium.com/sites/default/files/media_icon/2021-07/facebook_color.svg" alt="Facebook" />'+ 
'          </div>'+ 
'  '+ 
'          <div class="eg_logos__item">'+ 
'              <img src="//cdn-static.altium.com/sites/default/files/media_icon/2021-07/dell_color.svg" alt="Dell" />'+ 
'          </div>'+ 
'      </div>'+ 
'      </div';
    


  
function init(){

  setTimeout((e) => {
    document.querySelector("div  article > div > section.s-row-list > div.s-row-list__header > div").insertAdjacentHTML("beforebegin", eg_logos)

}, 1000);

}
    /* Initialize variation */
    waitForElement("body  article > div > section.s-row-list > div.s-row-list__header", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

