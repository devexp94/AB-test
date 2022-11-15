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

    
    var egVideocontainer =''+ 
'  <div class="eg-creating-section full-width justifyContentCenter marginTopLayoutL wide view layout">'+ 
'      <aside class="eg-creating-image">'+ 
'          <img class="eg-subimage" src="https://cfactory-img.s3.amazonaws.com/LOR/7.2/lkIcon.svg">'+ 
'      <div class="eg-creating-image-inr">'+ 
'      <div class="eg-image-outer">'+ 
'          <img class="image" alt="creating Better World" src="https://cfactory-img.s3.amazonaws.com/LOR/7.2/creatingD.svg">'+ 
'      </div>'+ 
'      </div>'+ 
'      </aside>'+ 
'      <div class="eg-creating-content">'+ 
'          <div class="eg-creating-text">'+ 
'              <div class="eg-subimage-outer"><img class="eg-subimage" src="https://cfactory-img.s3.amazonaws.com/LOR/7.2/lkIcon.svg"></div>'+
'              <h2 class="eg-creating-heading text heading level-3">Creating a better styled world</h2>'+ 
'              <p class="eg-subheading text body level-2 textAlignCenter">Cristina Cordula is an expert in fashion and personal styling. </br></br> We at Lookiero feel that we share a mission with Cristina, and believe wholeheartedly in her philosophy that “Each person is unique. And your image must be the showcase of your personality.”</p>'+ 
'  <button class="eg-creating-cta button button--atom bgPrimary paddingRightL paddingLeftL positionRelative wide" type="button">'+ 
'     <div class="touchable touchable layerS positionAbsolute">'+ 
'        <div class="motion expand ripple bgTouchable pointerNone" style="opacity: 0; transition-property: opacity;"></div>'+ 
'     </div>'+ 
'     <div class="alignItemsCenter displayFlex flexXS flexDirectionRow justifyContentCenter layerS pointerNone positionRelative"><span class="text action level-3 colorContent pointerNone upperCase">Discover your style</span></div>'+ 
'     <div class="motion busy bgBase pointerNone positionAbsolute" style="width: 0%; transition-property: width;"></div>'+ 
'  </button>'+
'          </div>'+ 
'      </div>'+ 
'  </div>';

    /* Variation Init */
    function init() {

      document.querySelector('#how').insertAdjacentHTML('afterend', egVideocontainer);

      document.querySelector('.eg-creating-cta').addEventListener('click', function(e){
          e.preventDefault();
          document.querySelector('#quiz').scrollIntoView({behavior: "smooth", block : "start"}); 
      });
      

    }
    /* Initialise variation */
    waitForElement("#how", init, 250, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();