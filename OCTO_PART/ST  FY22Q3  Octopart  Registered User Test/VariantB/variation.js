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

    var tickMark =''+ 
    '  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">'+ 
    '  <path d="M30.625 17.5C30.625 24.7487 24.7487 30.625 17.5 30.625C10.2513 30.625 4.375 24.7487 4.375 17.5C4.375 10.2513 10.2513 4.375 17.5 4.375C24.7487 4.375 30.625 10.2513 30.625 17.5Z" fill="#6EB51F"/>'+ 
    '  <path d="M13.125 17.5L16.0417 20.4167L21.875 14.5833M30.625 17.5C30.625 24.7487 24.7487 30.625 17.5 30.625C10.2513 30.625 4.375 24.7487 4.375 17.5C4.375 10.2513 10.2513 4.375 17.5 4.375C24.7487 4.375 30.625 10.2513 30.625 17.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+ 
    '  </svg>';

    var googleImage =''+ 
    '  <svg viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg" height="16px" width="16px"><path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"></path><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"></path><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"></path><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"></path></svg>';

    var egForm =''+ 
    '  <div class="eg-form-popup">'+ 
    '      <div class="eg-form-popup-inr">'+ 
    '          <div class="eg-form-section">'+
    '          <div class="eg-signin">'+
    '           <p class="eg-signin-link">Already a member? <a href="#">Sign in</a></p>'+
    '          </div>'+ 
    '          <div class="eg-form-section-inr">'+
    '              <p class="form-heading">Create Your FREE Account</p>'+ 
    '              <p class="form-subheading">Create your account below or Sign in with your Google Account</p>'+ 
    '              <p>'+ googleImage +'Sign in with Google</p>'+ 
    '              <div class="eg-middle">'+ 
    '                  <p class="line-break"></p>'+ 
    '                  <p class="line-break-text">OR</p>'+ 
    '                  <p class="line-break"></p>'+ 
    '              </div>'+ 
    '              <form class="eg-form">'+ 
    '                  <div class="eg-input-container">'+ 
    '                      <label for="first_name" class="eg-lable">First Name*</label>'+ 
    '                      <input type="text" autocomplete="on" class="input" id="first_name" name="first_name" placeholder="" value="">'+ 
    '                  </div>'+ 
    '                  <div class="eg-input-container">'+ 
    '                      <label for="last_name" class="eg-lable">Last Name*</label>'+ 
    '                      <input type="text" autocomplete="on" class="input" id="last_name" name="last_name" placeholder="" value="">'+ 
    '                  </div>'+ 
    '                  <div class="eg-input-container">'+ 
    '                      <label for="email" class="eg-lable">Email Address*</label>'+ 
    '                      <input type="email" autocomplete="on" class="input" id="email" name="email" placeholder="" value="">'+ 
    '                  </div>'+ 
    '                  <div class="eg-input-container">'+ 
    '                      <label for="password" class="eg-lable">Password*</label>'+ 
    '                      <input type="password" autocomplete="on" class="input" id="password" name="password" placeholder="" value="">'+ 
    '                  </div>'+ 
    '                  <div class="eg-input-container">'+ 
    '                      <label for="confirm_password" class="eg-lable">Confirm Password*</label>'+ 
    '                      <input type="password" autocomplete="on" class="input" id="confirm_password" name="confirm_password" placeholder="" value="">'+ 
    '                  </div>'+ 
    '                  <div class="eg-industry-job-function">'+ 
    '                      <div class="eg-input-container">'+ 
    '                          <label for="industry" class="eg-lable">Industry</label>'+ 
    '                      <div class="eg-select-container">'+ 
    '                          <select class="eg-select select" id="industry" name="industry">'+ 
    '                              <option selected="" value="" class="">Select</option>'+ 
    '                              <option value="Consumer Products/Electronics" class="eg-option">Consumer'+ 
    '                                  Products/Electronics</option>'+ 
    '                              <option value="Medical and Healthcare" class="eg-option">Medical and Healthcare</option>'+ 
    '                              <option value="General Manufacturing" class="eg-option">General Manufacturing</option>'+ 
    '                              <option value="Industrial Machinery/Tools & Equipment" class="eg-option">Industrial'+ 
    '                                  Machinery/Tools &'+ 
    '                                  Equipment</option>'+ 
    '                              <option value="Construction" class="eg-option">Construction</option>'+ 
    '                              <option value="Computers, Systems, and Peripherals" class="eg-option">Computers, Systems,'+ 
    '                                  and Peripherals'+ 
    '                              </option>'+ 
    '                              <option value="Semiconductor and Electronic Components" class="eg-option">Semiconductor and'+ 
    '                                  Electronic'+ 
    '                                  Components</option>'+ 
    '                              <option value="Automotive/Transportation" class="eg-option">Automotive/Transportation'+ 
    '                              </option>'+ 
    '                              <option value="Aerospace and Defense" class="eg-option">Aerospace and Defense</option>'+ 
    '                              <option value="Instrumentation and Controls" class="eg-option">Instrumentation and Controls'+ 
    '                              </option>'+ 
    '                              <option value="Communications" class="eg-option">Communications</option>'+ 
    '                              <option value="Utilities/Energy" class="eg-option">Utilities/Energy</option>'+ 
    '                              <option value="Oil and Gas" class="eg-option">Oil and Gas</option>'+ 
    '                              <option value="Government" class="eg-option">Government</option>'+ 
    '                              <option value="Education" class="eg-option">Education</option>'+ 
    '                              <option value="Other" class="eg-option">Other</option>'+ 
    '                          </select>'+ 
'  <div class="eg-select-arrow"><svg viewBox="0 0 320 512"><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z" fill="currentColor"></path></svg></div>'+
    '                      </div>'+ 
    '                      </div>'+ 
    '                      <div class="eg-input-container">'+ 
    '                          <label for="job_function" class="eg-lable">Job Function</label>'+ 
    '                      <div class="eg-select-container">'+ 
    '                          <select class="eg-select select" id="job_function" name="job_function">'+ 
    '                              <option selected="" value="" class="eg-option">Select</option>'+ 
    '                              <option value="Engineering - Electrical" class="eg-option">Engineering - Electrical</option>'+ 
    '                              <option value="Engineering - Consulting" class="eg-option">Engineering - Consulting</option>'+ 
    '                              <option value="Engineering - Mechanical" class="eg-option">Engineering - Mechanical</option>'+ 
    '                              <option value="Engineering - PCB Design" class="eg-option">Engineering - PCB Design</option>'+ 
    '                              <option value="Engineering - Process/Production" class="eg-option">Engineering -'+ 
    '                                  Process/Production</option>'+ 
    '                              <option value="Engineering - Electro-Mechanical" class="eg-option">Engineering -'+ 
    '                                  Electro-Mechanical</option>'+ 
    '                              <option value="Procurement" class="eg-option">Procurement</option>'+ 
    '                              <option value="Hobbyist" class="eg-option">Hobbyist</option>'+ 
    '                              <option value="Quality Control/Assurance" class="eg-option">Quality Control/Assurance'+ 
    '                              </option>'+ 
    '                              <option value="Management/Team Leadership" class="eg-option">Management/Team Leadership'+ 
    '                              </option>'+ 
    '                              <option value="Executive/Senior Management" class="eg-option">Executive/Senior Management'+ 
    '                              </option>'+ 
    '                              <option value="Sales/Marketing" class="eg-option">Sales/Marketing</option>'+ 
    '                              <option value="Project Management" class="eg-option">Project Management</option>'+ 
    '                              <option value="Technical Support/Services" class="eg-option">Technical Support/Services'+ 
    '                              </option>'+ 
    '                              <option value="Student/Teacher" class="eg-option">Student/Teacher</option>'+ 
    '                              <option value="Supply Chain Management" class="eg-option">Supply Chain Management</option>'+ 
    '                              <option value="Manufacturing" class="eg-option">Manufacturing</option>'+ 
    '                              <option value="PLM Operations" class="eg-option">PLM Operations</option>'+ 
    '                              <option value="Architect/Builder/Contractor" class="eg-option">Architect/Builder/Contractor'+ 
    '                              </option>'+ 
    '                              <option value="Other" class="eg-option">Other</option>'+ 
    '                          </select>'+ 
    '  <div class="eg-select-arrow"><svg viewBox="0 0 320 512"><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z" fill="currentColor"></path></svg></div>'+
    '                      </div>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '                  <div class="eg-legal-notice legal-notice">By creating an account, you agree to our <a href="/terms" target="_blank" class="eg-terms">Terms & Conditions</a> and <a href="/privacy" target="_blank" class="eg-privacy">Privacy Policy</a>.</div>'+ 
    '                  <div class="eg-checkbox-container">'+ 
    '                      <input class="eg-checkbox checkbox" id="send_me_your_newsletter" name="send_me_your_newsletter" type="checkbox" value="">'+ 
    '                      <label for="send_me_your_newsletter" class="eg-label label">Subscribe me to Octapart newsletter.</label>'+ 
    '                  </div>'+ 
    '                  <div class="eg-checkbox-container">'+ 
    '                      <input class="eg-checkbox checkbox" id="send_me_your_newsletter" name="send_me_your_newsletter" type="checkbox" value="">'+ 
    '                      <label for="send_me_your_newsletter" class="eg-label label">Subscribe me to the Electronics Design to Delivery index (EDDI) - actionable, industry-wide insights delivered monthly.</label>'+ 
    '                  </div>'+ 
    '                  <div class="eg-checkbox-container">'+ 
    '                      <input class="eg-checkbox checkbox" id="send_me_your_newsletter" name="send_me_your_newsletter" type="checkbox" value="">'+ 
    '                      <label for="send_me_your_newsletter" class="eg-label label">Opt me in receive relevant marketing content from Octopart partners.</label>'+ 
    '                  </div>'+ 
    '                  <div class="eg-button-section">'+ 
    '                      <a class="eg-button">Join</a>'+ 
    '                  </div>'+ 
    '              </form>'+ 
    '          </div>'+ 
    '          </div>'+ 
    '          <div class="eg-text-section">'+ 
    '              <div class="eg-text-section-inr">'+ 
    '                  <h2 class="eg-text-heading">Create your Ocotopart account today ade gain access to our BOM Tool, CAD model downloads, accounts preferences, and more!</h2>'+ 
    '                  <ul class="eg-list">'+ 
    '                      <li>'+ tickMark +' Get access to all of our BOM features, including the ability to add parts directly form search and product pages.</li>'+ 
    '                      <li>'+ tickMark +' Do more with CAD models with the added ability to download your models and share.</li>'+ 
    '                      <li>'+ tickMark +' Customize your Octopart experience with the ability to edit you preferred country, currency, email preferrences and distributors.</li>'+ 
    '                      <li>'+ tickMark +' Make the most of your Octopart account and get notified when enough stock is available from your preferred distributors or on an individual part.</li>'+ 
    '                  </ul>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';


    function init() {

      document.querySelector('.ReactModalPortal .modal-content .modal-body').insertAdjacentHTML('afterend', egForm);

    }

    /* Initialise variation */
    waitForElement(".ReactModalPortal .modal-content .modal-body", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
