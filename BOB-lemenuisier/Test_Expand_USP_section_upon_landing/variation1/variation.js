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

        var getCookie = function(name) {
            var nameEQ = name + '=';
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        };

        var setCookie = function(name, value, days) {
            var expires = '';
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
                expires = '; expires=' + date.toUTCString();
            }
            document.cookie = name + '=' + (value || '') + expires + '; path=/';
        };

        const egColapsibleHTML = `
<section class="eg-wrapper">
    <div class="eg-container">
        <!--left content-->
        <div class="eg-left-content">
            <p>Bob le Menuisier, c'est LE sur-mesure français de la menuiserie !</p>
        </div>

        <!--right content-->
        <div class="eg-right-content">
            <ul class="eg-bullet-points">
                <li class="eg-point">
                   <i>Menuiseries françaises sur mesure, garanties 10 ans</i> 
                </li>
                <li class="eg-point">
                    <i>Conseillers menuiserie à votre disposition</i>
                </li>
                <li class="eg-point">
                    <i>Point technique pour 100% des commandes</i>
                </li>
                <li class="eg-point">
                    <i>Paiement en 3X ou 4X sans frais (avec Oney)</i>
                </li>
                <li class="eg-point">
                    <i>Look & feel should match Bob le Menuisier.</i>
                </li>
                <li class="eg-point">
                    <i>Content on the handle should be "A propos" with the arrow pointing up when expanded and pointing down when collapsed. Ideally some animation on the arrow.</i>
                </li>
            </ul>
        </div>
    </div>
    <!--collapsible button-->
        <button class="eg-collapsible-btn">
            <span>About Bob Le Menuisier</span> <span class="eg-down-arrow"></span>
        </button>
</section>`;


        /* Variation Init */
        function init() {
            /* start your code here */
            const egTarget = document.querySelector("#maincontent .column.main");

            egTarget.insertAdjacentHTML("afterbegin", egColapsibleHTML);

            const egTriggerBtn = document.querySelector(".eg-collapsible-btn");
            const egTargetBox = document.querySelector(".eg-container");

            // if this is user's first visit 
            // content will be opened by default
            console.log(getCookie("visited"))
            if(getCookie("visited") === null){
                setCookie("visited",true,14);

                egTargetBox.classList.add("eg-show");
            }

            
            egTriggerBtn.addEventListener("click", function() {
                egTargetBox.classList.toggle("eg-show");
            });

        }



        /* Initialize variation */
        waitForElement('#maincontent .column.main', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();