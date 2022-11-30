(function() {
    if (!document.querySelector('.eg-image-desc'))
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

            /* Variation functions */
            function init() {

                // js for already exists caraousel
                egIndex = 0;
                egParas = [
                    `<p class="eg-image-desc">Your Equifax Report and Score<br>will be updated daily upon login<br>to myEquifax</p>`,
                    `<p class="eg-image-desc">Traffic light system identifying<br>the parts of your report that<br>need attention</p>`,
                    `<p class="eg-image-desc">Identity protection tools<br>monitoring 24 hours a day, 7<br>days a week</p>`,
                    `<p class="eg-image-desc">Actionable hints and tips within<br>your report</p>`
                ];
                if (!document.querySelector('.eg-image-desc')) {
                    document.querySelectorAll(".carousel .hp-grid-child").forEach(ele => {
                        ele.insertAdjacentHTML("beforeend", egParas[egIndex]);
                        egIndex += 1;
                    });

                    document.querySelector(".video-block-wrapper").insertAdjacentElement("beforebegin", document.querySelector("div.carousel-wrapper"));
                    document.querySelector('.header-wrapper .wave-layer').innerHTML = '<img src="https://www.equifax.co.uk/assets/images/white-wave.png" alt="light-wave" style="height: auto;vertical-align: bottom;display: block;">';
                    document.querySelector('.header-wrapper .wave-layer-M').innerHTML = '<img src="https://www.equifax.co.uk/assets/images/white-wave-m.png" alt="light-wave">';
                }

                // auto scrolling caraosel
                if (window.innerWidth < 768) {
                    const listItems = document.querySelectorAll(".carousel-wrapper .carousel__viewport>li");
                    listItems[0].classList.add("eg-active-carousel");

                    let egIndex = 0;
                    const egBtns = [...document.querySelectorAll(".carousel__navigation .carousel__navigation-item a")];
                    egBtns.forEach(btn => {
                        btn.removeAttribute("href");
                    });
                    setInterval(() => {
                        if (egIndex < egBtns.length) {
                            egBtns[egIndex].click();
                            if(document.querySelector(".eg-active-button")){
                                document.querySelector(".eg-active-button").classList.remove("eg-active-button");
                            }
                            egBtns[egIndex].classList.add("eg-active-button");
                            if (egIndex == 0) {
                                showCarousel(0,listItems[0]);
                            } else if (egIndex == 1) {
                                showCarousel(1,listItems[1]);
                            } else if (egIndex == 2) {
                                showCarousel(2,listItems[2]);
                            } else if (egIndex == 3) {
                                showCarousel(3,listItems[3]);
                            }
                            egIndex += 1;
                        } else {
                            egIndex = 0;
                        }
                    }, 5000);
                }
            }


            function showCarousel(indx,listItem) {
                document.querySelector(".carousel-wrapper .carousel__viewport>li.eg-active-carousel").classList.remove("eg-active-carousel");
                listItem.classList.add("eg-active-carousel");
            }

            /* Initialize variation */
            waitForElement(".video-block-wrapper", init, 50, 15000);
        } catch (e) {
            if (debug) console.log(e, "error in Test" + variation_name);
        }
})();