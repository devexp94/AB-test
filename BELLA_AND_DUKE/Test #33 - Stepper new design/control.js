(function () {
    try {
      /* main variables */
      var debug = 0;
      var variation_name = "";
  
      /* helper library */
      var _$;
      !(function (factory) {
        _$ = factory();
      })(function () {
        var bm = function (s) {
          if (typeof s === "string") {
            this.value = Array.prototype.slice.call(document.querySelectorAll(s));
          }
          if (typeof s === "object") {
            this.value = [s];
          }
        };
        bm.prototype = {
          eq: function (n) {
            this.value = [this.value[n]];
            return this;
          },
          each: function (fn) {
            [].forEach.call(this.value, fn);
            return this;
          },
          log: function () {
            console && console.log(this);
          },
          append: function (v) {
                    return this.each(function (i) {
                      i.insertAdjacentHTML('beforeEnd', v);
                    });
                  },
          attr: function (a, v) {
                    return this.each(function (i) {
                      i.setAttribute(a, v);
                    });
                  },        
          waitForElement: function (
            selector,
            trigger,
            delayInterval,
            delayTimeout
          ) {
            var interval = setInterval(function () {
              if (_$(selector).value.length) {
                clearInterval(interval);
                trigger();
              }
            }, delayInterval);
            setTimeout(function () {
              clearInterval(interval);
            }, delayTimeout);
          },
        };
        return function (selector) {
          return new bm(selector);
        };
      });
  
      var helper = _$();
  
      /* Variation Init */
      function init() {  
        // goal events
        document.querySelector('.wizard-steps .wizard-step:nth-of-type(1)').addEventListener('click',function(){
          trackGAEvent('Wizard','Click','Stepper_Step_1')
        })
  
        document.querySelector('.wizard-steps .wizard-step:nth-of-type(2)').addEventListener('click',function(){
          trackGAEvent('Wizard','Click','Stepper_Step_2')
        })
  
        document.querySelector('.wizard-steps .wizard-step:nth-of-type(3)').addEventListener('click',function(){
          trackGAEvent('Wizard','Click','Stepper_Step_3')
        })
  
        document.querySelector('.wizard-steps .wizard-step:nth-of-type(4)').addEventListener('click',function(){
          trackGAEvent('Wizard','Click','Stepper_Step_4')
        })
  
        document.querySelector('.wizard-steps .wizard-step:nth-of-type(5)').addEventListener('click',function(){
          trackGAEvent('Wizard','Click','Stepper_Step_5')
        })
  
        document.querySelector('.wizard-steps .wizard-step:nth-of-type(6)').addEventListener('click',function(){
          trackGAEvent('Wizard','Click','Stepper_Step_6')
        })
  
      }
  
      function trackGAEvent(eventCategory, eventAction, eventLabel) {
              if ('ga' in window) {
                ga.getAll()[0].send('event', {
                  eventCategory: eventCategory,
                  eventAction: eventAction,
                  eventLabel: eventLabel,
                });
              }
            }
  
      /* Initialize variation */
      helper.waitForElement(".wizard-steps .wizard-step .wizard-icon", init, 50, 5000);
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();