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

    function listener() {
      /* These are the modifications: */
      window.addEventListener("locationchange", function() {
        setTimeout (function(){
          waitForElement('.datasheet .bottom a[title*="Datasheet Download"]', init, 20, 15000);
          //console.log("settimeout")
        },500);
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

    var egLinkButton =''+ 
'  <a title="Abracon Inventory" href="https://octopart.com/ab308-12.000mhz-abracon-750522#InventoryHistory" class="inventory-icon-btn eg-inventory-button button">'+ 
'      <div class="inventory-icon-wrapper">'+ 
'          <span class="inventory-icon">'+ 
'  '+ 
'          <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">'+ 
'            <path'+ 
'              d="M7.49999 8C6.94771 8 6.49999 8.44772 6.49999 9C6.49999 9.55228 6.94771 10 7.49999 10V8ZM9.99999 10C10.5523 10 11 9.55228 11 9C11 8.44772 10.5523 8 9.99999 8V10ZM7.49999 11.3333C6.94771 11.3333 6.49999 11.781 6.49999 12.3333C6.49999 12.8856 6.94771 13.3333 7.49999 13.3333V11.3333ZM9.99999 13.3333C10.5523 13.3333 11 12.8856 11 12.3333C11 11.781 10.5523 11.3333 9.99999 11.3333V13.3333ZM4.99999 8C4.44771 8 3.99999 8.44772 3.99999 9C3.99999 9.55228 4.44771 10 4.99999 10V8ZM5.00832 10C5.56061 10 6.00832 9.55228 6.00832 9C6.00832 8.44772 5.56061 8 5.00832 8V10ZM4.99999 11.3333C4.44771 11.3333 3.99999 11.781 3.99999 12.3333C3.99999 12.8856 4.44771 13.3333 4.99999 13.3333V11.3333ZM5.00832 13.3333C5.56061 13.3333 6.00832 12.8856 6.00832 12.3333C6.00832 11.781 5.56061 11.3333 5.00832 11.3333V13.3333ZM12.3333 4.83333V14.8333H14.3333V4.83333H12.3333ZM11.6667 15.5H3.33332V17.5H11.6667V15.5ZM2.66666 14.8333V4.83333H0.666656V14.8333H2.66666ZM3.33332 4.16667H4.99999V2.16667H3.33332V4.16667ZM9.99999 4.16667H11.6667V2.16667H9.99999V4.16667ZM3.33332 15.5C2.96513 15.5 2.66666 15.2015 2.66666 14.8333H0.666656C0.666656 16.3061 1.86056 17.5 3.33332 17.5V15.5ZM12.3333 14.8333C12.3333 15.2015 12.0348 15.5 11.6667 15.5V17.5C13.1394 17.5 14.3333 16.3061 14.3333 14.8333H12.3333ZM14.3333 4.83333C14.3333 3.36057 13.1394 2.16667 11.6667 2.16667V4.16667C12.0348 4.16667 12.3333 4.46514 12.3333 4.83333H14.3333ZM2.66666 4.83333C2.66666 4.46514 2.96513 4.16667 3.33332 4.16667V2.16667C1.86056 2.16667 0.666656 3.36057 0.666656 4.83333H2.66666ZM7.49999 10H9.99999V8H7.49999V10ZM7.49999 13.3333H9.99999V11.3333H7.49999V13.3333ZM6.66666 2.5H8.33332V0.5H6.66666V2.5ZM8.33332 3.83333H6.66666V5.83333H8.33332V3.83333ZM6.66666 3.83333C6.29847 3.83333 5.99999 3.53486 5.99999 3.16667H3.99999C3.99999 4.63943 5.1939 5.83333 6.66666 5.83333V3.83333ZM8.99999 3.16667C8.99999 3.53486 8.70151 3.83333 8.33332 3.83333V5.83333C9.80608 5.83333 11 4.63943 11 3.16667H8.99999ZM8.33332 2.5C8.70151 2.5 8.99999 2.79848 8.99999 3.16667H11C11 1.69391 9.80608 0.5 8.33332 0.5V2.5ZM6.66666 0.5C5.1939 0.5 3.99999 1.69391 3.99999 3.16667H5.99999C5.99999 2.79848 6.29847 2.5 6.66666 2.5V0.5ZM4.99999 10H5.00832V8H4.99999V10ZM4.99999 13.3333H5.00832V11.3333H4.99999V13.3333Z"'+ 
'              fill="#4874AE" />'+ 
'          </svg>'+ 
'  '+ 
'        </span>'+ 
'          <span class="label">Inventory History</span>'+ 
'      </div>'+ 
'  </a>';

    function init() {

      document.querySelector('.datasheet .bottom a[title*="Datasheet Download"]').insertAdjacentHTML('afterend', egLinkButton);

    }

    listener() 

    /* Initialise variation */
    waitForElement('.datasheet .bottom a[title*="Datasheet Download"]', init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();