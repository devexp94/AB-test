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

    var PolicyIcon =''+ 
    '  <svg xmlns="http://www.w3.org/2000/svg" width="41" height="52" viewBox="0 0 41 52" fill="none">'+ 
    '  <path d="M20.2332 15.2438C14.3546 15.2438 9.5719 20.0265 9.5719 25.9052C9.5719 31.7838 14.3546 36.5665 20.2332 36.5665C26.1119 36.5665 30.8945 31.7838 30.8945 25.9052C30.8945 20.0265 26.112 15.2438 20.2332 15.2438ZM27.4024 23.9361L19.2795 32.059C18.9821 32.3563 18.5923 32.505 18.2025 32.505C17.8127 32.505 17.4229 32.3563 17.1256 32.0589L13.0641 27.9974C12.4693 27.4027 12.4693 26.4383 13.0641 25.8435C13.6588 25.2488 14.6232 25.2488 15.218 25.8435L18.2025 28.8281L25.2485 21.7821C25.8432 21.1874 26.8076 21.1874 27.4024 21.7821C27.9972 22.3769 27.9972 23.3413 27.4024 23.9361Z" fill="#2251FF"/>'+ 
    '  <path d="M38.5097 8.13629C32.3689 8.13629 26.5956 5.7449 22.2534 1.4027L21.3102 0.459528C20.7156 -0.135374 19.7511 -0.135171 19.1563 0.459528L18.213 1.4027C13.8708 5.7449 8.09756 8.13629 1.95664 8.13629C1.11551 8.13629 0.433594 8.81821 0.433594 9.65934V24.8514C0.433594 37.0633 8.19108 47.9401 19.7372 51.9171C19.8979 51.9724 20.0655 52 20.2332 52C20.4009 52 20.5686 51.9724 20.7292 51.9171C32.2753 47.9401 40.0328 37.0632 40.0328 24.8514V9.65934C40.0328 8.81821 39.3509 8.13629 38.5097 8.13629ZM20.2332 39.6126C12.6749 39.6126 6.52578 33.4634 6.52578 25.9052C6.52578 18.3469 12.6749 12.1977 20.2332 12.1977C27.7915 12.1977 33.9406 18.3469 33.9406 25.9052C33.9406 33.4634 27.7916 39.6126 20.2332 39.6126Z" fill="#2251FF"/>'+ 
    '  </svg>';

    var policyText = '<span class="eg-policy">' +PolicyIcon + 'We collect your personal contact details to respond to requests or any enquires you may have. Follow the link for further details on our <a href="https://www.lhd.com.au/privacy-terms/" target="_blank">Privacy Policy<span>';

    function init() {

      document.querySelector('#wpforms-form-3136 .wpforms-field-phone').insertAdjacentHTML('afterend', policyText);
      
    }

    waitForElement("#wpforms-form-3136 .wpforms-field-phone", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
