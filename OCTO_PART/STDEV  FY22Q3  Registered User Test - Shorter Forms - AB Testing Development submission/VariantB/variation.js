(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = '';

    /* all Pure helper functions */

    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    var tickMark =
      '' +
      '  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">' +
      '  <path d="M30.625 17.5C30.625 24.7487 24.7487 30.625 17.5 30.625C10.2513 30.625 4.375 24.7487 4.375 17.5C4.375 10.2513 10.2513 4.375 17.5 4.375C24.7487 4.375 30.625 10.2513 30.625 17.5Z" fill="#6EB51F"/>' +
      '  <path d="M13.125 17.5L16.0417 20.4167L21.875 14.5833M30.625 17.5C30.625 24.7487 24.7487 30.625 17.5 30.625C10.2513 30.625 4.375 24.7487 4.375 17.5C4.375 10.2513 10.2513 4.375 17.5 4.375C24.7487 4.375 30.625 10.2513 30.625 17.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
      '  </svg>';

    var googleImage =
      '' +
      '  <svg viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg" height="16px" width="16px"><path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"></path><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"></path><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"></path><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"></path></svg>';

    var egForm =
      '  <div class="eg-form-overlay"></div>' +
      '  <div class="eg-form-popup">' +
      '      <div class="eg-form-popup-inr">' +
      '          <div class="eg-form-section">' +
      '          <div class="eg-form-section-inr">' +
      '              <p class="form-heading">Create an account</p>' +
      '              <p class="form-subheading">Gain access to our BOM Tool, CAD model downloads, account preference, and more!</p>' +
      '              <form class="eg-form">' +
      '                  <div class="eg-input-container">' +
      '                      <label for="first_name" class="eg-lable">First Name*</label>' +
      '                      <input type="text" autocomplete="on" class="input" id="first_name" name="first_name" placeholder="" value="">' +
      '<span class="eg-error">First Name required</span>' +
      '                  </div>' +
      '                  <div class="eg-input-container">' +
      '                      <label for="last_name" class="eg-lable">Last Name*</label>' +
      '                      <input type="text" autocomplete="on" class="input" id="last_name" name="last_name" placeholder="" value="">' +
      '<span class="eg-error">Last Name required</span>' +
      '                  </div>' +
      '                  <div class="eg-input-container">' +
      '                      <label for="email" class="eg-lable">Email Address*</label>' +
      '                      <input type="email" autocomplete="on" class="input" id="email" name="email" placeholder="" value="">' +
      '<span class="eg-error">Email required</span>' +
      '                  </div>' +
      '                  <div class="eg-input-container">' +
      '                      <label for="password" class="eg-lable">Password*</label>' +
      '                      <input type="password" autocomplete="on" class="input" id="password" name="password" placeholder="" value="">' +
      '<span class="eg-error">Password required</span>' +
      '                  </div>' +
      '                  <div class="eg-input-container">' +
      '                      <label for="confirm_password" class="eg-lable">Confirm Password*</label>' +
      '                      <input type="password" autocomplete="on" class="input" id="confirm_password" name="confirm_password" placeholder="" value="">' +
      '<span class="eg-error">Password required</span>' +
      '                  </div>' +
      '                  <div class="eg-industry-job-function">' +
      '                      <div class="eg-input-container">' +
      '                          <label for="industry" class="eg-lable">Industry*</label>' +
      '                          <select class="eg-select select" id="industry" name="industry">' +
      '                              <option selected="" value="" class="">Select</option>' +
      '                              <option value="Consumer Products/Electronics" class="eg-option">Consumer' +
      '                                  Products/Electronics</option>' +
      '                              <option value="Medical and Healthcare" class="eg-option">Medical and Healthcare</option>' +
      '                              <option value="General Manufacturing" class="eg-option">General Manufacturing</option>' +
      '                              <option value="Industrial Machinery/Tools & Equipment" class="eg-option">Industrial' +
      '                                  Machinery/Tools &' +
      '                                  Equipment</option>' +
      '                              <option value="Construction" class="eg-option">Construction</option>' +
      '                              <option value="Computers, Systems, and Peripherals" class="eg-option">Computers, Systems,' +
      '                                  and Peripherals' +
      '                              </option>' +
      '                              <option value="Semiconductor and Electronic Components" class="eg-option">Semiconductor and' +
      '                                  Electronic' +
      '                                  Components</option>' +
      '                              <option value="Automotive/Transportation" class="eg-option">Automotive/Transportation' +
      '                              </option>' +
      '                              <option value="Aerospace and Defense" class="eg-option">Aerospace and Defense</option>' +
      '                              <option value="Instrumentation and Controls" class="eg-option">Instrumentation and Controls' +
      '                              </option>' +
      '                              <option value="Communications" class="eg-option">Communications</option>' +
      '                              <option value="Utilities/Energy" class="eg-option">Utilities/Energy</option>' +
      '                              <option value="Oil and Gas" class="eg-option">Oil and Gas</option>' +
      '                              <option value="Government" class="eg-option">Government</option>' +
      '                              <option value="Education" class="eg-option">Education</option>' +
      '                              <option value="Other" class="eg-option">Other</option>' +
      '                          </select>' +
      '<span class="eg-error">Please enter value</span>' +
      '                      </div>' +
      '                      <div class="eg-input-container">' +
      '                          <label for="job_function" class="eg-lable">Job Function*</label>' +
      '                          <select class="eg-select select" id="job_function" name="job_function">' +
      '                              <option selected="" value="" class="eg-option">Select</option>' +
      '                              <option value="Engineering - Electrical" class="eg-option">Engineering - Electrical</option>' +
      '                              <option value="Engineering - Consulting" class="eg-option">Engineering - Consulting</option>' +
      '                              <option value="Engineering - Mechanical" class="eg-option">Engineering - Mechanical</option>' +
      '                              <option value="Engineering - PCB Design" class="eg-option">Engineering - PCB Design</option>' +
      '                              <option value="Engineering - Process/Production" class="eg-option">Engineering -' +
      '                                  Process/Production</option>' +
      '                              <option value="Engineering - Electro-Mechanical" class="eg-option">Engineering -' +
      '                                  Electro-Mechanical</option>' +
      '                              <option value="Procurement" class="eg-option">Procurement</option>' +
      '                              <option value="Hobbyist" class="eg-option">Hobbyist</option>' +
      '                              <option value="Quality Control/Assurance" class="eg-option">Quality Control/Assurance' +
      '                              </option>' +
      '                              <option value="Management/Team Leadership" class="eg-option">Management/Team Leadership' +
      '                              </option>' +
      '                              <option value="Executive/Senior Management" class="eg-option">Executive/Senior Management' +
      '                              </option>' +
      '                              <option value="Sales/Marketing" class="eg-option">Sales/Marketing</option>' +
      '                              <option value="Project Management" class="eg-option">Project Management</option>' +
      '                              <option value="Technical Support/Services" class="eg-option">Technical Support/Services' +
      '                              </option>' +
      '                              <option value="Student/Teacher" class="eg-option">Student/Teacher</option>' +
      '                              <option value="Supply Chain Management" class="eg-option">Supply Chain Management</option>' +
      '                              <option value="Manufacturing" class="eg-option">Manufacturing</option>' +
      '                              <option value="PLM Operations" class="eg-option">PLM Operations</option>' +
      '                              <option value="Architect/Builder/Contractor" class="eg-option">Architect/Builder/Contractor' +
      '                              </option>' +
      '                              <option value="Other" class="eg-option">Other</option>' +
      '                          </select>' +
      '<span class="eg-error">Please enter value</span>' +
      '                      </div>' +
      '                  </div>' +
      '                  <div class="eg-legal-notice legal-notice">By creating an account, you agree to our <a href="/terms" target="_blank" class="eg-terms">Terms & Conditions</a> and <a href="/privacy" target="_blank" class="eg-privacy">Privacy Policy</a>.</div>' +
      '                  <div class="eg-checkbox-container">' +
      '                      <input class="eg-checkbox checkbox" id="send_me_your_newsletter" name="send_me_your_newsletter" type="checkbox" value="">' +
      '                      <label for="send_me_your_newsletter" class="eg-label label">Subscribe me to the Octopart newsletter.</label>' +
      '                  </div>' +
      '                  <div class="eg-checkbox-container">' +
      '                      <input class="eg-checkbox checkbox" id="send_me_your_newsletter" name="send_me_your_newsletter" type="checkbox" value="">' +
      '                      <label for="send_me_your_newsletter" class="eg-label label">Subscribe me to the Electronic Design to Delivery Index (EDDI) - actionable, industry-wide insights delivered monthly.</label>' +
      '                  </div>' +
      '                  <div class="eg-checkbox-container">' +
      '                      <input class="eg-checkbox checkbox" id="send_me_your_newsletter" name="send_me_your_newsletter" type="checkbox" value="">' +
      '                      <label for="send_me_your_newsletter" class="eg-label label">Opt me in to receive relevant marketing content from Octopart partners.</label>' +
      '                  </div>' +
      '                  <div class="eg-button-section">' +
      '                      <a class="eg-button">Sign up</a>' +
      '                  </div>' +
      '              </form>' +
      '              <div class="eg-middle">' +
      '                  <p class="line-break"></p>' +
      '                  <p class="line-break-text">OR</p>' +
      '                  <p class="line-break"></p>' +
      '              </div>' +
      '              <a href="https://auth.octopart.com/oauth2/authorize?redirect_uri=https%3A%2F%2Foctopart.com%2Fauth%2Fcognito-callback&client_id=4o85o2tdhqcomt8acbv1qv6ike&response_type=code&identity_provider=Google&state=%2Fbom-tool%2FwlvywWTn">' +
      googleImage +
      'Sign in with Google</a>' +
      '          </div>' +
      '          <div class="eg-signin">' +
      '           <p class="eg-signin-link">Already have and account <a href="https://octopart.com/sign-in">log in</a></p>' +
      '          </div>' +
      '          </div>' +
      '          <div class="eg-text-section">' +
      '              <div class="eg-text-section-inr">' +
      '                  <h2 class="eg-text-heading">Create your Ocotopart account today and gain access to our BOM Tool, CAD model downloads, account preferences, and more!</h2>' +
      '                  <ul class="eg-list">' +
      '                      <li>' +
      tickMark +
      ' Get access to all of our BOM features, including the ability to add parts directly from search and product pages.</li>' +
      '                      <li>' +
      tickMark +
      ' Do more with CAD models with the added ability to download your models and share.</li>' +
      '                      <li>' +
      tickMark +
      ' Customize your Octopart experience with the ability to edit your preferred country, currency, email preferences, and distributors.</li>' +
      '                      <li>' +
      tickMark +
      ' Make the most of your Octopart account and get notified when enough stock is available from your preferred distributors or on an individual part.</li>' +
      '                  </ul>' +
      '              </div>' +
      '          </div>' +
      '      </div>' +
      '  </div>';

    function isValid(first_name, last_name, email, password, cpassword, industry, job_function) {
      if (
        first_name.value.length > 0 &&
        last_name.value.length > 0 &&
        cpassword.value.length > 0 &&
        password.value.length > 0 &&
        industry.value.length > 0 &&
        job_function.value.length > 0 &&
        isValidEmail(email.value) &&
        password.value == cpassword.value
      ) {
        return true;
      }
      return false;
    }

    function isValidEmail(email) {
      var regex = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(String(email).toLowerCase());
    }

    function showError(first_name, last_name, email, password, cpassword, industry, job_function) {
      if (first_name.value.length < 1) {
        first_name.parentNode.classList.add('eg-show-error');
      } else {
        first_name.parentNode.classList.remove('eg-show-error');
      }
      if (last_name.value.length < 1) {
        last_name.parentNode.classList.add('eg-show-error');
      } else {
        last_name.parentNode.classList.remove('eg-show-error');
      }
      if (!isValidEmail(email.value)) {
        email.parentNode.classList.add('eg-show-error');
      } else {
        email.parentNode.classList.remove('eg-show-error');
      }
      if (industry.value.length < 1) {
        industry.parentNode.classList.add('eg-show-error');
      } else {
        industry.parentNode.classList.remove('eg-show-error');
      }
      if (industry.value.length < 1) {
        job_function.parentNode.classList.add('eg-show-error');
      } else {
        job_function.parentNode.classList.remove('eg-show-error');
      }

      if (cpassword.value.length < 1) {
        cpassword.parentNode.classList.add('eg-show-error');
      } else {
        cpassword.parentNode.classList.remove('eg-show-error');
      }
      if (password.value.length < 1) {
        password.parentNode.classList.add('eg-show-error');
      } else {
        password.parentNode.classList.remove('eg-show-error');
      }
      if (password.value.length > 0 && cpassword.value.length > 0) {
        if (password.value != cpassword.value) {
          password.nextElementSibling.innerHTML = 'Password must match';
          cpassword.nextElementSibling.innerHTML = 'Password must match';
          password.parentNode.classList.add('eg-show-error');
          cpassword.parentNode.classList.add('eg-show-error');
        } else {
          password.parentNode.classList.remove('eg-show-error');
          cpassword.parentNode.classList.remove('eg-show-error');
        }
      }
    }

    function triggerForm() {
      document.querySelector('body .eg-form-popup') && document.querySelector('body .eg-form-popup').remove();
      document.querySelector('.menu .tooltip .content').insertAdjacentHTML('afterend', egForm);

      document.querySelector('body .eg-form-overlay').addEventListener('click', function () {
        document.body.click();
      });

      document.querySelector('.eg-form-popup .eg-signin-link a').addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.add('eg-show-signin');
      });

      document.querySelector('.menu .tooltip .content .bottom a.join').addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.remove('eg-show-signin');
      });

      // document.querySelector('.eg-form-popup .eg-signin-form').insertAdjacentElement('beforeend', document.querySelector('.menu .tooltip .content form').cloneNode(true));
      var first_name = document.querySelector('.eg-form #first_name');
      var last_name = document.querySelector('.eg-form #last_name');
      var email = document.querySelector('.eg-form #email');
      var password = document.querySelector('.eg-form #password');
      var cpassword = document.querySelector('.eg-form #confirm_password');
      var industry = document.querySelector('.eg-form #industry');
      var job_function = document.querySelector('.eg-form #job_function');

      first_name.addEventListener('blur', function () {
        if (this.value.length < 1) {
          this.parentNode.classList.add('eg-show-error');
        } else {
          this.parentNode.classList.remove('eg-show-error');
        }
      });
      last_name.addEventListener('blur', function () {
        if (this.value.length < 1) {
          this.parentNode.classList.add('eg-show-error');
        } else {
          this.parentNode.classList.remove('eg-show-error');
        }
      });
      email.addEventListener('blur', function () {
        if (!isValidEmail(this.value)) {
          this.parentNode.classList.add('eg-show-error');
        } else {
          this.parentNode.classList.remove('eg-show-error');
        }
      });
      industry.addEventListener('blur', function () {
        if (this.value.length < 1) {
          this.parentNode.classList.add('eg-show-error');
        } else {
          this.parentNode.classList.remove('eg-show-error');
        }
      });
      job_function.addEventListener('blur', function () {
        if (this.value.length < 1) {
          this.parentNode.classList.add('eg-show-error');
        } else {
          this.parentNode.classList.remove('eg-show-error');
        }
      });
      password.addEventListener('blur', function () {
        if (this.value.length < 1) {
          this.parentNode.classList.add('eg-show-error');
        } else {
          this.parentNode.classList.remove('eg-show-error');
        }
      });
      cpassword.addEventListener('blur', function () {
        if (this.value.length < 1) {
          this.parentNode.classList.add('eg-show-error');
        } else {
          this.parentNode.classList.remove('eg-show-error');
        }
      });

      document.querySelector('.eg-button-section a').addEventListener('click', function (e) {
        e.preventDefault();
        var first_name = document.querySelector('.eg-form #first_name');
        var last_name = document.querySelector('.eg-form #last_name');
        var email = document.querySelector('.eg-form #email');
        var password = document.querySelector('.eg-form #password');
        var cpassword = document.querySelector('.eg-form #confirm_password');
        var industry = document.querySelector('.eg-form #industry');
        var job_function = document.querySelector('.eg-form #job_function');
        if (!isValid(first_name, last_name, email, password, cpassword, industry, job_function)) {
          showError(first_name, last_name, email, password, cpassword, industry, job_function);
        } else {
          var first_name = document.querySelector('.eg-form #first_name').value;
          var last_name = document.querySelector('.eg-form #last_name').value;
          var email = document.querySelector('.eg-form #email').value;
          var password = document.querySelector('.eg-form #password').value;
          var industry = document.querySelector('.eg-form #industry').value;
          var job_function = document.querySelector('.eg-form #job_function').value;
          fetch('https://octopart.com/auth/create?continue_to=Fbom-tool/aAzwni9p', {
            headers: {
              accept: '*/*',
              'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
              'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
              'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
              'sec-ch-ua-mobile': '?0',
              'sec-ch-ua-platform': '"macOS"',
              'sec-fetch-dest': 'empty',
              'sec-fetch-mode': 'cors',
              'sec-fetch-site': 'same-origin',
            },
            referrer: 'https://octopart.com/join?continue_to=%2Fbom-tool%aAzwni9p',
            referrerPolicy: 'strict-origin-when-cross-origin',
            body: '_authentication_token=' +
              __NEXT_DATA__.props.pageProps.session._authentication_token +
              '&confirm_password=' +
              password +
              '&email=' +
              email +
              '&first_name=' +
              first_name +
              '&industry=' +
              industry +
              '&job_function=' +
              job_function +
              '&last_name=' +
              last_name +
              '&password=' +
              password +
              '&send_me_your_newsletter=true',
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
          }).then((response) => {
            window.location.reload();
          });
        }
      });
    }

var formHeading = ''+
'<p class="form-heading">Create an account</p>'+
'<p class="form-subheading">Gain access to our BOM Tool, CAD model downloads, account preference, and more!</p>';

    function init() {
      if (window.location.pathname == '/bom-tool') {
        waitForElement(
          '.menu .links > div:not(.user) > button[type="button"]',
          function () {
            document.querySelector('.menu .links > div:not(.user) > button[type="button"]') &&
              document.querySelector('.menu .links > div:not(.user) > button[type="button"]').addEventListener('click', function () {
                waitForElement(
                  '.menu .tooltip .content',
                  function () {
                    triggerForm();
                    document.querySelector('.menu .tooltip .content .form').insertAdjacentHTML('beforebegin', formHeading);
                    
                  },
                  100,
                  35000
                );
              });
          },
          100,
          35000
        );
      } else if (window.location.pathname.indexOf('/bom-tool/') != -1) {
        waitForElement(
          '.bom-tool .save-to-boms .bt-actions-bar-button-sign-in',
          function () {
            document.querySelector('.menu .links > div:not(.user) > button[type="button"]') &&
              document.querySelector('.menu .links > div:not(.user) > button[type="button"]').addEventListener('click', function () {
                waitForElement(
                  '.menu .tooltip .content',
                  function () {
                    triggerForm();
                    document.querySelector('.menu .tooltip .content .form').insertAdjacentHTML('beforebegin', formHeading);
                    
                  },
                  100,
                  35000
                );
              });

            document.querySelector('.bom-tool .save-to-boms .bt-actions-bar-button-sign-in').addEventListener(
              'click',
              function (e) {
                if (document.querySelector('.menu .links > div:not(.user) > button[type="button"]')) {
                  e.preventDefault();
                  e.stopImmediatePropagation();
                  e.stopPropagation();
                  document.querySelector('.menu .links > div:not(.user) > button[type="button"]').click();
                  waitForElement(
                    '.ReactModalPortal .modal-body form',
                    function () {
                      document.querySelector('.ReactModalPortal .modal-body form').closest('.ReactModalPortal') && (document.querySelector('.ReactModalPortal .modal-body form').closest('.ReactModalPortal').style.display = 'none');
                    },
                    50,
                    6000
                  );
                }
              },
              true
            );
          },
          100,
          35000
        );
      } else if (window.location.pathname == '/') {
        waitForElement(
          '.menu .links > div:not(.user) > button[type="button"]',
          function () {
            document.querySelector('.menu .links > div:not(.user) > button[type="button"]') &&
              document.querySelector('.menu .links > div:not(.user) > button[type="button"]').addEventListener('click', function () {
                waitForElement(
                  '.menu .tooltip .content',
                  function () {
                    triggerForm();
                    document.querySelector('.menu .tooltip .content .form').insertAdjacentHTML('beforebegin', formHeading);
                    
                  },
                  100,
                  35000
                );
              });
          },
          100,
          35000
        );
      } else if (window.location.href.indexOf('category_id') != -1) {
        waitForElement(
          '.part .add-to-bom',
          function () {
            // here
            waitForElement(
              '.menu .links > div:not(.user) > button[type="button"]',
              function () {
                document.querySelector('.menu .links > div:not(.user) > button[type="button"]') &&
                  document.querySelector('.menu .links > div:not(.user) > button[type="button"]').addEventListener('click', function () {
                    waitForElement(
                      '.menu .tooltip .content',
                      function () {
                        triggerForm();
                        document.querySelector('.menu .tooltip .content .form').insertAdjacentHTML('beforebegin', formHeading);
                        
                      },
                      100,
                      35000
                    );
                  });
              },
              100,
              35000
            );

            var selector = '.part .add-to-bom .tooltip';
            document.addEventListener(
              'click',
              (e) => {
                if (e.target.matches(selector) || e.target.closest(selector)) {
                  e.preventDefault();
                  e.stopImmediatePropagation();
                  e.stopPropagation();
                  document.querySelector('.menu .links > div:not(.user) > button[type="button"]').click();
                }
              }, {
              capture: true
            }
            );
          },
          100,
          35000
        );
      } else {
        waitForElement(
          '.pdp .watch-button, .pdp .add-to-bom',
          function () {
            document.querySelectorAll('.pdp .watch-button, .pdp .add-to-bom').forEach(function (item, index) {
              item.addEventListener('click', function (e) {
                if (document.querySelector('.menu .links > div:not(.user) > button[type="button"]')) {
                  e.preventDefault();
                  e.stopImmediatePropagation();
                  e.stopPropagation();
                  document.querySelector('.menu .links > div:not(.user) > button[type="button"]').click();
                }
              });
            });
            document.querySelector('.menu .links > div:not(.user) > button[type="button"]') &&
              document.querySelector('.menu .links > div:not(.user) > button[type="button"]').addEventListener('click', function () {
                waitForElement(
                  '.menu .tooltip .content',
                  function () {
                    triggerForm();
                    document.querySelector('.menu .tooltip .content .form').insertAdjacentHTML('beforebegin', formHeading);
                    
                  },
                  100,
                  35000
                );
              });
          },
          100,
          35000
        );
        waitForElement(
          '.pdp-section .selector button[type="button"]:not(.selected)',
          function () {
            document.querySelector('.pdp-section .selector button[type="button"]:not(.selected)').addEventListener('click', function (e) {
              if (document.querySelector('.menu .links > div:not(.user) > button[type="button"]')) {
                e.preventDefault();
                e.stopImmediatePropagation();
                e.stopPropagation();
                document.querySelector('.menu .links > div:not(.user) > button[type="button"]').click();
              }
            });
          },
          100,
          35000
        );
      }
    }

    function historyChangeListener(trigger) {
      window.addEventListener('locationchange', function () {
        trigger();
      });
      history.pushState = ((f) =>
        function pushState() {
          var ret = f.apply(this, arguments);
          window.dispatchEvent(new Event('locationchange'));
          return ret;
        })(history.pushState);
      window.addEventListener('popstate', () => {
        window.dispatchEvent(new Event('locationchange'));
      });
    }

    /* Initialise variation */

    if (!window.ST_REG) {
      historyChangeListener(function () {
        waitForElement('body', init, 100, 35000);
      });
      window.ST_REG = true;
    }

    waitForElement('body', init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, 'error in Test' + variation_name);
  }
})();

