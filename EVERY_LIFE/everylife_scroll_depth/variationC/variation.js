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
      '  <div class="eg-progress-bar-container">' +
      '      <div class="eg-progress-bar-inr">' +
      '          <p class="eg-section-name eg-personal">Personal Information</p>' +
      '          <p class="eg-section-name eg-protection">Protection</p>' +
      '          <p class="eg-section-name eg-growth">Growth</p>' +
      '          <p class="eg-section-name eg-result">Results</p>' +
      '      </div>' +
      '  </div>';

    function isElementVisible(el) {
      var headerOffset = document.querySelector('body header').clientHeight + document.querySelector('.eg-progress-bar-container').clientHeight;
      return this.scrollY > el.offsetTop - headerOffset && this.scrollY < el.offsetTop + el.clientHeight - headerOffset;
    }

    function handleHeaderProgress() {
      if (isElementVisible(document.querySelector('#estimatorRef form > div > section:first-child'))) {
        document.querySelector('.eg-progress-bar-container .active') && document.querySelector('.eg-progress-bar-container .active').classList.remove('active');
        document.querySelector('.eg-progress-bar-container .eg-personal').classList.add('active');
      } else if (isElementVisible(document.querySelector('#estimatorRef form > div > section:nth-child(2)'))) {
        document.querySelector('.eg-progress-bar-container .active') && document.querySelector('.eg-progress-bar-container .active').classList.remove('active');
        document.querySelector('.eg-progress-bar-container .eg-protection').classList.add('active');
      } else if (isElementVisible(document.querySelector('#estimatorRef form > div > section:nth-child(3)'))) {
        document.querySelector('.eg-progress-bar-container .active') && document.querySelector('.eg-progress-bar-container .active').classList.remove('active');
        document.querySelector('.eg-progress-bar-container .eg-growth').classList.add('active');
      } else if (isElementVisible(document.querySelector('#estimatorRef form > div > section:nth-child(4) > div'))) {
        document.querySelector('.eg-progress-bar-container .active') && document.querySelector('.eg-progress-bar-container .active').classList.remove('active');
        document.querySelector('.eg-progress-bar-container .eg-result').classList.add('active');
      }
    }

    function init() {
      document.querySelector('#estimatorRef #EstimatorIntro').insertAdjacentHTML('afterend', egProgressBar);
      window.addEventListener('scroll', handleHeaderProgress);

      document.querySelector('p.eg-section-name.eg-personal').addEventListener('click', function () {
        document.querySelector('#estimatorRef form > div > section:first-child').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      });
      document.querySelector('p.eg-section-name.eg-protection').addEventListener('click', function () {
        document.querySelector('#estimatorRef form > div > section:nth-child(2)').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      });
      document.querySelector('p.eg-section-name.eg-growth').addEventListener('click', function () {
        document.querySelector('#estimatorRef form > div > section:nth-child(3)').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      });
      document.querySelector('p.eg-section-name.eg-result').addEventListener('click', function () {
        document.querySelector('#estimatorRef form > div > section:nth-child(4)').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      });
    }

    /* Initialise variation */
    waitForElement('#estimatorRef #EstimatorIntro', init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, 'error in Test' + variation_name);
  }
})();
