(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";

    /* helper library */
    var _$;
    !(function (factory) {
      _$ = factory();
    })(function () {
      var bm = function (s) {
        if (typeof s === "string") {
          this.value = Array.prototype.slice.call(document.querySelectorAll(s));
        }
        if (typeof s === "object") {
          this.value = [s];
        }
      };
      bm.prototype = {
        eq: function (n) {
          this.value = [this.value[n]];
          return this;
        },
        each: function (fn) {
          [].forEach.call(this.value, fn);
          return this;
        },
        log: function () {
          console && console.log(this);
        },
        append: function (v) {
                  return this.each(function (i) {
                    i.insertAdjacentHTML('beforeEnd', v);
                  });
                },
        attr: function (a, v) {
                  return this.each(function (i) {
                    i.setAttribute(a, v);
                  });
                },        
        waitForElement: function (
          selector,
          trigger,
          delayInterval,
          delayTimeout
        ) {
          var interval = setInterval(function () {
            if (_$(selector).value.length) {
              clearInterval(interval);
              trigger();
            }
          }, delayInterval);
          setTimeout(function () {
            clearInterval(interval);
          }, delayTimeout);
        },
      };
      return function (selector) {
        return new bm(selector);
      };
    });

    var helper = _$();

    var tickIcon = ''+
    '  <svg class="eg_completeIcon" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">'+ 
    '  <path d="M42.7801 21.9788L42.6429 22.1161L27.2036 37.5554L27.1633 37.5956L27.1331 37.6439L26.9548 37.9293L26.8929 38.0036L25.2 39.6964C24.7689 40.1276 24.2111 40.3357 23.6482 40.3357C23.0854 40.3357 22.5275 40.1276 22.0964 39.6964L14.3571 31.9572C13.926 31.5261 13.7179 30.9682 13.7179 30.4054C13.7179 29.8425 13.926 29.2847 14.3571 28.8536L16.0661 27.1446C16.4972 26.7135 17.055 26.5054 17.6179 26.5054C18.1807 26.5054 18.7386 26.7135 19.1697 27.1446L23.2357 31.2107L23.5893 31.5642L23.9428 31.2107L37.8303 17.3232C38.2614 16.8921 38.8193 16.6839 39.3821 16.6839C39.945 16.6839 40.5028 16.8921 40.9339 17.3232L42.6429 19.0321C43.074 19.4632 43.2821 20.0211 43.2821 20.5839C43.2821 21.0719 43.11 21.5672 42.7801 21.9788ZM28.5 0.5C13.0399 0.5 0.5 13.0399 0.5 28.5C0.5 43.9601 13.0399 56.5 28.5 56.5C43.9601 56.5 56.5 43.9601 56.5 28.5C56.5 13.0399 43.9601 0.5 28.5 0.5Z" fill="white" stroke="#002E38"/>'+ 
    '  <path d="M23.6134 31.9724C23.5929 31.9637 23.5633 31.9469 23.5191 31.9099L19.0578 27.4989C18.7271 27.1719 18.2905 27.0127 17.8613 27.0127C17.4321 27.0127 16.9955 27.1719 16.6648 27.4989L14.9941 29.1508C14.663 29.4781 14.5 29.9125 14.5 30.3418C14.5 30.771 14.6631 31.2054 14.9941 31.5328L22.5603 39.0138C22.891 39.3408 23.3276 39.5 23.7568 39.5C24.1859 39.5 24.6225 39.3408 24.9533 39.0138L26.5663 37.4188L26.6069 37.3787L26.6374 37.3304L26.8112 37.0556L26.8705 36.9852L42.0059 22.0201C42.3369 21.6928 42.5 21.2584 42.5 20.8291C42.5 20.717 42.4889 20.6045 42.4665 20.4937H42.8904L42.0251 19.6381L40.3544 17.9862C40.0237 17.6592 39.5871 17.5 39.1579 17.5C38.7287 17.5 38.2921 17.6592 37.9614 17.9862L23.8661 31.9229C23.8248 31.9638 23.7781 31.9873 23.6991 31.9873C23.657 31.9873 23.6325 31.9805 23.6134 31.9724Z" fill="#002E38" stroke="black"/>'+ 
    '  </svg>';

    var background =''+ 
    '  <svg class="eg_background" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">'+ 
    '  <circle cx="27.5" cy="27.5" r="26" fill="#002E38" stroke="#002E38" stroke-width="3"/>'+ 
    '  </svg>';

    var background2 =''+ 
    '  <svg class="eg_pendingBackground" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">'+ 
    '  <circle cx="27.5" cy="27.5" r="26" stroke="#002E38" stroke-width="3"/>'+ 
    '  </svg>';

    /* Variation Init */
    function init() {
      _$('.wizard-steps .wizard-step').append(tickIcon);
      _$('.wizard-steps .wizard-step .wizard-icon').append(background + background2);
      _$('.wizard-steps .wizard-step:nth-of-type(2)').attr('onclick',"stepClick(this, 'https://hello.bellaandduke.com/recommendation-plan', '1')")
    }

    /* Initialize variation */
    helper.waitForElement(".wizard-steps .wizard-step .wizard-icon", init, 50, 5000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();