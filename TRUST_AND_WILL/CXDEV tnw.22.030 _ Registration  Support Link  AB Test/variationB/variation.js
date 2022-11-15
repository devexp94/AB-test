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

    var egChatButton =''+ 
    '  <div class="eg-button-container"><button type="button" class="flex bg-periwinkle-lighten-34 rounded-5px items-center pt-5 pb-4 px-4 mb-8 w-full font-normal"><img src="/img/icon-chat-with-us.svg" alt="Chat bubbles illustration" class="relative pr-4" style="top: -3px;"><p class="small">Have a question?<span class="cursor-pointer underline ml-2" title="Chat with support">Chat with us now</span></p></button></div>';

    function init() {
      document.querySelector('.shadow-card').insertAdjacentHTML('beforeend', egChatButton);
     
    }

    waitForElement(".shadow-card", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
