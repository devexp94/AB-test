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

    var logoSection =''+ 
    '  <div class="eg-logo-section">'+ 
    '      <div class="eg-logo-section-inr container">'+ 
    '          <div class="eg-heading">Trusted by more than 4,000 top fleets worldwide</div>'+ 
    '          <div class="eg-logo-conatiner">'+ 
    '              <div class="logo-box us-concrete">'+ 
    '                  <a class="logo-box-inr" href="http://www.us-concrete.com/" target="_blank">'+ 
    '                      <img src="https://drive.google.com/uc?export=view&id=1CoO_f0FQksdKmP1WdWT9aGCSNTP7xN7R" alt="us-concrete">'+ 
    '                  </a>'+ 
    '              </div>'+ 
    '              <div class="logo-box pearce-services">'+ 
    '                  <a class="logo-box-inr" href="http://pearce-services.com/" target="_blank">'+ 
    '                      <img src="https://drive.google.com/uc?export=view&id=1CmRY9rwOj6UgVxLXy6amcGwrz_9E4jfo" alt="pearce-services">'+ 
    '                  </a>'+ 
    '              </div>'+ 
    '              <div class="logo-box genpt">'+ 
    '                  <a class="logo-box-inr" href="http://genpt.com/" target="_blank">'+ 
    '                      <img src="https://drive.google.com/uc?export=view&id=1aFaF-GoVsQMrVPIWKB_DXqEvbwaUA1dC" alt="genpt">'+ 
    '                  </a>'+ 
    '              </div>'+ 
    '              <div class="logo-box state-gov">'+ 
    '                  <a class="logo-box-inr" href="http://state.gov/" target="_blank">'+ 
    '                      <img src="https://drive.google.com/uc?export=view&id=1-Da3OMBcD0UAlkqlio_ccENxM9JXz_JK" alt="state gov">'+ 
    '                  </a>'+ 
    '              </div>'+ 
    '              <div class="logo-box pierce-transit">'+ 
    '                  <a class="logo-box-inr" href="http://piercetransit.org/" target="_blank">'+ 
    '                      <img src="https://drive.google.com/uc?export=view&id=1PqRlwoGeUWBKrQGhSkmLcyGRHGQbR9fc" alt="Piercetransit">'+ 
    '                  </a>'+ 
    '              </div>'+ 
    '              <div class="logo-box national-grid">'+ 
    '                  <a class="logo-box-inr" href="https://www.nationalgridus.com/Default.aspx" target="_blank">'+ 
    '                      <img src="https://drive.google.com/uc?export=view&id=1_l7Oc_VT1qjKJdtl7PPrP-acDSFHP_B2" alt="National Grid">'+ 
    '                  </a>'+ 
    '              </div>'+ 
    '              <div class="logo-box nfi">'+ 
    '                  <a class="logo-box-inr" href="http://www.nfiindustries.com/" target="_blank">'+ 
    '                      <img src="https://drive.google.com/uc?export=view&id=1BWC_RQqlUwkB0jn8N9Y6SDu27xgAOY9F" alt="nfiindustries">'+ 
    '                  </a>'+ 
    '              </div>'+ 
    '              <div class="logo-box frontier-waste">'+ 
    '                  <a class="logo-box-inr" href="http://frontierwaste.com/" target="_blank">'+ 
    '                      <img src="https://drive.google.com/uc?export=view&id=1U6JFjAVi4ZIEgPYcHZxujyguQutp8Qul" alt="frontierwaste">'+ 
    '                  </a>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';

    function init() {
      
      document.querySelector('section.grey-back').insertAdjacentHTML('afterend', logoSection);

    }

    /* Initialise variation */
    waitForElement("section.grey-back", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
