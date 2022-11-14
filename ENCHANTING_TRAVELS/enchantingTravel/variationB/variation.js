(function () {
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

    function checkValidation() {
      if(document.querySelector('.form-field.budget select').value.length != 0 && document.querySelector('.form-field.guests select').value.length != 0 && document.querySelector('.form-field.step-2-options .select-box select').value.length != 0 && document.querySelector('.form-field.step-1-options .select-box select').value.length != 0) {
        return true;
      }
      return false;
    }

    function init() {

      document.querySelector('.banner-trip-form .mobile-button').click();

      document.querySelector('body .banner-slideshow .banner-trip-form').insertAdjacentElement('beforeend', document.querySelector('.banner-trip-form-modal form'));

      setTimeout(function() {
        document.querySelector('.banner-trip-form-modal .close').click();
      }, 500)

      document.querySelector('.banner-trip-form form .form-fields').classList.add('et-step1')
      document.querySelector('.banner-trip-form form .form-fields').insertAdjacentHTML('beforeend', '<div class="et-dummy-cta"><p class="btn primary et-disable">Create My Trip Now</p></div>');

      document.querySelectorAll('.form-field.budget select, .form-field.guests select, .form-field.step-2-options .select-box select, .form-field.step-1-options .select-box select').forEach(function(item, index) {
        console.log(item)
        item.addEventListener('change', function() {
          console.log('cangealsd')
          if(checkValidation()) {
            document.querySelector('.et-dummy-cta > p').classList.remove('et-disable')
          } else {
            document.querySelector('.et-dummy-cta > p').classList.add('et-disable')
          }
        })
      })
    
      document.querySelector('.banner-trip-form form .mobile-show').addEventListener('mousedown', function() {
        setTimeout(function() {
          console.log('asdsdaf')
          if(checkValidation()) {
            document.querySelector('.et-dummy-cta > p').classList.remove('et-disable')
          } else {
            document.querySelector('.et-dummy-cta > p').classList.add('et-disable')
          }
        }, 200)
      })
      document.querySelector('.banner-trip-form form .mobile-show').addEventListener('mousedown', function() {
        setTimeout(function() {
          console.log('asdsdaf >>>')
          if(checkValidation()) {
            document.querySelector('.et-dummy-cta > p').classList.remove('et-disable')
          } else {
            document.querySelector('.et-dummy-cta > p').classList.add('et-disable')
          }
        }, 200)
      }, true)

      document.querySelector('.et-dummy-cta > p').addEventListener('mousedown', function() {
        if(checkValidation()) {
          document.querySelector('.banner-trip-form form .form-fields').classList.remove('et-step1')
          document.querySelector('.banner-trip-form form .form-fields').classList.add('et-step2')
        }
      })


    }

    waitForElement(
      '.banner-trip-form-modal form .form-fields',
      init,
      500,
      30000
    );
})();