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

        let egCheckIcon = `<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.016 19.056L4.232 18.816L4.424 18.696L4.64 18.816C4.952 18.576 5.216 18.312 5.432 18.048C5.648 17.784 6.056 17.088 6.704 16.008L8.192 13.488C8.984 12.144 13.136 6.504 14.072 5.448C16.232 2.976 16.952 2.232 17.24 1.848C17.504 1.512 17.672 1.248 17.672 1.056C17.672 0.935999 17.6 0.743999 17.48 0.743999C17.36 0.743999 17.168 0.839999 16.928 1.008L17.12 0.576L16.304 1.056L16.352 0.719999C16.304 0.863999 15.92 1.248 15.824 1.248C15.752 1.248 15.728 1.176 15.728 1.056V0.959999L15.056 1.296C15.008 1.296 14.96 1.272 14.96 1.2C14.96 1.128 15.008 0.959999 15.056 0.719999C14.72 1.08 14.24 1.488 13.616 1.92C12.776 2.496 9.512 6.6 8.192 8.736C7.304 10.152 6.944 10.992 6.8 10.992C6.752 10.992 6.728 10.896 6.704 10.704C6.272 11.688 5.888 12.504 5.504 13.104C5.12 13.704 4.76 14.016 4.496 14.016C4.184 14.016 3.92 13.416 3.632 12.192C3.512 11.664 3.248 11.328 2.864 11.136L2.792 11.112C2.72 11.112 2.624 11.16 2.504 11.232C2.384 11.304 2.312 11.376 2.264 11.376H2.24L1.808 11.232L1.424 11.808C1.376 11.88 1.28 11.904 1.208 11.904C1.088 11.904 0.992 11.88 0.944 11.808C0.848 12.144 0.728 12.312 0.632 12.312C0.56 12.312 0.416 12.264 0.224 12.144C0.392 13.416 0.536 14.256 0.68 14.664C0.968 15.456 1.616 17.256 2.24 18.456C2.312 18.6 2.408 18.768 2.48 18.912C2.72 18.768 2.792 18.744 2.96 18.744L3.152 18.768C3.272 18.816 3.344 18.888 3.344 19.008L3.896 18.744C3.992 18.744 4.016 18.84 4.016 19.056Z" fill="#0487CD"/>
</svg>`;

        let egUsps = `
        <div class="eg-usp">
            <ul>
                <li>
                    <span class="eg-check-icon">
                        ${egCheckIcon}
                    </span>
                    <p>
                        Your Equifax Report and Score will be updated daily upon login to myEquifax
                    </p>
                </li>
                
                <li>
                    <span class="eg-check-icon">
                        ${egCheckIcon}
                    </span>
                    <p>
                        Traffic light system identifying the parts of your report that need attention
                    </p>
                </li>
                
                <li>
                    <span class="eg-check-icon">
                        ${egCheckIcon}
                    </span>
                    <p>
                        Actionable hints and tips within your report
                    </p>
                </li>
                
                <li>
                    <span class="eg-check-icon">
                        ${egCheckIcon}
                    </span>
                    <p>
                        Identity protection tools monitoring 24 hours a day, 7 days a week
                    </p>
                </li>
            </ul>
        </div>
        `;

        /* Variation functions */
        function init() {


            const egVideoBLock = document.querySelector(".video-block-wrapper");
            const egCarouselWrapper = document.querySelector("div.carousel-wrapper");


            // inserting a new div and moving video block and crousel into that div
            document.querySelector(".header-wrapper").insertAdjacentHTML("afterend", `
                <!-- This is eg-video-carousel container -->
                <div class="eg-video-carousel-container">
                    <div class="eg-video-carousel-wrapper">
                    </div>
                </div>
                <!-- This is eg-video-carousel wrapper end -->`);

            [egVideoBLock, egCarouselWrapper].forEach(ele => {
                document.querySelector(".eg-video-carousel-wrapper").insertAdjacentElement("beforeend", ele);
            });

            // updating on video block container
            let egTitle = ``;
            let egInfoBlock = ``;

            if (window.innerWidth < 768) {
                egTitle = `Why choose us`;
                egInfoBlock = `A Credit Reference Agency like Equifax can help<br>people understand and improve their credit score.<br>Find out how our enhanced credit report works and<br>how you can use it to manage your financial records.`;

                // auto scrolling caraosel
                let egIndex = 0;
                const egBtns = [...document.querySelectorAll(".carousel__navigation .carousel__navigation-item a")];
                setInterval(() => {
                    if (egIndex < egBtns.length) {
                        egBtns[egIndex].click();
                        egIndex += 1;
                    } else {
                        egIndex = 0;
                    }
                }, 5000);
            } else {
                egTitle = `Why use Equifax`;
                egInfoBlock = egUsps;
            }

            document.querySelector(".eg-video-carousel-wrapper .video-block-container h2.title").innerHTML = egTitle;
            document.querySelector(".eg-video-carousel-wrapper .video-block-container p.info-block-p").innerHTML = egInfoBlock;


            document.querySelector(".eg-video-carousel-wrapper .video-block-container a.cta-x").textContent = "TRY FOR FREE*";



        }


        /* Initialize variation */
        waitForElement(".video-block-wrapper", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();