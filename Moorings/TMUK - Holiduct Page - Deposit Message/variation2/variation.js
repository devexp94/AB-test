(function () {
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


    function live(selector, event, callback, context) {
      /****Helper Functions****/
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent("on" + type, handler);
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
    };

    /* Variation Init */
    function init() {

      insertPrice(checkGap());

      /* start your code here */
      live('.DayPicker-Week .DayPicker-Day:not(.DayPicker-Day--disabled)', 'click', function () {
        insertPrice(checkGap());
      });

    }

    function checkGap() {
      const calanderDate = document.querySelector("#anchor-date-summary > a > span:nth-child(1)").innerHTML;
      const eg_date = new Date(calanderDate);
      const now = new Date();
      const diff = eg_date.getTime() - now.getTime();
      const gap = Math.ceil(diff * (1 / 1000) * (1 / 60) * (1 / 60) * (1 / 24));

      return gap;
    }

    function insertPrice(gap) {

      let eg_amount_ele = document.querySelector("#moorings-holiduct-side span.amount")
      let eg_amount = eg_amount_ele.textContent.replace(",","")

      let eg_discount =  (parseFloat(eg_amount) / 2).toLocaleString("en-US")


      let str = `<p class="eg_para">
      <span class="eg_top">This booking is within 90 days of departure, therefore payment in full is required.</span>
      </p>`;
      let str2 = `<p class="eg_para">
      <span class="eg_top">Only $${eg_discount} deposit required to book today.</span>
      </p>`;

      const egTarget = document.querySelector("#moorings-holiduct-side div.price");

      // if price already exists remove it.
      if (document.querySelector(".eg_para")) {
        document.querySelector(".eg_para").remove();
      }

      if (gap > 90) {
        egTarget.insertAdjacentHTML("afterend", str2);
      } else {
        egTarget.insertAdjacentHTML("afterend", str);
      }
    }

    /* Initialize variation */
    waitForElement('#moorings-holiduct-side > div > div:nth-child(4)', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


