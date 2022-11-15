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

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    function setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    var egToster =''+ 
    '  <div class="eg-toster">'+ 
    '      <div class="eg-toster-content">'+ 
    '          <h2 class="eg-toster-heading">Order in the next 30 minutes and get 5% off</h2>'+ 
    '          <div class="eg-promo-timer">'+ 
    '              <div class="eg-promo-timer-inr">'+ 
    '                  <div class="eg-minutes eg-box">'+ 
    '                      <span class="eg-number">00</span>'+ 
    '                      <span class="eg-text">min</span>'+ 
    '                  </div>'+ 
    '                  <span class="eg-colon">:</span>'+ 
    '                  <div class="eg-seconds eg-box">'+ 
    '                      <span class="eg-number">00</span>'+ 
    '                      <span class="eg-text">sec</span>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '         <a href="" class="eg-link">Order Now</a>'+
    '      </div>'+ 
    '  </div>';

    var offset;
    
    function createSession() {
      if(getCookie('firstVisit') == null) {
        setCookie('firstVisit', '1',365);
      }
    }

    function init() {
    
        document.querySelector('.wrapper .thankyou_content > div:first-child').insertAdjacentHTML('beforebegin', egToster);
        document.querySelector('body').classList.add('eg-timer-show');
        
      // document.querySelector('.eg-toster-cross').addEventListener('click', function(){
      //   createSession();
      // });


        var countdown = 30 * 60 * 1000;
        var timerId = setInterval(function(){
          countdown -= 1000;
          var min = Math.floor(countdown / (60 * 1000));
          //var sec = Math.floor(countdown - (min * 60 * 1000));  // wrong
          var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);  //correct
        
          if (countdown <= 0) {
             clearInterval(timerId);
             document.querySelector('body').classList.remove('eg-timer-show');
             createSession();
          } else {
            
            if (min < 10) {
              document.querySelector(".eg-minutes .eg-number").innerHTML = min = "0" + min;
            } else {
              document.querySelector(".eg-minutes .eg-number").innerHTML = min;
            }

            if (sec < 10) {
              document.querySelector(".eg-seconds .eg-number").innerHTML = sec = "0" + sec;
            } else {
              document.querySelector(".eg-seconds .eg-number").innerHTML = sec;
            }
          }
        
        }, 1000); 

//add mouseout event 
// document.addEventListener("mouseout", function(e) {
//   if (e.toElement == null && e.relatedTarget == null) {
//     if(getCookie('firstVisit') == null) {
//       document.querySelector('body').classList.add("eg-timer-show");
    
//      //create session 
//       createSession();
//       offset=window.pageYOffset;
//     }
//   }
// });

    }

    /* Initialise variation */
    // if(!getCookie('firstVisit')){
      waitForElement(".wrapper .thankyou_content > div:first-child", init, 50, 15000);
    // }
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
