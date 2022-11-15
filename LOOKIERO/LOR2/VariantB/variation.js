(function () {
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

    var egEmoji = '<img class="eg-emoji" src="https://cfactory-img.s3.amazonaws.com/LOR/0.1/new/sm-icond.svg">';

    function init() {
      /* start your code here */
      document.querySelector('section.home-intro + section > .box .layout.marginBottomLayoutS .text.body').innerHTML = "Give £10 andearn £10 for every friend you </br>recommend. More invited, more credit!";

      document.querySelector('section.home-intro + section > .box .layout.marginBottomLayoutS .text.body').insertAdjacentHTML('afterend', egEmoji);

    }
    /* Initialise variation */
    waitForElement("section.home-intro + section > .box .layout.marginBottomLayoutS .text.body", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();