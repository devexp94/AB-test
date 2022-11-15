(function () {
  var debug = 0;
  var variation_name = "";
  if (window.location.href.indexOf('qa-debug=true') > -1) {
    debug = 1;
  }
    try {
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

 
//List structure
var Newhero =''+ 
'  <div class="new-container">'+ 
'      <div class="second-container container">'+ 
'          <h2 class="new-title"></h2>'+ 
'          <div class="image-container">'+ 
'              <div class="discription-box">'+ 
'                  <div class="logo"><img src="https://expogrowth.in/wp-content/uploads/2022/01/Group_17.png" /></div>'+ 
'                  <p class="discription">1 Day Turnaround Time on Most Translations</p>'+ 
'              </div>'+ 
'              <div class="discription-box">'+ 
'                  <div class="logo"><img src="https://expogrowth.in/wp-content/uploads/2022/01/Group_18.png" /></div>'+ 
'                  <p class="discription">100% Guaranteed Acceptance</p>'+ 
'              </div>'+ 
'              <div class="discription-box">'+ 
'                  <div class="logo"><img src="https://expogrowth.in/wp-content/uploads/2022/01/Group_14.png" /></div>'+ 
'                  <p class="discription">Best Price Guarantee </p>'+ 
'              </div>'+
'              <div class="discription-box">'+ 
'                  <div class="logo"><img src="https://expogrowth.in/wp-content/uploads/2022/01/Group_16.png" /></div>'+ 
'                  <div class="rating"><span class="rating-stars"><img src="https://expogrowth.in/wp-content/uploads/2022/01/Group-11.svg"<span>'+
'                  <p class="discription">389 Reviews</p></div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>'; 
var LanguageHeadline="<h2>Select Your Languages</h2>"
      function init() {
        if(debug){
          console.log('Inside init Function');
        }
        //Adding section
        document.querySelector('#header-img > section.template_banner').insertAdjacentHTML('beforeend', Newhero);
        var text=document.querySelector('.banner-left-block h1').innerHTML;
        document.querySelector(".new-title").innerHTML=text;

      }
      function init2() {
          document.querySelector('.form_container_mobile .nfn__languages #nfnLanguageFrom').insertAdjacentHTML('beforebegin','<h2 class="select-title-language">Select Your Language</h2>');
      }
      waitForElement(".template_banner .container .mobile_banner_img ", init, 50, 15000);
      waitForElement(".form_container_mobile .nfn__languages #nfnLanguageFrom", init2, 50, 40000);
    } 
    catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
})();
  