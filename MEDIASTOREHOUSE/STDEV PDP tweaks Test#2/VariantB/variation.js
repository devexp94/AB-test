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


    function init() {

      document.querySelector('.dmcsDivMid h1 + div > div:last-child').insertAdjacentHTML('afterend', '<div class="eg-select-section"></div>')

      document.querySelector('.dmcsDivMid h1 + div > .eg-select-section').insertAdjacentElement('beforeend', document.querySelector('#dmcsProductSelectArea > form:nth-child(1)'));
     
      document.querySelector('.dmcsDivMid h1 + div > .eg-select-section').insertAdjacentElement('beforeend', document.querySelector('#dmcsProductSelectArea > form:nth-child(1)'));


      if(document.querySelector('#ProductOption')){
        var selectBox = document.querySelector('#ProductOption').outerHTML

        document.querySelector('.eg-select-section').insertAdjacentHTML('beforeend', '<p>'+ selectBox +'</p>');
      }

    }

    waitForElement(".dmcsDivMid h1 + div > div ", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
