(function () {
  try {
    /* main variables */
    var debug = 0;
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
    function live(selector, event, callback, context) {
      /****Helper Functions****/
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent("on" + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this.Element &&
        (function (ElementPrototype) {
          ElementPrototype.matches =
            ElementPrototype.matches ||
            ElementPrototype.matchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            ElementPrototype.msMatchesSelector ||
            function (selector) {
              var node = this,
                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                i = -1;
              while (nodes[++i] && nodes[i] != node);
              return !!nodes[i];
            };
        })(Element.prototype);
      // live binding helper using matchesSelector
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function (e) {
          var found,
            el = e.target || e.srcElement;
          while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    }
    var intervalFn;

    var timeIcon =''+ 
    '  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">'+ 
    '  <path d="M17.6323 15.2959L14.0072 12.577V7.03873C14.0072 6.48186 13.557 6.03174 13.0002 6.03174C12.4433 6.03174 11.9932 6.48186 11.9932 7.03873V13.0806C11.9932 13.3978 12.1422 13.6969 12.396 13.8862L16.4238 16.9071C16.6051 17.0431 16.8166 17.1085 17.027 17.1085C17.3341 17.1085 17.6362 16.9705 17.8336 16.7047C18.168 16.2606 18.0774 15.6292 17.6323 15.2959Z" fill="#509E31"/>'+ 
    '  <path d="M13 0C5.83136 0 0 5.83136 0 13C0 20.1686 5.83136 26 13 26C20.1686 26 26 20.1686 26 13C26 5.83136 20.1686 0 13 0ZM13 23.9861C6.94307 23.9861 2.01393 19.0569 2.01393 13C2.01393 6.94307 6.94307 2.01393 13 2.01393C19.0579 2.01393 23.9861 6.94307 23.9861 13C23.9861 19.0569 19.0569 23.9861 13 23.9861Z" fill="#509E31"/>'+ 
    '  </svg>';


    var questionmarkIcon =''+ 
    '  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">'+ 
    '  <path d="M10 0C4.47301 0 0 4.4725 0 10C0 15.5269 4.4725 20 10 20C15.527 20 20 15.5275 20 10C20 4.47301 15.5275 0 10 0ZM10 18.6046C5.25539 18.6046 1.39535 14.7446 1.39535 10C1.39535 5.25535 5.25539 1.39535 10 1.39535C14.7446 1.39535 18.6046 5.25535 18.6046 10C18.6046 14.7446 14.7446 18.6046 10 18.6046Z" fill="#808080"/>'+ 
    '  <path d="M9.70352 12.6533C9.15066 12.6533 8.70312 13.114 8.70312 13.6668C8.70312 14.2065 9.1375 14.6804 9.70352 14.6804C10.2695 14.6804 10.717 14.2065 10.717 13.6668C10.717 13.114 10.2563 12.6533 9.70352 12.6533Z" fill="#808080"/>'+ 
    '  <path d="M9.87339 4.97925C8.09636 4.97925 7.28027 6.03233 7.28027 6.74311C7.28027 7.25647 7.71465 7.49343 8.07004 7.49343C8.78086 7.49343 8.49129 6.47983 9.8339 6.47983C10.492 6.47983 11.0186 6.76944 11.0186 7.37495C11.0186 8.08573 10.2814 8.49378 9.84706 8.86233C9.46531 9.19136 8.96515 9.73108 8.96515 10.8631C8.96515 11.5476 9.14945 11.745 9.6891 11.745C10.3341 11.745 10.4657 11.4555 10.4657 11.2053C10.4657 10.5208 10.4789 10.126 11.2028 9.55995C11.5582 9.28354 12.6771 8.38843 12.6771 7.15112C12.6771 5.91382 11.5582 4.97925 9.87339 4.97925Z" fill="#808080"/>'+ 
    '  </svg>';

    function init() {
   //write variation code here
   if(window.innerWidth < 700) {
    const egHtml = '<div class="s001-banner-wrapper" style="display:none;">\
      <div class="s001-banner-data">\
          <p>' + timeIcon +'<span class="eg-text"> <span class="s001-timer-m"></span>:<span class="s001-timer-s"></span> remaining </span><span class="eg-tooltip">' + questionmarkIcon +'</span><span class="eg-tooltip-text">Your fitting has been reserved, checkout to confirm time.</span></p>\
      </div>\
  </div>';
  document.querySelector('.navigation .checkout-nav').insertAdjacentHTML('afterend',egHtml);
}else {
  const egHtml = '<div class="s001-banner-wrapper" style="display:none;">\
  <div class="s001-banner-data">\
          <p>' + timeIcon +'<span class="eg-text"> <span class="s001-timer-m"></span>:<span class="s001-timer-s"></span> remaining </span> <span class="eg-tooltip">' + questionmarkIcon +'</span><span class="eg-tooltip-text">Your fitting has been reserved, checkout to confirm time.</span></p>\
      </div>\
  </div>';
  document.querySelector('.navigation .checkout-nav').insertAdjacentHTML('afterend',egHtml);
}
   
  
//jQuery(egHtml).insertBefore('.checkout-section.checkout-details .checkout-fields.checkout-details-fields');
 live('.checkout-date-option>label','click',function(){
clearInterval(intervalFn);	
  timerfn();
 document.querySelector('.s001-banner-wrapper').style.display = 'block';
setTimeout(function(){
  document.querySelector('body .checkout-date_time').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
 },1000);
});
  
    }
    function timerfn () {
  let ss02minutes = 10;
  let ss02seconds = 0;
   intervalFn = setInterval(function() {
    --ss02seconds;
    if(ss02minutes === 0 && ss02seconds === 0) {
       clearInterval(intervalFn);
       timerfn();
       ss02minutes = 10;
     ss02seconds = 0;
    }
    if(ss02seconds <= 0) {
      ss02seconds = 59;
      --ss02minutes;
    }
    // console.log(ss02seconds);
    document.querySelector('.s001-timer-m').innerHTML=ss02minutes;
    if (ss02seconds < 10) {
      document.querySelector('.s001-timer-s').innerHTML= '0' + ss02seconds;
    } else {
      document.querySelector('.s001-timer-s').innerHTML=ss02seconds;
    }
  }, 1000);
}
    /* Initialise variation */
    waitForElement(".navigation .checkout-nav", init, 50, 15000);
  } catch (e) {
 console.log(e, "error in Test");
  }
})();