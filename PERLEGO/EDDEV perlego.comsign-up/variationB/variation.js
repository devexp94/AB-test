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


    var egSidebar =''+ 
    '  <div class="eg-sidebar">'+ 
    '      <div class="eg-sidebar-inr">'+ 
    '          <div class="eg-image-container">'+ 
    '              <img src="https://www.perlego.com/_next/image?url=https%3A%2F%2Fwww.perlego.com%2Fbooks%2FRM_Books%2Fwiley_hlvwyirv%2F9781118882504_500_750.jpg&w=768&q=75" alt="">'+ 
    '              <div class="eg-img-content">'+ 
    '                  <p class="eg-image-heading">Architectural Detailing</p>'+ 
    '                  <p class="eg-image-sub-heading">Edward Allen, Patrick Rand</p>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '          <ul class="eg-list">'+ 
    '              <li><img src="https://cfactory-img.s3.amazonaws.com/Perlego/Vector%20%286%29.svg" alt=""> Get unlimited <strong>access to over 8,000 architecture books</strong> like this one</li>'+ 
    '              <li><img src="https://cfactory-img.s3.amazonaws.com/Perlego/Vector%20%287%29.svg" alt=""> Instantly find what you\'re looking for with <strong>Keyword search</strong></li>'+ 
    '              <li><img src="https://cfactory-img.s3.amazonaws.com/Perlego/Frame%2029.svg" alt=""> Build your second brand with <strong>saved notes and highlights</strong></li>'+ 
    '              <li><img src="https://cfactory-img.s3.amazonaws.com/Perlego/quotes.svg" alt=""> Save time with <strong>one-click referencing</strong></li>'+ 
    '          </ul>'+ 
    '      </div>'+ 
    '  </div>';

    function init() {

      document.querySelector('#main > div').insertAdjacentHTML('beforebegin', egSidebar);

    }


    waitForElement("#main > div", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
