(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";

        /* all Pure helper functions */


        // selector would be the parent div where your are changing css/js
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

        let egGreaterthanSvg = `<svg aria-hidden="true" focusable="false" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                             width="103.536px" height="103.536px" viewBox="0 0 103.536 103.536" style="enable-background:new 0 0 103.536 103.536;"
                                             xml:space="preserve">
                                                <path d="M0.65,91.928c1.221,2.701,3.881,4.3,6.665,4.3c1.006,0,2.029-0.209,3.006-0.65l88.917-40.195
                                                    c2.688-1.216,4.381-3.925,4.295-6.873c-0.085-2.948-1.934-5.554-4.687-6.609L9.929,7.794C6.17,6.352,1.933,8.23,0.489,12.001
                                                    c-1.447,3.769,0.438,7.995,4.207,9.44l72.569,27.834L4.299,82.255C0.62,83.92-1.012,88.249,0.65,91.928z"/>
                                            </svg>`;

        let egOverviewHTML = `
        <section class="eg-overview-container">
            <div class="eg-overview-wrapper">
                <!--left side div-->
                <div class='eg-tabs'>
                    <h2 class="eg-tab eg-tab-1 eg-tab-active">Top Services</h2>
                    <h2 class="eg-tab eg-tab-2">Top Documents</h2>
                </div>
                <!--right side div-->
                <div class="eg-callouts-container eg-callout-1">

                    <!--Certified Translation-->
                    <div class="eg-callouts">
                        <img src="https://thespanishgroup.org/wp-content/uploads/2020/08/Group-8.png" alt="callout-icon">
                        <h3 class="eg-title">Certified Translation</h3>
                        <p class="eg-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat massa, finibus ac velit nec, imperdiet consequat sapien. Mauris nec eleifend odio, nec euismod nunc. Duis et turpis vitae mauris.</p>
                        <a href="#">Learn more ${egGreaterthanSvg}</a>
                    </div>

                    <!--Professional Translation-->
                    <div class="eg-callouts">
                        <img src="https://thespanishgroup.org/wp-content/uploads/2020/08/Group-9.png" alt="callout-icon">
                        <h3 class="eg-title">Professional Translation</h3>
                        <p class="eg-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat massa, finibus ac velit nec, imperdiet consequat sapien. Mauris nec eleifend odio, nec euismod nunc. Duis et turpis vitae mauris.</p>
                        <a href="#">Learn more ${egGreaterthanSvg}</a>
                    </div>

                    <!--Academic Translation-->
                    <div class="eg-callouts">
                        <img src="https://thespanishgroup.org/wp-content/uploads/2020/08/Group-7.png" alt="callout-icon">
                        <h3 class="eg-title">Academic Translation</h3>
                        <p class="eg-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat massa, finibus ac velit nec, imperdiet consequat sapien. Mauris nec eleifend odio, nec euismod nunc. Duis et turpis vitae mauris.</p>
                        <a href="#">Learn more ${egGreaterthanSvg}</a>
                    </div>

                    <!--90+ Languages Supported-->
                    <div class="eg-callouts">
                        <img src="https://thespanishgroup.org/translations/wp-content/themes/translations/img/global-icon.png" alt="callout-icon">
                        <h3 class="eg-title">90+ Languages Supported</h3>
                        <p class="eg-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat massa, finibus ac velit nec, imperdiet consequat sapien. Mauris nec eleifend odio, nec euismod nunc. Duis et turpis vitae mauris.</p>
                        <a href="#">Learn more ${egGreaterthanSvg}</a>
                    </div>
                </div>

                <div class="eg-callouts-container eg-callout-2">

                    <!--Academic Translation-->
                    <div class="eg-callouts">
                        <img src="https://thespanishgroup.org/wp-content/uploads/2020/08/Group-7.png" alt="callout-icon">
                        <h3 class="eg-title">Academic Translation</h3>
                        <p class="eg-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat massa, finibus ac velit nec, imperdiet consequat sapien. Mauris nec eleifend odio, nec euismod nunc. Duis et turpis vitae mauris.</p>
                        <a href="#">Learn more ${egGreaterthanSvg}</a>
                    </div>

                    <!--90+ Languages Supported-->
                    <div class="eg-callouts">
                        <img src="https://thespanishgroup.org/translations/wp-content/themes/translations/img/global-icon.png" alt="callout-icon">
                        <h3 class="eg-title">90+ Languages Supported</h3>
                        <p class="eg-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat massa, finibus ac velit nec, imperdiet consequat sapien. Mauris nec eleifend odio, nec euismod nunc. Duis et turpis vitae mauris.</p>
                        <a href="#">Learn more ${egGreaterthanSvg}</a>
                    </div>
                </div>

            </div>
        </section>`;

        /* Variation functions */
        function init() {
            document.querySelector("section#processinfo").insertAdjacentHTML("afterend", egOverviewHTML);

            document.querySelectorAll(".eg-tab").forEach(tab => {
                tab.addEventListener("click", function() {
                    tab.classList.add("eg-tab-active");
                    if (tab.classList.contains("eg-tab-1")) {
                        document.querySelector(".eg-callout-2").style.display = "none";
                        document.querySelector(".eg-callout-1").style.display = "flex";
                        tab.nextElementSibling.classList.remove("eg-tab-active");
                    } else if (tab.classList.contains("eg-tab-2")) {
                        document.querySelector(".eg-callout-1").style.display = "none";
                        document.querySelector(".eg-callout-2").style.display = "flex";
                        tab.previousElementSibling.classList.remove("eg-tab-active");
                    }
                });
            });

        }


        /* Initialize variation */
        waitForElement("section#processinfo", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();