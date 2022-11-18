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

    var headerDummySearch =''+ 
'  <div class="input-group mb-3 eg-search-bar-menu">'+ 
'      <input type="text" class="form-control" placeholder="Search by keywords, tech specs, or part number">'+ 
'      <div class="input-group-append">'+ 
'          <svg viewBox="0 0 512 512" class="jsx-1152469775">'+ 
'                  <path'+ 
'                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"'+ 
'                      class="jsx-1152469775"></path>'+ 
'              </svg>'+ 
'          </span>'+ 
'      </div>'+ 
'  </div>';

var middleDummySearch =''+ 
'  <div class="eg-search-bar eg-search-bar-middle">'+ 
'      <div class="input-group mb-3">'+ 
'          <h2 class="heading-search">Search Integrated Circuits</h2>'+ 
'  <div class="eg-search-box">'+ 
'          <input type="text" class="form-control" placeholder="Search by keywords, tech specs, or part number">'+ 
'          <div class="input-group-append">'+ 
'              <svg viewBox="0 0 512 512">'+ 
'                      <path'+ 
'                          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"'+ 
'                          ></path>'+ 
'                  </svg>'+ 
'              </span>'+ 
'          </div>'+ 
'      </div>'+ 
'      </div>'+ 
'  </div>';

    function init() {

      document.querySelector('body').classList.add('eg-search');
      document.querySelector('.menu .search-box').insertAdjacentHTML('afterend', headerDummySearch);

      document.querySelector('.top .heading').insertAdjacentHTML('afterend', middleDummySearch);


      // Header Search move
      document.querySelector('.eg-search-bar-menu input').addEventListener('mousedown', function(){
        document.querySelector('.menu .eg-search-bar-menu').insertAdjacentElement('beforebegin', document.querySelector('.eg-search-bar-middle .search-box'));
         setTimeout(function(){
          document.querySelector('.search-box input').focus();
         },1000)

      })

      // middle Search move
      document.querySelector('.eg-search-bar-middle .eg-search-box input').addEventListener('mousedown', function(){
        document.querySelector('.eg-search-bar-middle .heading-search').insertAdjacentElement('afterend', document.querySelector('.menu .search-box'));
         setTimeout(function(){
          document.querySelector('.search-box input').focus();
         }, 1000)

      })

    }

    waitForElement(".top .heading", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();