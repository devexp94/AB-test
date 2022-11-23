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

    function live(selector, event, callback, context) {
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent('on' + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this.Element &&
        (function (ElementPrototype) {
          ElementPrototype.matches =
            ElementPrototype.matches ||
            ElementPrototype.matchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            ElementPrototype.msMatchesSelector ||
            function (selector) {
              var node = this,
                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                i = -1;
              while (nodes[++i] && nodes[i] != node);
              return !!nodes[i];
            };
        })(Element.prototype);
      // live binding helper using matchesSelector
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function (e) {
          var found,
            el = e.target || e.srcElement;
          while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    }

    var egProgressBar =
      '' +
      '  <div class="eg-progress-container">' +
      '      <h2 class="eg-section-title">Personal Information</h2>' +
      '      <p class="eg-progress-step">Steps <span>1</span> of 4</p>' +
      '      <div class="eg-progress-bar-container">' +
      '          <div class="eg-progress-bar eg-progress-bar-step1">' +
      '             <div class="eg-progress-bar-inr">' +
      '             </div>' +
      '          </div>' +
      '          <div class="eg-progress-bar eg-progress-bar-step2">' +
      '             <div class="eg-progress-bar-inr">' +
      '             </div>' +
      '          </div>' +
      '          <div class="eg-progress-bar eg-progress-bar-step3">' +
      '             <div class="eg-progress-bar-inr">' +
      '             </div>' +
      '          </div>' +
      '          <div class="eg-progress-bar eg-progress-bar-step4">' +
      '             <div class="eg-progress-bar-inr">' +
      '             </div>' +
      '          </div>' +
      '      </div>' +
      '  </div>';

    function isElementVisible(el) {
      var headerOffset = document.querySelector('body header').clientHeight + document.querySelector('.eg-progress-container').clientHeight;
      return this.scrollY > el.offsetTop - headerOffset && this.scrollY < el.offsetTop + el.clientHeight - headerOffset;
    }

    function getProgressPercent(el) {
      var headerOffset = document.querySelector('body header').clientHeight + document.querySelector('.eg-progress-container').clientHeight;
      return 100 - ((el.offsetTop + el.clientHeight - (this.scrollY + headerOffset)) / el.clientHeight) * 100;
    }

    function handleHeaderProgress() {
      if (isElementVisible(document.querySelector('#estimatorRef form > div > section:first-child'))) {
        document.querySelector('.eg-section-title').innerHTML = 'PERSONAL INFORMATION';
        document.querySelector('.eg-progress-step span').innerHTML = '1';
        document.querySelector('.eg-progress-bar-step1 > .eg-progress-bar-inr').style.width = getProgressPercent(document.querySelector('#estimatorRef form > div > section:first-child')) + '%';
        if (getProgressPercent(document.querySelector('#estimatorRef form > div > section:first-child')) > 90) {
          document.querySelector('.eg-progress-bar-step1 > .eg-progress-bar-inr').classList.add('completed');
        } else {
          document.querySelector('.eg-progress-bar-step1 > .eg-progress-bar-inr').classList.remove('completed');
        }
      } else if (isElementVisible(document.querySelector('#estimatorRef form > div > section:nth-child(2)'))) {
        document.querySelector('.eg-section-title').innerHTML = 'PROTECTION';
        document.querySelector('.eg-progress-step span').innerHTML = '2';
        document.querySelector('.eg-progress-bar-step2 > .eg-progress-bar-inr').style.width = getProgressPercent(document.querySelector('#estimatorRef form > div > section:nth-child(2)')) + '%';
        if (getProgressPercent(document.querySelector('#estimatorRef form > div > section:nth-child(2)')) > 90) {
          document.querySelector('.eg-progress-bar-step2 > .eg-progress-bar-inr').classList.add('completed');
        } else {
          document.querySelector('.eg-progress-bar-step2 > .eg-progress-bar-inr').classList.remove('completed');
        }
      } else if (isElementVisible(document.querySelector('#estimatorRef form > div > section:nth-child(3)'))) {
        document.querySelector('.eg-section-title').innerHTML = 'GROWTH';
        document.querySelector('.eg-progress-step span').innerHTML = '3';
        document.querySelector('.eg-progress-bar-step3 > .eg-progress-bar-inr').style.width = getProgressPercent(document.querySelector('#estimatorRef form > div > section:nth-child(3)')) + '%';
        if (getProgressPercent(document.querySelector('#estimatorRef form > div > section:nth-child(3)')) > 90) {
          document.querySelector('.eg-progress-bar-step3 > .eg-progress-bar-inr').classList.add('completed');
        } else {
          document.querySelector('.eg-progress-bar-step3 > .eg-progress-bar-inr').classList.remove('completed');
        }
      } else if (isElementVisible(document.querySelector('#estimatorRef form > div > section:nth-child(4) > div'))) {
        document.querySelector('.eg-section-title').innerHTML = 'RESULTS';
        document.querySelector('.eg-progress-step span').innerHTML = '4';
        document.querySelector('.eg-progress-bar-step4 > .eg-progress-bar-inr').style.width = getProgressPercent(document.querySelector('#estimatorRef form > div > section:nth-child(4) > div')) + '%';
        if (getProgressPercent(document.querySelector('#estimatorRef form > div > section:nth-child(4) > div')) > 90) {
          document.querySelector('.eg-progress-bar-step4 > .eg-progress-bar-inr').classList.add('completed');
        } else {
          document.querySelector('.eg-progress-bar-step4 > .eg-progress-bar-inr').classList.remove('completed');
        }
      }
    }

    function init() {
      document.querySelector('#estimatorRef #EstimatorIntro').insertAdjacentHTML('afterend', egProgressBar);
      window.addEventListener('scroll', handleHeaderProgress);
    }

    /* Initialise variation */
    waitForElement('#estimatorRef #EstimatorIntro', init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, 'error in Test' + variation_name);
  }
})();
