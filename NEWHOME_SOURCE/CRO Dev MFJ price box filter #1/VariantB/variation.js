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

    var egFilterSection =''+ 
    '  <div class="eg-filter-section">'+ 
    '      <p class="eg-heading">Price Filter</p>'+ 
    '  <div class="eg-filter">'+
    '      <label class="hidden" for="priceMin"> Price Min</label>'+ 
    '      <select class="eg-priceMin">'+ 
    '          <option selected="" value="">No Min</option>'+ 
    '          <option value="110000">$110k</option>'+ 
    '          <option value="120000">$120k</option>'+ 
    '          <option value="130000">$130k</option>'+ 
    '          <option value="140000">$140k</option>'+ 
    '          <option value="150000">$150k</option>'+ 
    '          <option value="160000">$160k</option>'+ 
    '          <option value="170000">$170k</option>'+ 
    '          <option value="180000">$180k</option>'+ 
    '          <option value="190000">$190k</option>'+ 
    '          <option value="200000">$200k</option>'+ 
    '          <option value="220000">$220k</option>'+ 
    '          <option value="240000">$240k</option>'+ 
    '          <option value="260000">$260k</option>'+ 
    '          <option value="280000">$280k</option>'+ 
    '          <option value="300000">$300k</option>'+ 
    '          <option value="325000">$325k</option>'+ 
    '          <option value="350000">$350k</option>'+ 
    '          <option value="375000">$375k</option>'+ 
    '          <option value="400000">$400k</option>'+ 
    '          <option value="425000">$425k</option>'+ 
    '          <option value="450000">$450k</option>'+ 
    '          <option value="475000">$475k</option>'+ 
    '          <option value="500000">$500k</option>'+ 
    '          <option value="600000">$600k</option>'+ 
    '          <option value="700000">$700k</option>'+ 
    '          <option value="800000">$800k</option>'+ 
    '          <option value="900000">$900k</option>'+ 
    '          <option value="1000000">$1000k</option>'+ 
    '      </select>'+ 
    '      <span class="eg-SeparatorForm">to</span>'+ 
    '      <label class="hidden" for="priceMax"> Price Max</label>'+ 
    '      <select class="eg-priceMax">'+ 
    '          <option selected="" value="">No Max</option>'+ 
    '          <option value="110000">$110k</option>'+ 
    '          <option value="120000">$120k</option>'+ 
    '          <option value="130000">$130k</option>'+ 
    '          <option value="140000">$140k</option>'+ 
    '          <option value="150000">$150k</option>'+ 
    '          <option value="160000">$160k</option>'+ 
    '          <option value="170000">$170k</option>'+ 
    '          <option value="180000">$180k</option>'+ 
    '          <option value="190000">$190k</option>'+ 
    '          <option value="200000">$200k</option>'+ 
    '          <option value="220000">$220k</option>'+ 
    '          <option value="240000">$240k</option>'+ 
    '          <option value="260000">$260k</option>'+ 
    '          <option value="280000">$280k</option>'+ 
    '          <option value="300000">$300k</option>'+ 
    '          <option value="325000">$325k</option>'+ 
    '          <option value="350000">$350k</option>'+ 
    '          <option value="375000">$375k</option>'+ 
    '          <option value="400000">$400k</option>'+ 
    '          <option value="425000">$425k</option>'+ 
    '          <option value="450000">$450k</option>'+ 
    '          <option value="475000">$475k</option>'+ 
    '          <option value="500000">$500k</option>'+ 
    '          <option value="600000">$600k</option>'+ 
    '          <option value="700000">$700k</option>'+ 
    '          <option value="800000">$800k</option>'+ 
    '          <option value="900000">$900k</option>'+ 
    '          <option value="1000000">$1000k</option>'+ 
    '      </select>'+ 
    '  </div>'+
    '    <button class="eg-button">Go</button>'+
    '  </div>';

    function init() {
      document.querySelector('.nhs_ResultsTop + .nhs_Results').insertAdjacentHTML('beforebegin', egFilterSection);
      
    }

    waitForElement(".nhs_ResultsTop + .nhs_Results", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
