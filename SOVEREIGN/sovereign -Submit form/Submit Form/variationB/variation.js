(function() {


  // --------------------------
  // Simple ABTasty js wrapper
  // --------------------------

  const domain = 'SOV'; //eg LB, CIT, SOV etc
  const testId = '855514'; // ABTasty variant id
  const testVar = 'v1'; // Cx for campaign level code , Vx for variation version
  const testName = 'RaQ : Shortened pop up form : Multi stage'; // location : test name, eg "Homepage : Modify search"

  const inQA = function() {
      // test for QA cookie : "testId=test|true|QA"
      const re = new RegExp(`${testId}\=(test|true|qa|abt)`, 'i');
      let qaMode = ((re).test(document.cookie) == true) ? true : false;
      // test for preview mode.
      let previewMode = (window.location.search.includes('ab_project=preview' == true || document.querySelector('#ABTastyPreviewBar') != null)) ? true : false;
      // test for qa console mode.
      let consoleMode = window.location.search.includes('abtasty_qa_assistant=true');
      // test for qa console.
      let qaConsole = (document.querySelector('#abtasty-qa-assistant-frame') != null);
      return (qaMode || previewMode || consoleMode || qaConsole) ? "true" : "false";
  }();

  // document.querySelector('body').classList.add(`${domain}${testId}`);
  // console.log(`${domain} : ${testId} : ${testVar} : ${testName} : TEST RUNNING : QA=${inQA}`);

  //test update page title for HS tracking:
  let title = document.title;

  /*if (title.includes(' | Original')) {
    title.replace(' | Original', ' | Multi stage');
  } else {
    title += ' | Multi stage';
  }
  */
  title += ' | Multi stage';
  document.title = title

  // --------------------------


  try {
      /* main variables */
      var debug = 0;
      var variation_name = "";

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

      function live(selector, event, callback, context) {
          /****Helper Functions****/
          // helper for enabling IE 8 event bindings
          function addEvent(el, type, handler) {
              if (el.attachEvent) el.attachEvent('on' + type, handler);
              else el.addEventListener(type, handler);
          }
          // matches polyfill
          this.Element && function(ElementPrototype) {
              ElementPrototype.matches = ElementPrototype.matches ||
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
          }(Element.prototype);
          // live binding helper using matchesSelector
          function live(selector, event, callback, context) {
              addEvent(context || document, event, function(e) {
                  var found, el = e.target || e.srcElement;
                  while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                  if (found) callback.call(el, e);
              });
          }
          live(selector, event, callback, context);
      }

      /* Variation functions */

      var ym_step_btns = '' +
          '<p class="ym_btn step1">Continue to Contact Details</p>';
      // '<p class="ym_btn step2">Continue to Marketing</p>';

      var progreesBar = '' +
          '  <div class="bm_form_heading">' +
          '    <div>' +
          '      <div class="StepsSection_bar">' +
          '          <span class="step1">1</span>' +
          '          <span class="step2">2</span>' +
          // '          <span class="step3">3</span>'+ 
          '      </div>' +
          '    </div>' +
          '  </div>';

      /* Variation Init */
      function init() {

          if (inQA) console.log("init called");

          /* start your code here */
          var checkForm = 0;

          document.querySelector('a.StickyBanner_btn.icon-quote').addEventListener('click', function() {
              /* <-- move this to Targetting trigger ?  */

              waitForElement('.Modal .HubSpotForm .hs-form [name="destination_preferences"]', function() {

                  document.querySelector('[name="destination_preferences"]').closest('.hs-form').classList.add('eg_form');


                  if (inQA) console.log("modal input found");

                  if (checkForm == 0) {


                      if (inQA) console.log("running");

                      // show step 1
                      document.querySelector('.Modal .HubSpotForm .hs-form.eg_form').classList.add('step1');
                      document.querySelector('.Modal .HubSpotForm .hs-form.eg_form').insertAdjacentHTML('beforeend', ym_step_btns)
                      document.querySelector('.Modal .HubSpotForm .hs-form.eg_form .hs-main-font-element p').innerHTML = 'Please fill the form below to receive a quote. We will contact you as soon as possible.'

                      document.querySelectorAll('.hs-form.eg_form .hs-main-font-element')[2].style.display = 'none';

                      document.querySelectorAll('.hs-form.eg_form .hs-main-font-element')[0].classList.add('step1');
                      document.querySelectorAll('.hs-form.eg_form .hs-main-font-element')[1].classList.add('step1');
                      document.querySelectorAll('.hs-form.eg_form .hs-main-font-element')[3].classList.add('step2-3');
                      document.querySelectorAll('.hs-form.eg_form .hs-main-font-element')[4].classList.add('step2');

                      document.querySelector('.Modal .HubSpotForm .hs-form.eg_form .hs-main-font-element p').closest('fieldset').insertAdjacentHTML('afterend', progreesBar);

                      // moved flexible date
                      var getFlexibleDate = document.querySelector('.hs-form.eg_form .hs_flexible_dates');
                      document.querySelector('.hs-form.eg_form .hs_destination_preferences').insertAdjacentElement('afterend', getFlexibleDate);

                      // moved preferred duration
                      var getDuration = document.querySelector('.hs-form.eg_form  .hs_preferred_duration');
                      document.querySelector('.hs-form.eg_form .hs-departure_date').insertAdjacentElement('afterend', getDuration);

                      // moved departure
                      var getDeparture = document.querySelector('.hs-form.eg_form .hs_departure_airport');
                      document.querySelector('.hs-form.eg_form .hs-total_budget_grouped_').insertAdjacentElement('afterend', getDeparture);


                      // step1 completed
                      document.querySelector('.ym_btn.step1').addEventListener('click', function() {
                          if (document.querySelector('[name="destination_preferences"]').value.length > 0 && document.querySelector('[name="departure_date"]').value.length > 0 && document.querySelector('[name="preferred_duration"]').value.length > 0 && document.querySelector('[name="total_budget_grouped_"]').value.length > 0 && document.querySelector('[name="departure_airport"]').value.length > 0 && document.querySelector('[name="number_of_passengers_adults"]').value.length > 0 && (document.querySelector('.hs_flexible_dates .inputs-list input[value="Yes"]').checked || document.querySelector('.hs_flexible_dates .inputs-list input[value="No"]').checked)) {
                              if (document.querySelector('[name="children_s_age"]')) {
                                  if (document.querySelector('[name="children_s_age"]').value.length > 0) {
                                      document.querySelector('.Modal .HubSpotForm .hs-form.eg_form').classList.remove('step1');
                                      document.querySelector('.Modal .HubSpotForm .hs-form.eg_form').classList.add('step2');
                                      document.querySelector(".bm_form_heading").classList.add("step1Complete");
                                      removeError();
                                      document.querySelector('.Modal .HubSpotForm .hs-form.eg_form h2').scrollIntoView({
                                          behavior: "smooth"
                                      });
                                  }
                              } else {
                                  document.querySelector('.Modal .HubSpotForm .hs-form.eg_form').classList.remove('step1');
                                  document.querySelector('.Modal .HubSpotForm .hs-form.eg_form').classList.add('step2');
                                  document.querySelector(".bm_form_heading").classList.add("step1Complete");
                                  removeError();
                                  document.querySelector('.Modal .HubSpotForm .hs-form.eg_form h2').scrollIntoView({
                                      behavior: "smooth"
                                  });
                              }
                          } else {
                              document.querySelector('.Modal .HubSpotForm .hs-form.eg_form input[type=submit]').click();
                              showError();
                          }


                      })


                      live('.Modal .HubSpotForm .hs-form.eg_form.step2 input[type=submit]', 'click', function() {
                          checkAjax();
                      })




                      document.querySelector('.StepsSection_bar .step2').addEventListener('click', function() {
                          document.querySelector('.ym_btn.step1').click();
                      })



                      // step back functionality

                      // back to step 1
                      live('.bm_form_heading.step2Complete .StepsSection_bar .step1, .bm_form_heading.step1Complete .StepsSection_bar .step1', 'click', function() {
                          if (document.querySelector('.Modal .HubSpotForm .hs-form.eg_form.step3')) {
                              document.querySelector('.Modal .HubSpotForm .hs-form.eg_form').classList.remove('step3');
                              document.querySelector('.Modal .HubSpotForm .hs-form.eg_form').classList.add('step1');
                          }

                          if (document.querySelector('.Modal .HubSpotForm .hs-form.eg_form.step2')) {
                              document.querySelector('.Modal .HubSpotForm .hs-form.eg_form').classList.remove('step2');
                              document.querySelector('.Modal .HubSpotForm .hs-form.eg_form').classList.add('step1');
                          }

                      })

                      // back to step 2
                      live('.bm_form_heading.step2Complete .StepsSection_bar .step2', 'click', function() {
                          if (document.querySelector('.Modal .HubSpotForm .hs-form.eg_form.step3')) {
                              document.querySelector('.Modal .HubSpotForm .hs-form.eg_form').classList.remove('step3');
                              document.querySelector('.Modal .HubSpotForm .hs-form.eg_form').classList.add('step2');
                          }
                      })

                      checkForm = 1;
                  }
              }, 50, 15000)
          })

      }


      function removeError() {
          if (document.querySelector('.Modal .HubSpotForm .hs-error-msgs')) {
              document.querySelectorAll('.Modal .HubSpotForm .hs-error-msgs').forEach(function(e) {
                  e.classList.add('hide_error');
              })
              document.querySelectorAll('.Modal .HubSpotForm .invalid').forEach(function(e) {
                  e.classList.remove('invalid');
              })
          }
      }

      function showError() {
          if (document.querySelector('.Modal .HubSpotForm .hs-error-msgs')) {
              document.querySelectorAll('.Modal .HubSpotForm .hs-error-msgs').forEach(function(e) {
                  e.classList.remove('hide_error');
              })
          }

      }

      function checkAjax() {
          var send = XMLHttpRequest.prototype.send
          XMLHttpRequest.prototype.send = function() {
              this.addEventListener('load', function() {
                  if (this.readyState === 4 && this.status === 200 && this.responseURL.indexOf('https://forms.hsforms.com/submissions/v3/public/submit') != -1) {

                  } else {
                      showError();
                  }
              })
              return send.apply(this, arguments)
          }
      }

      /* Initialize variation */
      waitForElement("a.StickyBanner_btn.icon-quote", init, 50, 15000); /* move to Targetting trigger and call init() below ? */
      //init();

  } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
  }
})();