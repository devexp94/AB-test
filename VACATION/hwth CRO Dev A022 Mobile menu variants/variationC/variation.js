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

    var cartIcon =''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" width="78" height="70" viewBox="0 0 78 70" fill="none">'+ 
'  <path d="M25.1308 46.4264H25.1343C25.1373 46.4264 25.1403 46.4258 25.1433 46.4258H66.5742C67.5942 46.4258 68.491 45.7492 68.7713 44.7684L77.9119 12.7763C78.1089 12.0865 77.9708 11.3451 77.5394 10.7726C77.1074 10.2001 76.4319 9.86328 75.7148 9.86328H19.8606L18.2271 2.5121C17.9944 1.46652 17.0673 0.722656 15.9961 0.722656H2.28516C1.02296 0.722656 0 1.74562 0 3.00781C0 4.27 1.02296 5.29297 2.28516 5.29297H14.1632C14.4524 6.59563 21.9803 40.4719 22.4136 42.4208C19.985 43.4765 18.2812 45.8979 18.2812 48.7109C18.2812 52.491 21.3567 55.5664 25.1367 55.5664H66.5742C67.8364 55.5664 68.8594 54.5434 68.8594 53.2812C68.8594 52.0191 67.8364 50.9961 66.5742 50.9961H25.1367C23.8769 50.9961 22.8516 49.9707 22.8516 48.7109C22.8516 47.4529 23.8733 46.4294 25.1308 46.4264ZM72.6852 14.4336L64.8502 41.8555H26.9696L20.8759 14.4336H72.6852Z" fill="white"/>'+ 
'  <path d="M22.8516 62.4219C22.8516 66.2019 25.927 69.2773 29.707 69.2773C33.4871 69.2773 36.5625 66.2019 36.5625 62.4219C36.5625 58.6418 33.4871 55.5664 29.707 55.5664C25.927 55.5664 22.8516 58.6418 22.8516 62.4219ZM29.707 60.1367C30.9668 60.1367 31.9922 61.1621 31.9922 62.4219C31.9922 63.6817 30.9668 64.707 29.707 64.707C28.4472 64.707 27.4219 63.6817 27.4219 62.4219C27.4219 61.1621 28.4472 60.1367 29.707 60.1367Z" fill="white"/>'+ 
'  <path d="M55.1484 62.4219C55.1484 66.2019 58.2239 69.2773 62.0039 69.2773C65.7839 69.2773 68.8594 66.2019 68.8594 62.4219C68.8594 58.6418 65.7839 55.5664 62.0039 55.5664C58.2239 55.5664 55.1484 58.6418 55.1484 62.4219ZM62.0039 60.1367C63.2637 60.1367 64.2891 61.1621 64.2891 62.4219C64.2891 63.6817 63.2637 64.707 62.0039 64.707C60.7441 64.707 59.7188 63.6817 59.7188 62.4219C59.7188 61.1621 60.7441 60.1367 62.0039 60.1367Z" fill="white"/>'+ 
'  </svg>';

function removeClasses(){
  document.querySelector('body').classList.remove('eg-homepage');
}

function listener() {
  /* These are the modifications: */
  window.addEventListener("locationchange", function() {
      removeClasses()
      FEHelper.onLoadElement(".header__nav .fdrr .df.gara .db:first-child", initCourse, 100, 15000);
  });
  history.pushState = ((f) =>
    function pushState() {
      var ret = f.apply(this, arguments);
      window.dispatchEvent(new Event("pushstate"));
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    })(history.pushState);
  history.replaceState = ((f) =>
    function replaceState() {
      var ret = f.apply(this, arguments);
      window.dispatchEvent(new Event("replacestate"));
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    })(history.replaceState);
  window.addEventListener("popstate", () => {
    window.dispatchEvent(new Event("locationchange"));
  });
}
    function init() {
      
      if(window.location.pathname === '/'){
        document.querySelector('body').classList.add('eg-homepage');
      }

      document.querySelector('.header__nav .fdrr .df.gara .db:first-child').innerHTML = cartIcon
    }

    listener(init)
    /* Initialise variation */
    waitForElement(".header__nav .fdrr .df.gara .db:first-child", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
