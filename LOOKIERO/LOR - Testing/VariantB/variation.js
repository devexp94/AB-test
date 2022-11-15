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

    /* Variation Init */
    function init() {
      /* start your code here */
       document.querySelector('.home-intro__content .text.heading').innerHTML = "Votre style vous transforme";
      //swap for mobile
      if (window.screen.width < 1024) {
        insertBefore(document.querySelector('aside.home-intro__media'), document.querySelector('section.home-intro__content'));
        insertBefore(document.querySelector('.home-intro__content .banner-promo'),document.querySelector('aside.home-intro__media img'));
      }
      //image change automatically 
      var cdInterval = setInterval(function () {
        if (document.querySelector('aside.home-intro__media img') && document.querySelector('aside.home-intro__media img').getAttribute('src').indexOf('https://cfactory-img.s3.amazonaws.com/') ==-1)
          updatedImg()
      }, 20);
      //clear interval after 3sec
      setTimeout(function () {
        clearInterval(cdInterval);
      }, 3000);
    }
    //move  element 
    function insertBefore(beforeElement, targetElement) {
      targetElement.parentNode.insertBefore(beforeElement, targetElement);
    }
    //update images 
    function updatedImg() {
      var imgEle =  document.querySelector('aside.home-intro__media img');
      imgEle.setAttribute('src','https://cfactory-img.s3.amazonaws.com/LOR/7.2/preubaD.png');
      imgEle.setAttribute('srcset','https://cfactory-img.s3.amazonaws.com/LOR/7.2/preubaD.png 1x, https://cfactory-img.s3.amazonaws.com/LOR/7.2/preubaD.png 2x');
    }
    /* Initialise variation */
    waitForElement(".home-intro__content .banner-promo", init, 50, 10000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();