d(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;
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

    let egTab = `
    <div tabindex="-1" mode="dark" orientation="horizontal" role="tab" data-testid="Tab" data-trackid="Tab@1.5.0" id="egOpenAccount" class="Text-sc-uqehsl-1 elementFactory-sc-1x7bzkf-0 kVRgOs contact-header-tabs__tab___25VBv eg-account-opening" aria-selected="false"><div display="inline-flex" class="Box-sc-qbwqq9-0 Icon__IconWrapper-sc-y4p3lz-0 kIynDD Icon" data-testid="Icon-Location" data-trackid="Icon-Location@1.5.0"><svg font-size="m" class="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 gZsoYO SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ContactMessageIcon" data-id="Icon" opacity="1" fill="currentColor"><path fill="none" d="M0 0h18v18H0z" opacity=".25"></path><path d="M0 2v14h18V2H0zm15.952 1.2L9 10.151 2.048 3.2h13.904zM1.2 14.8V4.048l7.8 7.8 7.8-7.8V14.8H1.2z"></path></svg><svg font-size="m" class="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 fWoNkq SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ContactMessageActiveIcon" data-id="ActiveIcon" opacity="0" fill="currentColor" cursor="unset"><path fill="none" d="M0 0h18v18H0z" opacity=".25"></path><path d="M16.939 2H1.061L9 9.939z"></path><path d="M9 12.061l-9-9V16h18V3.061z"></path></svg>
    </div>Account opening enquiries
    </div>
    `
    document.querySelector("#tab-FindBranch").insertAdjacentHTML("afterend" , egTab);

    
    /* Variation Init */
    function init() {
      /* start your code here */
      document.querySelector("#tab-FindBranch").insertAdjacentHTML("afterend" , egTab);
      
    }

    /* Initialize variation */
    waitForElement('#tab-FindBranch', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


