(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";
        var $;
        /* all Pure helper functions */

        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function() {
                if (
                    document &&
                    document.querySelector(selector) &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function() {
                clearInterval(interval);
            }, delayTimeout);
        }

        const egBoxesHTML = `
          <div class="eg-boxes">
              <div class="container">
                  <div class="eg-support">
                      <div class="eg-small-box">
                      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M27 49.68C39.5258 49.68 49.68 39.5258 49.68 27C49.68 14.4742 39.5258 4.32 27 4.32C14.4742 4.32 4.32 14.4742 4.32 27C4.32 39.5258 14.4742 49.68 27 49.68ZM27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54Z" fill="#595A5C"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9998 19.44C28.491 19.44 29.6998 18.2312 29.6998 16.74C29.6998 15.2489 28.491 14.04 26.9998 14.04C25.5086 14.04 24.2998 15.2489 24.2998 16.74C24.2998 18.2312 25.5086 19.44 26.9998 19.44ZM29.7 24.84C29.7 23.3488 28.4912 22.14 27 22.14C25.5088 22.14 24.3 23.3488 24.3 24.84V36.72C24.3 38.2112 25.5088 39.42 27 39.42C28.4912 39.42 29.7 38.2112 29.7 36.72V24.84Z" fill="#3AB9DC"/>
                      </svg>
                      
                      </div>
                      <a href="#" class="eg-box-link">Help &amp; Support</a>
                  </div>
                  <div class="eg-account">
                        <div class="eg-small-box">
                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 4C14.2975 4 4 14.2975 4 27C4 31.4436 5.26016 35.5929 7.4426 39.1101C8.96877 37.9007 10.8928 36.423 13.2633 35.1748C16.671 33.3805 21.0548 32 27 32C32.9452 32 37.329 33.3804 40.7367 35.1748C43.3199 36.535 45.3729 38.1677 46.9587 39.4288L46.9587 39.4288C47.4109 39.7884 47.8251 40.1178 48.2027 40.402L48.2015 40.4036C49.0845 41.0671 49.2624 42.3208 48.599 43.2038C43.6763 49.7558 35.8335 54 27 54C12.0883 54 0 41.9117 0 27C0 12.0883 12.0883 0 27 0C41.9117 0 54 12.0883 54 27C54 30.2195 53.4356 33.3116 52.3988 36.1799C52.0232 37.2187 50.8767 37.7564 49.8379 37.3809C48.7992 37.0054 48.2615 35.8589 48.637 34.8201C49.5185 32.3815 50 29.7492 50 27C50 14.2975 39.7025 4 27 4ZM44.158 42.3173C42.6451 41.1167 41.0255 39.8474 38.8731 38.7141C36.0206 37.2121 32.2743 36 27 36C21.7257 36 17.9794 37.2122 15.1269 38.7141C12.9746 39.8475 11.3549 41.1167 9.8421 42.3172C14.054 47.032 20.1804 50 27 50C33.8184 50 39.9437 47.0348 44.158 42.3173ZM27 12C23.134 12 20 15.134 20 19C20 22.866 23.134 26 27 26C30.866 26 34 22.866 34 19C34 15.134 30.866 12 27 12ZM16 19C16 12.9249 20.9249 8 27 8C33.0751 8 38 12.9249 38 19C38 25.0751 33.0751 30 27 30C20.9249 30 16 25.0751 16 19Z" fill="#595A5C"/>
</svg>

                        </div>
                      <a href="#" class="eg-box-link">My Account</a>
                  </div>
              </div>
          </div>`;

        let egRadio = `<div class="col-xs-12 egRadioBtn">
          <label class="egFirst" for="eghyperTonic">
             <input type="radio" id="eghyperTonic" name="hyper" value="" required>
             <p>I am already a Hypertonic customer</p>
          </label>
         
           <label class="egSec" for="egnoHyperTonic">
             <input type="radio" id="egnoHyperTonic" name="hyper" value="" required>
            <p>I'm not a Hypertonic customer yet</p>
            </label>
         </div>`;

        function live(selector, event, callback, context) {
            /****Helper Functions****/
            // helper for enabling IE 8 event bindings
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent("on" + type, handler);
                else el.addEventListener(type, handler);
            }
            // matches polyfill
            this.Element &&
                (function(ElementPrototype) {
                    ElementPrototype.matches =
                        ElementPrototype.matches ||
                        ElementPrototype.matchesSelector ||
                        ElementPrototype.webkitMatchesSelector ||
                        ElementPrototype.msMatchesSelector ||
                        function(selector) {
                            var node = this,
                                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                                i = -1;
                            while (nodes[++i] && nodes[i] != node);
                            return !!nodes[i];
                        };
                })(Element.prototype);
            // live binding helper using matchesSelector
            function live(selector, event, callback, context) {
                addEvent(context || document, event, function(e) {
                    var found,
                        el = e.target || e.srcElement;
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }

        live('.egRadioBtn > label', 'click', function() {
            if(this.classList.contains('egFirst')){
                document.querySelector(".hoSelect > select").value = 1;
            } else if(this.classList.contains('egSec')){
                document.querySelector(".hoSelect > select").value = 0;
            }
        });

        /* Variation Init */
        function init() {
            /* start your code here */

            document.querySelector("h4.contactSupportTeam_Title").innerText = "Contact our 24/7 support team";

            document.querySelector("h4.contactSupportTeam_Title").insertAdjacentHTML("afterend", "<p class='egTxt'>Our support team are on hand 24 hours a day, 7 days a week.</p>");

            document.querySelector(" div.container div:nth-child(1) > div > div:nth-child(2) > p:nth-child(2)").innerText = "Email";

            document.querySelector("#conForm h2").innerText = "We're here if you need us";
            document.querySelector("#conForm h2").insertAdjacentHTML("afterend", "<p class='egFormDesc'>Fill out the form below to contact our 24/7 support team. </p>");

            document.querySelector("#conForm .checkbox label").innerHTML = "<p>By providing my details, I consent to Hyperoptic processing and storing this information in accordance with its <a href='https://hyperoptic.com/legal/post/privacy-and-cookie-policy' target='_blank'>Privacy Policy</a>and using these details to send me information about Hyperoptic’s services. I understand that I may change my mind and unsubscribe at any time.<p>"

            document.querySelector(".panel-white > div + div").insertAdjacentHTML("beforebegin", egRadio)


            // inserting boxes
            document.querySelector("#pageContent>div:nth-of-type(9)").insertAdjacentHTML("beforebegin", egBoxesHTML);



        }

        /* Initialize variation */
        waitForElement('#pageContent>div:nth-of-type(7)', init, 100, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();