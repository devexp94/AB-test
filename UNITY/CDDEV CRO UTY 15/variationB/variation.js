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

    

    function init() {

      var headingDetail = document.querySelector('#main-layout-scroller h1 strong').textContent;
  
     
      setTimeout(function(){
        if(window.location.pathname === '/3d' || window.location.pathname === '/2d'){
          document.querySelector('#main-layout-scroller h1').insertAdjacentHTML('afterend', '<h3 class="eg-subheading">Join thousands of other creators in building '+ headingDetail +' projects</h3>');
        }else if(window.location.pathname === '/add-ons' || window.location.pathname === '/audio' || window.location.pathname === '/essentials' || window.location.pathname === '/templates' || window.location.pathname === '/tools' || window.location.pathname === '/vfx'){
          document.querySelector('#main-layout-scroller h1').insertAdjacentHTML('afterend', '<h3 class="eg-subheading"> Find the perfect '+ headingDetail +' asset to build your project</h3>')
        }else if(document.querySelector('#main-layout-scroller h1 + p')){
          document.querySelector('#main-layout-scroller h1 + p').insertAdjacentHTML('beforebegin', '<h3 class="eg-subheading"> Populate your gaming project with our collection</h3>');
        }else{
          document.querySelector('#main-layout-scroller h1').insertAdjacentHTML('afterend', '<h3 class="eg-subheading">Join thousands of other creators in building amazing projects</h3>')
        }
      }, 1000);

    }

    function init2(){
      
        document.querySelector('#main-layout-scroller > div > div:nth-child(1) > div:nth-child(1)').insertAdjacentHTML('afterend', '<div class="eg-heading-container"><h3 class="eg-subheading">Join thousands of other creators in building amazing projects</h3></div>');
    }


    waitForElement("#main-layout-scroller h1", init, 100, 35000);
    waitForElement("#main-layout-scroller > div > div:nth-child(1) > div:nth-child(1)", init2, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
